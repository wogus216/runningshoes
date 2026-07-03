# 통일 카드 프레임 썸네일 골격

base64 인라인 방식. bash에서 각 신발 `side.webp`를 `base64` 변수로 만들고 heredoc HTML에 삽입한다. 이러면 거대한 base64 문자열이 대화 컨텍스트에 실리지 않는다.

캡처: `new_page(file://...)` → `resize_page(1200,630)` → `take_screenshot(webp, q90, filePath=public/images/blog/{slug}.webp)` → `Read`로 육안 검증.

색상 톤은 세그먼트에 맞춰 바꾼다(트레일=green, 카본레이서=slate/indigo, 템포=amber, 데일리=sky). accent는 `#0ea5e9` 계열.

## 1:1 (두 켤레) 골격

```bash
cd <project-root>
SCRATCH="<scratchpad-dir>"
A=$(base64 -i public/images/shoes/<brandA>/<a>/side.webp)
B=$(base64 -i public/images/shoes/<brandB>/<b>/side.webp)
cat > "$SCRATCH/thumb.html" <<EOF
<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css">
<style>
  *{margin:0;padding:0;box-sizing:border-box;}
  body{width:1200px;height:630px;overflow:hidden;font-family:'Pretendard',sans-serif;
       background:linear-gradient(180deg,#f0f9ff 0%,#ffffff 45%,#f8fafc 100%);position:relative;}
  .head{padding:44px 56px 0;text-align:center;}
  .kicker{display:inline-block;background:#0f172a;color:#fff;font-size:22px;font-weight:800;
          letter-spacing:1px;padding:8px 20px;border-radius:999px;margin-bottom:16px;}
  h1{font-size:54px;font-weight:900;color:#0f172a;letter-spacing:-2px;line-height:1.04;}
  .sub{font-size:25px;font-weight:600;color:#475569;margin-top:11px;}
  .row{display:flex;align-items:center;justify-content:center;gap:20px;padding:26px 60px 0;}
  .card{width:430px;text-align:center;}
  .imgbox{width:430px;height:210px;background:#fff;border-radius:20px;overflow:hidden;
          box-shadow:0 12px 28px rgba(15,23,42,.12);border:1px solid #e2e8f0;
          display:flex;align-items:center;justify-content:center;}
  .imgbox img{width:100%;height:100%;object-fit:cover;}
  .name{font-size:31px;font-weight:900;color:#0f172a;margin-top:14px;letter-spacing:-.5px;}
  .brand{font-size:18px;font-weight:700;color:#94a3b8;margin-top:2px;}
  .tag{display:inline-block;font-size:22px;font-weight:800;padding:7px 18px;border-radius:11px;margin-top:12px;}
  .price{font-size:20px;font-weight:700;color:#64748b;margin-top:9px;}
  .vs{font-size:50px;font-weight:900;color:#0ea5e9;flex-shrink:0;}
  .foot{position:absolute;bottom:26px;left:0;right:0;text-align:center;font-size:20px;font-weight:700;color:#94a3b8;}
</style></head><body>
  <div class="head">
    <span class="kicker">👟 {세그먼트 · 가격대}</span>
    <h1>{모델A} <span style="color:#0ea5e9;">vs</span> {모델B}</h1>
    <div class="sub">{한 줄 대비 질문}</div>
  </div>
  <div class="row">
    <div class="card"><div class="imgbox"><img src="data:image/webp;base64,$A" alt=""></div>
      <div class="name">{모델A}</div><div class="brand">{브랜드A}</div>
      <div class="tag" style="background:#fef3c7;color:#b45309;">{태그A}</div>
      <div class="price">{가격A}</div></div>
    <div class="vs">VS</div>
    <div class="card"><div class="imgbox"><img src="data:image/webp;base64,$B" alt=""></div>
      <div class="name">{모델B}</div><div class="brand">{브랜드B}</div>
      <div class="tag" style="background:#dbeafe;color:#1d4ed8;">{태그B}</div>
      <div class="price">{가격B}</div></div>
  </div>
  <div class="foot">allrunabout.com</div>
</body></html>
EOF
```

## 3파전 (세 켤레) 골격

1:1과 동일하되 `.cards`를 `display:flex;gap:22px;justify-content:center;`로 3카드 배치, `.card{width:346px}`, `.imgbox{width:346px;height:198px}`, 가운데 `VS` 제거하고 h1에 `vs`를 두 번 넣는다. 각 카드 태그는 서로 다른 색(예: 파랑/앰버/초록)으로 강점을 구분한다.

## 야외샷 주의

`side.webp`가 흰배경이 아니라 야외 착화샷이면(예: `hoka/speedgoat6`, `nike/pegasus42`) 흰 카드 안에서 대비가 튄다. `front/back/angle/outsole`도 확인해 흰배경이 있으면 교체하고, 폴더 전체가 야외면 통일 카드로 담아 처리하되 사용자에게 한 줄 언급한다. `object-fit:cover`가 기본이나, 흰배경 제품샷은 여백이 필요하면 `contain`+`padding`으로 바꾼다.
