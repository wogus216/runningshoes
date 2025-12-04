import type { TargetUsers } from "@/types/shoe";

type TargetRecommendationProps = {
  targetUsers: TargetUsers;
};

export function TargetRecommendation({ targetUsers }: TargetRecommendationProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-black flex items-center gap-4">
        <span className="text-4xl">💡</span>
        이 신발은 누구에게?
      </h2>

      {/* Recommended */}
      <div className="bg-gradient-to-br from-[#4facfe10] to-[#4facfe20] border-2 border-[#4facfe] rounded-2xl p-6 lg:p-8">
        <h3 className="text-xl font-bold text-[#4facfe] mb-6">
          ✅ 이런 분께 추천해요
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {targetUsers.recommended.map((item, index) => (
            <div key={index} className="flex items-center gap-3 font-semibold">
              <span className="text-2xl text-[#10b981]">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Not Recommended */}
      <div className="bg-gradient-to-br from-[#ef444410] to-[#ef444420] border-2 border-[#ef4444] rounded-2xl p-6 lg:p-8">
        <h3 className="text-xl font-bold text-[#ef4444] mb-6">
          ❌ 이런 분께는 다른 모델 추천
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {targetUsers.notRecommended.map((item, index) => (
            <div key={index} className="flex items-center gap-3 font-semibold">
              <span className="text-2xl text-[#ef4444]">✗</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
