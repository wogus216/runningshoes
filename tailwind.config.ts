import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // ── 리디자인 B(잉크+시그널) 마이그레이션 브릿지 ──
        // 기존 컴포넌트의 raw sky-*/slate-* 클래스(103개 파일)를 코드모드 전까지
        // 시그널 오렌지/웜 잉크 스케일로 재매핑한다. 신규 코드는 시맨틱 토큰을 쓸 것.
        sky: {
          50: "#FFF4ED", 100: "#FFE8DB", 200: "#FFCDB0", 300: "#FFA87C",
          400: "#FF7A40", 500: "#FF4D00", 600: "#E64500", 700: "#BC3A02",
          800: "#942E04", 900: "#772606", 950: "#401302",
        },
        slate: {
          50: "#FAF9F6", 100: "#F1EFE9", 200: "#D9D4C8", 300: "#CBC7BA",
          400: "#A5A090", 500: "#7C7768", 600: "#6E6A5E", 700: "#47443A",
          800: "#2C2A22", 900: "#1E1C16", 950: "#14120D",
        },
        // 프로토타입 디자인 시스템 색상
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        accent: "var(--accent)",
        positive: "var(--positive)",
        warning: "var(--warning)",
        negative: "var(--negative)",
        surface: "var(--surface)",
        border: "var(--border)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        // shadcn 호환
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-pretendard)", "Pretendard", ...fontFamily.sans],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
          "100%": { transform: "translateY(0)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease forwards",
        "fade-in-up": "fade-in-up 0.6s ease forwards",
        "fade-in-down": "fade-in-down 0.8s ease forwards",
        float: "float 4s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
