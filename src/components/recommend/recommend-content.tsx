'use client';

import { useEffect, useState } from 'react';
import { RotateCcw, Sparkles, ArrowUpRight, Activity } from 'lucide-react';
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
    setRecommendations([]);
    setFailedProfile(null);
    try {
      sessionStorage.removeItem(RECOMMEND_PROFILE_KEY);
    } catch {
      /* noop */
    }
  };

  const profileLabels = {
    experience: { beginner: '입문', intermediate: '중급', advanced: '상급' },
    weeklyDistance: { low: '20km 미만', medium: '20-40km', high: '40km 이상' },
    purpose: { training: '훈련', racing: '레이스', recovery: '회복', trail: '트레일', all: '다목적' },
    targetPace: { slow: '6분대 이상', medium: '5-6분대', fast: '5분 미만' },
    season: { summer: '여름', winter: '겨울', all: '사계절' },
    footArch: { flat: '평발', normal: '정상', high: '높은 아치' },
    footWidth: { narrow: '좁음', standard: '표준', wide: '넓음' },
    // 설문 라벨과 같은 말을 써야 한다 — 상한 기준(questionnaire.tsx 의 budget 주석 참조)
    budget: { low: '20만원까지', mid: '30만원까지', high: '상한 없음' },
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

  useEffect(() => {
    if (!profile || !recommendations.length || window.location.hash !== '#recommend-results') return;
    const frame = requestAnimationFrame(() => document.getElementById('recommend-results')?.scrollIntoView({ block: 'start' }));
    return () => cancelAnimationFrame(frame);
  }, [profile, recommendations.length]);

  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-[4px] border border-[var(--accent-line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.98)_0%,rgba(247,244,237,0.94)_44%,rgba(239,234,224,0.92)_100%)] px-5 py-5 md:px-8 md:py-8">
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
                <span className="text-sm font-semibold">맞춤 러닝화 추천</span>
              </div>
              {/*
                모바일 28px — 36px 이면 316px 컨테이너에서 두 줄로 접히는데,
                하필 '러/닝화' 처럼 단어 중간이 끊긴다(실측: 이 문구는 29.1px 까지 한 줄).
                데스크톱(md:48px)은 폭이 남아 그대로 둔다.
                break-keep 은 한글을 띄어쓰기에서만 끊는다 — 없으면 음절 단위로 잘린다.
              */}
              <h1 className="text-balance break-keep text-[28px] font-black leading-[1.12] tracking-tight text-slate-950 md:text-5xl md:leading-[0.92]">
                나한테 맞는 러닝화만 남기기.
              </h1>
              <p className="max-w-2xl break-keep text-sm leading-7 text-slate-600 md:text-base">
                경험, 주간 거리, 발형, 부상 이력, 예산까지 묻고 결과를 바로 조합합니다. 검색보다 빠르게 시작점을 찾는 용도에 맞게 정리했습니다.
              </p>
            </div>

            {profile && (
              <button
                onClick={handleReset}
                disabled={isLoading}
                className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/82 px-4 py-2 text-sm font-medium text-secondary transition hover:bg-white hover:text-primary"
              >
                <RotateCcw className="h-4 w-4" />
                다시 하기
              </button>
            )}
          </div>

          <div className="hidden gap-3 sm:grid sm:grid-cols-3">
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

        {failedProfile && (
          <div role="alert" className="rounded-[4px] border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            <p>신발 데이터를 불러오지 못했어요. 연결 상태를 확인한 뒤 다시 시도해주세요.</p>
            <button type="button" disabled={isLoading} onClick={() => handleComplete(failedProfile)} className="mt-3 rounded-full border border-amber-900/20 px-4 py-2 font-semibold">다시 불러오기</button>
          </div>
        )}
        {isLoading && <p role="status" className="text-sm text-secondary">추천 신발을 불러오는 중이에요.</p>}

        {/* 설문 또는 결과 */}
        {!profile ? (
          <Questionnaire onComplete={handleComplete} isLoading={isLoading} />
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
              <InjuryAnalysis injuries={profile.injuries} allShoes={recommendations} />
            )}


            {/* 추천 결과 */}
            {recommendations.length > 0 ? (
              <div id="recommend-results" className="scroll-mt-20 space-y-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-700">Recommendation Board</p>
                  <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">추천 신발</h2>
                  <p className="mt-2 text-sm text-secondary">매칭 점수는 선택 조건 안의 후보를 비교한 상대 점수예요. 예산 내 후보가 적으면 가능한 신발만 보여드려요.</p>
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
          ? 'bg-[var(--warning-tint-10)] text-warning'
          : 'bg-sky-50 text-primary'
      }`}
    >
      <span className="text-tertiary">{label}:</span>
      {value}
    </span>
  );
}
