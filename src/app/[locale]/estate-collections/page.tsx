import { PublicShell } from '@/components/layouts/PublicShell';

type Props = { params: Promise<{ locale: string }> };

export default async function EstateCollectionsPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';
  return (
    <PublicShell locale={locale}>
      <div className="container-noble py-20 text-center">
        <h1 className="heading-1 rose-gold-text mb-4">{isRtl ? 'مجموعات العقارات' : 'Estate Collections'}</h1>
        <p className="body-large text-text-secondary max-w-xl mx-auto">
          {isRtl ? 'خدمات مجموعات العقارات الحصرية — قادم قريباً.' : 'Exclusive estate collection services — coming soon.'}
        </p>
      </div>
    </PublicShell>
  );
}
