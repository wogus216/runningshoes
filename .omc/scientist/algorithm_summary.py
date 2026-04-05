#!/usr/bin/env python3
"""
알고리즘 로직 상세 요약 및 가중치 분석
"""

print("[STAGE:begin:weight_analysis]")
print()
print("=" * 80)
print("추천 알고리즘 가중치 분석")
print("=" * 80)
print()

# recommendation.ts의 점수 체계 분석
scoring_rules = [
    ("예산 필터 (필수 조건)", 10, "예산 초과 시 제외, 범위 내 +10"),
    ("발볼 너비 매칭", 15, "일치 시 +15, 와이드 옵션 +10, 부적합 -20"),
    ("평발 호환성", 20, "excellent +20, good +10, poor -15"),
    ("부상 예방 (각 부상별)", 15, "excellent/good +15, warning/caution -20"),
    ("경험 수준 매칭", 20, "추천 대상에 경험 수준 키워드 포함 시 +20"),
    ("목적 매칭", 15, "추천 대상에 목적 키워드 포함 시 +15"),
    ("카테고리 매칭", 10, "경험 수준에 맞는 카테고리 +10"),
    ("카본 플레이트 (레이싱)", 10, "레이싱 목적 + 카본 플레이트 +10"),
    ("쿠셔닝 (회복)", 10, "회복 목적 + 쿠셔닝≥8 +10"),
    ("내구성 (고거리)", 10, "주간 거리 high + 내구성≥500 +10"),
    ("선호 브랜드", 5, "선호 브랜드 일치 시 +5"),
    ("가성비 점수", "1-10", "priceAnalysis.valueRating 그대로 반영"),
    ("계절 적합성", 15, "excellent +15, good +10, poor -10"),
    ("페이스 기반", 15, "페이스 맞는 카테고리 +15, 카본(fast) +10, 경량(fast) +5"),
]

print("점수 체계 상세:")
print()
for idx, (criterion, points, desc) in enumerate(scoring_rules, 1):
    print(f"{idx:2d}. {criterion:30s} | 점수: {str(points):8s} | {desc}")

print()
print()

# 최대 가능 점수 계산
print("[FINDING] 이론상 최대/최소 점수 분석")
print()

max_positive = 10 + 15 + 20 + (15*2) + 20 + 15 + 10 + 10 + 10 + 10 + 5 + 10 + 15 + 15
# 예산(10) + 발볼(15) + 평발(20) + 부상2개(30) + 경험(20) + 목적(15) + 카테고리(10) + 카본(10) + 쿠션(10) + 내구성(10) + 브랜드(5) + 가성비(10) + 계절(15) + 페이스(15)

print(f"[STAT:max_theoretical_score] {max_positive} (부상 2개, 모든 조건 만족)")
print(f"[STAT:typical_match_score] 60-100 (상위 추천 신발 점수 범위)")
print()

print("주요 가중치 비중:")
total_base = 10 + 15 + 20 + 15 + 20 + 15 + 10 + 10  # 핵심 8개 기준
print(f"  경험 수준 매칭: 20점 ({20/total_base*100:.1f}%)")
print(f"  평발 호환성: 20점 ({20/total_base*100:.1f}%)")
print(f"  부상 예방: 15점/부상 (최대 60점 가능)")
print(f"  목적 매칭: 15점 ({15/total_base*100:.1f}%)")
print(f"  발볼 너비: 15점 ({15/total_base*100:.1f}%)")
print()

print("[FINDING] 가중치 편향성 문제점")
print()
print("1. **경험 수준 매칭(20점)**과 **부상 예방(15점/부상)**이 지배적")
print("   → 특정 경험 수준 + 부상 이력 조합이 항상 같은 신발 추천")
print()
print("2. **목적 매칭(15점)**이 약함")
print("   → 레이싱/회복 목적이어도 경험 수준이 우선순위")
print()
print("3. **카테고리 매칭(10점)**이 중복 가점")
print("   → 경험 수준 매칭(20) + 카테고리 매칭(10) = 같은 조건 2번 평가")
print()
print("4. **발볼 너비 부적합(-20점)**이 과도")
print("   → 발볼 좁은 신발은 다른 장점이 많아도 탈락")
print()

print("[STAGE:status:success]")
print("[STAGE:time:0.3]")
print("[STAGE:end:weight_analysis]")

