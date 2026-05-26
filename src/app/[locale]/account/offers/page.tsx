import { MemberShell } from '@/components/layouts/MemberShell';

type Props = { params: Promise<{ locale: string }> };

export default async function OffersPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  return (
    <MemberShell locale={locale} title={isRtl ? 'العروض' : 'Offers'}>
      <p className="text-sm text-text-secondary mb-8">
        {isRtl ? 'العروض والتفاوض على القطع.' : 'Offers and negotiations on objects.'}
      </p>
      <div className="text-center py-16">
        <p className="text-sm text-text-secondary">
          {isRtl ? 'لا توجد عروض حالية.' : 'No offers at this time.'}
        </p>
      </div>
    </MemberShell>
  );
}
