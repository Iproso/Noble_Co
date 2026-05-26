interface PageHeroProps {
  locale: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt?: string;
  children?: React.ReactNode;
}

export function PageHero({ locale, title, subtitle, imageUrl, imageAlt, children }: PageHeroProps) {
  const isRtl = locale === 'ar';
  return (
    <section className="relative overflow-hidden min-h-[50vh] flex items-center brushed-metal">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
        role="img"
        aria-label={imageAlt ?? title}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/85 via-bg-primary/60 to-bg-primary/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 via-transparent to-transparent" />
      <div className="relative z-10 container-noble py-20 md:py-28">
        <div className={`max-w-2xl ${isRtl ? 'mr-0 ml-auto' : 'ml-0'}`}>
          <h1 className="heading-1 rose-gold-text mb-4">{title}</h1>
          <p className="body-large text-text-secondary max-w-xl leading-relaxed">
            {subtitle}
          </p>
          {children && (
            <div className="flex items-center gap-4 pt-6 flex-wrap">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
