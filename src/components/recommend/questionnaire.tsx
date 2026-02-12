'use client';

import { useState } from 'react';
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { UserProfile } from '@/lib/recommendation';

type QuestionnaireProps = {
  onComplete: (profile: UserProfile) => void;
};

type Question = {
  id: keyof UserProfile | 'injuries';
  title: string;
  description: string;
  options: { value: string; label: string; description?: string }[];
  multiple?: boolean;
};

const questions: Question[] = [
  {
    id: 'experience',
    title: '러닝 경험이 어느 정도인가요?',
    description: '현재 러닝 수준을 선택해주세요',
    options: [
      { value: 'beginner', label: '입문', description: '러닝 시작한 지 6개월 미만' },
      { value: 'intermediate', label: '중급', description: '6개월 ~ 2년, 10km 이상 가능' },
      { value: 'advanced', label: '상급', description: '2년 이상, 하프/풀 마라톤 경험' },
    ],
  },
  {
    id: 'weeklyDistance',
    title: '일주일에 얼마나 뛰시나요?',
    description: '평균 주간 러닝 거리를 선택해주세요',
    options: [
      { value: 'low', label: '20km 미만', description: '주 2-3회, 5km 내외' },
      { value: 'medium', label: '20-40km', description: '주 3-4회, 꾸준한 러닝' },
      { value: 'high', label: '40km 이상', description: '주 5회 이상, 진지한 러너' },
    ],
  },
  {
    id: 'purpose',
    title: '주요 러닝 목적이 무엇인가요?',
    description: '가장 중요한 목적을 선택해주세요',
    options: [
      { value: 'training', label: '훈련', description: '체력 향상, 템포 러닝' },
      { value: 'racing', label: '레이스', description: '대회 참가, 기록 단축' },
      { value: 'recovery', label: '회복', description: '가벼운 조깅, 회복 러닝' },
      { value: 'all', label: '다목적', description: '훈련부터 대회까지 모두' },
    ],
  },
  {
    id: 'targetPace',
    title: '목표 페이스는 어떻게 되나요?',
    description: '주로 뛰는 페이스를 선택해주세요',
    options: [
      { value: 'slow', label: '6분대 이상', description: '편안한 조깅, 회복 러닝' },
      { value: 'medium', label: '5-6분대', description: '중간 템포, 꾸준한 훈련' },
      { value: 'fast', label: '5분 미만', description: '빠른 템포, 스피드 훈련' },
    ],
  },
  {
    id: 'season',
    title: '주로 뛰는 계절은 언제인가요?',
    description: '계절에 맞는 신발을 추천드려요',
    options: [
      { value: 'summer', label: '여름', description: '통기성, 가벼운 무게 중시' },
      { value: 'winter', label: '겨울', description: '보온성, 접지력 중시' },
      { value: 'all', label: '사계절', description: '계절 무관하게 사용' },
    ],
  },
  {
    id: 'footArch',
    title: '발 아치(족궁) 유형이 어떤가요?',
    description: '발바닥 아치 높이를 선택해주세요',
    options: [
      { value: 'flat', label: '평발', description: '아치가 낮거나 없음' },
      { value: 'normal', label: '정상', description: '보통 아치 높이' },
      { value: 'high', label: '높은 아치', description: '아치가 높은 편' },
    ],
  },
  {
    id: 'footWidth',
    title: '발볼 너비는 어떤가요?',
    description: '발볼 너비를 선택해주세요',
    options: [
      { value: 'narrow', label: '좁음', description: '발볼이 좁은 편' },
      { value: 'standard', label: '표준', description: '보통 너비' },
      { value: 'wide', label: '넓음', description: '발볼이 넓은 편' },
    ],
  },
  {
    id: 'injuries',
    title: '과거 또는 현재 부상이 있나요?',
    description: '해당하는 부상을 모두 선택해주세요',
    multiple: true,
    options: [
      { value: 'none', label: '없음', description: '부상 이력 없음' },
      { value: 'plantarFasciitis', label: '족저근막염', description: '발바닥 통증' },
      { value: 'achillesTendinopathy', label: '아킬레스 건염', description: '아킬레스 건 통증' },
      { value: 'kneeIssues', label: '무릎 통증', description: '러너스 니, 슬개골 문제' },
      { value: 'shinSplints', label: '정강이 통증', description: '신 스플린트' },
    ],
  },
  {
    id: 'budget',
    title: '예산은 어느 정도인가요?',
    description: '신발 구매 예산을 선택해주세요',
    options: [
      { value: 'low', label: '20만원 이하', description: '입문~가성비 중시' },
      { value: 'mid', label: '15-30만원', description: '중간 가격대' },
      { value: 'high', label: '20만원 이상', description: '프리미엄, 슈퍼슈즈 포함' },
    ],
  },
];

export function Questionnaire({ onComplete }: QuestionnaireProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({
    experience: '',
    weeklyDistance: '',
    purpose: '',
    targetPace: '',
    season: '',
    footArch: '',
    footWidth: '',
    injuries: [],
    budget: '',
    preferredBrands: [],
  });

  const currentQuestion = questions[currentStep];
  const isMultiple = currentQuestion.multiple;
  const currentAnswer = answers[currentQuestion.id];

  const handleSelect = (value: string) => {
    if (isMultiple) {
      const current = (currentAnswer as string[]) || [];
      let updated: string[];
      if (currentQuestion.id === 'injuries') {
        if (value === 'none') {
          // '없음' 선택 시 다른 부상 모두 해제
          updated = current.includes('none') ? [] : ['none'];
        } else {
          // 부상 선택 시 '없음' 해제
          const withoutNone = current.filter(v => v !== 'none');
          updated = withoutNone.includes(value)
            ? withoutNone.filter(v => v !== value)
            : [...withoutNone, value];
        }
      } else {
        updated = current.includes(value)
          ? current.filter(v => v !== value)
          : [...current, value];
      }
      setAnswers({ ...answers, [currentQuestion.id]: updated });
    } else {
      setAnswers({ ...answers, [currentQuestion.id]: value });
    }
  };

  const canProceed = isMultiple
    ? true
    : currentAnswer && currentAnswer.length > 0;

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const profile: UserProfile = {
        experience: answers.experience as UserProfile['experience'],
        weeklyDistance: answers.weeklyDistance as UserProfile['weeklyDistance'],
        purpose: answers.purpose as UserProfile['purpose'],
        targetPace: answers.targetPace as UserProfile['targetPace'],
        season: answers.season as UserProfile['season'],
        footArch: answers.footArch as UserProfile['footArch'],
        footWidth: answers.footWidth as UserProfile['footWidth'],
        injuries: ((answers.injuries as string[]) || []).filter(v => v !== 'none'),
        budget: answers.budget as UserProfile['budget'],
        preferredBrands: [],
      };
      onComplete(profile);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto">
      {/* 진행 상황 표시 */}
      <div className="section-card p-6 mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-primary">
            {currentStep + 1} / {questions.length}
          </span>
          <span className="text-sm text-tertiary">
            {Math.round(progress)}% 완료
          </span>
        </div>

        {/* 단계 표시 */}
        <div className="flex gap-1.5">
          {questions.map((_, idx) => (
            <div
              key={idx}
              className={cn(
                "h-1.5 flex-1 rounded-full transition-colors",
                idx < currentStep
                  ? "bg-accent"
                  : idx === currentStep
                  ? "bg-accent"
                  : "bg-border"
              )}
            />
          ))}
        </div>
      </div>

      {/* 질문 카드 */}
      <div className="section-card p-6 mb-6">
        <h2 className="text-xl font-bold text-primary mb-2">
          {currentQuestion.title}
        </h2>
        <p className="text-secondary text-sm">{currentQuestion.description}</p>
      </div>

      {/* 옵션 */}
      <div className="space-y-3 mb-6">
        {currentQuestion.options.map(option => {
          const isSelected = isMultiple
            ? (currentAnswer as string[])?.includes(option.value)
            : currentAnswer === option.value;

          return (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={cn(
                "w-full text-left rounded-xl border p-4 transition-all",
                isSelected
                  ? "border-accent bg-accent/5"
                  : "border-border bg-white hover:border-accent/50"
              )}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="font-semibold text-primary">{option.label}</p>
                  {option.description && (
                    <p className="text-sm text-secondary mt-0.5">{option.description}</p>
                  )}
                </div>
                <div
                  className={cn(
                    "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0",
                    isSelected
                      ? "border-accent bg-accent"
                      : "border-border"
                  )}
                >
                  {isSelected && (
                    <Check className="w-4 h-4 text-white" />
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* 이전 선택 요약 */}
      {currentStep > 0 && (
        <div className="section-card p-4 mb-6">
          <p className="text-xs font-semibold text-tertiary uppercase tracking-wider mb-2">이전 선택</p>
          <div className="flex flex-wrap gap-2">
            {questions.slice(0, currentStep).map((q, idx) => {
              const answer = answers[q.id];
              if (!answer || (Array.isArray(answer) && answer.length === 0)) return null;

              const label = Array.isArray(answer)
                ? answer.map(a => q.options.find(o => o.value === a)?.label).join(', ')
                : q.options.find(o => o.value === answer)?.label;

              return (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-surface rounded-full text-xs text-primary"
                >
                  <Check className="w-3 h-3 text-positive" />
                  {label}
                </span>
              );
            })}
          </div>
        </div>
      )}

      {/* 네비게이션 */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className={cn(
            "flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition",
            currentStep === 0
              ? "text-tertiary cursor-not-allowed"
              : "text-primary border border-border hover:bg-surface"
          )}
        >
          <ChevronLeft className="h-4 w-4" />
          이전
        </button>

        <button
          onClick={handleNext}
          disabled={!canProceed}
          className={cn(
            "flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition",
            canProceed
              ? "bg-accent text-white hover:opacity-90"
              : "bg-border text-tertiary cursor-not-allowed"
          )}
        >
          {currentStep === questions.length - 1 ? '결과 보기' : '다음'}
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
