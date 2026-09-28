import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'adidas-adios-pro-5',
  slug: 'adidas-adios-pro-5',
  brand: 'Adidas',
  name: '아디제로 아디오스 프로 5',
  image: '/images/shoes/adidas/adiospro5/side.webp',
  images: ['/images/shoes/adidas/adiospro5/side.webp'],
  category: '레이싱',
  rating: 0,
  status: 'new',
  noindex: true,
  price: 339000,
  description: 'ENERGYRIM 카본 구조와 LIGHTSTRIKE PRO 폼을 적용한 아디다스의 마라톤 레이싱화. 국내 공식몰 정가는 339,000원입니다.',
  oneliner: '175g(US 9 리뷰 실측)·39/35mm 스택·4mm 드롭의 장거리 레이서',
  editorComment: '아디다스는 평균 177g(UK 8.5 샘플), 전작 대비 에너지 리턴 9% 향상을 발표했고, 공식 스택은 힐 39mm·전족부 35mm, 드롭 4mm입니다. Doctors of Running은 남성 US 9 기준 175g을 측정했고 하프·풀 마라톤 페이스에 적합하다고 평가했습니다. 핏은 전족부가 빠르게 좁아지는 낮은 볼륨의 레이스 핏이라는 리뷰가 있어 발볼이 넓거나 발등이 높은 러너는 시착을 권합니다. RunRepeat 랩 수치가 확인되지 않아 토박스 폭·내구성·가성비 평가는 비워 두었습니다.',
  tags: ['레이싱', '마라톤', '카본', '슈퍼슈즈'],
  detailedSpecs: {
    weight: '175g (남성 US 9, Doctors of Running 실측) / 평균 177g (UK 8.5, 아디다스 공식)',
    stackHeight: '힐 39mm / 전족부 35mm (아디다스 공식)',
    drop: '4mm (아디다스 공식)',
    midsole: 'LIGHTSTRIKE PRO',
    plate: '카본 주입 ENERGYRIM (Energy Rods 대체)',
    outsole: 'LIGHTTRAXION + Continental 러버',
    upper: 'LIGHTLOCK 2.0',
    price: '₩339,000 (아디다스 코리아 공식몰)',
  },
  reviews: [
    {
      userType: 'Doctors of Running 리뷰 요약',
      text: '부드럽고 탄성 있는 폼과 ENERGYRIM의 강성이 결합되어 하프·풀 마라톤 페이스에서 장점이 드러나는 중립 레이싱화입니다. 전족부가 빠르게 좁아지고 전체적으로 낮은 볼륨의 타이트한 핏이라 발 앞쪽 공간이 많이 필요한 러너에게는 맞지 않을 수 있습니다. 리뷰어는 짧은 거리의 빠른 페이스에서는 장거리만큼의 장점이 두드러지지 않는다고 평가했습니다.',
      source: 'Doctors of Running',
      sourceUrl: 'https://www.doctorsofrunning.com/adidas-adizero-adios-pro-5-review/',
    },
  ],
  similarShoes: ['adidas-adios-pro-4', 'nike-alphafly-4', 'nike-alphafly-3'],
  purchaseLinks: [
    { store: '아디다스 공식몰', url: 'https://www.adidas.co.kr/%EC%95%84%EB%94%94%EC%A0%9C%EB%A1%9C-%EC%95%84%EB%94%94%EC%98%A4%EC%8A%A4-%ED%94%84%EB%A1%9C-5-%EB%9F%AC%EB%8B%9D%ED%99%94/KI8294.html', isOfficial: true, price: 339000 },
  ],
};
