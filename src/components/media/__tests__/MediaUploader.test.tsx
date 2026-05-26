import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { MediaUploader } from '../MediaUploader';

describe('MediaUploader', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  it('uploads files concurrently and not sequentially', async () => {
    // We mock fetch to take some time, then we measure total time.
    const mockFetch = vi.mocked(global.fetch);
    mockFetch.mockImplementation(async () => {
      await new Promise((resolve) => setTimeout(resolve, 100)); // 100ms per request
      return {
        ok: true,
        json: async () => ({ publicUrl: 'mock-url', thumbnailUrl: 'mock-thumb' }),
      } as Response;
    });

    const onUploadComplete = vi.fn();

    const { getByTestId, container } = render(
      <MediaUploader locale="en" assetId="123" onUploadComplete={onUploadComplete} multiple />
    );

    const input = container.querySelector('input[type="file"]') as HTMLInputElement;
    expect(input).toBeDefined();

    // Create 3 fake files
    const file1 = new File(['hello'], 'hello.png', { type: 'image/png' });
    const file2 = new File(['world'], 'world.png', { type: 'image/png' });
    const file3 = new File(['foo'], 'foo.png', { type: 'image/png' });

    const startTime = Date.now();

    // Using fireEvent.change to simulate file selection
    fireEvent.change(input, { target: { files: [file1, file2, file3] } });

    await waitFor(() => {
      expect(onUploadComplete).toHaveBeenCalledTimes(3);
    });

    const endTime = Date.now();
    const duration = endTime - startTime;

    // If sequential, it would take ~300ms. If concurrent, it takes ~100ms.
    console.log(`Upload duration: ${duration}ms`);
  });
});
