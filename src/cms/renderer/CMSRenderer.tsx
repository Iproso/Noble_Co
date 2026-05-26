'use client';

import type { NobleCMSBlock, CMSContentBody } from '../blocks';

interface CMSRendererProps {
  locale: string;
  body: CMSContentBody;
  className?: string;
}

function isSafeUrl(url: string): boolean {
  try {
    const parsed = new URL(url, 'https://example.com');
    return parsed.protocol === 'https:' || parsed.protocol === 'http:' || parsed.protocol === 'mailto:';
  } catch {
    return false;
  }
}

function BlockRenderer({ block, locale }: { block: NobleCMSBlock; locale: string }) {
  const isRtl = locale === 'ar';

  switch (block.type) {
    case 'heading': {
      const level = (block.props.level as number) || 2;
      const text = isRtl ? (block.props as { textAr: string }).textAr : (block.props as { textEn: string }).textEn;
      const headingClass = `heading-${Math.min(level, 4)}`;
      const HeadingTag = level === 1 ? 'h1' : level === 2 ? 'h2' : level === 3 ? 'h3' : 'h4';
      return <HeadingTag className={`${headingClass} text-deep-ink mb-4`}>{text as string}</HeadingTag>;
    }

    case 'paragraph': {
      const text = isRtl ? (block.props as { textAr: string }).textAr : (block.props as { textEn: string }).textEn;
      return <p className="body-default text-text-secondary mb-4">{text as string}</p>;
    }

    case 'image': {
      const props = block.props as { src: string; altEn: string; altAr: string; captionEn?: string; captionAr?: string };
      const alt = isRtl ? props.altAr : props.altEn;
      const caption = isRtl ? props.captionAr : props.captionEn;
      return (
        <figure className="my-8">
          <img src={isSafeUrl(props.src) ? props.src : ''} alt={alt} className="w-full rounded-xl" loading="lazy" />
          {caption && <figcaption className="text-sm text-text-muted mt-2">{caption}</figcaption>}
        </figure>
      );
    }

    case 'cta': {
      const props = block.props as { labelEn: string; labelAr: string; href: string; variant: string };
      const label = isRtl ? props.labelAr : props.labelEn;
      const variantStyles: Record<string, string> = {
        primary: 'bg-charcoal text-warm-white hover:bg-surface-hover',
        outline: 'border border-antique-gold/50 text-antique-gold hover:bg-antique-gold hover:text-warm-white',
        gold: 'bg-antique-gold text-warm-white hover:bg-muted-brass',
      };
      return (
        <div className="my-6">
          <a
            href={isSafeUrl(props.href) ? props.href : '#'}
            className={`inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg transition-all ${variantStyles[props.variant] || variantStyles.primary}`}
          >
            {label}
          </a>
        </div>
      );
    }

    case 'card_grid': {
      const props = block.props as {
        cards: Array<{ titleEn: string; titleAr: string; descriptionEn: string; descriptionAr: string; href?: string }>;
      };
      return (
        <div className="card-grid my-8">
          {props.cards.map((card, i) => {
            const title = isRtl ? card.titleAr : card.titleEn;
            const description = isRtl ? card.descriptionAr : card.descriptionEn;
            return (
              <div key={i} className="bg-bg-card rounded-xl p-6 border border-border-light card-metallic">
                <h3 className="heading-4 text-deep-ink mb-2">{title}</h3>
                <p className="text-sm text-text-secondary">{description}</p>
              </div>
            );
          })}
        </div>
      );
    }

    default:
      return null;
  }
}

export function CMSRenderer({ locale, body, className = '' }: CMSRendererProps) {
  if (!body?.blocks || !Array.isArray(body.blocks)) {
    return null;
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {body.blocks.map((block: NobleCMSBlock, index: number) => (
        <BlockRenderer key={index} block={block} locale={locale} />
      ))}
    </div>
  );
}
