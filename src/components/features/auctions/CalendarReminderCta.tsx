'use client';

interface CalendarReminderCtaProps { locale: string; date: string; }

export function CalendarReminderCta({ locale, date }: CalendarReminderCtaProps) {
  const isRtl = locale === 'ar';
  const handleAdd = () => { window.open(`https://www.google.com/calendar/render?action=TEMPLATE&dates=${date.replace(/-/g, '')}/${date.replace(/-/g, '')}`, '_blank'); };
  return (
    <button onClick={handleAdd} className="w-full px-4 py-2.5 border border-border-light text-text-secondary rounded-lg text-xs hover:bg-soft-parchment transition-colors flex items-center justify-center gap-2">
      <span>📅</span>{isRtl ? 'أضف تذكيراً للتقويم' : 'Add Calendar Reminder'}
    </button>
  );
}
