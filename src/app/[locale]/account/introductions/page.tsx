import { MemberShell } from '@/components/layouts/MemberShell';

type Props = { params: Promise<{ locale: string }> };

export default async function IntroductionsPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  return (
    <MemberShell locale={locale} title={isRtl ? 'التعريفات' : 'Introductions'}>
      <p className="text-sm text-text-secondary mb-8">
        {isRtl ? 'تقديم جامعين وعقارات إلى شبكة نوبل.' : 'Introduce collectors and estates to the Noble network.'}
      </p>
      <div className="text-center py-16">
        <p className="text-sm text-text-secondary">
          {isRtl ? 'لا توجد تعريفات نشطة حالياً.' : 'No active introductions.'}
        </p>
      </div>
    </MemberShell>
  );
}
