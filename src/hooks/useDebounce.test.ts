import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useDebounce } from './useDebounce';

describe('useDebounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it('should return the initial value', () => {
    const { result } = renderHook(() => useDebounce('initial'));
    expect(result.current).toBe('initial');
  });

  it('should debounce the value change', () => {
    const { result, rerender } = renderHook(
      ({ value, delayMs }) => useDebounce(value, delayMs),
      { initialProps: { value: 'initial', delayMs: 500 } }
    );

    expect(result.current).toBe('initial');

    rerender({ value: 'updated', delayMs: 500 });

    // The value should still be 'initial' immediately after rerender
    expect(result.current).toBe('initial');

    // Fast-forward time
    act(() => {
      vi.advanceTimersByTime(500);
    });

    // The value should now be 'updated'
    expect(result.current).toBe('updated');
  });

  it('should use the default delay of 300ms', () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value),
      { initialProps: { value: 'initial' } }
    );

    expect(result.current).toBe('initial');

    rerender({ value: 'updated' });

    // The value should still be 'initial' immediately after rerender
    expect(result.current).toBe('initial');

    // Fast-forward time by 299ms
    act(() => {
      vi.advanceTimersByTime(299);
    });
    expect(result.current).toBe('initial');

    // Fast-forward time by 1ms (total 300ms)
    act(() => {
      vi.advanceTimersByTime(1);
    });

    // The value should now be 'updated'
    expect(result.current).toBe('updated');
  });

  it('should reset the timer on rapid changes', () => {
    const { result, rerender } = renderHook(
      ({ value, delayMs }) => useDebounce(value, delayMs),
      { initialProps: { value: 'initial', delayMs: 500 } }
    );

    rerender({ value: 'updated-1', delayMs: 500 });

    act(() => {
      vi.advanceTimersByTime(250);
    });

    expect(result.current).toBe('initial');

    rerender({ value: 'updated-2', delayMs: 500 });

    act(() => {
      vi.advanceTimersByTime(250);
    });

    // Total 500ms passed since first update, but only 250ms since second update
    expect(result.current).toBe('initial');

    act(() => {
      vi.advanceTimersByTime(250);
    });

    // Now 500ms passed since second update
    expect(result.current).toBe('updated-2');
  });
});
