import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '개인정보처리방침',
  description: '러닝의 모든것 개인정보처리방침 안내',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">개인정보처리방침</h1>

      <div className="space-y-8 text-secondary">
        <p className="leading-relaxed">
          <strong className="text-primary">러닝의 모든것</strong>(이하 &quot;사이트&quot;)은 이용자의 개인정보를 중요시하며,
          「개인정보 보호법」을 준수합니다. 본 개인정보처리방침은 사이트가 수집하는 정보와 그 이용 방법에 대해 안내합니다.
        </p>

        {/* 제1조 */}
        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">제1조 (수집하는 개인정보 항목)</h2>
          <p className="leading-relaxed mb-3">
            사이트는 별도의 회원가입 절차 없이 운영되며, 다음과 같은 정보가 자동으로 수집될 수 있습니다:
          </p>
          <ul className="list-disc list-inside space-y-2 leading-relaxed">
            <li>
              <strong>자동 수집 정보:</strong> IP 주소, 브라우저 종류, 운영체제, 방문 일시, 페이지 조회 기록, 쿠키
            </li>
            <li>
              <strong>Google Analytics:</strong> 사이트 이용 통계 (익명화된 데이터)
            </li>
            <li>
              <strong>Google AdSense:</strong> 맞춤형 광고 제공을 위한 쿠키 및 관심사 정보
            </li>
          </ul>
        </section>

        {/* 제2조 */}
        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">제2조 (개인정보 수집 및 이용 목적)</h2>
          <p className="leading-relaxed mb-3">
            수집된 정보는 다음 목적으로만 이용됩니다:
          </p>
          <ul className="list-disc list-inside space-y-2 leading-relaxed">
            <li>사이트 이용 현황 분석 및 서비스 개선</li>
            <li>콘텐츠 및 광고의 효과 측정</li>
            <li>맞춤형 광고 제공 (Google AdSense)</li>
            <li>사이트 보안 및 부정 이용 방지</li>
          </ul>
        </section>

        {/* 제3조 */}
        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">제3조 (개인정보 보유 및 이용 기간)</h2>
          <p className="leading-relaxed">
            자동 수집된 정보는 수집 목적 달성 후 즉시 파기되거나,
            Google의 데이터 보존 정책에 따라 처리됩니다.
            Google Analytics 데이터는 기본 26개월 후 자동 삭제됩니다.
          </p>
        </section>

        {/* 제4조 */}
        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">제4조 (개인정보의 제3자 제공)</h2>
          <p className="leading-relaxed mb-3">
            사이트는 이용자의 개인정보를 원칙적으로 제3자에게 제공하지 않습니다.
            다만, 다음의 경우 예외로 합니다:
          </p>
          <ul className="list-disc list-inside space-y-2 leading-relaxed">
            <li>
              <strong>Google LLC:</strong> Google Analytics 및 Google AdSense 서비스 제공을 위해
              익명화된 이용 통계 및 광고 관련 정보가 Google에 전송됩니다.
            </li>
            <li>법령에 의거하여 수사 목적으로 관계 기관의 요청이 있는 경우</li>
          </ul>
        </section>

        {/* 제5조 */}
        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">제5조 (쿠키의 사용)</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-primary mb-2">1. 쿠키란?</h3>
              <p className="leading-relaxed">
                쿠키(Cookie)는 웹사이트가 이용자의 브라우저에 저장하는 작은 텍스트 파일로,
                사이트 이용 환경을 개선하고 맞춤형 서비스를 제공하는 데 사용됩니다.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-primary mb-2">2. 사용하는 쿠키 종류</h3>
              <ul className="list-disc list-inside space-y-1 leading-relaxed">
                <li><strong>필수 쿠키:</strong> 사이트 기본 기능 제공</li>
                <li><strong>분석 쿠키:</strong> Google Analytics를 통한 이용 통계 수집</li>
                <li><strong>광고 쿠키:</strong> Google AdSense를 통한 맞춤형 광고 제공</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-primary mb-2">3. 쿠키 거부 방법</h3>
              <p className="leading-relaxed">
                브라우저 설정에서 쿠키를 차단하거나 삭제할 수 있습니다.
                다만, 쿠키를 차단하면 일부 서비스 이용에 제한이 있을 수 있습니다.
              </p>
              <ul className="list-disc list-inside space-y-1 leading-relaxed mt-2 text-sm">
                <li>Chrome: 설정 → 개인정보 및 보안 → 쿠키 및 기타 사이트 데이터</li>
                <li>Safari: 환경설정 → 개인정보 보호 → 쿠키 및 웹사이트 데이터 관리</li>
                <li>Firefox: 설정 → 개인정보 및 보안 → 쿠키 및 사이트 데이터</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 제6조 */}
        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">제6조 (이용자의 권리)</h2>
          <p className="leading-relaxed mb-3">
            이용자는 언제든지 다음과 같은 권리를 행사할 수 있습니다:
          </p>
          <ul className="list-disc list-inside space-y-2 leading-relaxed">
            <li>쿠키 사용 거부 및 삭제</li>
            <li>Google 광고 개인 최적화 해제: <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google 광고 설정</a></li>
            <li>Google Analytics 차단: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google Analytics 차단 브라우저 부가기능</a></li>
          </ul>
        </section>

        {/* 제7조 */}
        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">제7조 (개인정보 보호책임자)</h2>
          <p className="leading-relaxed mb-3">
            개인정보 처리에 관한 문의사항은 아래 연락처로 문의해 주시기 바랍니다.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <p><strong className="text-primary">개인정보 보호책임자</strong></p>
            <p className="mt-2">이메일: <a href="mailto:sanchokwon216@gmail.com" className="text-accent hover:underline">sanchokwon216@gmail.com</a></p>
          </div>
        </section>

        {/* 제8조 */}
        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">제8조 (개인정보처리방침의 변경)</h2>
          <p className="leading-relaxed">
            본 개인정보처리방침은 관련 법령 및 사이트 정책에 따라 변경될 수 있습니다.
            변경 시 사이트 공지사항을 통해 안내하며, 변경된 내용은 공지 후 즉시 효력이 발생합니다.
          </p>
        </section>

        {/* 최종 수정일 */}
        <p className="text-sm text-tertiary pt-4 border-t border-border">
          최종 수정일: 2026년 2월 3일
        </p>
      </div>
    </div>
  );
}
