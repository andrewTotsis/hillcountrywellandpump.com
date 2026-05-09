import { NextResponse } from 'next/server';
import { insertLead, type LeadRecord } from '@/lib/db';
import { pushMemoryLead } from '@/lib/leads-memory';

export const runtime = 'nodejs';

function isEmail(s: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s); }
function digits(s: string) { return s.replace(/\D/g, ''); }

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  // Honeypot — silent success on bot submissions
  if (typeof body.hp === 'string' && body.hp.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const full_name = String(body.full_name || '').trim();
  const email = String(body.email || '').trim().toLowerCase();
  const phone = String(body.phone || '').trim();
  const service = String(body.service || '').trim();
  const property_location = String(body.property_location || '').trim();
  const urgency = Number(body.urgency || 3);
  const issue_description = String(body.issue_description || '').trim();
  const source = String(body.source || '/');

  if (!full_name || full_name.length < 2) return NextResponse.json({ error: 'Name required' }, { status: 400 });
  if (!isEmail(email)) return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
  if (digits(phone).length < 10) return NextResponse.json({ error: 'Valid phone required' }, { status: 400 });
  if (!service) return NextResponse.json({ error: 'Service required' }, { status: 400 });
  if (!property_location) return NextResponse.json({ error: 'Property location required' }, { status: 400 });
  if (urgency < 1 || urgency > 5) return NextResponse.json({ error: 'Urgency must be 1–5' }, { status: 400 });
  if (!issue_description || issue_description.length < 5) return NextResponse.json({ error: 'Please describe your issue' }, { status: 400 });

  const record: LeadRecord = {
    full_name,
    email,
    phone,
    service,
    property_location,
    urgency,
    issue_description,
    source,
    status: 'new',
    created_at: new Date().toISOString(),
  };

  const result = await insertLead(record);
  if (!result.ok) {
    console.warn('[leads] DB insert unavailable, falling back to memory:', result.error);
    pushMemoryLead(record);
  }

  return NextResponse.json({ ok: true, urgency, prioritized: urgency >= 4 });
}

export async function GET() {
  return NextResponse.json({ ok: true });
}
