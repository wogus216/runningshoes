'use client';

import { useState } from 'react';
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { UserProfile } from '@/lib/recommendation';

type QuestionnaireProps = {
  onComplete: (profile: UserProfile) => void;
  isLoading?: boolean;
  initialProfile?: UserProfile | null;
  initialStep?: number;
  onCancel?: () => void;
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
    id: 'purpose',
    title: '주요 러닝 목적이 무엇인가요?',
    description: '가장 중요한 목적을 선택해주세요',
    options: [
      { value: 'training', label: '훈련', description: '체력 향상, 템포 러닝' },
      { value: 'racing', label: '레이스', description: '대회 참가, 기록 단축' },
      { value: 'recovery', label: '가벼운 조깅', description: '편하게 달릴 후보 비교' },
      // 이 항목이 없어서 트레일화 15종이 어떤 조합에서도 추천되지 않았다 (2026-08-31)
      { value: 'trail', label: '트레일', description: '산길, 임도 등 비포장 위주' },
      { value: 'all', label: '다목적', description: '훈련부터 대회까지 모두' },
    ],
  },

  {
    id: 'footWidth',
    title: '와이드 옵션이 필요한가요?',
    description: '와이드 선택 시 한국 판매 폭 옵션을 확인한 모델을 모읍니다. 실제 착화는 별도로 확인하세요.',
    options: [
      { value: 'standard', label: '전체 폭 옵션 비교', description: '일반 모델부터 비교할게요' },
      { value: 'wide', label: '와이드 확인 제품', description: '한국 판매 폭 옵션을 확인한 모델만' },
    ],
  },
  {
    id: 'budget',
    title: '예산은 어느 정도인가요?',
    // 예전 라벨(20만원 이하 / 15-30만원 / 20만원 이상)은 세 구간이 서로 겹쳐서
    // 18만원짜리도 25만원짜리도 어느 걸 골라야 할지 알 수 없었다. 상한으로 통일한다
    description: '쓸 수 있는 최대 금액을 골라주세요',
    options: [
      { value: 'low', label: '20만원까지', description: '확인 가격 20만원 이하' },
      { value: 'mid', label: '30만원까지', description: '확인 가격 30만원 이하' },
      { value: 'high', label: '상한 없음', description: '가격이 확인된 전체 후보' },
    ],
  },
];

export const RECOMMEND_QUESTION_COUNT = questions.length;

export function Questionnaire({ onComplete, isLoading = false, initialProfile, initialStep = 0, onCancel }: QuestionnaireProps) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({
    purpose: initialProfile?.purpose ?? '',
    footWidth: initialProfile?.footWidth === 'narrow' ? 'standard' : initialProfile?.footWidth ?? '',
    budget: initialProfile?.budget ?? '',
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
    if (!initialProfile && currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const profile: UserProfile = {
        ...initialProfile,
        purpose: answers.purpose as UserProfile['purpose'],
        footWidth: answers.footWidth as UserProfile['footWidth'],
        budget: answers.budget as UserProfile['budget'],
        preferredBrands: initialProfile?.preferredBrands ?? [],
      };
      onComplete(profile);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-4">
        <p className="mb-1 text-sm text-secondary">{initialProfile ? '선택 조건 변경' : `질문 ${currentStep + 1}/${questions.length}`}</p>
        <h2 className="mb-2 text-2xl font-black tracking-tight text-primary">
          {currentQuestion.title}
        </h2>
        <p className="text-secondary text-sm leading-7">{currentStep === 1 ? currentQuestion.description : ''}</p>
      </div>

      <div className="space-y-2 mb-4">
        {currentQuestion.options.map(option => {
          const isSelected = isMultiple
            ? (currentAnswer as string[])?.includes(option.value)
            : currentAnswer === option.value;

          return (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              disabled={isLoading}
              aria-pressed={isSelected}
              className={cn(
                "w-full rounded-[4px] border px-4 py-2.5 text-left transition-all",
                isSelected
                  ? "border-sky-300 bg-sky-50/70"
                  : "border-stone-900/10 bg-white hover:-translate-y-0.5 hover:border-sky-200"
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
                      ? "border-sky-500 bg-sky-500"
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
      {!initialProfile && currentStep > 0 && (
        <div className="mb-6 rounded-[4px] border border-stone-900/10 bg-white/70 p-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-tertiary">이전 선택</p>
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
                  <Check className="w-3 h-3 text-sky-700" />
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
          onClick={onCancel ?? handleBack}
          disabled={(!onCancel && currentStep === 0) || isLoading}
          className={cn(
            "flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition",
            !onCancel && currentStep === 0
              ? "text-tertiary cursor-not-allowed"
              : "text-primary border border-stone-900/10 bg-white/75 hover:bg-white"
          )}
        >
          <ChevronLeft className="h-4 w-4" />
          {onCancel ? '취소' : '이전'}
        </button>

        <button
          onClick={handleNext}
          disabled={!canProceed || isLoading}
          className={cn(
            "flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition",
            canProceed
              ? "bg-stone-950 text-white hover:bg-stone-900"
              : "bg-border text-tertiary cursor-not-allowed"
          )}
        >
          {isLoading ? '추천 준비 중…' : initialProfile || currentStep === questions.length - 1 ? '결과 보기' : '다음'}
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
