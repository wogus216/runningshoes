import type { Shoe } from '@/types/shoe';

type OnelinerSummaryProps = {
  shoe: Shoe;
};

export function OnelinerSummary({ shoe }: OnelinerSummaryProps) {
  // 신발 특성에 따른 한줄 요약 생성
  const getSummary = (): string => {
    // 직접 입력된 oneliner 사용
    if (shoe.oneliner) {
      return shoe.oneliner;
    }
    if (shoe.category === '안정화') return '지지 구조와 착화감을 함께 확인할 안정화';
    if (shoe.category === '레이싱' && shoe.biomechanics?.carbonPlate) return '카본 플레이트를 탑재한 레이싱화';
    // 입문자용
    if (shoe.category === '입문화' || shoe.targetUsers?.recommended?.some(t => t.includes('초보'))) {
      return `"러닝 처음 시작한다면 이것부터"`;
    }
    // 쿠션화
    if (shoe.category === '쿠션화') {
      return `"푹신한 쿠션으로 편안한 러닝을 원한다면"`;
    }
    // 데일리
    if (shoe.category === '데일리') {
      return `"매일 뛰기 좋은 올라운드 러닝화"`;
    }
    // 기본
    return `"${shoe.brand}의 ${shoe.category} 대표 모델"`;
  };

  return (
    <section className="bg-primary text-white rounded p-5">
      <div className="flex items-start gap-3">
        <span className="text-xl">💡</span>
        <div>
          <p className="text-xs text-white/60 mb-1">한줄 요약</p>
          <p className="font-medium">{getSummary()}</p>
        </div>
      </div>
    </section>
  );
}
