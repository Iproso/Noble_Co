'use client';
import { useEffect } from 'react';

type Props = { error: Error & { digest?: string }; reset: () => void };

export default function ExploreError({ error, reset }: Props) {
  useEffect(() => { console.error(error); }, [error]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-warm-white" dir="ltr">
      <div className="text-center p-8">
        <h1 className="heading-2 text-deep-ink mb-4">Something went wrong</h1>
        <p className="text-text-secondary mb-6">An unexpected error occurred. Please try again.</p>
        <button onClick={reset} className="px-5 py-2.5 bg-charcoal text-warm-white rounded-lg text-sm font-medium hover:bg-charcoal transition-colors">
          Try Again
        </button>
      </div>
    </div>
  );
}
