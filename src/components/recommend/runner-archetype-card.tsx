'use client';

import { useState } from 'react';
import { Copy, Share2, Sparkles } from 'lucide-react';
import type { UserProfile } from '@/lib/recommendation';
import { getRunnerArchetype } from '@/lib/runner-archetype';

type RunnerArchetypeCardProps = {
  profile: UserProfile;
};

export function RunnerArchetypeCard({ profile }: RunnerArchetypeCardProps) {
  const archetype = getRunnerArchetype(profile);
  const [shareState, setShareState] = useState<'idle' | 'copied'>('idle');
  const shareText = `나는 ${archetype.title}. ${archetype.headline} 산초 러너 분석에서 내 유형을 확인해보세요.`;

  const handleShare = async () => {
    const shareData = {
      title: `산초 러너 분석 | ${archetype.title}`,
      text: shareText,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return;
      }
    }

    try {
      await navigator.clipboard.writeText(`${shareText} ${window.location.href}`);
      setShareState('copied');
      window.setTimeout(() => setShareState('idle'), 2200);
    } catch {
      setShareState('idle');
    }
  };

  return (
    <section className="relative overflow-hidden rounded-[4px] border border-slate-950 bg-[var(--navy)] p-6 text-white shadow-[0_18px_50px_rgba(15,23,42,0.18)] md:p-8">
      <div className={`pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-gradient-to-br ${archetype.accent} opacity-90 blur-3xl`} />
      <div className="pointer-events-none absolute inset-0 opacity-[0.11] [background-image:linear-gradient(115deg,transparent_0%,transparent_48%,white_48%,white_49%,transparent_49%,transparent_100%)] [background-size:18px_18px]" />

      <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-bold tracking-[0.18em] text-white/85">
            <Sparkles className="h-3.5 w-3.5" />
            SANCHO RUNNER TYPE
          </div>
          <p className="text-sm font-medium text-sky-100">삼국지 러너 분석</p>
          <h2 className="mt-2 text-balance break-keep text-3xl font-black tracking-tight md:text-4xl">{archetype.title}</h2>
          <p className="mt-3 max-w-2xl break-keep text-base leading-7 text-white/82">{archetype.headline}</p>
          <p className="mt-4 max-w-2xl break-keep text-sm leading-7 text-white/65">{archetype.summary}</p>
        </div>

        <button
          onClick={handleShare}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[var(--navy)] transition hover:-translate-y-0.5 hover:bg-sky-50"
        >
          {shareState === 'copied' ? <Copy className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
          {shareState === 'copied' ? '링크 복사됨' : '내 유형 공유'}
        </button>
      </div>

      <div className="relative mt-7 grid gap-3 border-t border-white/15 pt-5 md:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-[10px] font-bold tracking-[0.2em] text-sky-200">ANALYSIS BASIS</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {archetype.evidence.map((item) => (
              <span key={item} className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/85">{item}</span>
            ))}
          </div>
        </div>
        <div className="md:border-l md:border-white/15 md:pl-5">
          <p className="text-[10px] font-bold tracking-[0.2em] text-sky-200">NEXT RUN</p>
          <p className="mt-2 text-sm leading-6 text-white/85">{archetype.nextAction}</p>
        </div>
      </div>
    </section>
  );
}
