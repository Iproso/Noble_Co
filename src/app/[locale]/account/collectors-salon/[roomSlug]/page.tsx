import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { MemberShell } from '@/components/layouts/MemberShell';
import { CTAButton } from '@/components/ui';
import { mockSalonRooms } from '@/lib/mock/member-data';

type Props = { params: Promise<{ locale: string; roomSlug: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale, roomSlug } = await params;
  const room = mockSalonRooms.find((r) => r.slug === roomSlug);
  if (!room) return { title: 'Noble Collectors — Not Found' };
  const t = await getTranslations({ locale, namespace: 'salon' });
  const name = locale === 'ar' ? room.nameAr : room.nameEn;
  return { title: `Noble Collectors — ${name}`, description: room.descriptionEn };
}

export default async function RoomDetailPage({ params }: Props) {
  const { locale, roomSlug } = await params;
  const t = await getTranslations({ locale, namespace: 'salon' });
  const isRtl = locale === 'ar';

  const room = mockSalonRooms.find((r) => r.slug === roomSlug);
  if (!room) notFound();

  const name = isRtl ? room.nameAr : room.nameEn;
  const description = isRtl ? room.descriptionAr : room.descriptionEn;

  return (
    <MemberShell locale={locale} title={name}>
      <div className="space-y-8">
        <section className="bg-bg-card rounded-xl border border-border-light p-6 space-y-4 card-metallic">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
              <div className="flex items-center gap-4 text-xs text-text-muted">
                <span>{room.memberCount} {t('members')}</span>
                {room.isPrivate && (
                  <span className="text-[0.6rem] px-2 py-0.5 rounded-full bg-soft-parchment text-text-muted uppercase">
                    {isRtl ? 'خاص' : 'Private'}
                  </span>
                )}
              </div>
            </div>
            {room.isPrivate ? (
              <span className="text-xs px-3 py-1.5 rounded-lg bg-soft-parchment text-text-muted shrink-0">
                {t('accessRequired')}
              </span>
            ) : (
              <CTAButton locale={locale} variant="outline">{t('joinRoom')}</CTAButton>
            )}
          </div>
        </section>

        <section>
          <h2 className="heading-4 text-deep-ink mb-4">{t('recentActivity')}</h2>
          <div className="bg-bg-card rounded-xl border border-border-light p-6 card-metallic">
            <p className="text-sm text-text-secondary">{room.recentActivity}</p>
            <p className="text-xs text-text-muted mt-4">
              {isRtl ? 'نشاطات إضافية تظهر هنا...' : 'Additional activity will appear here...'}
            </p>
          </div>
        </section>
      </div>
    </MemberShell>
  );
}
