import { describe, it, expect } from 'vitest';
import { calculateEvidenceScore, getLabel } from './evidence-score';

describe('calculateEvidenceScore', () => {
  it('returns 0 for empty input', () => {
    const result = calculateEvidenceScore({
      hasPhotos: false, photoCount: 0,
      hasDocuments: false, documentCount: 0,
      hasProvenance: false, provenanceDetail: 'none',
      hasConditionReport: false,
      hasCertificate: false,
      hasPassport: false,
      categoryRequirementLevel: 1,
    });
    expect(result.score).toBe(0);
    expect(result.label).toBe('needs_review');
  });

  it('returns strong for complete evidence', () => {
    const result = calculateEvidenceScore({
      hasPhotos: true, photoCount: 5,
      hasDocuments: true, documentCount: 3,
      hasProvenance: true, provenanceDetail: 'verified',
      hasConditionReport: true,
      hasCertificate: true,
      hasPassport: true,
      categoryRequirementLevel: 1,
    });
    expect(result.score).toBeGreaterThanOrEqual(80);
    expect(result.label).toBe('evidence_strong');
  });

  it('applies hard blocker deduction', () => {
    const result = calculateEvidenceScore({
      hasPhotos: true, photoCount: 1,
      hasDocuments: false, documentCount: 0,
      hasProvenance: false, provenanceDetail: 'none',
      hasConditionReport: false,
      hasCertificate: false,
      hasPassport: false,
      categoryRequirementLevel: 3,
    });
    expect(result.score).toBeLessThan(30);
  });

  it('never exceeds 100', () => {
    const result = calculateEvidenceScore({
      hasPhotos: true, photoCount: 100,
      hasDocuments: true, documentCount: 100,
      hasProvenance: true, provenanceDetail: 'verified',
      hasConditionReport: true,
      hasCertificate: true,
      hasPassport: true,
      categoryRequirementLevel: 1,
    });
    expect(result.score).toBeLessThanOrEqual(100);
  });
});

describe('getLabel', () => {
  it('returns evidence_strong for score >= 80', () => {
    expect(getLabel(85)).toBe('evidence_strong');
  });
  it('returns evidence_moderate for score >= 60', () => {
    expect(getLabel(65)).toBe('evidence_moderate');
  });
  it('returns evidence_limited for score >= 30', () => {
    expect(getLabel(45)).toBe('evidence_limited');
  });
  it('returns needs_review for score < 30', () => {
    expect(getLabel(15)).toBe('needs_review');
  });
});
