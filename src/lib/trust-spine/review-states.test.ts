import { describe, it, expect } from 'vitest';
import { getReviewStateInfo, isValidReviewState, REVIEW_STATES, ReviewState } from './review-states';

describe('getReviewStateInfo', () => {
  it('returns correct state info for a valid state', () => {
    const info = getReviewStateInfo('research_ongoing');
    expect(info).toEqual(REVIEW_STATES['research_ongoing']);
    expect(info.state).toBe('research_ongoing');
  });

  it('returns pending state info for an invalid state', () => {
    // @ts-expect-error Testing invalid input
    const info = getReviewStateInfo('invalid_state_123');
    expect(info).toEqual(REVIEW_STATES['pending']);
    expect(info.state).toBe('pending');
  });

  it('returns correct state info for all valid states', () => {
    const states = Object.keys(REVIEW_STATES) as ReviewState[];
    states.forEach(state => {
      expect(getReviewStateInfo(state)).toEqual(REVIEW_STATES[state]);
    });
  });
});

describe('isValidReviewState', () => {
  it('returns true for all valid states', () => {
    const states = Object.keys(REVIEW_STATES);
    states.forEach(state => {
      expect(isValidReviewState(state)).toBe(true);
    });
  });

  it('returns false for invalid states', () => {
    expect(isValidReviewState('invalid_state')).toBe(false);
    expect(isValidReviewState('')).toBe(false);
    expect(isValidReviewState('PENDING')).toBe(false); // Case sensitive
  });
});
