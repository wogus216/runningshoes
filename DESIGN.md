# Design System — allrunabout.com

**성격:** Performance Editorial — 데이터 기반 러닝화 리뷰 사이트
**톤:** 에디토리얼, 직접적, 한국어 중심. 마켓플레이스가 아닌 리뷰어의 책상.

---

## Typography

- **Primary:** Pretendard (Korean-optimized, CDN)
- **Fallback:** -apple-system, BlinkMacSystemFont, system-ui, sans-serif
- **Code:** ui-monospace, SFMono-Regular, Menlo, Monaco

### Scale

| Use | Size | Weight | Class |
|---|---|---|---|
| Hero H1 | 60px | 900 (Black) | `text-4xl md:text-5xl font-black` |
| Section H2 | 24px | 700-900 | `text-xl font-semibold` or `font-bold` |
| Card title H3 | 16px | 700 | `text-base font-bold` |
| Body | 14-16px | 400 | `text-sm` or `text-base` |
| Caption/label | 10-11px | 600-700 | `text-[10px] font-semibold uppercase tracking-[0.14em]` |
| Micro-badge | 9-10px | 600 | `text-[9px] uppercase tracking-[0.18em]` |

### Rules

- `tracking-tight` on all headings (global CSS)
- Uppercase + wide tracking for badges/labels only
- `text-wrap: balance` on hero headlines
- `font-variant-numeric: tabular-nums` on number columns
- `…` (ellipsis char) not `...` (three dots)

---

## Colors

### CSS Variables (`globals.css`)

| Variable | Value | Use |
|---|---|---|
| `--primary` | `#0f172a` | Primary text (near-black navy) |
| `--secondary` | `#475569` | Body text |
| `--tertiary` | `#64748b` | Captions, metadata |
| `--accent` | `#0ea5e9` | Links, CTAs, highlights (sky-500) |
| `--positive` | `#0f766e` | Good/pass indicators (teal) |
| `--warning` | `#f97316` | Caution indicators (orange) |
| `--negative` | `#FF3B30` | Error/bad |
| `--surface` | `#f7fbff` | Card backgrounds, sections |
| `--border` | `#dbe5f0` | Borders, dividers |
| `--navy` | `#081226` | Dark cards, CTA buttons |
| `--navy-soft` | `#13233d` | Dark card hover |
| `--accent-line` | `rgba(14,165,233,0.18)` | Subtle accent borders |

### Palette Families (4)

1. **Navy:** `#000000` → `#020617` → `#081226` → `#0F172A` (text + dark elements)
2. **Sky:** `#075985` → `#0369A1` → `#0EA5E9` → `#38BDF8` (accent + links)
3. **Slate:** `#334155` → `#475569` → `#64748B` → `#94A3B8` (secondary text)
4. **Teal:** `#0F766E` → `#14B8A6` (positive/good semantic only)

### Category Colors (tech pages)

| Category | Background | Text | Border |
|---|---|---|---|
| Midsole | `bg-sky-50` | `text-sky-700` | `border-sky-200` |
| Plate | `bg-slate-100` | `text-slate-700` | `border-slate-200` |
| Cushioning | `bg-teal-50` | `text-teal-700` | `border-teal-200` |
| Stability | `bg-cyan-50` | `text-cyan-700` | `border-cyan-200` |
| Upper | `bg-stone-100` | `text-stone-700` | `border-stone-200` |
| Outsole | `bg-sky-50` | `text-sky-700` | `border-sky-200` |

---

## Layout

### Background

```css
body {
  background:
    radial-gradient(circle at top left, rgba(14,165,233,0.12), transparent 26%),
    radial-gradient(circle at 82% 4%, rgba(56,189,248,0.08), transparent 18%),
    linear-gradient(180deg, #f6fbff 0%, #f4f9fd 48%, #eef5fb 100%);
}
```

### Grid

- Max width: `max-w-6xl` (1152px)
- Padding: `px-4 md:px-6`
- Card grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Spacing scale: Tailwind 4px base (`gap-2` = 8px, `gap-3` = 12px, `gap-4` = 16px)

### Border Radius

| Element | Radius |
|---|---|
| Shoe cards | `rounded-[28px]` |
| Hero sections | `rounded-[36px]` |
| Buttons (pill) | `rounded-full` |
| Content cards | `rounded-lg` or `rounded-xl` |
| Badges | `rounded-full` |

---

## Components

### Dark CTA Card

Navy background (`var(--navy)`) + white text. Used for hero START HERE, dark feature cards.

```
bg-[var(--navy)] text-white shadow-[0_18px_35px_-24px_rgba(2,132,199,0.58)]
```

### Score Badge

```
bg-[var(--navy)] px-2 py-1 rounded-2xl text-white
→ label: text-[9px] uppercase tracking text-sky-100/55
→ value: text-[13px] font-black
```

### Shoe Card

- `<article>` with stretched-link pattern (no `<button>` inside `<a>`)
- `focus-within:ring-2 ring-sky-500` for keyboard users
- `motion-reduce:` variants for reduced-motion
- Gradient top bar: `linear-gradient(90deg, #38bdf8, #0ea5e9, #f97316)`

### Breadcrumb

`홈 > 브랜드 > 현재` with ChevronRight separator. `text-sm text-secondary`.

---

## Interaction States

- **Hover:** `hover:-translate-y-0.5` on CTAs, `hover:border-accent` on cards
- **Focus:** Global `focus-visible:ring-2 ring-sky-500 ring-offset-2` (base layer)
- **Active:** inherit hover styles
- **Disabled:** `opacity-50 cursor-not-allowed`
- **Loading:** (removed artificial delay — immediate state transition preferred)

---

## Motion

- Card entrance: `animate-fade-in-up` with staggered `animationDelay`
- Hover lift: `transition-transform duration-300 hover:-translate-y-1`
- Always provide `motion-reduce:transition-none motion-reduce:animate-none`
- Animate only `transform` and `opacity`
- Duration: 150-300ms

---

## Icons

- Library: `lucide-react`
- Decorative icons: always `aria-hidden="true"`
- Icon-only buttons: always `aria-label`
- Size: `h-4 w-4` (nav), `h-5 w-5` (sections), `h-3 w-3` (inline/compact)

---

## Accessibility

- Global `focus-visible:ring` on all interactive elements (base CSS layer)
- `<article>` + stretched-link for card patterns (no nested interactive)
- `<th scope="col">` on data tables
- `aria-live="polite"` on async state updates
- No `user-scalable=no` or `maximum-scale=1`
- Touch targets: minimum 44px on mobile interactive elements
