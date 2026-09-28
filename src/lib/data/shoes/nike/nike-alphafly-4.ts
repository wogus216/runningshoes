import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'nike-alphafly-4',
  slug: 'nike-alphafly-4',
  brand: 'Nike',
  name: '알파플라이 4',
  image: '/images/shoes/nike/alphafly4/side.webp',
  images: ['/images/shoes/nike/alphafly4/side.webp'],
  category: '레이싱',
  rating: 0,
  status: 'new',
  noindex: true,
  description: 'ZoomX LT 폼, 업데이트된 Air Zoom 유닛, 카본 Flyplate를 결합한 나이키의 마라톤 레이싱화. 한국 정가와 독립 랩 데이터는 아직 확인되지 않았습니다.',
  oneliner: '공식 발표 기준 전작보다 5% 가벼워지고 에너지 반환력 10% 향상',
  editorComment: '나이키 공식 발표 기준 알파플라이 4는 265mm 기준 전작보다 5% 가벼워졌고, 에너지 반환력은 10% 향상됐습니다. Atomknit 갑피와 ZoomX LT 폼, 개선된 Air Zoom 유닛 및 카본 Flyplate를 사용하며, 제품 페이지는 남성 US 8.5 기준 188g과 8mm 드롭을 표기합니다. 다만 한국 공식 정가·출시 상태와 RunRepeat 독립 랩 측정은 아직 확인되지 않아 가격·토박스·충격흡수 수치는 비워 두었습니다.',
  tags: ['레이싱', '마라톤', '카본 플레이트', '슈퍼슈즈'],
  detailedSpecs: {
    weight: '약 188g (남성 US 8.5, 나이키 공식)',
    drop: '8mm (남성 US 8.5, 나이키 공식)',
    midsole: 'ZoomX + ZoomX LT',
    plate: '카본 파이버 Flyplate',
    upper: 'Atomknit',
    price: '한국 공식 정가 미확인 (2026-09-28 기준)',
  },
  similarShoes: ['nike-alphafly-3', 'adidas-adios-pro-5'],
};
