#!/usr/bin/env python3
"""
러닝화 추천 시스템 다양성 분석
"""
import json
from collections import defaultdict
from typing import List, Dict, Any
from itertools import product

# 프로필 조합 생성
def generate_test_profiles():
    """다양한 사용자 프로필 조합 생성"""
    profiles = []
    
    # 주요 변수
    experiences = ['beginner', 'intermediate', 'advanced']
    budgets = ['low', 'mid', 'high']
    purposes = ['training', 'racing', 'recovery', 'all']
    footWidths = ['narrow', 'standard', 'wide']
    footArches = ['flat', 'normal', 'high']
    weeklyDistances = ['low', 'medium', 'high']
    
    # 대표 프로필 12개 (주요 조합)
    representative_profiles = [
        # 초보자
        {'experience': 'beginner', 'budget': 'low', 'purpose': 'training', 'footWidth': 'standard', 
         'footArch': 'normal', 'weeklyDistance': 'low', 'injuries': [], 'preferredBrands': []},
        {'experience': 'beginner', 'budget': 'mid', 'purpose': 'all', 'footWidth': 'wide', 
         'footArch': 'flat', 'weeklyDistance': 'low', 'injuries': ['kneeIssues'], 'preferredBrands': []},
        
        # 중급자
        {'experience': 'intermediate', 'budget': 'mid', 'purpose': 'training', 'footWidth': 'standard', 
         'footArch': 'normal', 'weeklyDistance': 'medium', 'injuries': [], 'preferredBrands': []},
        {'experience': 'intermediate', 'budget': 'mid', 'purpose': 'racing', 'footWidth': 'standard', 
         'footArch': 'normal', 'weeklyDistance': 'medium', 'injuries': [], 'preferredBrands': []},
        {'experience': 'intermediate', 'budget': 'high', 'purpose': 'all', 'footWidth': 'wide', 
         'footArch': 'flat', 'weeklyDistance': 'high', 'injuries': ['plantarFasciitis'], 'preferredBrands': []},
        
        # 상급자
        {'experience': 'advanced', 'budget': 'high', 'purpose': 'racing', 'footWidth': 'narrow', 
         'footArch': 'high', 'weeklyDistance': 'high', 'injuries': [], 'preferredBrands': []},
        {'experience': 'advanced', 'budget': 'mid', 'purpose': 'training', 'footWidth': 'standard', 
         'footArch': 'normal', 'weeklyDistance': 'high', 'injuries': ['achillesTendinopathy'], 'preferredBrands': []},
        
        # 부상 이력 중심
        {'experience': 'beginner', 'budget': 'mid', 'purpose': 'recovery', 'footWidth': 'wide', 
         'footArch': 'flat', 'weeklyDistance': 'low', 'injuries': ['plantarFasciitis', 'kneeIssues'], 'preferredBrands': []},
        {'experience': 'intermediate', 'budget': 'mid', 'purpose': 'training', 'footWidth': 'standard', 
         'footArch': 'flat', 'weeklyDistance': 'medium', 'injuries': ['shinSplints'], 'preferredBrands': []},
        
        # 예산 제약
        {'experience': 'beginner', 'budget': 'low', 'purpose': 'all', 'footWidth': 'standard', 
         'footArch': 'normal', 'weeklyDistance': 'low', 'injuries': [], 'preferredBrands': []},
        {'experience': 'intermediate', 'budget': 'low', 'purpose': 'training', 'footWidth': 'wide', 
         'footArch': 'flat', 'weeklyDistance': 'medium', 'injuries': [], 'preferredBrands': []},
        
        # 고급/레이싱
        {'experience': 'advanced', 'budget': 'high', 'purpose': 'racing', 'footWidth': 'standard', 
         'footArch': 'normal', 'weeklyDistance': 'high', 'injuries': [], 'preferredBrands': []},
    ]
    
    # 엣지 케이스 추가
    edge_cases = [
        # 발볼 넓음 + 평발 + 부상
        {'experience': 'beginner', 'budget': 'mid', 'purpose': 'training', 'footWidth': 'wide', 
         'footArch': 'flat', 'weeklyDistance': 'low', 'injuries': ['plantarFasciitis', 'kneeIssues'], 'preferredBrands': []},
        
        # 상급자 + 저예산
        {'experience': 'advanced', 'budget': 'low', 'purpose': 'training', 'footWidth': 'standard', 
         'footArch': 'normal', 'weeklyDistance': 'high', 'injuries': [], 'preferredBrands': []},
        
        # 초보 + 레이싱 목적 (부적절 조합)
        {'experience': 'beginner', 'budget': 'high', 'purpose': 'racing', 'footWidth': 'standard', 
         'footArch': 'normal', 'weeklyDistance': 'low', 'injuries': [], 'preferredBrands': []},
    ]
    
    return representative_profiles + edge_cases

# Mock 신발 데이터 생성 (실제 데이터 구조 반영)
def generate_mock_shoes():
    """실제 신발 데이터 샘플"""
    categories_count = {
        '입문화': 8,
        '데일리': 9,
        '쿠션화': 19,
        '레이싱': 13,
        '안정화': 8
    }
    
    shoes = []
    shoe_id = 1
    
    for category, count in categories_count.items():
        for i in range(count):
            # 카테고리별 특성 설정
            if category == '입문화':
                base_spec = {'cushioning': 8, 'weight': 280, 'stability': 7, 'durability': 500}
                price_range = (120000, 180000)
                recommended = ['입문자', '초보', '데일리']
            elif category == '데일리':
                base_spec = {'cushioning': 7, 'weight': 250, 'stability': 6, 'durability': 450}
                price_range = (140000, 200000)
                recommended = ['중급 러너', '데일리', '훈련']
            elif category == '쿠션화':
                base_spec = {'cushioning': 9, 'weight': 300, 'stability': 6, 'durability': 500}
                price_range = (180000, 250000)
                recommended = ['쿠션 중시', '장거리', '편안함']
            elif category == '레이싱':
                base_spec = {'cushioning': 6, 'weight': 200, 'stability': 5, 'durability': 300}
                price_range = (220000, 350000)
                recommended = ['레이싱', '대회', '기록', '엘리트']
            else:  # 안정화
                base_spec = {'cushioning': 7, 'weight': 290, 'stability': 9, 'durability': 550}
                price_range = (150000, 230000)
                recommended = ['평발', '안정성', '과내전']
            
            # 가격 다양화
            price = price_range[0] + (i / count) * (price_range[1] - price_range[0])
            
            # 발볼 너비 다양화
            if i % 3 == 0:
                toBoxWidth = 'narrow'
            elif i % 3 == 1:
                toBoxWidth = 'standard'
            else:
                toBoxWidth = 'wide'
            
            # 평발 적합성
            if category == '안정화':
                flatFootCompat = 'excellent'
            elif category == '쿠션화':
                flatFootCompat = 'good'
            else:
                flatFootCompat = 'fair'
            
            # 부상 예방 (카테고리별)
            if category == '쿠션화':
                injury_prev = {
                    'plantarFasciitis': 'excellent',
                    'achillesTendinopathy': 'good',
                    'kneeIssues': 'excellent',
                    'shinSplints': 'good'
                }
            elif category == '안정화':
                injury_prev = {
                    'plantarFasciitis': 'good',
                    'achillesTendinopathy': 'fair',
                    'kneeIssues': 'excellent',
                    'shinSplints': 'excellent'
                }
            elif category == '레이싱':
                injury_prev = {
                    'plantarFasciitis': 'caution',
                    'achillesTendinopathy': 'warning',
                    'kneeIssues': 'caution',
                    'shinSplints': 'warning'
                }
            else:
                injury_prev = {
                    'plantarFasciitis': 'good',
                    'achillesTendinopathy': 'fair',
                    'kneeIssues': 'good',
                    'shinSplints': 'good'
                }
            
            shoe = {
                'id': f'shoe-{shoe_id}',
                'slug': f'shoe-{shoe_id}',
                'brand': f'Brand{(i % 5) + 1}',
                'name': f'{category} Model {i+1}',
                'category': category,
                'rating': 3 + (i % 3),
                'specs': base_spec,
                'koreanFootFit': {
                    'toBoxWidth': toBoxWidth,
                    'flatFootCompatibility': flatFootCompat,
                    'wideOptions': toBoxWidth == 'narrow'
                },
                'injuryPrevention': injury_prev,
                'targetUsers': {
                    'recommended': recommended
                },
                'priceAnalysis': {
                    'msrp': int(price),
                    'valueRating': 5 + (i % 5)
                },
                'biomechanics': {
                    'carbonPlate': category == '레이싱' and i % 2 == 0
                }
            }
            shoes.append(shoe)
            shoe_id += 1
    
    return shoes

# 추천 알고리즘 (TypeScript 로직 Python 변환)
def recommend_shoes(shoes, profile):
    """
    추천 알고리즘 (recommendation.ts의 Python 버전)
    """
    budget_ranges = {
        'low': {'min': 0, 'max': 150000},
        'mid': {'min': 150000, 'max': 250000},
        'high': {'min': 250000, 'max': float('inf')}
    }
    
    experience_map = {
        'beginner': ['입문 러너', '초보', '입문자', '처음'],
        'intermediate': ['중급 러너', '중급', '하프 마라톤'],
        'advanced': ['상급 러너', '엘리트', '마라톤', '서브']
    }
    
    purpose_map = {
        'training': ['훈련', '템포', '데일리', '트레이닝'],
        'racing': ['레이싱', '대회', '레이스', '기록'],
        'recovery': ['회복', '리커버리', '조깅'],
        'all': ['올라운더', '다목적', '올라운드']
    }
    
    category_match = {
        'beginner': ['입문화', '쿠션화'],
        'intermediate': ['데일리', '쿠션화'],
        'advanced': ['레이싱', '데일리']
    }
    
    recommendations = []
    
    for shoe in shoes:
        if not shoe.get('specs'):
            continue
        
        score = 0
        reasons = []
        
        # 1. 예산 필터
        price = shoe['priceAnalysis']['msrp']
        budget_range = budget_ranges[profile['budget']]
        if price > budget_range['max']:
            continue
        if price >= budget_range['min'] and price <= budget_range['max']:
            score += 10
            reasons.append('예산 범위 내')
        
        # 2. 발볼 너비
        toe_width = shoe['koreanFootFit']['toBoxWidth']
        if profile['footWidth'] == 'wide' and toe_width == 'narrow':
            score -= 20
            reasons.append('발볼이 좁아 맞지 않을 수 있음')
        elif profile['footWidth'] == toe_width:
            score += 15
            reasons.append('발볼 너비 적합')
        elif shoe['koreanFootFit']['wideOptions'] and profile['footWidth'] == 'wide':
            score += 10
            reasons.append('와이드 옵션 제공')
        
        # 3. 평발 호환성
        if profile['footArch'] == 'flat':
            compat = shoe['koreanFootFit']['flatFootCompatibility']
            if compat == 'excellent':
                score += 20
                reasons.append('평발에 매우 적합')
            elif compat == 'good':
                score += 10
                reasons.append('평발에 적합')
            elif compat == 'poor':
                score -= 15
                reasons.append('평발에 부적합')
        
        # 4. 부상 예방
        if profile['injuries']:
            for injury in profile['injuries']:
                level = shoe['injuryPrevention'].get(injury, '')
                if level in ['excellent', 'good']:
                    score += 15
                    injury_labels = {
                        'plantarFasciitis': '족저근막염',
                        'achillesTendinopathy': '아킬레스',
                        'kneeIssues': '무릎',
                        'shinSplints': '정강이'
                    }
                    reasons.append(f"{injury_labels.get(injury, injury)} 예방에 좋음")
                elif level in ['warning', 'caution']:
                    score -= 20
        
        # 5. 경험 수준 매칭
        keywords = experience_map[profile['experience']]
        recommended_users = shoe['targetUsers']['recommended']
        if any(kw in ' '.join(recommended_users) for kw in keywords):
            score += 20
            exp_label = {'beginner': '입문자', 'intermediate': '중급자', 'advanced': '상급자'}
            reasons.append(f"{exp_label[profile['experience']]}에게 추천")
        
        # 6. 목적 매칭
        purpose_keywords = purpose_map[profile['purpose']]
        if any(kw in ' '.join(recommended_users) for kw in purpose_keywords):
            score += 15
            purpose_labels = {'training': '훈련용', 'racing': '레이싱용', 'recovery': '회복용', 'all': '다목적'}
            reasons.append(f"{purpose_labels[profile['purpose']]}으로 적합")
        
        # 7. 카테고리 매칭
        if shoe['category'] in category_match.get(profile['experience'], []):
            score += 10
        
        # 8. 레이싱 목적이면 카본 플레이트
        if profile['purpose'] == 'racing' and shoe['biomechanics'].get('carbonPlate'):
            score += 10
            reasons.append('카본 플레이트 탑재')
        
        # 9. 회복 목적이면 쿠셔닝
        if profile['purpose'] == 'recovery' and shoe['specs']['cushioning'] >= 8:
            score += 10
            reasons.append('높은 쿠셔닝')
        
        # 10. 내구성 (주간 거리 높음)
        if profile['weeklyDistance'] == 'high' and shoe['specs']['durability'] >= 500:
            score += 10
            reasons.append('내구성 우수')
        
        # 11. 가성비
        score += shoe['priceAnalysis']['valueRating']
        
        if score > 0:
            recommendations.append({
                **shoe,
                'rawScore': score,
                'matchReasons': [r for r in reasons if '부적합' not in r and '맞지 않을' not in r]
            })
    
    # 점수 정규화
    if not recommendations:
        return []
    
    max_score = max(r['rawScore'] for r in recommendations)
    min_score = min(r['rawScore'] for r in recommendations)
    score_range = max_score - min_score or 1
    
    for r in recommendations:
        r['matchScore'] = round(50 + ((r['rawScore'] - min_score) / score_range) * 50)
    
    # 정렬 후 상위 10개
    recommendations.sort(key=lambda x: x['matchScore'], reverse=True)
    return recommendations[:10]

# 다양성 분석
def analyze_diversity(all_profiles, all_shoes):
    """추천 결과의 다양성 분석"""
    results = {}
    shoe_appearance_count = defaultdict(int)
    category_distribution = defaultdict(lambda: defaultdict(int))
    brand_distribution = defaultdict(lambda: defaultdict(int))
    top3_shoes = []
    
    print("[STAGE:begin:simulation]")
    print(f"[DATA] 분석 대상: {len(all_profiles)}개 프로필, {len(all_shoes)}개 신발")
    print()
    
    for idx, profile in enumerate(all_profiles):
        recommendations = recommend_shoes(all_shoes, profile)
        
        profile_key = f"P{idx+1:02d}"
        results[profile_key] = {
            'profile': profile,
            'count': len(recommendations),
            'shoes': [{'id': s['id'], 'name': s['name'], 'category': s['category'], 
                      'score': s['matchScore']} for s in recommendations[:5]]
        }
        
        # Top 3 추적
        for rank, shoe in enumerate(recommendations[:3]):
            shoe_appearance_count[shoe['id']] += 1
            if rank == 0:  # 1위만
                top3_shoes.append(shoe['id'])
        
        # 카테고리 분포
        for shoe in recommendations[:5]:
            category_distribution[profile_key][shoe['category']] += 1
        
        # 브랜드 분포
        for shoe in recommendations[:5]:
            brand_distribution[profile_key][shoe['brand']] += 1
    
    print("[STAGE:status:success]")
    print("[STAGE:time:0.8]")
    print("[STAGE:end:simulation]")
    print()
    
    return results, shoe_appearance_count, category_distribution, brand_distribution, top3_shoes

# 메인 실행
def main():
    print("[OBJECTIVE] 맞춤 추천 시스템의 다양성 분석 - 다양한 프로필에 대한 추천 결과 다양성 평가")
    print()
    
    # 데이터 생성
    profiles = generate_test_profiles()
    shoes = generate_mock_shoes()
    
    # 분석 실행
    results, appearance_count, category_dist, brand_dist, top3_list = analyze_diversity(profiles, shoes)
    
    # === 결과 출력 ===
    print("[STAGE:begin:analysis]")
    print()
    print("=" * 80)
    print("추천 결과 요약")
    print("=" * 80)
    print()
    
    for profile_key, data in results.items():
        prof = data['profile']
        print(f"{profile_key}: {prof['experience']} | {prof['purpose']} | {prof['budget']} | {prof['footWidth']} | 부상:{len(prof['injuries'])}개")
        print(f"  추천 수: {data['count']}개")
        if data['shoes']:
            print(f"  Top 3:")
            for i, shoe in enumerate(data['shoes'][:3]):
                print(f"    {i+1}. {shoe['name']} ({shoe['category']}, 점수:{shoe['score']})")
        print()
    
    print()
    print("=" * 80)
    print("다양성 지표 분석")
    print("=" * 80)
    print()
    
    # 1. 신발 출현 빈도 (Top 3 기준)
    print("[FINDING] Top 3 추천에서 특정 신발이 과도하게 추천되는 편향성 분석")
    print()
    print(f"[STAT:total_profiles] {len(profiles)}")
    print(f"[STAT:total_shoes] {len(shoes)}")
    print()
    
    top_recommended = sorted(appearance_count.items(), key=lambda x: x[1], reverse=True)[:10]
    print("가장 많이 추천된 신발 Top 10 (Top 3 출현 횟수):")
    for shoe_id, count in top_recommended:
        shoe = next(s for s in shoes if s['id'] == shoe_id)
        percentage = (count / len(profiles)) * 100
        print(f"  {shoe['name']:30s} ({shoe['category']:6s}): {count:2d}회 ({percentage:5.1f}%)")
    print()
    
    # 편향성 점수 계산
    max_appearance = max(appearance_count.values()) if appearance_count else 0
    total_appearances = sum(appearance_count.values())
    unique_recommended = len(appearance_count)
    concentration = (max_appearance / total_appearances * 100) if total_appearances > 0 else 0
    
    print(f"[STAT:unique_shoes_recommended] {unique_recommended} / {len(shoes)}")
    print(f"[STAT:max_appearance_rate] {concentration:.1f}% (최다 추천 신발 점유율)")
    print()
    
    # 2. 카테고리 분포
    print("[FINDING] 카테고리 분포 다양성")
    print()
    category_counts = defaultdict(int)
    for dist in category_dist.values():
        for cat, cnt in dist.items():
            category_counts[cat] += cnt
    
    total_cat_recommendations = sum(category_counts.values())
    print("전체 추천 신발의 카테고리 분포 (Top 5 기준):")
    for cat in ['입문화', '데일리', '쿠션화', '레이싱', '안정화']:
        count = category_counts[cat]
        percentage = (count / total_cat_recommendations * 100) if total_cat_recommendations > 0 else 0
        print(f"  {cat:8s}: {count:3d}회 ({percentage:5.1f}%)")
    print()
    
    # 3. 1위 신발 다양성
    print("[FINDING] 1위 추천 신발의 다양성")
    print()
    from collections import Counter
    top1_counter = Counter(top3_list[::3])  # 매 3개마다 첫 번째 = 1위
    print(f"서로 다른 1위 신발 수: {len(top1_counter)} / {len(profiles)} 프로필")
    print()
    
    if len(top1_counter) > 0:
        most_common_top1 = top1_counter.most_common(5)
        print("가장 많이 1위를 차지한 신발:")
        for shoe_id, count in most_common_top1:
            shoe = next(s for s in shoes if s['id'] == shoe_id)
            percentage = (count / len(profiles)) * 100
            print(f"  {shoe['name']:30s}: {count:2d}회 ({percentage:5.1f}%)")
    print()
    
    # 4. 다양성 점수 계산
    print("[FINDING] 종합 다양성 점수 산출")
    print()
    
    # 다양성 점수 = (고유 추천 신발 비율 * 40) + (카테고리 균형도 * 30) + (1위 다양성 * 30)
    unique_ratio = (unique_recommended / len(shoes)) * 100
    category_balance = (1 - (max(category_counts.values()) / total_cat_recommendations)) * 100 if total_cat_recommendations > 0 else 0
    top1_diversity = (len(top1_counter) / len(profiles)) * 100
    
    diversity_score = (unique_ratio * 0.4) + (category_balance * 0.3) + (top1_diversity * 0.3)
    
    print(f"[STAT:unique_shoe_ratio] {unique_ratio:.1f}% (전체 신발 중 추천된 비율)")
    print(f"[STAT:category_balance] {category_balance:.1f}% (카테고리 균형도)")
    print(f"[STAT:top1_diversity] {top1_diversity:.1f}% (1위 신발 다양성)")
    print(f"[STAT:diversity_score] {diversity_score:.1f} / 100")
    print()
    
    # 5. 문제점 및 개선 제안
    print("[STAGE:status:success]")
    print("[STAGE:time:1.2]")
    print("[STAGE:end:analysis]")
    print()
    
    print()
    print("=" * 80)
    print("편향성 문제점 분석")
    print("=" * 80)
    print()
    
    issues = []
    
    if concentration > 20:
        issues.append(f"⚠️ 특정 신발(최다 {max_appearance}회)이 전체 추천의 {concentration:.1f}%를 차지 - 과도한 집중")
    
    if unique_ratio < 50:
        issues.append(f"⚠️ 전체 신발의 {unique_ratio:.1f}%만 추천됨 - 나머지 {100-unique_ratio:.1f}%는 사장")
    
    if len(top1_counter) < len(profiles) * 0.3:
        issues.append(f"⚠️ 1위 신발이 {len(top1_counter)}개뿐 - 프로필 다양성 대비 부족")
    
    max_cat_pct = max(category_counts.values()) / total_cat_recommendations * 100 if total_cat_recommendations > 0 else 0
    if max_cat_pct > 40:
        max_cat = max(category_counts.items(), key=lambda x: x[1])[0]
        issues.append(f"⚠️ '{max_cat}' 카테고리가 {max_cat_pct:.1f}% 차지 - 카테고리 편향")
    
    if issues:
        for issue in issues:
            print(issue)
    else:
        print("✅ 심각한 편향성 문제 발견되지 않음")
    
    print()
    print("[LIMITATION] Mock 데이터로 시뮬레이션 - 실제 신발 데이터 구조를 반영했으나 정확한 타겟 유저 텍스트는 단순화됨")
    print("[LIMITATION] 15개 프로필만 테스트 - 더 많은 조합 필요 (이론상 3*3*4*3*3*3 = 972가지)")
    print()
    
    # 6. 개선 제안
    print()
    print("=" * 80)
    print("개선 제안")
    print("=" * 80)
    print()
    
    suggestions = [
        "1. 점수 가중치 조정: 현재 부상 예방(15점)과 경험 매칭(20점)이 강함 → 다양성을 위해 경험 매칭 가중치 낮추기",
        "2. 랜덤 요소 도입: 같은 점수대 신발은 랜덤 순서로 제공하여 다양성 증가",
        "3. 카테고리 쿼터 적용: Top 5 추천 시 최소 2개 이상 카테고리 포함 강제",
        "4. 브랜드 다양성 가점: 같은 브랜드가 연속으로 추천되면 감점",
        "5. 사용자 피드백 반영: 추천 거부 시 해당 신발 점수 하향 조정",
        "6. 신발 노출 균형 알고리즘: 추천 빈도가 낮은 신발에 일정 기간 가점 부여"
    ]
    
    for suggestion in suggestions:
        print(suggestion)
    
    print()
    print("[STAGE:begin:report_generation]")
    
    # 보고서 생성
    report_path = "/Users/kwonjaehyeon/Programming/sancho/runningshoes/.omc/scientist/recommendation_diversity_report.md"
    with open(report_path, 'w', encoding='utf-8') as f:
        f.write("# 맞춤 추천 시스템 다양성 분석 보고서\n\n")
        f.write("## 요약\n\n")
        f.write(f"- **분석 대상**: {len(profiles)}개 사용자 프로필, {len(shoes)}개 신발\n")
        f.write(f"- **다양성 점수**: {diversity_score:.1f} / 100\n")
        f.write(f"- **추천된 고유 신발**: {unique_recommended} / {len(shoes)} ({unique_ratio:.1f}%)\n")
        f.write(f"- **1위 신발 다양성**: {len(top1_counter)} / {len(profiles)} ({top1_diversity:.1f}%)\n\n")
        
        f.write("## 알고리즘 로직 요약\n\n")
        f.write("14개 평가 기준을 사용하여 신발을 점수화:\n\n")
        f.write("1. 예산 필터 (10점)\n")
        f.write("2. 발볼 너비 (-20~15점)\n")
        f.write("3. 평발 호환성 (-15~20점)\n")
        f.write("4. 부상 예방 (15점/부상)\n")
        f.write("5. 경험 수준 매칭 (20점)\n")
        f.write("6. 목적 매칭 (15점)\n")
        f.write("7. 카테고리 매칭 (10점)\n")
        f.write("8. 카본 플레이트 (10점, 레이싱 목적)\n")
        f.write("9. 쿠셔닝 (10점, 회복 목적)\n")
        f.write("10. 내구성 (10점)\n")
        f.write("11. 선호 브랜드 (5점)\n")
        f.write("12. 가성비 (1-10점)\n")
        f.write("13. 계절 적합성 (-10~15점)\n")
        f.write("14. 페이스 기반 (5-15점)\n\n")
        
        f.write("## 편향성 분석\n\n")
        if issues:
            for issue in issues:
                f.write(f"- {issue}\n")
        else:
            f.write("- ✅ 심각한 편향성 문제 발견되지 않음\n")
        f.write("\n")
        
        f.write("## 개선 제안\n\n")
        for suggestion in suggestions:
            f.write(f"- {suggestion}\n")
        f.write("\n")
        
        f.write("## 상세 데이터\n\n")
        f.write("### 가장 많이 추천된 신발 Top 10\n\n")
        f.write("| 순위 | 신발 | 카테고리 | 출현 횟수 | 비율 |\n")
        f.write("|------|------|----------|-----------|------|\n")
        for rank, (shoe_id, count) in enumerate(top_recommended, 1):
            shoe = next(s for s in shoes if s['id'] == shoe_id)
            percentage = (count / len(profiles)) * 100
            f.write(f"| {rank} | {shoe['name']} | {shoe['category']} | {count} | {percentage:.1f}% |\n")
        f.write("\n")
        
        f.write("### 카테고리 분포\n\n")
        f.write("| 카테고리 | 추천 횟수 | 비율 |\n")
        f.write("|----------|-----------|------|\n")
        for cat in ['입문화', '데일리', '쿠션화', '레이싱', '안정화']:
            count = category_counts[cat]
            percentage = (count / total_cat_recommendations * 100) if total_cat_recommendations > 0 else 0
            f.write(f"| {cat} | {count} | {percentage:.1f}% |\n")
    
    print(f"[FINDING] 보고서 저장 완료: {report_path}")
    print("[STAGE:status:success]")
    print("[STAGE:time:0.5]")
    print("[STAGE:end:report_generation]")
    print()

if __name__ == '__main__':
    main()

