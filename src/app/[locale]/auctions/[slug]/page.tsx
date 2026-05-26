import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { PublicShell } from '@/components/layouts/PublicShell';
import { mockPublicAuctions, getMockLots } from '@/lib/mock/auction-data';
import { AuctionHero } from '@/components/features/auctions/AuctionHero';
import { LotGrid } from '@/components/features/auctions/LotGrid';
import { AuctionRegistration } from '@/components/features/auctions/AuctionRegistration';
import { BuyerPremiumDisclosure } from '@/components/features/auctions/BuyerPremiumDisclosure';
import { CalendarReminderCta } from '@/components/features/auctions/CalendarReminderCta';

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  return mockPublicAuctions.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const auction = mockPublicAuctions.find((a) => a.slug === slug);
  if (!auction) return { title: 'Not Found' };
  const title = locale === 'ar' ? auction.titleAr : auction.titleEn;
  return { title: `Noble Collectors — ${title}`, description: auction.descriptionEn };
}

export default async function AuctionDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'auctions' });
  const isRtl = locale === 'ar';

  const auction = mockPublicAuctions.find((a) => a.slug === slug);
  if (!auction) notFound();

  const lots = getMockLots(slug);

  return (
    <PublicShell locale={locale}>
      <AuctionHero locale={locale} auction={auction} />

      <section className="container-noble py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="heading-3 text-deep-ink">{t('lots')} ({lots.length})</h2>
            {lots.length > 0 ? (
              <LotGrid locale={locale} lots={lots} />
            ) : (
              <p className="text-sm text-text-muted">{isRtl ? 'لا توجد قطع متاحة بعد.' : 'No lots available yet.'}</p>
            )}
          </div>
          <aside className="space-y-4">
            <AuctionRegistration locale={locale} auctionId={auction.id} />
            <BuyerPremiumDisclosure locale={locale} />
            <CalendarReminderCta locale={locale} date={auction.date} />
          </aside>
        </div>
      </section>
    </PublicShell>
  );
}
