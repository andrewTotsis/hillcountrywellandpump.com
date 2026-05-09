import { neon } from '@neondatabase/serverless';
import { readFileSync, existsSync } from 'node:fs';

if (existsSync('.env.local')) {
  for (const line of readFileSync('.env.local', 'utf8').split(/\r?\n/)) {
    const m = line.match(/^([A-Z0-9_]+)=(?:"(.*)"|(.*))$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2] ?? m[3];
  }
}

const url = process.env.DATABASE_URL || process.env.POSTGRES_URL;
if (!url) {
  console.error('DATABASE_URL not set. Run `vercel env pull .env.local` first.');
  process.exit(1);
}

const sql = neon(url);

const ddl = `
create extension if not exists "pgcrypto";

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  email text not null,
  phone text not null,
  service text not null,
  property_location text not null,
  urgency smallint not null check (urgency between 1 and 5),
  issue_description text not null,
  source text,
  utm jsonb,
  status text not null default 'new'
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_urgency_idx on public.leads (urgency desc);
create index if not exists leads_status_idx on public.leads (status);
`;

for (const stmt of ddl.split(/;\s*\n/).map((s) => s.trim()).filter(Boolean)) {
  await sql.query(stmt);
  console.log('✓', stmt.split('\n')[0]);
}

const rows = await sql`select count(*)::int as n from public.leads`;
console.log(`\nleads table ready · ${rows[0].n} rows currently.`);
