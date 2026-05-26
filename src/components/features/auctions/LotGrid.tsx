import { LotCard } from './LotCard';
import type { PublicLot } from '@/lib/mock/auction-data';

interface LotGridProps { locale: string; lots: PublicLot[]; }

export function LotGrid({ locale, lots }: LotGridProps) {
  if (lots.length === 0) return null;
  return (<div className="space-y-3">{lots.map((lot) => (<LotCard key={lot.id} locale={locale} lot={lot} />))}</div>);
}
