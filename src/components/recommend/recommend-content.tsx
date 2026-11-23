'use client';

import { useEffect, useState } from 'react';
import { loadCardShoes } from '@/lib/shoes-card-client';
import { recommendShoes, isUserProfile, type UserProfile, type RecommendedShoe } from '@/lib/recommendation';
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
  const [editStep, setEditStep] = useState<number | null>(null);
  const [recommendations, setRecommendations] = useState<RecommendedShoe[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [failedProfile, setFailedProfile] = useState<UserProfile | null>(null);

  // 데이터를 미리 받되 실패를 ‘조건에 맞는 신발 없음’으로 표시하지 않는다.
  useEffect(() => {
    let cancelled = false;
    let savedProfile: UserProfile | null = null;
    try {
      const saved = sessionStorage.getItem(RECOMMEND_PROFILE_KEY);
      if (saved) {
        const parsed: unknown = JSON.parse(saved);
        if (isUserProfile(parsed)) savedProfile = parsed;
        else sessionStorage.removeItem(RECOMMEND_PROFILE_KEY);
      }
    } catch {
      /* 저장소 접근 불가 또는 손상된 값이면 새 설문으로 시작 */
    }
    if (savedProfile) setIsLoading(true);
    void (async () => {
      try {
        const allShoes = await loadCardShoes();
        if (cancelled || !savedProfile) return;
        setRecommendations(recommendShoes(allShoes, savedProfile));
        setProfile(savedProfile);
      } catch {
        if (!cancelled && savedProfile) setFailedProfile(savedProfile);
      } finally {
        if (!cancelled && savedProfile) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const handleComplete = async (userProfile: UserProfile) => {
    if (isLoading) return;
    setIsLoading(true);
    setFailedProfile(null);
    try {
      const allShoes = await loadCardShoes();
      setRecommendations(recommendShoes(allShoes, userProfile));
      setProfile(userProfile);
      setEditStep(null);
      try {
        sessionStorage.setItem(RECOMMEND_PROFILE_KEY, JSON.stringify(userProfile));
      } catch {
        /* 저장 실패 시에도 이번 결과 표시 */
      }
    } catch {
      setFailedProfile(userProfile);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setProfile(null);
    setEditStep(null);
    setRecommendations([]);
    setFailedProfile(null);
    try {
      sessionStorage.removeItem(RECOMMEND_PROFILE_KEY);
    } catch {
      /* noop */
    }
  };

  const profileLabels = {
    purpose: { training: '훈련', racing: '레이스', recovery: '가벼운 조깅', trail: '트레일', all: '다목적' },
    footWidth: { narrow: '전체 폭 옵션', standard: '전체 폭 옵션', wide: '한국 와이드 옵션 확인' },
    // 설문 라벨과 같은 말을 써야 한다 — 상한 기준(questionnaire.tsx 의 budget 주석 참조)
    budget: { low: '20만원까지', mid: '30만원까지', high: '상한 없음' },
  };
  // 재방문 "이어보기" 기록 — 추천 결과가 산출된 시점의 조건 요약(발볼·목적·예산)
  useEffect(() => {
    if (!profile) return;
    const footWidthLabel = profileLabels.footWidth[profile.footWidth];
    const purposeLabel = profileLabels.purpose[profile.purpose];
    const budgetLabel = profileLabels.budget[profile.budget];
    const summary = [footWidthLabel, purposeLabel, budgetLabel].filter(Boolean).join(' · ');
    recordRecommend(summary);
  }, [profile]);

  useEffect(() => {
    if (!profile || !recommendations.length || window.location.hash !== '#recommend-results') return;
    const frame = requestAnimationFrame(() => document.getElementById('recommend-results')?.scrollIntoView({ block: 'start' }));
    return () => cancelAnimationFrame(frame);
  }, [profile, recommendations.length]);

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between gap-2">
        <h1 className="text-2xl font-bold">맞춤 러닝화 추천</h1>
        {profile && <button type="button" className="min-h-11 text-sm underline" onClick={handleReset}>처음부터</button>}
      </header>

        {failedProfile && (
          <div role="alert" className="rounded-[4px] border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            <p>신발 데이터를 불러오지 못했어요. 연결 상태를 확인한 뒤 다시 시도해주세요.</p>
            <button type="button" disabled={isLoading} onClick={() => handleComplete(failedProfile)} className="mt-3 rounded-full border border-amber-900/20 px-4 py-2 font-semibold">다시 불러오기</button>
          </div>
        )}
        {isLoading && <p role="status" className="text-sm text-secondary">추천 신발을 불러오는 중이에요.</p>}

        {/* 설문 또는 결과 */}
        {!profile || editStep !== null ? (
          <Questionnaire initialProfile={profile} initialStep={editStep ?? 0} onCancel={profile ? () => setEditStep(null) : undefined} onComplete={handleComplete} isLoading={isLoading} />
        ) : (
          <div className="space-y-6">
            <section className="rounded-[4px] border border-[var(--accent-line)] bg-white/84 p-6 backdrop-blur">
              <div className="flex flex-wrap items-center gap-2">
                {([['목적', profileLabels.purpose[profile.purpose]], ['폭', profileLabels.footWidth[profile.footWidth]], ['예산', profileLabels.budget[profile.budget]]] as const).map(([label, value], index) =>
                  <button type="button" key={label} onClick={() => setEditStep(index)} className="min-h-11 rounded border border-border px-3 text-sm" aria-label={`${label} 변경: ${value}`}>{value} <span className="text-secondary">변경</span></button>
                )}
                {(profile.injuries?.length ?? 0) > 0 && (
                  <ProfileBadge label="부상 이력" value={(profile.injuries?.length ?? 0) + '개'} warning />
                )}
              </div>
            </section>

            {/* 부상별 분석 */}
            {(profile.injuries?.length ?? 0) > 0 && (
              <InjuryAnalysis injuries={profile.injuries ?? []} />
            )}


            {/* 추천 결과 */}
            {recommendations.length > 0 ? (
              <div id="recommend-results" className="scroll-mt-20 space-y-4">
                <div>

                  <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">추천 후보 {recommendations.length}개</h2>
                  <p className="mt-2 text-sm text-secondary">용도 일치 우선 · 같은 조건은 낮은 정가순. 전체 {totalCount}종에서 확인된 후보입니다.</p>
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
                  onClick={() => setEditStep(profile.budget === 'high' ? 1 : 2)}
                  className="mt-6 rounded-full bg-[var(--navy)] px-6 py-3 font-medium text-white transition hover:bg-[var(--navy-soft)]"
                >
                  조건 변경
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
          ? 'bg-[var(--warning-tint-10)] text-warning'
          : 'bg-sky-50 text-primary'
      }`}
    >
      <span className="text-tertiary">{label}:</span>
      {value}
    </span>
  );
}
