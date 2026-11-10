import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '자주 묻는 질문 (FAQ) - 러닝화 선택·관리와 젤 보급',
  description: '러닝화 사이즈·폭·교체와 세탁, 통증이 있을 때 확인할 점, 운동 시간과 제품 성분에 따른 젤 보급 계획을 공식 출처와 함께 안내합니다.',
  alternates: { canonical: '/faq' },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
