'use client';

import { useState, useMemo } from 'react';
import { RotateCcw, Sparkles, Loader2 } from 'lucide-react';
import { getShoes } from '@/lib/data/shoes';
import { recommendShoes, type UserProfile, type RecommendedShoe } from '@/lib/recommendation';
import { Questionnaire } from '@/components/recommend/questionnaire';
import { ResultCard } from '@/components/recommend/result-card';
import { InjuryAnalysis } from '@/components/recommend/injury-analysis';
import { RecommendAd } from '@/components/ads/ad-unit';

export default function RecommendPage() {
  const allShoes = useMemo(() => getShoes(), []);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [recommendations, setRecommendations] = useState<RecommendedShoe[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleComplete = async (userProfile: UserProfile) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    const results = recommendShoes(allShoes, userProfile);
    setRecommendations(results);
    setProfile(userProfile);
    setIsLoading(false);
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
    budget: { low: '15만원 이하', mid: '15-25만원', high: '25만원 이상' },
  };

  return (
    <div className="space-y-6">
      {/* 타이틀 */}
      <div className="text-center py-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-accent mb-4">
          <Sparkles className="h-5 w-5" />
          <span className="font-semibold text-sm">AI 맞춤 추천</span>
        </div>
        <h1 className="text-3xl font-bold text-primary">
          나에게 맞는 러닝화 찾기
        </h1>
        <p className="mt-2 text-secondary">
          {profile
            ? `${recommendations.length}개의 추천 신발을 찾았습니다`
            : '간단한 질문에 답하고 최적의 러닝화를 추천받으세요'}
        </p>
        {profile && (
          <button
            onClick={handleReset}
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-secondary hover:text-primary transition rounded-full border border-border hover:bg-surface"
          >
            <RotateCcw className="h-4 w-4" />
            다시 하기
          </button>
        )}
      </div>

        {/* 로딩 상태 */}
        {isLoading && (
          <div className="section-card p-12 flex flex-col items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-accent rounded-full blur-xl opacity-30 animate-pulse" />
              <Loader2 className="h-16 w-16 text-accent animate-spin relative" />
            </div>
            <p className="mt-6 text-xl font-semibold text-primary">
              맞춤 신발을 찾고 있어요
            </p>
            <p className="mt-2 text-secondary">
              {allShoes.length}개 신발을 분석하고 있습니다...
            </p>
          </div>
        )}

        {/* 설문 또는 결과 */}
        {!isLoading && !profile ? (
          <Questionnaire onComplete={handleComplete} />
        ) : !isLoading && profile ? (
          <div className="space-y-6">
            {/* 사용자 프로필 요약 */}
            <section className="section-card p-6">
              <h3 className="text-sm font-semibold text-tertiary uppercase tracking-wider mb-4">
                내 프로필
              </h3>
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

            {/* 광고 - 추천 결과 전 (4개 이상일 때) */}
            {recommendations.length >= 4 && <RecommendAd />}

            {/* 추천 결과 */}
            {recommendations.length > 0 ? (
              <div className="space-y-4">
                <h2 className="font-bold text-primary text-lg">추천 신발</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {recommendations.map((shoe, idx) => (
                    <ResultCard key={shoe.id || shoe.slug} shoe={shoe} rank={idx + 1} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="section-card p-12 text-center">
                <p className="text-xl text-secondary">
                  조건에 맞는 신발을 찾지 못했습니다
                </p>
                <p className="text-tertiary mt-2">
                  필터 조건을 변경해보세요
                </p>
                <button
                  onClick={handleReset}
                  className="mt-6 px-6 py-3 bg-accent text-white rounded-full font-medium hover:opacity-90 transition"
                >
                  다시 시도하기
                </button>
              </div>
            )}
          </div>
        ) : null}
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
          : 'bg-surface text-primary'
      }`}
    >
      <span className="text-tertiary">{label}:</span>
      {value}
    </span>
  );
}
