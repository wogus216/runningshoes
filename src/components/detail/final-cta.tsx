import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="bg-[#4facfe] text-white rounded-3xl p-8 lg:p-12 text-center">
      <h2 className="text-3xl lg:text-4xl font-black mb-4">
        나에게 맞는 러닝화를 찾으셨나요?
      </h2>
      <p className="text-lg lg:text-xl mb-8 opacity-95">
        페가수스 41로 러닝의 즐거움을 시작하세요
      </p>
      <Button
        size="lg"
        className="bg-white text-[#4facfe] hover:bg-gray-100 font-bold text-lg px-8 py-6 shadow-xl"
      >
        지금 구매하기
      </Button>
    </section>
  );
}
