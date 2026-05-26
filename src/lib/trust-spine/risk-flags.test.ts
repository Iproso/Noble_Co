import { describe, it, expect } from 'vitest';
import { getRiskFlagsBySeverity, getPublicRiskFlags, RISK_FLAGS } from './risk-flags';

describe('getRiskFlagsBySeverity', () => {
  it('returns flags with info severity', () => {
    const flags = getRiskFlagsBySeverity('info');
    expect(flags).toHaveLength(2);
    expect(flags.map(f => f.code)).toEqual(['requires_specialist', 'condition_concern']);
    expect(flags.every(f => f.severity === 'info')).toBe(true);
  });

  it('returns flags with warning severity', () => {
    const flags = getRiskFlagsBySeverity('warning');
    expect(flags).toHaveLength(3);
    expect(flags.map(f => f.code)).toEqual(['incomplete_provenance', 'high_risk_category', 'missing_evidence']);
    expect(flags.every(f => f.severity === 'warning')).toBe(true);
  });

  it('returns flags with critical severity', () => {
    const flags = getRiskFlagsBySeverity('critical');
    expect(flags).toHaveLength(3);
    expect(flags.map(f => f.code)).toEqual(['legal_review_required', 'cultural_property_concern', 'sanctions_review']);
    expect(flags.every(f => f.severity === 'critical')).toBe(true);
  });
});

describe('getPublicRiskFlags', () => {
  it('returns only public flags', () => {
    const flags = getPublicRiskFlags();
    expect(flags).toHaveLength(4);
    expect(flags.map(f => f.code)).toEqual([
      'incomplete_provenance',
      'requires_specialist',
      'missing_evidence',
      'condition_concern'
    ]);
    expect(flags.every(f => f.isPublic)).toBe(true);
  });
});
