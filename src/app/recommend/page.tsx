'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowLeft, RotateCcw, Sparkles, Loader2 } from 'lucide-react';
import { getShoes } from '@/lib/data/shoes';
import { recommendShoes, type UserProfile, type RecommendedShoe } from '@/lib/recommendation';
import { Questionnaire } from '@/components/recommend/questionnaire';
import { ResultCard } from '@/components/recommend/result-card';
import { InjuryAnalysis } from '@/components/recommend/injury-analysis';
import { Button } from '@/components/ui/button';

export default function RecommendPage() {
  const allShoes = useMemo(() => getShoes(), []);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [recommendations, setRecommendations] = useState<RecommendedShoe[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleComplete = async (userProfile: UserProfile) => {
    setIsLoading(true);
    // 로딩 UX를 위한 최소 지연
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
    <div className="space-y-8 pb-16">
      {/* 헤더 */}
      <div className="flex items-center justify-between">
        <Link href="/">
          <Button variant="ghost" className="rounded-full min-h-[44px] px-4">
            <ArrowLeft className="h-5 w-5 mr-2" />
            돌아가기
          </Button>
        </Link>
        {profile && (
          <Button variant="outline" onClick={handleReset} className="rounded-full min-h-[44px] px-4">
            <RotateCcw className="h-5 w-5 mr-2" />
            다시 하기
          </Button>
        )}
      </div>

      {/* 타이틀 */}
      <header className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#4facfe]/10 px-4 py-2 text-[#4facfe] mb-4">
          <Sparkles className="h-5 w-5" />
          <span className="font-semibold">AI 맞춤 추천</span>
        </div>
        <h1 className="text-4xl font-black tracking-tight text-slate-900">
          나에게 맞는 러닝화 찾기
        </h1>
        <p className="mt-2 text-slate-600">
          {profile
            ? `${recommendations.length}개의 추천 신발을 찾았습니다`
            : '간단한 질문에 답하고 최적의 러닝화를 추천받으세요'}
        </p>
      </header>

      {/* 로딩 상태 */}
      {isLoading && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-full blur-xl opacity-30 animate-pulse" />
            <Loader2 className="h-16 w-16 text-[#4facfe] animate-spin relative" />
          </div>
          <p className="mt-6 text-xl font-semibold text-slate-700">
            맞춤 신발을 찾고 있어요
          </p>
          <p className="mt-2 text-slate-500">
            73개 신발을 분석하고 있습니다...
          </p>
        </div>
      )}

      {/* 설문 또는 결과 */}
      {!isLoading && !profile ? (
        <Questionnaire onComplete={handleComplete} />
      ) : !isLoading && profile ? (
        <div className="space-y-8">
          {/* 사용자 프로필 요약 */}
          <div className="rounded-3xl border border-white/20 bg-white/20 backdrop-blur-2xl p-6">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
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
          </div>

          {/* 부상별 분석 (부상이 있는 경우에만 표시) */}
          {profile.injuries.length > 0 && (
            <InjuryAnalysis injuries={profile.injuries} allShoes={allShoes} />
          )}

          {/* 추천 결과 */}
          {recommendations.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {recommendations.map((shoe, idx) => (
                <ResultCard key={shoe.id || shoe.slug} shoe={shoe} rank={idx + 1} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-slate-500">
                조건에 맞는 신발을 찾지 못했습니다
              </p>
              <p className="text-slate-400 mt-2">
                필터 조건을 변경해보세요
              </p>
              <Button onClick={handleReset} className="mt-6 rounded-full bg-[#4facfe]">
                다시 시도하기
              </Button>
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
          ? 'bg-amber-100 text-amber-700'
          : 'bg-slate-100 text-slate-700'
      }`}
    >
      <span className="text-slate-500">{label}:</span>
      {value}
    </span>
  );
}
