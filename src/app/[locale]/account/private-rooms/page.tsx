import { getTranslations } from 'next-intl/server';
import { MemberShell } from '@/components/layouts/MemberShell';
import { SalonRoomCard } from '@/components/features/salon';
import { mockSalonRooms } from '@/lib/mock/member-data';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'salon' });
  return { title: `Noble Collectors — ${t('privateRooms')}`, description: t('accessDescription') };
}

export default async function PrivateRoomsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'salon' });
  const privateRooms = mockSalonRooms.filter((r) => r.isPrivate);

  return (
    <MemberShell locale={locale} title={t('privateRooms')}>
      {privateRooms.length > 0 ? (
        <div className="card-grid">
          {privateRooms.map((room) => (
            <SalonRoomCard key={room.id} locale={locale} room={room} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-sm text-text-secondary">{t('noRooms')}</p>
        </div>
      )}
    </MemberShell>
  );
}
