'use client';

import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
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
    description: '해당하는 부상을 모두 선택해주세요 (없으면 건너뛰기)',
    multiple: true,
    options: [
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
      { value: 'low', label: '15만원 이하', description: '가성비 중시' },
      { value: 'mid', label: '15-25만원', description: '중간 가격대' },
      { value: 'high', label: '25만원 이상', description: '프리미엄, 슈퍼슈즈' },
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
      const updated = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];
      setAnswers({ ...answers, [currentQuestion.id]: updated });
    } else {
      setAnswers({ ...answers, [currentQuestion.id]: value });
    }
  };

  const canProceed = isMultiple
    ? true // 부상은 없어도 됨
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
        injuries: (answers.injuries as string[]) || [],
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
      {/* 진행바 */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-slate-600">
            {currentStep + 1} / {questions.length}
          </span>
          <span className="text-sm text-slate-500">
            {Math.round(progress)}% 완료
          </span>
        </div>
        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#4facfe] to-[#00f2fe] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* 질문 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          {currentQuestion.title}
        </h2>
        <p className="text-slate-600">{currentQuestion.description}</p>
      </div>

      {/* 옵션 */}
      <div className="space-y-3 mb-8">
        {currentQuestion.options.map(option => {
          const isSelected = isMultiple
            ? (currentAnswer as string[])?.includes(option.value)
            : currentAnswer === option.value;

          return (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={cn(
                "w-full text-left rounded-2xl border-2 p-4 sm:p-5 transition-all min-h-[72px]",
                isSelected
                  ? "border-[#4facfe] bg-[#4facfe]/10"
                  : "border-slate-200 bg-white hover:border-[#4facfe]/50 hover:bg-[#4facfe]/5"
              )}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="font-bold text-slate-900 text-base sm:text-lg">{option.label}</p>
                  {option.description && (
                    <p className="text-sm text-slate-500 mt-1">{option.description}</p>
                  )}
                </div>
                <div
                  className={cn(
                    "w-7 h-7 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0",
                    isSelected
                      ? "border-[#4facfe] bg-[#4facfe]"
                      : "border-slate-300"
                  )}
                >
                  {isSelected && (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* 네비게이션 */}
      <div className="flex items-center justify-between gap-4">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={currentStep === 0}
          className="rounded-full min-h-[48px] px-6"
        >
          <ChevronLeft className="h-5 w-5 mr-2" />
          이전
        </Button>

        <Button
          onClick={handleNext}
          disabled={!canProceed}
          className="rounded-full bg-[#4facfe] hover:bg-[#4facfe]/90 min-h-[48px] px-6"
        >
          {currentStep === questions.length - 1 ? '결과 보기' : '다음'}
          <ChevronRight className="h-5 w-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}
