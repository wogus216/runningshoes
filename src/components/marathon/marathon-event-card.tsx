import Link from 'next/link';
import type { MarathonEvent } from '@/types/marathon';
import { Calendar, MapPin } from 'lucide-react';

interface MarathonEventCardProps {
  event: MarathonEvent;
}

const statusStyles: Record<string, string> = {
  '접수예정': 'bg-amber-500 text-white',
  '접수중': 'bg-sky-600 text-white',
  '마감': 'bg-gray-400 text-white',
  '대회종료': 'bg-gray-300 text-gray-600',
};

const stripeStyles: Record<string, string> = {
  '접수예정': 'bg-[var(--primary)]',
  '접수중': 'bg-[var(--accent)]',
  '마감': 'bg-[var(--border)]',
  '대회종료': 'bg-[var(--border)]',
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][date.getDay()];
  return `${month}/${day} (${dayOfWeek})`;
}

export function MarathonEventCard({ event }: MarathonEventCardProps) {
  return (
    <Link
      href={`/marathon/${event.id}`}
      className={`group block rounded-[4px] border bg-background p-5 transition-colors duration-200 hover:bg-[var(--accent-soft)] ${event.isMajor ? 'border-[var(--accent)]' : 'border-border'}`}
    >
      <div className={`mb-3 h-1 ${stripeStyles[event.status] || 'bg-[var(--border)]'}`} />
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          {event.isMajor && (
            <span className="shrink-0 rounded bg-[var(--navy)] px-1.5 py-0.5 text-[10px] font-bold text-white">
              MAJOR
            </span>
          )}
          <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${statusStyles[event.status]}`}>
            {event.status}
          </span>
        </div>
      </div>

      <h3 className="mb-3 text-lg font-black leading-tight tracking-tight text-primary transition group-hover:text-accent">
        {event.name}
      </h3>

      <div className="space-y-1.5 mb-3 text-sm text-secondary">
        <div className="flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5 shrink-0" />
          <span>{formatDate(event.date)}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5 shrink-0" />
          <span>{event.location}</span>
        </div>
      </div>

      {event.description && (
        <p className="mb-4 text-xs leading-6 text-secondary">{event.description}</p>
      )}

      <div className="flex flex-wrap gap-1.5">
        {event.distances.map((distance) => (
          <span
            key={distance}
            className="rounded-[3px] border border-border px-2 py-0.5 font-mono text-[11px] font-medium uppercase tracking-[0.04em] text-primary"
          >
            {distance}
          </span>
        ))}
      </div>
    </Link>
  );
}
