import { SellerShell } from '@/components/layouts/SellerShell';
import { mockMessages } from '@/lib/mock/seller-data';

type Props = { params: Promise<{ locale: string }> };

export default async function MessagesPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  const unreadCount = mockMessages.filter((m) => m.unread).length;

  return (
    <SellerShell locale={locale} title={isRtl ? 'الرسائل' : 'Messages'}>
      {unreadCount > 0 && (
        <div className="bg-needs-review/10 border border-needs-review/20 rounded-xl p-4 mb-6">
          <p className="text-xs font-medium text-needs-review">
            {isRtl ? `لديك ${unreadCount} رسالة (رسائل) غير مقروءة` : `You have ${unreadCount} unread message(s)`}
          </p>
        </div>
      )}

      {mockMessages.length === 0 ? (
        <div className="bg-soft-parchment rounded-xl p-12 text-center">
          <p className="text-sm text-text-muted">{isRtl ? 'لا توجد رسائل' : 'No messages'}</p>
        </div>
      ) : (
        <div className="space-y-3">
          {mockMessages.map((msg) => (
            <div key={msg.id} className={`bg-bg-card border rounded-xl p-5 hover:border-antique-gold/30 transition-all cursor-pointer card-metallic shimmer-hover ${
              msg.unread ? 'border-antique-gold/20' : 'border-border-light'
            }`}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    {msg.unread && <span className="w-1.5 h-1.5 rounded-full bg-antique-gold shrink-0" />}
                    <h3 className={`text-sm ${msg.unread ? 'font-semibold text-deep-ink' : 'font-medium text-text-secondary'}`}>
                      {isRtl ? msg.subjectAr : msg.subjectEn}
                    </h3>
                  </div>
                  <p className="text-[0.6rem] text-text-muted mt-0.5">{isRtl ? msg.fromAr : msg.fromEn} · {msg.date}</p>
                  <p className="text-xs text-text-muted mt-2 line-clamp-2">{isRtl ? msg.previewAr : msg.previewEn}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </SellerShell>
  );
}
