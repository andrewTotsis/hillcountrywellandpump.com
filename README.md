# Hill Country Well & Pump

Production website for [hillcountrywellandpump.com](https://hillcountrywellandpump.com) — a Texas Hill Country water well drilling and pump service business.

Built with **Next.js 15 (App Router)**, **Tailwind CSS**, and **Supabase** for lead intake.

## Stack

- Next.js 15 / React 19 / TypeScript
- Tailwind CSS
- Supabase (Postgres) for lead persistence
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
| `NEXT_PUBLIC_PHONE` | Display phone (e.g. `(830) 555-0144`) |
| `NEXT_PUBLIC_PHONE_RAW` | Tel-link phone (e.g. `+18305550144`) |
| `NEXT_PUBLIC_EMAIL` | Display email |
| `SUPABASE_URL` | Server-side Supabase URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-side service role key (used by API routes & admin) |
| `ADMIN_PASSWORD` | Strong password for `/admin/login` |
| `ADMIN_SESSION_SECRET` | 32+ byte random string for signing the admin session cookie |

If Supabase env vars are missing, leads are captured to an in-memory store (resets on deploy). Always configure Supabase for production.

## Supabase setup

1. Create a Supabase project.
2. In the SQL editor, run [`supabase/schema.sql`](./supabase/schema.sql).
3. Copy the project URL and **service-role** key into your Vercel env vars.

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
- `POST /api/leads`

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
