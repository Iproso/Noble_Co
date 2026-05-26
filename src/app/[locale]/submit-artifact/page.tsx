import { getTranslations } from 'next-intl/server';
import { PublicShell } from '@/components/layouts/PublicShell';
import { SmartIntakeWizard } from '@/features/consignor-intake';

type Props = { params: Promise<{ locale: string }> };

export default async function SubmitArtifactPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });

  return (
    <PublicShell locale={locale}>
      <div className="container-noble py-8">
        <div className="max-w-3xl mx-auto mb-8">
          <h1 className="heading-1 rose-gold-text mb-2">
            {locale === 'ar' ? 'تقديم قطعة أثرية' : 'Submit an Artifact'}
          </h1>
          <p className="body-default text-text-secondary">
            {locale === 'ar'
              ? 'أخبرنا عن القطعة التي ترغب في تقديمها. سنقوم بتوجيهك خلال كل خطوة.'
              : 'Tell us about the object you wish to submit. We will guide you through each step.'}
          </p>
        </div>
        <SmartIntakeWizard locale={locale} />
      </div>
    </PublicShell>
  );
}
