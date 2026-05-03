import type { BlogFaq } from '@/types/blog';

type FaqSectionProps = {
  faqs: BlogFaq[];
};

export function FaqSection({ faqs }: FaqSectionProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="my-12" aria-labelledby="faq-heading">
      <h2
        id="faq-heading"
        className="text-2xl font-extrabold text-gray-900 tracking-tight mb-6"
      >
        자주 묻는 질문
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <details
            key={idx}
            className="group rounded-2xl border border-sky-100 bg-sky-50/40 open:bg-white open:border-sky-300 open:shadow-sm transition-all"
          >
            <summary className="flex cursor-pointer items-start gap-3 px-5 py-4 text-base font-semibold text-gray-900 marker:hidden [&::-webkit-details-marker]:hidden">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-500 text-xs font-bold text-white">
                Q
              </span>
              <span className="flex-1 leading-snug">{faq.question}</span>
              <span
                aria-hidden
                className="mt-1 text-sky-500 transition-transform group-open:rotate-180"
              >
                ▾
              </span>
            </summary>
            <div className="flex items-start gap-3 px-5 pb-5 pt-1">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-600">
                A
              </span>
              <p className="flex-1 text-[0.9375rem] leading-relaxed text-slate-700">
                {faq.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
