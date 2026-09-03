'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { faqs, type FAQItem } from './faq-data';

function FAQAccordion({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-[4px] overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-primary pr-4">{item.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-secondary flex-shrink-0 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 border-t border-border bg-gray-50/50 dark:bg-gray-800/50">
          <div className="text-secondary leading-relaxed">{item.answer}</div>
        </div>
      )}
    </div>
  );
}

// Helper to extract plain text from React elements for structured data
function extractTextFromReactNode(node: React.ReactNode): string {
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(extractTextFromReactNode).join(' ');
  if (
    typeof node === 'object' &&
    node !== null &&
    'props' in node &&
    typeof node.props === 'object' &&
    node.props !== null &&
    'children' in node.props
  ) {
    const nodeProps = node.props as { children?: React.ReactNode };
    return extractTextFromReactNode(nodeProps.children);
  }
  return '';
}

export default function FAQPage() {
  const categories = Array.from(new Set(faqs.map((faq) => faq.category)));

  // Generate FAQ structured data
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          typeof faq.answer === 'string'
            ? faq.answer
            : extractTextFromReactNode(faq.answer),
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">자주 묻는 질문 (FAQ)</h1>
        <p className="text-secondary">
          러닝화 선택, 구매, 관리, 부상 예방, 에너지 젤에 대한 자주 묻는 질문에 답변드립니다.
        </p>
      </div>

      <div className="space-y-8">
        {categories.map((category) => (
          <section key={category} className="section-card p-6">
            <h2 className="text-xl font-semibold text-primary mb-4 pb-3 border-b border-border">
              {category}
            </h2>
            <div className="space-y-3">
              {faqs
                .filter((faq) => faq.category === category)
                .map((faq) => (
                  <FAQAccordion key={faq.id} item={faq} />
                ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-8 section-card p-6 bg-stone-50 dark:bg-stone-900/30 border-stone-200 dark:border-stone-700">
        <h3 className="font-semibold text-primary mb-2">답변을 찾지 못하셨나요?</h3>
        <p className="text-secondary mb-3">
          추가 질문이나 사이트 관련 문의는 아래 이메일로 연락 주세요.
        </p>
        <a
          href="mailto:sanchokwon216@gmail.com"
          className="text-signal-dark hover:underline font-medium"
        >
          sanchokwon216@gmail.com
        </a>
      </div>

      <p className="text-sm text-tertiary mt-6">최종 수정일: 2026년 2월 4일</p>
      </div>
    </>
  );
}
