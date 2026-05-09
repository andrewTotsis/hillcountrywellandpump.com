import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { login, isAuthed } from '@/lib/admin';

export const metadata: Metadata = {
  title: 'Admin Login',
  robots: { index: false, follow: false },
};

async function handleLogin(formData: FormData) {
  'use server';
  const password = String(formData.get('password') || '');
  const ok = await login(password);
  if (ok) redirect('/admin');
  redirect('/admin/login?error=1');
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  if (await isAuthed()) redirect('/admin');
  const sp = await searchParams;
  return (
    <section className="min-h-[70vh] grid place-items-center bg-bone">
      <form action={handleLogin} className="w-full max-w-md rounded-2xl border border-ink/10 bg-white p-8 shadow-rugged">
        <h1 className="font-display text-3xl text-ink">Admin Sign-In</h1>
        <p className="mt-2 text-sm text-ink/60">Lead inbox access for Hill Country Well &amp; Pump.</p>
        <label htmlFor="password" className="field-label mt-6">Password</label>
        <input id="password" name="password" type="password" autoComplete="current-password" required className="field" />
        {sp?.error ? <p className="mt-3 text-sm text-rust">Incorrect password.</p> : null}
        <button type="submit" className="btn-primary mt-6 w-full">Sign In</button>
      </form>
    </section>
  );
}
