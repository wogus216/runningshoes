import { Users, Check, X, ThumbsUp, ThumbsDown } from 'lucide-react';
import type { TargetUsers } from "@/types/shoe";

type TargetRecommendationProps = {
  targetUsers: TargetUsers;
};

export function TargetRecommendation({ targetUsers }: TargetRecommendationProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-black flex items-center gap-4">
        <Users className="h-8 w-8 text-emerald-700" />
        이 신발은 누구에게?
      </h2>

      {/* Recommended */}
      <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-6 lg:p-8">
        <h3 className="text-xl font-bold text-emerald-700 mb-6 flex items-center gap-2">
          <ThumbsUp className="h-5 w-5" />
          이런 분께 추천해요
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {targetUsers.recommended.map((item, index) => (
            <div key={index} className="flex items-center gap-3 font-semibold">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <Check className="h-4 w-4 text-emerald-600" />
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Not Recommended */}
      <div className="bg-red-50 border-2 border-[#ef4444] rounded-2xl p-6 lg:p-8">
        <h3 className="text-xl font-bold text-[#ef4444] mb-6 flex items-center gap-2">
          <ThumbsDown className="h-5 w-5" />
          이런 분께는 다른 모델 추천
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {targetUsers.notRecommended.map((item, index) => (
            <div key={index} className="flex items-center gap-3 font-semibold">
              <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <X className="h-4 w-4 text-red-600" />
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
