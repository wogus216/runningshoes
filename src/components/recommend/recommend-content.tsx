'use client';

import { useEffect, useState } from 'react';
import { RotateCcw, Sparkles, ArrowUpRight, Activity } from 'lucide-react';
import type { CardShoe } from '@/lib/data/shoes';
import { loadCardShoes } from '@/lib/shoes-card-client';
import { recommendShoes, type UserProfile, type RecommendedShoe } from '@/lib/recommendation';
import { Questionnaire } from '@/components/recommend/questionnaire';
import { ResultCard } from '@/components/recommend/result-card';
import { InjuryAnalysis } from '@/components/recommend/injury-analysis';
import { recordRecommend } from '@/lib/recent';

interface RecommendContentProps {
  totalCount: number;
}

// 완료한 설문 프로필을 탭 세션 동안 보관 — 뒤로가기로 돌아왔을 때 결과를 복원하는 데 쓴다.
const RECOMMEND_PROFILE_KEY = 'recommend-profile';

export function RecommendContent({ totalCount }: RecommendContentProps) {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [recommendations, setRecommendations] = useState<RecommendedShoe[]>([]);
  // 결과 화면(InjuryAnalysis)용 — 퀴즈 완료 시점에 지연 로드로 채워진다
  const [loadedShoes, setLoadedShoes] = useState<CardShoe[]>([]);

  // 마운트 시: 신발 데이터를 미리 받아두고, 직전 세션에 완료한 설문이 있으면 결과를 복원한다.
  // (결과 화면에서 신발 상세로 갔다가 뒤로가기 했을 때 설문을 다시 하지 않도록)
  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const allShoes = await loadCardShoes().catch(() => [] as CardShoe[]);
      if (cancelled) return;
      let saved: string | null = null;
      try {
        saved = sessionStorage.getItem(RECOMMEND_PROFILE_KEY);
      } catch {
        /* sessionStorage 접근 불가(프라이빗 모드 등) 시 복원 생략 */
      }
      if (!saved) return;
      try {
        const savedProfile = JSON.parse(saved) as UserProfile;
        setLoadedShoes(allShoes);
        setRecommendations(recommendShoes(allShoes, savedProfile));
        setProfile(savedProfile);
      } catch {
        /* 손상된 값이면 무시 */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const handleComplete = async (userProfile: UserProfile) => {
    const allShoes = await loadCardShoes();
    const results = recommendShoes(allShoes, userProfile);
    setLoadedShoes(allShoes);
    setRecommendations(results);
    setProfile(userProfile);
    try {
      sessionStorage.setItem(RECOMMEND_PROFILE_KEY, JSON.stringify(userProfile));
    } catch {
      /* 저장 실패 시에도 이번 세션 결과 표시엔 문제없다 */
    }
  };

  const handleReset = () => {
    setProfile(null);
    setRecommendations([]);
    try {
      sessionStorage.removeItem(RECOMMEND_PROFILE_KEY);
    } catch {
      /* noop */
    }
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
    { label: '분석 대상', value: `${totalCount}+` },
    { label: '질문 수', value: '9' },
    { label: '결과', value: profile ? `${recommendations.length}개` : '개인화' },
  ];

  // 재방문 "이어보기" 기록 — 추천 결과가 산출된 시점의 조건 요약(발볼·목적·예산)
  useEffect(() => {
    if (!profile) return;
    const footWidthLabel = profileLabels.footWidth[profile.footWidth];
    const purposeLabel = profileLabels.purpose[profile.purpose];
    const budgetLabel = profileLabels.budget[profile.budget];
    const summary = [footWidthLabel, purposeLabel, budgetLabel].filter(Boolean).join(' · ');
    recordRecommend(summary);
  }, [profile]);

  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-[4px] border border-[var(--accent-line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.98)_0%,rgba(239,248,255,0.94)_44%,rgba(231,244,255,0.92)_100%)] px-5 py-6 md:px-8 md:py-8">
        <div className="pointer-events-none absolute inset-0">
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
            <div className="rounded-[4px] border border-sky-100 bg-white/86 p-4">
              <Activity className="h-5 w-5 text-accent" />
              <p className="mt-4 text-sm font-semibold text-slate-950">러닝 맥락</p>
              <p className="mt-1 text-xs leading-6 text-slate-600">훈련용인지, 레이스용인지, 회복용인지부터 먼저 갈립니다.</p>
            </div>
            <div className="rounded-[4px] border border-sky-100 bg-white/86 p-4">
              <Sparkles className="h-5 w-5 text-sky-700" />
              <p className="mt-4 text-sm font-semibold text-slate-950">발형 반영</p>
              <p className="mt-1 text-xs leading-6 text-slate-600">발볼, 평발, 계절감, 부상 이력까지 함께 반영합니다.</p>
            </div>
            <div className="rounded-[4px] border border-sky-950/20 bg-[linear-gradient(160deg,rgba(8,18,38,0.98)_0%,rgba(12,74,110,0.96)_100%)] p-4 text-white">
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
            <section className="rounded-[4px] border border-[var(--accent-line)] bg-white/84 p-6 backdrop-blur">
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
              <InjuryAnalysis injuries={profile.injuries} allShoes={loadedShoes} />
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
              <div className="rounded-[4px] border border-[var(--accent-line)] bg-white/84 p-12 text-center backdrop-blur">
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
