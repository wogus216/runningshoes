# 구매처 클릭 추적

GA4 이벤트 `purchase_link_click`은 **구매 완료가 아닌 외부 구매처 링크 클릭**을 뜻한다. 신발 상세의 히어로·가격 탭·하단·모바일 바와 블로그 본문의 기존 `affiliate-btn` CTA를 한 번의 전역 클릭 리스너로 수집한다. 같은 클릭에 이벤트는 한 번만 보낸다.

## 의류 글에 구매 링크 넣기

블로그 본문 HTML에서 외부 구매 링크에 다음 속성을 붙인다. 신발 글도 같은 형식을 쓸 수 있다. `data-purchase-link`가 없더라도 기존 `affiliate-btn` 링크는 추적되지만, 새 링크는 명시적으로 표시한다.

```html
<a href="https://판매처-URL"
   target="_blank" rel="noopener noreferrer sponsored"
   data-purchase-link
   data-purchase-product-type="apparel"
   data-purchase-product-name="제품명"
   data-purchase-brand="브랜드명"
   data-purchase-apparel-category="shorts"
   data-purchase-store="판매처명"
   data-purchase-placement="blog_cta">구매처 보기</a>
```

`apparel_category`는 팀에서 정한 분류값(예: `tops`, `shorts`, `tights`, `jackets`, `socks`)을 일관되게 쓴다. 신발은 `data-purchase-product-type="shoe"`로 두고 가능하면 `data-purchase-product-id`에 신발 slug를 넣는다. 상품명과 판매처는 필수다. 블로그 HTML의 해당 속성은 DOMPurify 허용 목록에 포함되어 있다.

## GA4에서 보기

이벤트 매개변수: `product_type`, `product_id`, `product_name`, `brand`, `apparel_category`, `store`, `page_slug`, `button_position`, `affiliate_type`, `destination_host`. `affiliate_type`은 `naver`(naver.me), `coupang`(link.coupang.com·coupa.ng), `none`(공식몰·일반 네이버 검색 등)이다. 목적지 전체 URL은 보내지 않는다.

GA4 관리 → 맞춤 정의에서 보고 싶은 매개변수를 **이벤트 범위 맞춤 측정기준**으로 등록한다. 추천: `product_type`, `product_name`, `brand`, `apparel_category`, `store`, `page_slug`, `button_position`, `affiliate_type`. 등록 전에도 실시간/DebugView에서 이벤트 수신은 확인할 수 있지만, 표준 보고서에서 차원별 분석을 하려면 맞춤 정의가 필요하다. 제휴 실적은 `affiliate_type != none`으로 필터링하고, 클릭 수를 구매 수나 수수료 수익으로 해석하지 않는다.
