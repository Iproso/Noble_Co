import { describe, it, expect } from 'vitest';
import { PublicArtifactCardDTOSchema, PublicArtifactDetailDTOSchema } from './public-artifact';

describe('PublicArtifactCardDTOSchema', () => {
  it('validates a minimal card', () => {
    const result = PublicArtifactCardDTOSchema.safeParse({
      id: '123', slug: 'test-artifact',
      titleEn: 'Test', categoryId: 'cat-1',
      titleAr: null,
      categoryNameEn: null,
      categoryNameAr: null,
      yearPeriod: null,
      maison: null,
      evidenceLabel: null,
      primaryImageUrl: null,
      riskTier: 1,
    });
    expect(result.success).toBe(true);
  });

  it('rejects missing id', () => {
    const result = PublicArtifactCardDTOSchema.safeParse({
      slug: 'test', titleEn: 'Test', categoryId: 'cat-1',
    });
    expect(result.success).toBe(false);
  });

  it('strips unknown fields', () => {
    const result = PublicArtifactCardDTOSchema.parse({
      id: '1', slug: 's', titleEn: 'T', categoryId: 'c',
      titleAr: null, categoryNameEn: null, categoryNameAr: null,
      yearPeriod: null, maison: null, evidenceLabel: null,
      primaryImageUrl: null, riskTier: 1,
      secretField: 'should be stripped',
    });
    expect('secretField' in result).toBe(false);
  });
});

describe('PublicArtifactDetailDTOSchema', () => {
  it('validates minimal detail', () => {
    const result = PublicArtifactDetailDTOSchema.safeParse({
      id: '123', slug: 'test',
      titleEn: 'Test', categoryId: 'cat-1',
      titleAr: null, categoryNameEn: null, categoryNameAr: null,
      descriptionEn: null, descriptionAr: null, yearPeriod: null,
      maison: null, maker: null, provenanceSummary: null,
      conditionSummary: null, evidenceLabel: null, confidenceLabel: null,
      passportAvailable: false, passportPreview: null, mediaGallery: [],
      costClarity: null, viewingAvailability: null, riskTier: 1,
      createdAt: '2024-01-01T00:00:00Z',
    });
    expect(result.success).toBe(true);
  });
});
