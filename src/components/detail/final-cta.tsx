import { Button } from "@/components/ui/button";

type FinalCTAProps = {
  shoeName: string;
  brand: string;
  category: string;
};

export function FinalCTA({ shoeName, brand, category }: FinalCTAProps) {
  const getCtaMessage = () => {
    switch (category) {
      case "레이싱":
        return `${brand} ${shoeName}으로 새로운 기록에 도전하세요`;
      case "쿠션화":
        return `${brand} ${shoeName}으로 편안한 러닝을 경험하세요`;
      case "안정화":
        return `${brand} ${shoeName}으로 안정적인 러닝을 시작하세요`;
      case "데일리":
        return `${brand} ${shoeName}으로 매일의 러닝을 즐기세요`;
      default:
        return `${brand} ${shoeName}으로 러닝의 즐거움을 시작하세요`;
    }
  };

  return (
    <section className="bg-stone-700 text-white rounded-3xl p-8 lg:p-12 text-center">
      <h2 className="text-3xl lg:text-4xl font-black mb-4">
        나에게 맞는 러닝화를 찾으셨나요?
      </h2>
      <p className="text-lg lg:text-xl mb-8 opacity-95">
        {getCtaMessage()}
      </p>
{/* 구글 애드센스용 주석 처리
      <Button
        size="lg"
        className="bg-white text-stone-700 hover:bg-gray-100 font-bold text-lg px-8 py-6 shadow-xl"
      >
        지금 구매하기
      </Button>
*/}
    </section>
  );
}
