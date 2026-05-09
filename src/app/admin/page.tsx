import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { isAuthed, logout } from '@/lib/admin';
import { getSupabaseAdmin, type LeadRecord } from '@/lib/supabase';
import { getMemoryLeads } from '@/lib/leads-memory';

export const metadata: Metadata = {
  title: 'Admin · Leads',
  robots: { index: false, follow: false },
};
export const dynamic = 'force-dynamic';

async function fetchLeads(): Promise<LeadRecord[]> {
  const supabase = getSupabaseAdmin();
  if (!supabase) return getMemoryLeads();
  const { data, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(500);
  if (error) {
    console.error('[admin] supabase fetch failed', error);
    return getMemoryLeads();
  }
  return (data ?? []) as LeadRecord[];
}

async function signOut() {
  'use server';
  await logout();
  redirect('/admin/login');
}

const URGENCY_LABEL: Record<number, { label: string; tone: string }> = {
  1: { label: 'Question', tone: 'bg-sage/15 text-sage border-sage/30' },
  2: { label: 'Planning', tone: 'bg-sage/15 text-sage border-sage/30' },
  3: { label: 'Quote Soon', tone: 'bg-clay/20 text-earth border-clay/40' },
  4: { label: 'Urgent', tone: 'bg-rust/15 text-rust border-rust/40' },
  5: { label: 'EMERGENCY', tone: 'bg-rust text-bone border-rust' },
};

export default async function AdminPage() {
  if (!(await isAuthed())) redirect('/admin/login');
  const leads = await fetchLeads();
  const stats = {
    total: leads.length,
    new: leads.filter((l) => (l.status || 'new') === 'new').length,
    emergency: leads.filter((l) => l.urgency === 5).length,
    urgent: leads.filter((l) => l.urgency >= 4).length,
  };

  return (
    <section className="min-h-[80vh] bg-bone">
      <div className="border-b border-ink/10 bg-white">
        <div className="container-wide flex items-center justify-between py-5">
          <div>
            <h1 className="font-display text-2xl text-ink">Lead Inbox</h1>
            <p className="text-xs text-ink/55">Hill Country Well &amp; Pump · Admin</p>
          </div>
          <form action={signOut}>
            <button className="btn-secondary !py-2 !px-4 !text-sm">Sign Out</button>
          </form>
        </div>
      </div>

      <div className="container-wide py-10">
        <div className="grid gap-4 sm:grid-cols-4">
          <Stat label="Total leads" value={stats.total} />
          <Stat label="New" value={stats.new} />
          <Stat label="Urgent (4+)" value={stats.urgent} />
          <Stat label="No-Water EMERGENCY" value={stats.emergency} accent />
        </div>

        <div className="mt-10 overflow-hidden rounded-xl border border-ink/10 bg-white shadow-rugged">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-ink/10 text-sm">
              <thead className="bg-bone">
                <tr className="text-left">
                  <Th>When</Th>
                  <Th>Urgency</Th>
                  <Th>Name</Th>
                  <Th>Phone</Th>
                  <Th>Email</Th>
                  <Th>Service</Th>
                  <Th>Location</Th>
                  <Th>Issue</Th>
                  <Th>Source</Th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/10">
                {leads.length === 0 && (
                  <tr><td colSpan={9} className="px-4 py-12 text-center text-ink/55">No leads yet. They’ll appear here as soon as someone submits the form.</td></tr>
                )}
                {leads.map((l, i) => {
                  const u = URGENCY_LABEL[l.urgency] || URGENCY_LABEL[3];
                  const phoneDigits = (l.phone || '').replace(/\D/g, '');
                  return (
                    <tr key={l.id || i} className={l.urgency === 5 ? 'bg-rust/5' : ''}>
                      <Td>{l.created_at ? new Date(l.created_at).toLocaleString() : '—'}</Td>
                      <Td><span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide ${u.tone}`}>{l.urgency} · {u.label}</span></Td>
                      <Td className="font-semibold text-ink">{l.full_name}</Td>
                      <Td><a className="text-rust hover:underline" href={`tel:+1${phoneDigits}`}>{l.phone}</a></Td>
                      <Td><a className="text-rust hover:underline break-all" href={`mailto:${l.email}`}>{l.email}</a></Td>
                      <Td>{l.service}</Td>
                      <Td>{l.property_location}</Td>
                      <Td className="max-w-md whitespace-pre-wrap">{l.issue_description}</Td>
                      <Td className="text-ink/55">{l.source}</Td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {!getSupabaseAdmin() && (
          <p className="mt-6 text-xs text-ink/55">
            Note: Supabase env vars not configured — leads are currently in-memory and will reset on deploy. Set <code className="rounded bg-white px-1 py-0.5 border border-ink/10">SUPABASE_URL</code> and <code className="rounded bg-white px-1 py-0.5 border border-ink/10">SUPABASE_SERVICE_ROLE_KEY</code> in Vercel env to enable persistence.
          </p>
        )}
      </div>
    </section>
  );
}

function Stat({ label, value, accent }: { label: string; value: number; accent?: boolean }) {
  return (
    <div className={`rounded-xl border p-5 shadow-sm ${accent ? 'bg-rust text-bone border-rust' : 'bg-white border-ink/10'}`}>
      <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${accent ? 'text-bone/70' : 'text-ink/55'}`}>{label}</p>
      <p className={`mt-2 font-display text-4xl ${accent ? '' : 'text-ink'}`}>{value}</p>
    </div>
  );
}
function Th({ children }: { children: React.ReactNode }) {
  return <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink/55">{children}</th>;
}
function Td({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <td className={`px-4 py-3 align-top text-ink/85 ${className}`}>{children}</td>;
}
