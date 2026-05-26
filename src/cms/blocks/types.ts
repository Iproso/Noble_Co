import type { ReactNode } from 'react';

export interface CMSBlock {
  type: string;
  props: Record<string, unknown>;
}

export interface HeadingBlock extends CMSBlock {
  type: 'heading';
  props: {
    level: 1 | 2 | 3 | 4;
    textEn: string;
    textAr: string;
  };
}

export interface ParagraphBlock extends CMSBlock {
  type: 'paragraph';
  props: {
    textEn: string;
    textAr: string;
  };
}

export interface ImageBlock extends CMSBlock {
  type: 'image';
  props: {
    src: string;
    altEn: string;
    altAr: string;
    captionEn?: string;
    captionAr?: string;
  };
}

export interface CTABlock extends CMSBlock {
  type: 'cta';
  props: {
    labelEn: string;
    labelAr: string;
    href: string;
    variant: 'primary' | 'outline' | 'gold';
  };
}

export interface CardGridBlock extends CMSBlock {
  type: 'card_grid';
  props: {
    cards: Array<{
      titleEn: string;
      titleAr: string;
      descriptionEn: string;
      descriptionAr: string;
      href?: string;
    }>;
  };
}

export type NobleCMSBlock = HeadingBlock | ParagraphBlock | ImageBlock | CTABlock | CardGridBlock;

export interface CMSContentBody {
  blocks: NobleCMSBlock[];
}
