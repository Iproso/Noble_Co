'use client';

interface AdminHeaderProps {
  locale: string;
  title?: string;
}

export function AdminHeader({ locale, title }: AdminHeaderProps) {
  return (
    <header role="banner" className="h-14 border-b border-warm-gray flex items-center px-6 bg-warm-white edge-highlight">
      {title && (
        <h1 className="text-base font-medium text-deep-ink">{title}</h1>
      )}
      <div className="flex-1" />
      <div className="flex items-center gap-3">
        <span className="text-xs text-text-muted">
          {locale === 'ar' ? 'مسؤول' : 'Admin'}
        </span>
      </div>
    </header>
  );
}
