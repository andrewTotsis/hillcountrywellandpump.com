-- Run this in the Supabase SQL editor to provision the leads table.
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

-- Lock down: only the service-role key (used server-side) can read/write.
alter table public.leads enable row level security;
revoke all on public.leads from anon, authenticated;
