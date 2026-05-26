import { getTranslations } from 'next-intl/server';
import { MemberShell } from '@/components/layouts/MemberShell';
import { CTAButton } from '@/components/ui';
import { SalonRoomCard } from '@/components/features/salon';
import { mockSalonRooms } from '@/lib/mock/member-data';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'salon' });
  return { title: `Noble Collectors — ${t('mySalon')}`, description: t('subtitle') };
}

export default async function MemberSalonPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'salon' });

  return (
    <MemberShell locale={locale} title={t('mySalon')}>
      <div className="space-y-8">
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="heading-4 text-deep-ink">{t('featuredRooms')}</h2>
            <CTAButton locale={locale} variant="ghost">
              {t('createRoom')}
            </CTAButton>
          </div>
          <div className="card-grid">
            {mockSalonRooms.length > 0 ? (
              mockSalonRooms.map((room) => (
                <SalonRoomCard key={room.id} locale={locale} room={room} />
              ))
            ) : (
              <p className="text-sm text-text-secondary col-span-full text-center py-12">{t('noRooms')}</p>
            )}
          </div>
        </section>
      </div>
    </MemberShell>
  );
}
