import { render, fireEvent, waitFor } from '@testing-library/react';
import { MediaUploader } from '../MediaUploader';
import { describe, it, expect, vi, beforeEach } from 'vitest';

describe('MediaUploader Benchmark', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    global.fetch = vi.fn().mockImplementation(() =>
      new Promise((resolve) =>
        setTimeout(() => {
          resolve({
            ok: true,
            json: async () => ({ publicUrl: 'http://example.com/img.jpg', thumbnailUrl: 'http://example.com/thumb.jpg' }),
          });
        }, 100) // Simulate 100ms network latency per upload
      )
    );
  });

  it('measures upload performance for multiple files', async () => {
    const onUploadComplete = vi.fn();
    const { container } = render(
      <MediaUploader locale="en" assetId="123" onUploadComplete={onUploadComplete} multiple />
    );

    const input = container.querySelector('input[type="file"]') as HTMLInputElement;
    expect(input).toBeInTheDocument();

    // Create 10 dummy files
    const files = Array.from({ length: 10 }, (_, i) => {
      const file = new File(['dummy content'], `dummy${i}.jpg`, { type: 'image/jpeg' });
      return file;
    });

    const start = performance.now();

    // Trigger upload
    fireEvent.change(input, { target: { files } });

    // Wait for all uploads to complete (10 files)
    await waitFor(() => {
      expect(onUploadComplete).toHaveBeenCalledTimes(10);
    }, { timeout: 5000 });

    const end = performance.now();
    const duration = end - start;

    console.log(`Upload duration for 10 files: ${duration}ms`);

    // We expect it to take roughly ~1000ms sequentially, but ~100ms concurrently
    expect(duration).toBeGreaterThan(0);
  });
});
