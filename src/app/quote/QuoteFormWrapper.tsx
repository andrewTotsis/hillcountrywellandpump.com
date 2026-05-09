'use client';

import { useSearchParams } from 'next/navigation';
import { QuoteForm } from '@/components/QuoteForm';

export function QuoteFormWrapper() {
  const params = useSearchParams();
  const service = params.get('service') || undefined;
  const location = params.get('location') || undefined;
  const urgencyParam = params.get('urgency');
  const urgency = urgencyParam ? Number(urgencyParam) : undefined;
  return <QuoteForm defaultService={service} defaultLocation={location} defaultUrgency={urgency} />;
}
