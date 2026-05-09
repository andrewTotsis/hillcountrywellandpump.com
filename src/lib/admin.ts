import { cookies } from 'next/headers';
import crypto from 'crypto';

const COOKIE_NAME = 'hcwp_admin';
const MAX_AGE = 60 * 60 * 12;

function secret() {
  return process.env.ADMIN_SESSION_SECRET || 'dev-only-insecure-secret-please-change';
}

function sign(payload: string) {
  const h = crypto.createHmac('sha256', secret()).update(payload).digest('hex');
  return `${payload}.${h}`;
}

function verify(token: string): { exp: number } | null {
  const idx = token.lastIndexOf('.');
  if (idx < 0) return null;
  const payload = token.slice(0, idx);
  const sig = token.slice(idx + 1);
  const expected = crypto.createHmac('sha256', secret()).update(payload).digest('hex');
  if (sig.length !== expected.length) return null;
  if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null;
  try {
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString());
    if (typeof data?.exp !== 'number' || data.exp < Math.floor(Date.now() / 1000)) return null;
    return data;
  } catch {
    return null;
  }
}

export async function isAuthed(): Promise<boolean> {
  const c = await cookies();
  const tok = c.get(COOKIE_NAME)?.value;
  if (!tok) return false;
  return Boolean(verify(tok));
}

export async function login(password: string): Promise<boolean> {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  if (password.length !== expected.length) return false;
  if (!crypto.timingSafeEqual(Buffer.from(password), Buffer.from(expected))) return false;
  const exp = Math.floor(Date.now() / 1000) + MAX_AGE;
  const payload = Buffer.from(JSON.stringify({ exp })).toString('base64url');
  const token = sign(payload);
  const c = await cookies();
  c.set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: MAX_AGE,
  });
  return true;
}

export async function logout() {
  const c = await cookies();
  c.delete(COOKIE_NAME);
}
