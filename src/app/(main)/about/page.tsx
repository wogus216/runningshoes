import { Metadata } from 'next';
import { Database, Target, Users, Mail, BookOpen, Shield, BarChart3, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: '사이트 소개',
  description: '러닝의 모든것은 한국 러너를 위한 데이터 기반 러닝화 정보 사이트입니다. 객관적인 데이터와 전문적인 분석으로 당신에게 맞는 러닝화를 찾아드립니다.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">사이트 소개</h1>

      <div className="space-y-10 text-secondary">
        {/* 미션 */}
        <section className="section-card p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900">
              <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">우리의 미션</h2>
              <p className="leading-relaxed">
                <strong className="text-primary">러닝의 모든것</strong>은 한국 러너들이 자신에게 맞는 러닝화를
                쉽고 정확하게 찾을 수 있도록 돕는 것을 목표로 합니다.
                수많은 러닝화 중에서 &quot;나에게 맞는 신발&quot;을 찾는 것은 쉽지 않습니다.
                우리는 객관적인 데이터와 한국 러너 관점의 분석으로 그 어려움을 해결하고자 합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 왜 만들었나 */}
        <section className="section-card p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900">
              <BookOpen className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">운영 배경</h2>
              <p className="leading-relaxed mb-4">
                해외에는 RunRepeat, Believe in the Run, Doctors of Running 같은 전문 러닝화 리뷰 사이트가 있지만,
                대부분 영어로 되어 있고 서양인 체형 기준입니다.
                한국 러너들은 발볼이 넓고, 평발 비율이 높으며, 가격 민감도와 선호하는 브랜드도 다릅니다.
              </p>
              <p className="leading-relaxed">
                <strong className="text-primary">러닝의 모든것</strong>은 해외 전문 데이터를 한국 러너 관점에서 재해석하여,
                &quot;무릎이 아픈데 어떤 신발이 좋을까요?&quot;, &quot;발볼이 넓은데 추천해주세요&quot; 같은
                실질적인 질문에 답할 수 있는 정보를 제공합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 데이터 출처 */}
        <section className="section-card p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900">
              <Database className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">데이터 출처</h2>
              <p className="leading-relaxed mb-4">
                모든 러닝화 데이터는 신뢰할 수 있는 전문 리뷰 사이트의 실측 데이터를 기반으로 합니다:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  <strong>RunRepeat</strong> - 랩 테스트 데이터 (충격흡수, 에너지리턴, 경도, 토박스 너비)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  <strong>Believe in the Run</strong> - 전문 러너 리뷰 및 착화 평가
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  <strong>Doctors of Running</strong> - 물리치료사/의사 관점의 생체역학 분석
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  <strong>공식 브랜드 사이트</strong> - 한국 정가 및 스펙 정보
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 평가 기준 */}
        <section className="section-card p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-orange-100 dark:bg-orange-900">
              <BarChart3 className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">평가 항목</h2>
              <p className="leading-relaxed mb-4">
                각 러닝화는 다음 항목을 기준으로 종합적으로 평가됩니다:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { name: '쿠셔닝', desc: '충격 흡수력' },
                  { name: '반발력', desc: '에너지 리턴' },
                  { name: '안정성', desc: '오버프로네이션 제어' },
                  { name: '무게', desc: '경량성' },
                  { name: '착화감', desc: '전반적 편안함' },
                  { name: '내구성', desc: '예상 수명(km)' },
                  { name: '가성비', desc: 'km당 비용' },
                  { name: '그립', desc: '접지력' },
                  { name: '통기성', desc: '어퍼 환기' },
                ].map((item) => (
                  <div key={item.name} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                    <div className="font-medium text-primary">{item.name}</div>
                    <div className="text-xs text-tertiary">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 한국 러너 특화 */}
        <section className="section-card p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-red-100 dark:bg-red-900">
              <Globe className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">한국 러너 특화 정보</h2>
              <p className="leading-relaxed mb-4">
                서양 리뷰에서 다루지 않는 한국 러너만의 관심사를 중점적으로 다룹니다:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-primary">발볼 적합성</strong>
                    <p className="text-sm">한국인의 넓은 발볼에 맞는지, 와이드 옵션 여부</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-primary">평발 적합성</strong>
                    <p className="text-sm">아치 지지력, 안정화 기능 평가</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-primary">부상 예방</strong>
                    <p className="text-sm">무릎, 발바닥, 아킬레스 등 부위별 적합성</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-primary">한국 시장 가격</strong>
                    <p className="text-sm">한국 공식 사이트 기준 정가 및 가성비 분석</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 독립성 */}
        <section className="section-card p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-teal-100 dark:bg-teal-900">
              <Users className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">독립성과 투명성</h2>
              <p className="leading-relaxed">
                <strong className="text-primary">러닝의 모든것</strong>은 특정 브랜드로부터 협찬을 받지 않으며,
                모든 리뷰는 객관적인 데이터를 기반으로 작성됩니다.
                사이트 운영은 제휴 마케팅(네이버 쇼핑 커넥트, 쿠팡 파트너스)을 통해 이루어지며,
                이는 리뷰 내용에 영향을 주지 않습니다.
                구매 링크를 통해 발생하는 수수료는 사이트 운영과 콘텐츠 제작에 사용됩니다.
              </p>
            </div>
          </div>
        </section>

        {/* 연락처 */}
        <section className="border-t border-border pt-8">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800">
              <Mail className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">문의</h2>
              <p className="leading-relaxed mb-2">
                사이트 관련 문의, 데이터 수정 요청, 협업 제안은 아래 이메일로 연락 주세요.
              </p>
              <a
                href="mailto:sanchokwon216@gmail.com"
                className="text-accent hover:underline font-medium"
              >
                sanchokwon216@gmail.com
              </a>
            </div>
          </div>
        </section>

        {/* 최종 수정일 */}
        <p className="text-sm text-tertiary pt-4">
          최종 수정일: 2026년 2월 3일
        </p>
      </div>
    </div>
  );
}
