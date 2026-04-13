'use client';

import { useState } from 'react';
import { RotateCcw, Sparkles, ArrowUpRight, Activity } from 'lucide-react';
import type { CardShoe } from '@/lib/data/shoes';
import { recommendShoes, type UserProfile, type RecommendedShoe } from '@/lib/recommendation';
import { Questionnaire } from '@/components/recommend/questionnaire';
import { ResultCard } from '@/components/recommend/result-card';
import { InjuryAnalysis } from '@/components/recommend/injury-analysis';

interface RecommendContentProps {
  allShoes: CardShoe[];
}

export function RecommendContent({ allShoes }: RecommendContentProps) {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [recommendations, setRecommendations] = useState<RecommendedShoe[]>([]);
  const handleComplete = (userProfile: UserProfile) => {
    const results = recommendShoes(allShoes, userProfile);
    setRecommendations(results);
    setProfile(userProfile);
  };

  const handleReset = () => {
    setProfile(null);
    setRecommendations([]);
  };

  const profileLabels = {
    experience: { beginner: '입문', intermediate: '중급', advanced: '상급' },
    weeklyDistance: { low: '20km 미만', medium: '20-40km', high: '40km 이상' },
    purpose: { training: '훈련', racing: '레이스', recovery: '회복', all: '다목적' },
    targetPace: { slow: '6분대 이상', medium: '5-6분대', fast: '5분 미만' },
    season: { summer: '여름', winter: '겨울', all: '사계절' },
    footArch: { flat: '평발', normal: '정상', high: '높은 아치' },
    footWidth: { narrow: '좁음', standard: '표준', wide: '넓음' },
    budget: { low: '20만원 이하', mid: '15-30만원', high: '20만원 이상' },
  };
  const summaryStats = [
    { label: '분석 대상', value: `${allShoes.length}+` },
    { label: '질문 수', value: '9' },
    { label: '결과', value: profile ? `${recommendations.length}개` : '개인화' },
  ];

  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-[36px] border border-[var(--accent-line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.98)_0%,rgba(239,248,255,0.94)_44%,rgba(231,244,255,0.92)_100%)] px-5 py-6 shadow-[0_28px_70px_-52px_rgba(8,18,38,0.28)] md:px-8 md:py-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-8 top-6 h-32 w-32 rounded-full bg-[rgba(14,165,233,0.16)] blur-3xl" />
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[rgba(56,189,248,0.12)] blur-3xl" />
        </div>

        <div className="relative grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div className="space-y-5">
            <div className="flex flex-wrap gap-2">
              {summaryStats.map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-stone-900/10 bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-600 backdrop-blur"
                >
                  <span className="text-slate-950">{item.value}</span>
                  {item.label}
                </span>
              ))}
            </div>

            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sky-700">
                <Sparkles className="h-5 w-5" />
                <span className="text-sm font-semibold">AI 맞춤 추천</span>
              </div>
              <h1 className="text-balance text-4xl font-black leading-[0.92] tracking-tight text-slate-950 md:text-5xl">
                나한테 맞는 러닝화만 남기기.
              </h1>
              <p className="max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                경험, 주간 거리, 발형, 부상 이력, 예산까지 묻고 결과를 바로 조합합니다. 검색보다 빠르게 시작점을 찾는 용도에 맞게 정리했습니다.
              </p>
            </div>

            {profile && (
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/82 px-4 py-2 text-sm font-medium text-secondary transition hover:bg-white hover:text-primary"
              >
                <RotateCcw className="h-4 w-4" />
                다시 하기
              </button>
            )}
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-[24px] border border-sky-100 bg-white/86 p-4 shadow-[0_18px_36px_-32px_rgba(8,18,38,0.16)]">
              <Activity className="h-5 w-5 text-accent" />
              <p className="mt-4 text-sm font-semibold text-slate-950">러닝 맥락</p>
              <p className="mt-1 text-xs leading-6 text-slate-600">훈련용인지, 레이스용인지, 회복용인지부터 먼저 갈립니다.</p>
            </div>
            <div className="rounded-[24px] border border-sky-100 bg-white/86 p-4 shadow-[0_18px_36px_-32px_rgba(8,18,38,0.16)]">
              <Sparkles className="h-5 w-5 text-sky-700" />
              <p className="mt-4 text-sm font-semibold text-slate-950">발형 반영</p>
              <p className="mt-1 text-xs leading-6 text-slate-600">발볼, 평발, 계절감, 부상 이력까지 함께 반영합니다.</p>
            </div>
            <div className="rounded-[24px] border border-sky-950/20 bg-[linear-gradient(160deg,rgba(8,18,38,0.98)_0%,rgba(12,74,110,0.96)_100%)] p-4 text-white shadow-[0_22px_40px_-30px_rgba(8,18,38,0.62)]">
              <ArrowUpRight className="h-5 w-5 text-white" />
              <p className="mt-4 text-sm font-semibold">결과 중심</p>
              <p className="mt-1 text-xs leading-6 text-white/65">추천 이유와 평균 대비 차이까지 한 카드에서 읽을 수 있습니다.</p>
            </div>
          </div>
        </div>
      </section>

        {/* 설문 또는 결과 */}
        {!profile ? (
          <Questionnaire onComplete={handleComplete} />
        ) : (
          <div className="space-y-6">
            <section className="rounded-[30px] border border-[var(--accent-line)] bg-white/84 p-6 shadow-[0_22px_45px_-38px_rgba(8,18,38,0.16)] backdrop-blur">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-700">
                Profile Snapshot
              </p>
              <div className="flex flex-wrap gap-2">
                <ProfileBadge label="경험" value={profileLabels.experience[profile.experience]} />
                <ProfileBadge label="주간 거리" value={profileLabels.weeklyDistance[profile.weeklyDistance]} />
                <ProfileBadge label="목적" value={profileLabels.purpose[profile.purpose]} />
                {profile.targetPace && (
                  <ProfileBadge label="페이스" value={profileLabels.targetPace[profile.targetPace]} />
                )}
                {profile.season && (
                  <ProfileBadge label="계절" value={profileLabels.season[profile.season]} />
                )}
                <ProfileBadge label="발 아치" value={profileLabels.footArch[profile.footArch]} />
                <ProfileBadge label="발볼" value={profileLabels.footWidth[profile.footWidth]} />
                <ProfileBadge label="예산" value={profileLabels.budget[profile.budget]} />
                {profile.injuries.length > 0 && (
                  <ProfileBadge label="부상 이력" value={profile.injuries.length + '개'} warning />
                )}
              </div>
            </section>

            {/* 부상별 분석 */}
            {profile.injuries.length > 0 && (
              <InjuryAnalysis injuries={profile.injuries} allShoes={allShoes} />
            )}


            {/* 추천 결과 */}
            {recommendations.length > 0 ? (
              <div className="space-y-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-700">Recommendation Board</p>
                  <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">추천 신발</h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {recommendations.map((shoe, idx) => (
                    <ResultCard key={shoe.id || shoe.slug} shoe={shoe} rank={idx + 1} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="rounded-[30px] border border-[var(--accent-line)] bg-white/84 p-12 text-center shadow-[0_22px_45px_-38px_rgba(8,18,38,0.16)] backdrop-blur">
                <p className="text-xl text-secondary">
                  조건에 맞는 신발을 찾지 못했습니다
                </p>
                <p className="text-tertiary mt-2">
                  필터 조건을 변경해보세요
                </p>
                <button
                  onClick={handleReset}
                  className="mt-6 rounded-full bg-[var(--navy)] px-6 py-3 font-medium text-white transition hover:bg-[var(--navy-soft)]"
                >
                  다시 시도하기
                </button>
              </div>
            )}
          </div>
        )}
    </div>
  );
}

function ProfileBadge({
  label,
  value,
  warning,
}: {
  label: string;
  value: string;
  warning?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
        warning
          ? 'bg-warning/10 text-warning'
          : 'bg-sky-50 text-primary'
      }`}
    >
      <span className="text-tertiary">{label}:</span>
      {value}
    </span>
  );
}
