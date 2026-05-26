import Link from 'next/link';
import type { SalonRoom } from '@/lib/mock/member-data';

interface SalonRoomCardProps {
  locale: string;
  room: SalonRoom;
}

export function SalonRoomCard({ locale, room }: SalonRoomCardProps) {
  const isRtl = locale === 'ar';
  const name = isRtl ? room.nameAr : room.nameEn;
  const desc = isRtl ? room.descriptionAr : room.descriptionEn;

  return (
    <Link
      href={`/${locale}/account/collectors-salon/${room.slug}`}
      className="group block bg-bg-card rounded-xl border border-border-light hover:border-antique-gold/30 transition-all duration-300 p-6 space-y-3 card-metallic shimmer-hover"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-sm font-semibold text-deep-ink group-hover:text-antique-gold transition-colors">
          {name}
        </h3>
        {room.isPrivate && (
          <span className="text-[0.6rem] px-2 py-0.5 rounded-full bg-soft-parchment text-text-muted uppercase shrink-0">
            {isRtl ? 'خاص' : 'Private'}
          </span>
        )}
      </div>
      <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">
        {desc}
      </p>
      <div className="flex items-center gap-3 text-xs text-text-muted pt-2 border-t border-border-light">
        <span>{room.memberCount} {isRtl ? 'عضواً' : 'members'}</span>
        <span className="text-antique-gold">·</span>
        <span className="truncate">{room.recentActivity}</span>
      </div>
    </Link>
  );
}
