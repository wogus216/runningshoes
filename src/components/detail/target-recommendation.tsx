import { Users, Check, X, ThumbsUp, ThumbsDown } from 'lucide-react';
import type { TargetUsers } from "@/types/shoe";

type TargetRecommendationProps = {
  targetUsers: TargetUsers;
};

export function TargetRecommendation({ targetUsers }: TargetRecommendationProps) {
  return (
    <section className="space-y-6">
      <h2 className="flex items-center gap-4 text-3xl font-black">
        <Users className="h-8 w-8 text-sky-700" />
        이 신발은 누구에게?
      </h2>

      {/* Recommended */}
      <div className="rounded-2xl border-2 border-sky-200 bg-sky-50 p-6 lg:p-8">
        <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-sky-700">
          <ThumbsUp className="h-5 w-5" />
          이런 분께 추천해요
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {targetUsers.recommended.map((item, index) => (
            <div key={index} className="flex items-center gap-3 font-semibold">
              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-100">
                <Check className="h-4 w-4 text-sky-700" />
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Not Recommended */}
      <div className="rounded-2xl border-2 border-rose-200 bg-rose-50 p-6 lg:p-8">
        <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-rose-600">
          <ThumbsDown className="h-5 w-5" />
          이런 분께는 다른 모델 추천
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {targetUsers.notRecommended.map((item, index) => (
            <div key={index} className="flex items-center gap-3 font-semibold">
              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-rose-100">
                <X className="h-4 w-4 text-rose-600" />
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
