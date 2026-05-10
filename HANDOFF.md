# Hill Country Well & Pump — Project Handoff

This file is a complete context dump for picking up work on this project in a new chat. Pasted into a fresh Claude session, it gives full context without retracing.

> Credentials are **not** in this file. Pull them from your password manager or the Vercel env. See the "Secrets you'll need" section below.

---

## TL;DR

A pay-per-lead website positioned as a Texas Hill Country water well drilling and pump service company. **The operator does not own a well-drilling business.** The strategy: run the site, collect leads via web form (and optionally inbound SMS), then pitch those leads to actual licensed local drillers on a per-lead or monthly retainer basis.

**Hard product rules:**
- No phone calls inbound or outbound. Form-only and (optionally, via a future Twilio number) SMS-only.
- No specific verifiable claims that could trigger regulatory or competitor action (no "Licensed Texas Water Well Driller" claim, no fake address, no fake review counts).
- Site is framed as a connector to licensed local drillers in the footer — that's the defensible positioning.

---

## Live URLs

- **Site (Vercel default):** https://hillcountrywellandpump.vercel.app
- **GitHub repo:** https://github.com/andrewTotsis/hillcountrywellandpump.com
- **Admin/CRM:** https://hillcountrywellandpump.vercel.app/admin/login
- **Sitemap:** https://hillcountrywellandpump.vercel.app/sitemap.xml
- **Custom domain:** `hillcountrywellandpump.com` — added to the Vercel project but DNS not pointed yet. Owner is going to buy it from a registrar and point an A record to `76.76.21.21` (and CNAME `www` → `cname.vercel-dns.com`).

---

## Stack

- **Next.js 15** App Router, React 19, TypeScript
- **Tailwind CSS** for styling (custom Hill Country palette: bone/sand/clay/rust/ink)
- **Neon Postgres** for lead storage — provisioned through the Vercel marketplace integration (no separate Neon account)
- **`@neondatabase/serverless`** as the DB client (`src/lib/db.ts`)
- **Deployed on Vercel** — auto-deploys on push to `main`

---

## Business model and positioning

- Operator: pay-per-lead solo founder. No license. No business entity yet. No physical location.
- Site looks like a contractor site for high conversion, but the **footer disclosure** says: *"Hill Country Well & Pump connects Texas Hill Country homeowners with water well drilling and pump services from licensed local drillers in our network. All work is performed by licensed professionals."*
- Lead flow:
  1. Homeowner submits the form → `/api/leads` → Neon `public.leads` table
  2. (Future) homeowner texts a Twilio number → `/api/sms-inbound` → same table
  3. Operator views leads in `/admin`
  4. Operator pitches leads to real licensed drillers in the area

---

## Routes

| Route | Purpose |
|---|---|
| `/` | Homepage targeting "Well Drilling Texas Hill Country" |
| `/services` | Service index |
| `/services/[slug]` | 10 service pages (drilling, install, pump repair, emergency, inspections, water testing, rural systems, pressure tank, ag wells, residential) |
| `/service-areas` | Service area index |
| `/locations/[slug]` | 6 location pages (Fredericksburg, Marble Falls, Boerne, Dripping Springs, Burnet County, Blanco County) |
| `/about`, `/contact`, `/quote`, `/faq`, `/reviews`, `/financing` | Standard pages |
| `/admin`, `/admin/login` | Password-gated CRM |
| `POST /api/leads` | Form submissions |
| `POST /api/sms-inbound` | Twilio inbound-SMS webhook (writes leads from texts) |

All location and service pages use static generation via `generateStaticParams`. 32 pages total at build.

---

## Database

**Neon Postgres** auto-provisioned through:
```bash
vercel integration add neon --plan free_v3 --metadata region=iad1 --metadata auth=false --non-interactive
```

Auto-injected env vars: `DATABASE_URL`, `POSTGRES_URL`, `POSTGRES_*`, `PG*`, `NEON_PROJECT_ID`.

Single table: `public.leads`. Migration is in `scripts/migrate.mjs`:
```bash
vercel env pull .env.local
node scripts/migrate.mjs
```

Schema fields: `id (uuid)`, `created_at (timestamptz)`, `full_name`, `email`, `phone`, `service`, `property_location`, `urgency (smallint 1-5)`, `issue_description`, `source`, `utm (jsonb)`, `status (text default 'new')`.

If the DB is unreachable, both API routes fall back to an in-memory store (`src/lib/leads-memory.ts`) that resets on deploy. The admin page shows a status pill indicating which mode it's in.

---

## CRM (`/admin`)

- Password-gated. Login posts to a Server Action that calls `login()` in `src/lib/admin.ts`, which sets an HMAC-signed cookie (12-hour TTL, secret in `ADMIN_SESSION_SECRET`).
- Read-only at the moment. Shows: total/new/urgent/emergency counts, all leads sorted newest-first.
- Phone column links via `sms:` (text-message link), not `tel:` — operator does not call leads.
- Email column is a normal `mailto:` for the LEAD's email.

---

## Quote form (`/quote` and embedded on most pages)

- 7 fields: name, email, phone, service, property location, urgency (1–5 visual selector), issue description.
- Honeypot field (`hp`) catches bots.
- Server-side validation in `src/app/api/leads/route.ts`: trim, type checks, email regex, phone digit count, urgency range, description min length.
- Urgency 1 = general question, 2 = planning, 3 = quote soon, 4 = urgent, 5 = no-water emergency (styled rust).
- Returns `{ ok: true, urgency, prioritized: urgency >= 4 }`.
- `?urgency=5` query param deep-links to the emergency state.
- `?service=<slug>` and `?location=<city>` also prefill.

---

## SMS-inbound webhook (`/api/sms-inbound`)

Built but **not yet wired to a real Twilio number.** When the operator wires one up:

1. In Twilio: buy a number, **disable voice** entirely (reject inbound calls), enable messaging.
2. Set webhook to `https://<domain>/api/sms-inbound` (POST, form-encoded).
3. Add `TWILIO_AUTH_TOKEN` to Vercel env for signature verification.
4. Optionally set `NEXT_PUBLIC_TEXT_NUMBER` and `NEXT_PUBLIC_TEXT_NUMBER_RAW` to surface "Text us" CTAs on the site.

Webhook auto-detects urgency from keywords (`emergency`, `no water`, `urgent`, `quote`, etc.), inserts a lead, and replies with TwiML confirmation.

---

## Environment variables (Vercel)

| Name | Source | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Set manually | Canonical URL |
| `NEXT_PUBLIC_EMAIL` | Set manually | `hillcountrywellandpump@gmail.com` |
| `ADMIN_PASSWORD` | Set manually | Password for `/admin/login` |
| `ADMIN_SESSION_SECRET` | Set manually | HMAC key for the admin session cookie |
| `DATABASE_URL`, `POSTGRES_*`, `PG*`, `NEON_PROJECT_ID` | Auto-set by Neon integration | DB connection |
| `TWILIO_AUTH_TOKEN` *(optional)* | Set manually if/when wiring SMS | Verifies Twilio webhook signatures |
| `NEXT_PUBLIC_TEXT_NUMBER`, `NEXT_PUBLIC_TEXT_NUMBER_RAW` *(optional)* | Set if displaying a text number on the site | |

---

## What's been intentionally stripped (do NOT add back without legal review)

These were on the initial build and were removed because they create liability for a non-licensed non-business operator:

- **"Licensed Texas Water Well Driller"** as a first-person claim. Regulated under Texas Occupations Code Chapter 1901. Replaced with "work performed by licensed Texas drillers" or "licensed local drillers in our network."
- **Fictional street address** (`1402 Ranch Road 1376, Fredericksburg`). Removed from contact page and JSON-LD. The `LocalBusiness` schema is now a service-area pattern with no postal address.
- **AggregateRating in JSON-LD** (4.9★ / 187 reviews). Fake rich-result markup is a manual penalty trigger.
- **"Since 1998" / "25+ years" / "3,200+ wells installed"** — every specific number replaced with qualitative copy.
- **"5-year workmanship warranty"** → "Workmanship guaranteed."
- **Testimonial specifics** (e.g. "Hit water at 612 ft," "$40k saved") softened to generic positive sentiment.

If the operator later partners with a real licensed driller, these claims can come back — but they must be true of that partner.

---

## SEO posture

- Per-page metadata, canonical URLs, OG tags
- Auto-generated `sitemap.xml` and `robots.txt` (`/admin` and `/api` disallowed)
- JSON-LD: `LocalBusiness` (service-area), `Service`, `FAQPage`, `BreadcrumbList`
- Static generation for all service and location pages
- Hierarchical headings, internal linking (services ↔ locations ↔ FAQ)

**Realistic ranking timeline:** weeks 1–2 = ~zero traffic; month 2 = some long-tail; month 6–9 = competition for location+service combos; map pack requires Google Business Profile and is currently impossible without a verified physical address (not pursuing).

**Recommended week-1 traffic strategy:** Google Ads ($20–$50/day) pointed at service and location pages. SEO is the compounding asset, not the launch tactic.

---

## What's done

- Full Next.js + Tailwind site built, 32 static pages
- Neon Postgres provisioned, `leads` table migrated
- Form submission → API → DB → admin verified end-to-end (1 test lead in production DB)
- Admin login + signed-cookie sessions
- SMS webhook scaffolded (not yet connected to a Twilio number)
- All phone CTAs removed; site is form-only
- All legally risky claims softened
- Footer disclosure added (defensible lead-gen positioning)
- Vercel project linked to GitHub, auto-deploys on push to `main`
- Custom domain `hillcountrywellandpump.com` added to Vercel project (DNS pending)

---

## What's pending (operator's queue)

1. **Buy the domain** at a registrar (Cloudflare Registrar or Porkbun recommended, ~$10/yr)
2. **Point DNS:** A `@` → `76.76.21.21`, CNAME `www` → `cname.vercel-dns.com`
3. **Submit `sitemap.xml` to Google Search Console** once DNS resolves
4. **Optional: run Google Ads** with $50–$300 over 7 days to test the funnel
5. **Optional: wire up a Twilio SMS-only number** if texting is desired
6. **Once leads come in:** pitch real local drillers ("I have N leads/week in Boerne — interested?")

---

## File layout

```
hillcountrywellandpump.com/
├── HANDOFF.md                          # this file
├── README.md
├── scripts/migrate.mjs                 # creates the leads table in Neon
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx                    # homepage
│   │   ├── globals.css
│   │   ├── sitemap.ts, robots.ts
│   │   ├── not-found.tsx
│   │   ├── about/, contact/, faq/, financing/, reviews/, quote/
│   │   ├── services/{page.tsx, [slug]/page.tsx}
│   │   ├── locations/[slug]/page.tsx
│   │   ├── service-areas/page.tsx
│   │   ├── admin/{page.tsx, login/page.tsx}
│   │   └── api/
│   │       ├── leads/route.ts
│   │       └── sms-inbound/route.ts
│   ├── components/
│   │   ├── Header.tsx, Footer.tsx, StickyMobileCTA.tsx
│   │   ├── Hero.tsx, ServiceGrid.tsx, ServiceAreaMap.tsx
│   │   ├── Process.tsx, TrustBadges.tsx, Testimonials.tsx
│   │   ├── FAQAccordion.tsx, QuoteForm.tsx
│   │   └── Schema.tsx                  # JSON-LD components
│   └── lib/
│       ├── site.ts                     # global site config
│       ├── services.ts                 # service definitions + FAQs
│       ├── locations.ts                # location definitions + FAQs
│       ├── db.ts                       # Neon client + insertLead/listLeads
│       ├── leads-memory.ts             # in-memory fallback
│       └── admin.ts                    # session cookie HMAC
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Local dev

```bash
npm install
vercel env pull .env.local
node scripts/migrate.mjs  # one-time, idempotent
npm run dev
```

Visit http://localhost:3000.

---

## Secrets you'll need (NOT in this file)

When starting a new chat, you'll need these on hand:
- The `ADMIN_PASSWORD` set in Vercel (use the value from your password manager)
- The `ADMIN_SESSION_SECRET` (Vercel env)
- Gmail address `hillcountrywellandpump@gmail.com` (controlled by operator)
- Vercel CLI logged in (`vercel whoami` should return `andrewtotsis`)
- GitHub CLI logged in (`gh auth status`)

---

## Open strategic decisions

These came up in conversation and the operator has paused on each:

1. **Multi-region scale-up.** Idea: extend the platform to other states/regions, each city page feels dedicated. Pushback was: don't expand until the funnel converts in the Hill Country, and don't make the homepage "worldwide" (kills local trust signals). Current state: not implemented; staying Hill Country focused for now.
2. **Google Business Profile.** Required for the local map pack, but requires a verified physical address — not pursuing because the operator has none.
3. **Google Ads.** Recommended as the actual launch tactic (SEO won't deliver in week 1). Not yet run.
4. **Lead distribution / forwarding.** Not built. When the first buyer is signed, a webhook in `/api/leads` should forward new leads to the buyer's email or phone.
