import { createClient, type SupabaseClient } from '@supabase/supabase-js';

let cached: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient | null {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  if (cached) return cached;
  cached = createClient(url, key, { auth: { persistSession: false } });
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
