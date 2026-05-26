interface MessageThreadProps {
  locale: string;
  message: {
    id: string;
    fromConcierge: boolean;
    subjectEn: string;
    subjectAr: string;
    previewEn: string;
    previewAr: string;
    date: string;
    unread: boolean;
  };
}

export function MessageThread({ locale, message }: MessageThreadProps) {
  const isRtl = locale === 'ar';
  const subject = isRtl ? message.subjectAr : message.subjectEn;
  const preview = isRtl ? message.previewAr : message.previewEn;

  return (
    <div className={`bg-bg-card rounded-xl border p-4 transition-colors hover:border-antique-gold/30 cursor-pointer card-metallic shimmer-hover ${message.unread ? 'border-antique-gold/40' : 'border-border-light'}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            {message.unread && <span className="w-2 h-2 rounded-full bg-antique-gold shrink-0" />}
            <h4 className={`text-sm truncate ${message.unread ? 'font-semibold text-deep-ink' : 'font-medium text-text-secondary'}`}>
              {subject}
            </h4>
          </div>
          {message.fromConcierge && (
            <span className="text-[0.6rem] text-antique-gold uppercase tracking-wider">
              {isRtl ? 'الكونسيرج' : 'Concierge'}
            </span>
          )}
          <p className="text-xs text-text-secondary mt-1 line-clamp-1">{preview}</p>
        </div>
        <span className="text-[0.6rem] text-text-muted shrink-0">{message.date}</span>
      </div>
    </div>
  );
}
