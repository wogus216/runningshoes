"use client";

import { useState, useEffect } from "react";

type Section = {
  id: string;
  label: string;
  icon: string;
};

const sections: Section[] = [
  { id: "quick-specs", label: "핵심 스펙", icon: "📊" },
  { id: "target-users", label: "추천 대상", icon: "💡" },
  { id: "biomechanics", label: "생체역학", icon: "🔬" },
  { id: "injury-prevention", label: "부상 예방", icon: "🏥" },
  { id: "korean-foot", label: "한국인 발", icon: "🦶" },
  { id: "radar-chart", label: "스펙 차트", icon: "📈" },
  { id: "features", label: "핵심 기능", icon: "⚡" },
  { id: "comparison", label: "수준별 비교", icon: "🔍" },
  { id: "reviews", label: "리뷰", icon: "💬" },
  { id: "detailed-specs", label: "상세 스펙", icon: "📋" },
  { id: "value-analysis", label: "가성비", icon: "💰" },
  { id: "similar-shoes", label: "유사 모델", icon: "👟" },
  { id: "final-rating", label: "최종 평점", icon: "⭐" },
  { id: "references", label: "참고문헌", icon: "📚" },
];

type SectionNavProps = {
  availableSections: string[];
};

export function SectionNav({ availableSections }: SectionNavProps) {
  const [activeSection, setActiveSection] = useState<string>("");

  const filteredSections = sections.filter((section) =>
    availableSections.includes(section.id)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      }
    );

    filteredSections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [filteredSections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-md rounded-2xl p-4 mb-8">
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {filteredSections.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => scrollToSection(section.id)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
              activeSection === section.id
                ? "bg-[#4facfe] text-white shadow-lg scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-[#4facfe20] hover:text-[#4facfe]"
            }`}
          >
            <span>{section.icon}</span>
            <span>{section.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
