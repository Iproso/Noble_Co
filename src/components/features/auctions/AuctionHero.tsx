import type { PublicAuction } from '@/lib/mock/auction-data';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1560415755-bd80d06eda60?w=1600&q=85';

interface AuctionHeroProps { locale: string; auction: PublicAuction; }

export function AuctionHero({ locale, auction }: AuctionHeroProps) {
  const isRtl = locale === 'ar';
  const title = isRtl ? auction.titleAr : auction.titleEn;
  const location = isRtl ? auction.locationAr : auction.locationEn;
  const description = isRtl ? auction.descriptionAr : auction.descriptionEn;
  return (
    <section className="relative overflow-hidden min-h-[40vh] flex items-center brushed-metal">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        role="img"
        aria-label={title}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/85 via-bg-primary/60 to-bg-primary/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 via-transparent to-transparent" />
      <div className="relative z-10 container-noble py-16 md:py-20">
        <span className={`inline-block text-[0.6rem] px-2 py-0.5 rounded-full uppercase font-medium backdrop-blur-sm ${auction.status === 'live' ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'}`}>
          {isRtl ? (auction.status === 'live' ? 'مباشر' : 'قادم') : auction.status}
        </span>
        <h1 className="heading-1 text-deep-ink mt-3 mb-2 drop-shadow-sm">{title}</h1>
        <p className="body-large text-text-secondary max-w-2xl leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-4 mt-6 text-sm text-text-muted">
          <span>{location}</span><span>{auction.date}</span><span>{auction.lotCount} {isRtl ? 'قطعة' : 'lots'}</span>
        </div>
      </div>
    </section>
  );
}
