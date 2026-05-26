export interface HeritageAtlasEntry {
  id: string;
  slug: string;
  titleEn: string;
  titleAr: string;
  regionEn: string;
  regionAr: string;
  period: string;
  summaryEn: string;
  summaryAr: string;
  bodyEn: string;
  bodyAr: string;
  imageUrl: string | null;
}

export interface MuseumProfile {
  id: string;
  slug: string;
  nameEn: string;
  nameAr: string;
  locationEn: string;
  locationAr: string;
  foundedYear: string;
  descriptionEn: string;
  descriptionAr: string;
  imageUrl: string | null;
  websiteUrl: string | null;
}

export interface MaisonHeritageProfile {
  id: string;
  slug: string;
  nameEn: string;
  nameAr: string;
  foundedYear: string;
  originCountry: string;
  specialtyEn: string;
  specialtyAr: string;
  descriptionEn: string;
  descriptionAr: string;
  imageUrl: string | null;
  notableClients?: string[];
}

export interface CollectorGuide {
  id: string;
  slug: string;
  titleEn: string;
  titleAr: string;
  category: string;
  summaryEn: string;
  summaryAr: string;
  bodyEn: string;
  bodyAr: string;
  author?: string;
  difficultyLevel: 'beginner' | 'intermediate' | 'advanced';
  estimatedReadMinutes: number;
  imageUrl: string | null;
  publishedAt: string;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  definitionEn: string;
  definitionAr: string;
  category: string | null;
  relatedTerms: string[];
}
