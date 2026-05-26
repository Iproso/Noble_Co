'use client';

import { useState, useCallback } from 'react';

interface MediaUploaderProps {
  locale: string;
  assetId: string;
  onUploadComplete?: (result: { url: string; thumbnailUrl: string }) => void;
  multiple?: boolean;
}

export function MediaUploader({
  locale,
  assetId,
  onUploadComplete,
  multiple = false,
}: MediaUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previews, setPreviews] = useState<string[]>([]);
  const isRtl = locale === 'ar';

  const handleUpload = useCallback(async (files: FileList | null) => {
    if (!files?.length) return;

    setUploading(true);
    setError(null);

    const uploadPromises = Array.from(files).map(async (file) => {
      if (file.size > 50 * 1024 * 1024) {
        setError(isRtl ? 'حجم الملف يتجاوز 50 ميغابايت' : 'File size exceeds 50MB');
        return;
      }

      const formData = new FormData();
      formData.append('file', file);
      formData.append('assetId', assetId);

      try {
        const response = await fetch('/api/v1/media/upload', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          const err = await response.json();
          setError(err.error || 'Upload failed');
          return;
        }

        const result = await response.json();
        setPreviews((prev) => [...prev, result.publicUrl || result.thumbnailUrl]);
        onUploadComplete?.(result);
      } catch {
        setError(isRtl ? 'فشل التحميل' : 'Upload failed');
      }
    });

    await Promise.all(uploadPromises);

    setUploading(false);
  }, [assetId, onUploadComplete, isRtl]);

  return (
    <div className="space-y-4">
      <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-warm-gray rounded-xl bg-soft-parchment hover:bg-warm-stone/30 cursor-pointer transition-colors">
        <div className="text-center space-y-1">
          <span className="text-sm text-text-secondary">
            {uploading
              ? (isRtl ? 'جارٍ التحميل...' : 'Uploading...')
              : (isRtl ? 'انقر لتحميل الصور' : 'Click to upload images')}
          </span>
          <p className="text-xs text-text-muted">
            {isRtl ? 'JPEG, PNG, WebP — حتى 50 ميغابايت' : 'JPEG, PNG, WebP — up to 50MB'}
          </p>
        </div>
        <input
          type="file"
          accept="image/jpeg,image/png,image/webp,image/avif,image/tiff"
          multiple={multiple}
          className="hidden"
          onChange={(e) => handleUpload(e.target.files)}
          disabled={uploading}
        />
      </label>

      {error && (
        <p className="text-sm text-risk-internal">{error}</p>
      )}

      {previews.length > 0 && (
        <div className="grid grid-cols-3 gap-2">
          {previews.map((url, i) => (
            <div key={i} className="aspect-square rounded-lg overflow-hidden bg-soft-parchment">
              <img
                src={url}
                alt={`Upload ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
