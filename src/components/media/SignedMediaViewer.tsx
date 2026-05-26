'use client';

import { useState, useEffect } from 'react';

interface SignedMediaViewerProps {
  locale: string;
  path: string;
  label?: string;
  labelAr?: string;
}

export function SignedMediaViewer({
  locale,
  path,
  label,
  labelAr,
}: SignedMediaViewerProps) {
  const [signedUrl, setSignedUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isRtl = locale === 'ar';
  const displayLabel = isRtl && labelAr ? labelAr : label;

  useEffect(() => {
    async function fetchSignedUrl() {
      try {
        const response = await fetch('/api/v1/media/signed-url', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ path, expiresInSeconds: 300 }),
        });

        if (!response.ok) {
          throw new Error('Failed to get signed URL');
        }

        const data = await response.json();
        setSignedUrl(data.signedUrl);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Access denied');
      } finally {
        setLoading(false);
      }
    }

    fetchSignedUrl();
  }, [path]);

  if (loading) {
    return (
      <div className="bg-soft-parchment rounded-xl h-48 flex items-center justify-center">
        <span className="text-sm text-text-muted">
          {isRtl ? 'جارٍ التحميل...' : 'Loading...'}
        </span>
      </div>
    );
  }

  if (error || !signedUrl) {
    return (
      <div className="bg-soft-parchment rounded-xl h-48 flex items-center justify-center">
        <span className="text-sm text-risk-internal">
          {error || (isRtl ? 'غير مصرح بالوصول' : 'Access unauthorized')}
        </span>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {displayLabel && (
        <p className="text-xs text-text-muted">{displayLabel}</p>
      )}
      <div className="rounded-xl overflow-hidden bg-soft-parchment">
        <img
          src={signedUrl}
          alt={displayLabel || 'Signed media'}
          className="w-full max-h-96 object-contain"
        />
      </div>
    </div>
  );
}
