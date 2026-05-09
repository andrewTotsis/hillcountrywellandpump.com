# Hill Country Well & Pump

Production website for [hillcountrywellandpump.com](https://hillcountrywellandpump.com) — a Texas Hill Country water well drilling and pump service business.

Built with **Next.js 15 (App Router)**, **Tailwind CSS**, and **Neon Postgres** for lead intake.

## Operating model — pay-per-lead, no phones

This site is built for a **pay-per-lead** business with a hard rule: **no inbound phone calls**. There is no `tel:` link anywhere. Every CTA on the site routes to the lead form, and an optional inbound-SMS webhook converts text messages into leads with no human intermediary.

- **Web form** → `POST /api/leads` → Neon Postgres → `/admin`
- **Inbound text** (optional, when a Twilio number is wired up) → `POST /api/sms-inbound` → same `leads` table → `/admin`

Both paths emit identical lead records, so the CRM is one inbox.

## Stack

- Next.js 15 / React 19 / TypeScript
- Tailwind CSS
- Neon Postgres (Postgres) for lead persistence
- Deployed on Vercel
- LocalBusiness, FAQPage, Service, Breadcrumb JSON-LD schema
- Sitemap + robots, full metadata

## Local development

```bash
npm install
cp .env.example .env.local   # then fill in
npm run dev
```

Open <http://localhost:3000>.

## Environment variables

| Name | Purpose |
|------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (e.g. `https://hillcountrywellandpump.com`) |
| `NEXT_PUBLIC_EMAIL` | Display email |
| `NEXT_PUBLIC_TEXT_NUMBER` *(optional)* | Display SMS-only number — only set if you wire up a Twilio number |
| `NEXT_PUBLIC_TEXT_NUMBER_RAW` *(optional)* | E.164 SMS-only number for `sms:` links |
| `TWILIO_AUTH_TOKEN` *(optional)* | Verifies Twilio webhook signatures on `/api/sms-inbound` |
| `TWILIO_WEBHOOK_URL` *(optional)* | Override the URL used for Twilio signature verification (useful behind proxies) |
| `DATABASE_URL` | Neon Postgres connection string (auto-set by Vercel marketplace integration) |
| `ADMIN_PASSWORD` | Strong password for `/admin/login` |
| `ADMIN_SESSION_SECRET` | 32+ byte random string for signing the admin session cookie |

If Neon Postgres env vars are missing, leads are captured to an in-memory store (resets on deploy). Always configure Neon Postgres for production.

## Database setup (Neon Postgres)

The DB is provisioned through Vercel's marketplace integration (no separate Neon account):

```bash
vercel integration add neon --plan free_v3 --metadata region=iad1 --metadata auth=false --non-interactive
```

That auto-injects all the `DATABASE_URL` / `POSTGRES_*` env vars into the project. Then create the `leads` table:

```bash
vercel env pull .env.local
node scripts/migrate.mjs
```

## Admin / CRM

- `/admin/login` — password gate (uses `ADMIN_PASSWORD`).
- `/admin` — lead inbox with urgency badges and quick call/email links.

Sessions are signed HMAC cookies with a 12-hour TTL. Rotate `ADMIN_SESSION_SECRET` to invalidate all sessions.

## SEO

- Per-page metadata, canonical URLs, and OpenGraph tags
- `LocalBusiness`, `Service`, `FAQPage`, `BreadcrumbList` JSON-LD
- `/sitemap.xml` and `/robots.txt` auto-generated
- Static service pages and location pages with unique long-form copy

## Routes

- `/` — homepage targeting "Well Drilling Texas Hill Country"
- `/services` and `/services/[slug]`
- `/service-areas` and `/locations/[slug]`
- `/about`, `/contact`, `/quote`, `/faq`, `/reviews`, `/financing`
- `/admin`, `/admin/login`
- `POST /api/leads` — form submissions
- `POST /api/sms-inbound` — Twilio inbound-SMS webhook (drops texts straight into the CRM as leads)

## Wiring up Twilio for SMS-to-CRM (optional)

1. In Twilio, buy a number and enable Messaging.
2. Phone Numbers → (your number) → "A MESSAGE COMES IN" → Webhook → `POST` → `https://hillcountrywellandpump.com/api/sms-inbound`.
3. In Vercel env, set `TWILIO_AUTH_TOKEN` (from your Twilio Account → Auth Tokens) so the webhook verifies request signatures.
4. (Optional) set `NEXT_PUBLIC_TEXT_NUMBER` and `NEXT_PUBLIC_TEXT_NUMBER_RAW` to surface a "Text us" link on the site.

When a homeowner texts the number:
- The webhook detects keywords (`emergency`, `no water`, `urgent`, `quote`, etc.) and assigns an urgency score 1–5.
- A lead is inserted with `service: "inbound-sms"` and `source: "sms:<MessageSid>"`.
- Twilio replies automatically with a confirmation TwiML message.

## Lead payload

```json
{
  "full_name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "(830) 555-0123",
  "service": "well-pump-repair",
  "property_location": "Boerne, TX",
  "urgency": 4,
  "issue_description": "No water at the faucets since this morning…",
  "source": "/services/well-pump-repair"
}
```

Urgency 1–5: `1` general question · `5` no-water emergency. Server returns `prioritized: true` for `urgency >= 4` so future SMS/email automation can route accordingly.

## Deploy

```bash
vercel --prod
```

Production env vars are configured in the Vercel dashboard under the project settings.
