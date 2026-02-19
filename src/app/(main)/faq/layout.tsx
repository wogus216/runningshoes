import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '자주 묻는 질문 (FAQ) - 러닝화 선택, 구매, 부상 예방',
  description: '러닝화 사이즈, 발볼 넓은 브랜드, 평발 추천, 무릎 보호, 에너지젤 섭취법 등 러닝 관련 자주 묻는 질문에 답변합니다.',
  alternates: { canonical: '/faq' },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
