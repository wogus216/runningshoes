import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '법적 고지 | 러닝의 모든것',
  description: '러닝의 모든것 사이트의 법적 고지, 면책 조항 및 제휴 마케팅 안내',
};

export default function LegalPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">법적 고지</h1>

      <div className="space-y-8 text-secondary">
        {/* 제1조 */}
        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">제1조 (목적)</h2>
          <p className="leading-relaxed">
            본 사이트는 러닝화 및 관련 용품에 대한 정보 제공과 리뷰를 목적으로 하며,
            직접적인 판매 행위를 하지 않는 &apos;정보 제공 서비스&apos;입니다.
          </p>
        </section>

        {/* 제2조 */}
        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">제2조 (상품의 진위 및 품질에 관한 면책)</h2>
          <ol className="list-decimal list-inside space-y-3 leading-relaxed">
            <li>
              본 사이트는 신뢰할 수 있는 쇼핑몰 및 공식 유통사의 링크를 제공하려 노력하나,
              링크된 외부 판매처에서 판매하는 상품의 <strong className="text-primary">진위 여부(정품 및 가품 여부)</strong>를 보증하지 않습니다.
            </li>
            <li>
              외부 판매처의 상품 관리, 품질 보증, 상표권 준수 여부는 전적으로 해당 판매처의 책임이며,
              이로 인해 발생하는 소비자의 피해에 대하여 본 사이트는 보상 및 법적 책임을 지지 않습니다.
            </li>
          </ol>
        </section>

        {/* 제3조 */}
        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">제3조 (거래 및 계약의 책임)</h2>
          <ol className="list-decimal list-inside space-y-3 leading-relaxed">
            <li>
              사용자가 본 사이트의 링크를 통해 외부 쇼핑몰로 이동하여 체결한 모든 상거래(결제, 배송, 환불 등)는
              사용자와 판매처 간의 직거래입니다.
            </li>
            <li>
              본 사이트는 거래 당사자가 아니며, 거래 과정에서 발생하는 분쟁에 개입하거나 책임지지 않습니다.
            </li>
          </ol>
        </section>

        {/* 제4조 */}
        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">제4조 (경제적 이해관계 고지)</h2>
          <p className="leading-relaxed">
            본 사이트는 제휴 마케팅 프로그램에 참여하고 있으며, 사용자가 게시된 링크를 통해 상품을 구매할 경우
            마켓 운영사로부터 소정의 수수료를 지급받을 수 있음을 고지합니다.
            이는 구매자에게 추가되는 비용 없이 사이트의 지속적인 운영과 양질의 콘텐츠 제작에 사용됩니다.
          </p>
        </section>

        {/* 제5조 */}
        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">제5조 (리뷰 및 콘텐츠)</h2>
          <ol className="list-decimal list-inside space-y-3 leading-relaxed">
            <li>
              본 사이트의 모든 리뷰는 공개된 데이터와 전문 리뷰어의 의견을 참고하여 작성되었으며,
              주관적인 견해가 포함될 수 있습니다.
            </li>
            <li>
              리뷰에 사용된 제품 데이터는 RunRepeat, Believe in the Run, Doctors of Running 등
              신뢰할 수 있는 출처에서 인용되었습니다.
            </li>
            <li>
              제품의 실제 성능은 사용자의 체중, 주법, 사용 환경에 따라 다를 수 있습니다.
            </li>
          </ol>
        </section>

        {/* 연락처 */}
        <section className="border-t border-border pt-8">
          <h2 className="text-xl font-semibold text-primary mb-3">문의</h2>
          <p className="leading-relaxed">
            법적 고지와 관련된 문의 사항은 아래 이메일로 연락 주시기 바랍니다.
          </p>
          <p className="mt-2">
            <a
              href="mailto:sanchokwon216@gmail.com"
              className="text-accent hover:underline"
            >
              sanchokwon216@gmail.com
            </a>
          </p>
        </section>

        {/* 최종 수정일 */}
        <p className="text-sm text-tertiary pt-4">
          최종 수정일: 2026년 1월 28일
        </p>
      </div>
    </div>
  );
}
