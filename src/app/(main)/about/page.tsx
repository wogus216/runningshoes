import { Metadata } from 'next';
import { Database, Target, Users, Mail, BookOpen, Shield, BarChart3, Globe, Activity } from 'lucide-react';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import { getShoes } from '@/lib/data/shoes';
import { getAllBrands } from '@/lib/data/brands';
import { getPostsMeta } from '@/lib/data/blog';

export const metadata: Metadata = {
  title: '사이트 소개',
  description: '러닝의 모든것은 한국 러너를 위한 데이터 기반 러닝화 정보 사이트입니다. 제품별 공식 자료·실험실 측정·외부 착화 의견과 확인하지 못한 항목을 구분해 비교를 돕습니다.',
  alternates: { canonical: '/about' },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/about#sancho-editor`,
  name: '산초 에디터',
  alternateName: 'Sancho Editor',
  jobTitle: '러닝화 데이터 분석 에디터',
  description:
    '제품별 공식 자료와 외부 리뷰를 바탕으로 러닝화의 구조·측정 조건·한국 판매 조건을 정리하는 에디터.',
  url: `${SITE_URL}/about`,
  email: 'sanchokwon216@gmail.com',
  knowsAbout: [
    '러닝화',
    '러닝화 리뷰',
    '러닝화 비교',
    '러닝 생체역학',
    '평발 러닝',
    '무릎 통증 러닝',
    '발볼 넓은 러너',
    '한국 러닝 시장',
    'RunRepeat 랩 데이터 해석',
    '마라톤',
  ],
  knowsLanguage: ['ko', 'en'],
  worksFor: {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
  },
};

const aboutPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  url: `${SITE_URL}/about`,
  name: '사이트 소개',
  description:
    '러닝의 모든것 사이트 운영 배경, 데이터 출처(RunRepeat·Believe in the Run·Doctors of Running), 평가 기준, 한국 러너 특화 정보, 에디터 소개, 독립성 정책.',
  inLanguage: 'ko-KR',
  isPartOf: {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
  },
  mainEntity: { '@id': `${SITE_URL}/about#sancho-editor` },
};

export default function AboutPage() {
  const shoeCount = getShoes().length;
  const brandCount = getAllBrands().length;
  const posts = getPostsMeta();
  const postCount = posts.length;
  const reviewCount = posts.filter((p) => p.category === 'review').length;
  const guideCount = posts.filter((p) => p.category === 'guide').length;
  const newsCount = posts.filter((p) => p.category === 'news').length;

  const siteStats = [
    { label: '러닝화 분석', value: `${shoeCount}개`, desc: `${brandCount}개 브랜드 정보 수록` },
    { label: '블로그 글', value: `${postCount}개`, desc: `리뷰 ${reviewCount} · 가이드 ${guideCount} · 뉴스 ${newsCount}` },
    { label: '주요 참고 자료', value: '제품별', desc: '공식 자료 · 실험실 · 전문 리뷰' },
    { label: '운영 시작', value: '2025년', desc: '한국 러너 전용 데이터 분석' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }} />
      <h1 className="text-3xl font-bold mb-8">사이트 소개</h1>

      {/* 사이트 실적 통계 (E-E-A-T 신뢰도 시그널) */}
      <section className="section-card p-6 mb-10">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-[4px] bg-sky-100 dark:bg-sky-900">
            <Activity className="w-6 h-6 text-sky-600 dark:text-sky-400" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-primary mb-3">사이트 실적</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {siteStats.map((stat) => (
                <div key={stat.label} className="bg-gray-50 dark:bg-gray-800 rounded-[4px] p-3">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm font-medium text-primary mt-1">{stat.label}</div>
                  <div className="text-xs text-tertiary mt-1">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-10 text-secondary">
        {/* 미션 */}
        <section className="section-card p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-[4px] bg-stone-100 dark:bg-stone-800">
              <Target className="w-6 h-6 text-stone-600 dark:text-stone-400" />
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
            <div className="p-3 rounded-[4px] bg-green-100 dark:bg-green-900">
              <BookOpen className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">운영 배경</h2>
              <p className="leading-relaxed mb-4">
                해외에는 RunRepeat, Believe in the Run, Doctors of Running 같은 전문 러닝화 리뷰 사이트가 있지만,
                영어 자료에서는 한국 판매 가격과 성별·사이즈·폭 옵션을 별도로 확인해야 하는 경우가 있습니다.
                실험실 검체의 치수와 실제 구매할 제품의 조건을 구분해 읽는 것이 필요합니다.
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
            <div className="p-3 rounded-[4px] bg-amber-100 dark:bg-amber-900">
              <Database className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">데이터 출처</h2>
              <p className="leading-relaxed mb-4">
                모델별로 확인한 공식 공시, 실험실 검체 측정, 리뷰어의 착화 의견을 구분합니다.
                모든 모델에 동일한 실측 항목이 있는 것은 아니며, 제품별 출처와 확인 범위는 상세 페이지에 표시합니다:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <strong>RunRepeat</strong> - 랩 테스트 데이터 (충격흡수, 에너지리턴, 경도, 토박스 너비)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <strong>Believe in the Run</strong> - 전문 러너 리뷰 및 착화 평가
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <strong>Doctors of Running</strong> - 전문 리뷰와 주행·착화 의견
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <strong>공식 브랜드 사이트</strong> - 한국 판매 상품의 공시 가격·규격·폭 옵션
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 평가 기준 */}
        <section className="section-card p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-[4px] bg-orange-100 dark:bg-orange-900">
              <BarChart3 className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">평가 항목</h2>
              <p className="leading-relaxed mb-4">
                자료가 확인된 항목을 비교합니다. 제품별 수치의 측정 조건이 다르며,
                미확인 수명·임상 효과·개인 적합성을 점수로 채우지 않습니다:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { name: '쿠셔닝', desc: '충격 흡수력' },
                  { name: '반발력', desc: '에너지 리턴' },
                  { name: '지지 구조', desc: '가이드·베이스 설계' },
                  { name: '무게', desc: '기준 사이즈·측정 조건' },
                  { name: '착화 의견', desc: '해당 리뷰어의 경험' },
                  { name: '내구성', desc: '확인된 시험·마모 관찰' },
                  { name: '가격', desc: '상품·확인 시점 구분' },
                  { name: '그립', desc: '접지력' },
                  { name: '통기성', desc: '어퍼 환기' },
                ].map((item) => (
                  <div key={item.name} className="bg-gray-50 dark:bg-gray-800 rounded-[4px] p-3">
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
            <div className="p-3 rounded-[4px] bg-red-100 dark:bg-red-900">
              <Globe className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">한국 러너 특화 정보</h2>
              <p className="leading-relaxed mb-4">
                한국에서 실제 제품을 비교할 때 필요한 판매 조건과 근거의 한계를 함께 정리합니다:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-primary">발볼 적합성</strong>
                    <p className="text-sm">한국 판매 성별·사이즈·와이드 옵션과 실제 착화 시 확인할 부분</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-primary">지지 구조 확인</strong>
                    <p className="text-sm">가이드·베이스 구조와 리뷰 의견을 개인의 임상 적합성과 구분</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-primary">건강 정보의 범위</strong>
                    <p className="text-sm">제품 구조나 실험실 수치를 부위별 치료·예방 효과로 바꾸지 않음</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-primary">한국 시장 가격</strong>
                    <p className="text-sm">확인한 한국 상품의 가격·시점·묶음 또는 단품 조건</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 에디터 소개 */}
        <section className="section-card p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-[4px] bg-[var(--bg-warm-alt)] dark:bg-[var(--dark-soft)]">
              <Users className="w-6 h-6 text-primary dark:text-[var(--light-on-dark)]" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">에디터 소개</h2>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-stone-200 flex items-center justify-center text-lg font-bold text-stone-500 shrink-0">
                  산
                </div>
                <div>
                  <p className="font-semibold text-primary text-lg">산초 에디터</p>
                  <p className="text-sm mt-1">러닝화 데이터 분석 에디터 · 하프마라톤/10K 완주</p>
                </div>
              </div>
              <p className="leading-relaxed mb-3">
                2년차 러너로, 직접 러닝화를 찾으면서 &quot;한국어로 된 제대로 된 러닝화 정보가 없다&quot;는
                답답함에서 이 사이트를 시작했습니다. 한강과 도림천에서 주 3회
                러닝 중이며, 하프마라톤·10K 완주 후 풀코스 도전 준비 중입니다.
              </p>
              <p className="leading-relaxed mb-3">
                공식 상품 자료·RunRepeat 실험실 측정·전문 리뷰를 제품별로 대조합니다.
                외부 사이트가 보유한 전체 모델 수를 이 사이트에서 모두 확인한 수로 표시하지 않습니다.
              </p>
              <p className="leading-relaxed mb-3">
                실측 수치는 출처와 기준 사이즈가 확인된 범위에서 사용합니다. 토박스의 측정 위치·방식과
                일반 폭·와이드 옵션을 구분하며, 숫자 하나로 개인의 착화감을 판정하지 않습니다.
              </p>
              <div className="rounded-[4px] bg-[var(--bg-warm-alt)] dark:bg-[var(--dark-soft)]/40 border border-border dark:border-[var(--border)]/40 p-4 text-sm">
                <div className="font-semibold text-primary mb-1">분석 검증 프로세스</div>
                <ol className="space-y-1 text-secondary list-decimal list-inside">
                  <li>해당 세대·변형의 공식 자료와 외부 원문 확인; 미확인 항목은 구분</li>
                  <li>실험실 검체 측정과 리뷰어의 착화 의견을 서로 다른 자료로 표시</li>
                  <li>한국 판매 상품·가격·사이즈·폭 옵션과 확인 시점 대조</li>
                  <li>인구 집단의 발 특성이나 토박스 단일 경계값으로 개인 적합성·와이드 치수를 추정하지 않음</li>
                  <li>참조·형식·빌드 검사는 원문의 사실 검증과 별도로 진행; 새 자료 확인 시 해당 내용 갱신</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* 독립성 */}
        <section className="section-card p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-[4px] bg-[var(--bg-warm-alt)] dark:bg-[var(--dark-soft)]">
              <Shield className="w-6 h-6 text-primary dark:text-[var(--light-on-dark)]" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">독립성과 투명성</h2>
              <p className="leading-relaxed">
                <strong className="text-primary">러닝의 모든것</strong>은 특정 브랜드로부터 협찬을 받지 않으며,
                모든 리뷰는 객관적인 데이터를 기반으로 작성됩니다.
                일부 구매 링크에는 네이버 쇼핑 커넥트·쿠팡 파트너스 제휴 수수료가 적용될 수 있으며,
                이는 리뷰 내용에 영향을 주지 않습니다.
                구매 링크를 통해 발생하는 수수료는 사이트 운영과 콘텐츠 제작에 사용됩니다.
              </p>
            </div>
          </div>
        </section>

        {/* 연락처 */}
        <section className="border-t border-border pt-8">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-[4px] bg-gray-100 dark:bg-gray-800">
              <Mail className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">문의</h2>
              <p className="leading-relaxed mb-2">
                사이트 관련 문의, 데이터 수정 요청, 협업 제안은 아래로 연락 주세요.
              </p>
              <a
                href="/contact"
                className="text-signal-dark hover:underline font-medium"
              >
                문의 페이지 바로가기 →
              </a>
            </div>
          </div>
        </section>

        {/* 최종 수정일 */}
        <p className="text-sm text-tertiary pt-4">
          최종 수정일: 2026년 11월 11일
        </p>
      </div>
    </div>
  );
}
