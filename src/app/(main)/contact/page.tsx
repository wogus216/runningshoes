import { Metadata } from 'next';
import { Mail, MessageSquare, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: '문의하기',
  description: '러닝의 모든것에 문의, 데이터 수정 요청, 협업 제안을 보내주세요.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">문의하기</h1>

      <div className="space-y-8 text-secondary">
        <p className="leading-relaxed text-lg">
          러닝화 데이터 수정, 새 신발 리뷰 요청, 협업 제안 등 어떤 내용이든 환영합니다.
        </p>

        {/* 이메일 문의 */}
        <section className="section-card p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-teal-100 dark:bg-teal-900">
              <Mail className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">이메일</h2>
              <a
                href="mailto:sanchokwon216@gmail.com"
                className="text-accent hover:underline font-medium text-lg"
              >
                sanchokwon216@gmail.com
              </a>
              <p className="text-sm mt-2">보통 1~2 영업일 이내 답변드립니다.</p>
            </div>
          </div>
        </section>

        {/* 문의 유형 */}
        <section className="section-card p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-900">
              <MessageSquare className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">문의 유형</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                  <div>
                    <strong className="text-primary">데이터 수정 요청</strong>
                    <p className="text-sm">신발 스펙, 가격, 리뷰 등 잘못된 정보를 발견하셨다면 알려주세요.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                  <div>
                    <strong className="text-primary">신발 리뷰 요청</strong>
                    <p className="text-sm">아직 다루지 않은 러닝화 리뷰를 요청하실 수 있습니다.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                  <div>
                    <strong className="text-primary">협업 제안</strong>
                    <p className="text-sm">브랜드 협업, 콘텐츠 제휴, 광고 문의를 환영합니다.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                  <div>
                    <strong className="text-primary">기타 문의</strong>
                    <p className="text-sm">사이트 이용 중 불편사항이나 개선 제안을 보내주세요.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 유의사항 */}
        <section className="section-card p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800">
              <AlertCircle className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">참고 사항</h2>
              <ul className="space-y-2 text-sm">
                <li>개별 러닝화 추천 문의는 <a href="/recommend" className="text-accent hover:underline">맞춤 추천</a> 기능을 이용해 주세요.</li>
                <li>자주 묻는 질문은 <a href="/faq" className="text-accent hover:underline">FAQ 페이지</a>에서 확인하실 수 있습니다.</li>
                <li>개인정보 관련 문의는 <a href="/privacy" className="text-accent hover:underline">개인정보처리방침</a>을 참고해 주세요.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
