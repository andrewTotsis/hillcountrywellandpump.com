'use client';

import { useState } from 'react';
import { SERVICES } from '@/lib/services';

const URGENCY_LEVELS = [
  { v: 1, label: 'General Question', tone: 'bg-sage/15 border-sage/40 text-sage' },
  { v: 2, label: 'Planning a Project', tone: 'bg-sage/15 border-sage/50 text-sage' },
  { v: 3, label: 'Need a Quote Soon', tone: 'bg-clay/20 border-clay/50 text-earth' },
  { v: 4, label: 'Urgent Issue', tone: 'bg-rust/15 border-rust/50 text-rust' },
  { v: 5, label: 'NO WATER — Emergency', tone: 'bg-rust border-rust text-bone' },
];

export function QuoteForm({ defaultService, defaultLocation, compact = false }: { defaultService?: string; defaultLocation?: string; compact?: boolean }) {
  const [state, setState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [urgency, setUrgency] = useState<number>(3);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('submitting');
    setErrorMsg('');
    const fd = new FormData(e.currentTarget);
    const payload = {
      full_name: String(fd.get('full_name') || '').trim(),
      email: String(fd.get('email') || '').trim(),
      phone: String(fd.get('phone') || '').trim(),
      service: String(fd.get('service') || ''),
      property_location: String(fd.get('property_location') || '').trim(),
      urgency,
      issue_description: String(fd.get('issue_description') || '').trim(),
      source: typeof window !== 'undefined' ? window.location.pathname : '/',
      hp: String(fd.get('hp') || ''),
    };
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.error || 'Something went wrong. Please call us.');
      }
      setState('success');
    } catch (err) {
      setState('error');
      setErrorMsg(err instanceof Error ? err.message : 'Submission failed.');
    }
  }

  if (state === 'success') {
    return (
      <div className="rounded-xl border border-sage/40 bg-sage/10 p-6 md:p-8">
        <div className="flex items-start gap-4">
          <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-sage text-bone">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7"/></svg>
          </span>
          <div>
            <h3 className="font-display text-2xl text-ink">Got it. We’re on it.</h3>
            <p className="mt-2 text-base text-ink/75">
              {urgency >= 4
                ? 'Your request is flagged as urgent. Expect a callback in under 30 minutes during business hours, and within an hour after-hours.'
                : 'Expect a callback within one business hour. If it’s urgent, call us at the number above.'}
            </p>
            <p className="mt-3 text-sm text-ink/60">
              No-water emergencies are always prioritized — call directly if a household has been dry for more than a few hours.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`rounded-2xl border border-ink/10 bg-white p-5 md:p-7 shadow-rugged ${compact ? '' : ''}`}>
      <input type="text" name="hp" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="full_name" className="field-label">Full Name *</label>
          <input id="full_name" name="full_name" required autoComplete="name" className="field" placeholder="Jane Doe" />
        </div>
        <div>
          <label htmlFor="phone" className="field-label">Phone *</label>
          <input id="phone" name="phone" required autoComplete="tel" type="tel" className="field" placeholder="(830) 555-0144" />
        </div>
        <div>
          <label htmlFor="email" className="field-label">Email *</label>
          <input id="email" name="email" required autoComplete="email" type="email" className="field" placeholder="you@email.com" />
        </div>
        <div>
          <label htmlFor="property_location" className="field-label">Property Location *</label>
          <input id="property_location" name="property_location" required defaultValue={defaultLocation} className="field" placeholder="City, county, or address" />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="service" className="field-label">Service Needed *</label>
          <select id="service" name="service" required defaultValue={defaultService || ''} className="field">
            <option value="" disabled>Select a service…</option>
            {SERVICES.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}
            <option value="other">Other / not sure</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <span className="field-label">Urgency *</span>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-5">
            {URGENCY_LEVELS.map((u) => {
              const active = urgency === u.v;
              return (
                <button
                  type="button"
                  key={u.v}
                  onClick={() => setUrgency(u.v)}
                  aria-pressed={active}
                  className={`rounded-md border px-3 py-3 text-xs font-semibold transition ${
                    active
                      ? u.v === 5
                        ? 'bg-rust text-bone border-rust shadow-rugged'
                        : 'bg-ink text-bone border-ink shadow-rugged'
                      : 'bg-white text-ink border-ink/15 hover:border-ink/40'
                  }`}
                >
                  <span className={`block text-base font-display ${active ? '' : 'text-ink'}`}>{u.v}</span>
                  <span className="block leading-tight">{u.label}</span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="issue_description" className="field-label">Describe Your Issue *</label>
          <textarea id="issue_description" name="issue_description" required rows={4} className="field" placeholder="No water at the faucets since this morning, breaker isn’t tripped, pump is 11 years old…" />
        </div>
      </div>

      {state === 'error' && (
        <p className="mt-3 rounded-md border border-rust/40 bg-rust/10 px-4 py-3 text-sm text-rust">{errorMsg}</p>
      )}

      <button type="submit" disabled={state === 'submitting'} className="btn-primary mt-6 w-full sm:w-auto disabled:opacity-60">
        {state === 'submitting' ? 'Sending…' : 'Request Free Estimate'}
      </button>
      <p className="mt-3 text-xs text-ink/55">By submitting, you agree we may text or call you about your request. We never share your info.</p>
    </form>
  );
}
