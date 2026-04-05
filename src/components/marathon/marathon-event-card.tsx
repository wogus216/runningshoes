import Link from 'next/link';
import type { MarathonEvent } from '@/types/marathon';
import { Calendar, MapPin } from 'lucide-react';

interface MarathonEventCardProps {
  event: MarathonEvent;
}

const distanceColors: Record<string, string> = {
  '풀코스': 'bg-sky-100 text-sky-700',
  '하프': 'bg-slate-100 text-slate-700',
  '10K': 'bg-cyan-100 text-cyan-700',
  '5K': 'bg-teal-100 text-teal-700',
  '울트라': 'bg-orange-100 text-orange-700',
  '트레일': 'bg-amber-100 text-amber-700',
};

const statusStyles: Record<string, string> = {
  '접수중': 'bg-sky-600 text-white',
  '마감': 'bg-gray-400 text-white',
  '대회종료': 'bg-gray-300 text-gray-600',
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
      className={`group block rounded-[28px] border border-[var(--accent-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(242,248,255,0.94))] p-5 shadow-[0_20px_40px_-34px_rgba(8,18,38,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_50px_-34px_rgba(8,18,38,0.24)] ${event.isMajor ? 'ring-2 ring-sky-200' : ''}`}
    >
      <div className="mb-3 h-1 rounded-full bg-[linear-gradient(90deg,#38bdf8_0%,#0ea5e9_58%,#f97316_100%)]" />
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
            className={`rounded-full px-2 py-0.5 text-xs font-medium ${distanceColors[distance] || 'bg-gray-100 text-gray-600'}`}
          >
            {distance}
          </span>
        ))}
      </div>
    </Link>
  );
}
