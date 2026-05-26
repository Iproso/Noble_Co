import { AdminShell } from '@/components/layouts/AdminShell';

type Props = { params: Promise<{ locale: string }> };

const modules = [
  {
    icon: '◈',
    titleEn: 'Auction Calendar',
    titleAr: 'تقويم المزادات',
    descEn: 'Schedule of upcoming, live, and past auction events.',
    descAr: 'جدول المزادات القادمة والحالية والسابقة.',
  },
  {
    icon: '◇',
    titleEn: 'Lot Management',
    titleAr: 'إدارة اللوتات',
    descEn: 'Organise and configure lots within each auction event.',
    descAr: 'تنظيم وتكوين اللوتات داخل كل حدث مزاد.',
  },
  {
    icon: '◆',
    titleEn: 'Reserve Pricing',
    titleAr: 'تسعير الاحتياطي',
    descEn: 'Set and manage minimum reserve prices per lot.',
    descAr: 'تحديد وإدارة أسعار الاحتياطي الدنيا لكل لوت.',
  },
  {
    icon: '○',
    titleEn: 'Bidding Dashboard',
    titleAr: 'لوحة المزايدة',
    descEn: 'Real-time bid tracking, paddle numbers, and bidder activity.',
    descAr: 'تتبع المزايدات في الوقت الفعلي وأرقام البطاقات ونشاط المزايدين.',
  },
  {
    icon: '□',
    titleEn: 'Results & Hammer Prices',
    titleAr: 'النتائج وأسعار المطرقة',
    descEn: 'Final sale prices, buyer premiums, and post-auction reports.',
    descAr: 'أسعار البيع النهائية وعلاوات المشتري وتقارير ما بعد المزاد.',
  },
  {
    icon: '☆',
    titleEn: 'Bidder Management',
    titleAr: 'إدارة المزايدين',
    descEn: 'Bidder registration, approvals, credit limits, and history.',
    descAr: 'تسجيل المزايدين والموافقات وحدود الائتمان والسجل.',
  },
];

export default async function AuctionsPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';
  return (
    <AdminShell locale={locale} title={isRtl ? 'المزادات' : 'Auctions'}>
      <div className="space-y-6">
        <p className="text-sm text-text-secondary">
          {isRtl
            ? 'إدارة المزادات واللوتات والمزايدين.'
            : 'Manage auctions, lots, and bidders.'}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((m) => (
            <div key={m.titleEn} className="bg-bg-card border border-border-light rounded-xl p-5 card-metallic">
              <span className="text-xl text-antique-gold block mb-3">{m.icon}</span>
              <h3 className="text-sm font-semibold text-deep-ink mb-1">
                {isRtl ? m.titleAr : m.titleEn}
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                {isRtl ? m.descAr : m.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}
