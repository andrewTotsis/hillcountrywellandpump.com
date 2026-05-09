import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { insertLead, type LeadRecord } from '@/lib/db';
import { pushMemoryLead } from '@/lib/leads-memory';

export const runtime = 'nodejs';

// Twilio inbound-SMS webhook → drops the message straight into the CRM as a lead.
//
// Configure in Twilio:
//   Phone Numbers → (your number) → Messaging Configuration
//   "A MESSAGE COMES IN" → Webhook → POST →
//   https://hillcountrywellandpump.com/api/sms-inbound
//
// Set TWILIO_AUTH_TOKEN in your env to verify request signatures.
// (If unset, requests are still accepted but logged as unverified — fine for dev.)

function verifyTwilioSignature(req: Request, _rawBody: string, params: URLSearchParams): boolean {
  const token = process.env.TWILIO_AUTH_TOKEN;
  if (!token) return true; // signature not enforced
  const signature = req.headers.get('x-twilio-signature');
  if (!signature) return false;
  const url = new URL(req.url);
  const fullUrl = process.env.TWILIO_WEBHOOK_URL || `${url.origin}${url.pathname}`;
  const sortedKeys = Array.from(params.keys()).sort();
  const data = sortedKeys.reduce((acc, k) => acc + k + (params.get(k) ?? ''), fullUrl);
  const expected = crypto.createHmac('sha1', token).update(Buffer.from(data, 'utf-8')).digest('base64');
  if (signature.length !== expected.length) return false;
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
}

function detectUrgency(body: string): number {
  const t = body.toLowerCase();
  if (/(emergency|no water|no\s*-?\s*water|burst|flood|leak)/.test(t)) return 5;
  if (/(urgent|asap|today|tonight|now)/.test(t)) return 4;
  if (/(quote|estimate|how much|cost|price)/.test(t)) return 3;
  if (/(planning|considering|thinking|next year|next month)/.test(t)) return 2;
  return 3;
}

export async function POST(req: Request) {
  let raw: string;
  try {
    raw = await req.text();
  } catch {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 });
  }
  const params = new URLSearchParams(raw);

  if (!verifyTwilioSignature(req, raw, params)) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 403 });
  }

  const from = params.get('From') || '';
  const body = (params.get('Body') || '').trim();
  const city = params.get('FromCity') || '';
  const state = params.get('FromState') || '';
  const messageSid = params.get('MessageSid') || '';

  if (!from || !body) {
    return new Response('<?xml version="1.0" encoding="UTF-8"?><Response/>', {
      headers: { 'Content-Type': 'application/xml' },
    });
  }

  const urgency = detectUrgency(body);
  const property_location = [city, state].filter(Boolean).join(', ') || 'Unknown (inbound SMS)';

  const record: LeadRecord = {
    full_name: `Inbound SMS · ${from}`,
    email: `sms+${from.replace(/\D/g, '')}@inbound.local`,
    phone: from,
    service: 'inbound-sms',
    property_location,
    urgency,
    issue_description: body,
    source: `sms:${messageSid}`,
    status: 'new',
    created_at: new Date().toISOString(),
  };

  const result = await insertLead(record);
  if (!result.ok) pushMemoryLead(record);

  // Reply with TwiML — Twilio sends this back to the texter.
  const reply = urgency >= 4
    ? `Got it — flagged as ${urgency === 5 ? 'EMERGENCY' : 'urgent'}. We're on it and will reply shortly.`
    : 'Thanks — we got your message and will reply shortly with next steps.';

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<Response><Message>${escapeXml(reply)}</Message></Response>`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
}

function escapeXml(s: string) {
  return s.replace(/[<>&'"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' }[c]!));
}

export async function GET() {
  return NextResponse.json({ ok: true, hint: 'Twilio SMS webhook — POST application/x-www-form-urlencoded' });
}
