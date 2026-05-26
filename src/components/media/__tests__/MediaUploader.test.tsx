import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MediaUploader } from '../MediaUploader';
import { describe, it, expect, vi, beforeEach } from 'vitest';

describe('MediaUploader', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly', () => {
    render(<MediaUploader locale="en" assetId="123" />);
    expect(screen.getByText('Click to upload images')).toBeInTheDocument();
  });
});
