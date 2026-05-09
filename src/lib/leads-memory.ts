import type { LeadRecord } from './supabase';

const memory: LeadRecord[] = [];

export function pushMemoryLead(r: LeadRecord) {
  memory.unshift(r);
  if (memory.length > 500) memory.pop();
}

export function getMemoryLeads(): LeadRecord[] {
  return memory;
}
