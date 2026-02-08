"use client";

import { useState, useEffect } from "react";
import {
  BarChart3,
  Lightbulb,
  Microscope,
  HeartPulse,
  Footprints,
  LineChart,
  Zap,
  Search,
  MessageCircle,
  ClipboardList,
  Gem,
  Repeat,
  Star,
  BookMarked,
  type LucideIcon
} from "lucide-react";

type Section = {
  id: string;
  label: string;
  icon: LucideIcon;
};

const sections: Section[] = [
  { id: "quick-specs", label: "핵심 스펙", icon: BarChart3 },
  { id: "target-users", label: "추천 대상", icon: Lightbulb },
  { id: "biomechanics", label: "생체역학", icon: Microscope },
  { id: "injury-prevention", label: "부상 예방", icon: HeartPulse },
  { id: "korean-foot", label: "한국인 발", icon: Footprints },
  { id: "radar-chart", label: "스펙 차트", icon: LineChart },
  { id: "features", label: "핵심 기능", icon: Zap },
  { id: "comparison", label: "수준별 비교", icon: Search },
  { id: "reviews", label: "리뷰", icon: MessageCircle },
  { id: "detailed-specs", label: "상세 스펙", icon: ClipboardList },
  { id: "value-analysis", label: "가성비", icon: Gem },
  { id: "similar-shoes", label: "유사 모델", icon: Repeat },
  { id: "final-rating", label: "최종 평점", icon: Star },
  { id: "references", label: "참고문헌", icon: BookMarked },
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
        {filteredSections.map((section) => {
          const IconComponent = section.icon;
          return (
            <button
              key={section.id}
              type="button"
              onClick={() => scrollToSection(section.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                activeSection === section.id
                  ? "bg-[stone-600] text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-[stone-60020] hover:text-[stone-600]"
              }`}
            >
              <IconComponent className="h-4 w-4" />
              <span>{section.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
