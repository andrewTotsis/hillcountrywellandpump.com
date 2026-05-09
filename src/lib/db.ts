import { neon, type NeonQueryFunction } from '@neondatabase/serverless';

let cached: NeonQueryFunction<false, false> | null = null;

export function getDb(): NeonQueryFunction<false, false> | null {
  const url = process.env.DATABASE_URL || process.env.POSTGRES_URL;
  if (!url) return null;
  if (cached) return cached;
  cached = neon(url);
  return cached;
}

export type LeadRecord = {
  id?: string;
  created_at?: string;
  full_name: string;
  email: string;
  phone: string;
  service: string;
  property_location: string;
  urgency: number;
  issue_description: string;
  source: string;
  utm?: Record<string, string> | null;
  status?: 'new' | 'contacted' | 'quoted' | 'won' | 'lost';
};

export async function insertLead(r: LeadRecord): Promise<{ ok: boolean; error?: string }> {
  const sql = getDb();
  if (!sql) return { ok: false, error: 'no_database' };
  try {
    await sql`
      insert into public.leads
        (full_name, email, phone, service, property_location, urgency, issue_description, source, status)
      values
        (${r.full_name}, ${r.email}, ${r.phone}, ${r.service}, ${r.property_location},
         ${r.urgency}, ${r.issue_description}, ${r.source}, ${r.status ?? 'new'})
    `;
    return { ok: true };
  } catch (err) {
    console.error('[db] insertLead failed', err);
    return { ok: false, error: err instanceof Error ? err.message : 'unknown' };
  }
}

export async function listLeads(limit = 500): Promise<LeadRecord[]> {
  const sql = getDb();
  if (!sql) return [];
  try {
    const rows = await sql`
      select id, created_at, full_name, email, phone, service, property_location,
             urgency, issue_description, source, status
      from public.leads
      order by created_at desc
      limit ${limit}
    `;
    return rows as unknown as LeadRecord[];
  } catch (err) {
    console.error('[db] listLeads failed', err);
    return [];
  }
}
