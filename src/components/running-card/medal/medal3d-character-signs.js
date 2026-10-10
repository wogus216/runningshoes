// One large, struck mark per figure. These are deliberately simple silhouettes: the centre plate is only about 38px
// high on a phone. Each mark uses the same white-metal / black-cut mask as the seven record coins.
// Motifs follow docs/running-card-result-design-2026-10-02.md §5-3. The figure's name stays in the result heading.
const TAU = Math.PI * 2;
const polygon = (g, points) => { g.beginPath(); points.forEach(([x, y], i) => i ? g.lineTo(x, y) : g.moveTo(x, y)); g.closePath(); g.fill(); };
const line = (g, points, width = .15) => { g.lineWidth = width; g.beginPath(); points.forEach(([x, y], i) => i ? g.lineTo(x, y) : g.moveTo(x, y)); g.stroke(); };
const disc = (g, x, y, r) => { g.beginPath(); g.arc(x, y, r, 0, TAU); g.fill(); };
const oval = (g, x, y, rx, ry, angle = 0) => { g.beginPath(); g.ellipse(x, y, rx, ry, angle, 0, TAU); g.fill(); };
const cut = (g, draw) => { g.save(); g.fillStyle = g.strokeStyle = '#000'; draw(); g.restore(); };
const ring = (g, x, y, outer, inner) => { disc(g, x, y, outer); cut(g, () => disc(g, x, y, inner)); };

export const CHARACTER_SIGNS = {
  zeus: { name: '독수리', draw: g => {
    polygon(g, [[-.05,-.18],[-.95,-.68],[-.79,-.2],[-.4,.04],[-.7,.02],[-.28,.36],[0,.64],[.28,.36],[.7,.02],[.4,.04],[.79,-.2],[.95,-.68],[.05,-.18]]);
    polygon(g, [[-.12,-.24],[.12,-.24],[.25,-.62],[0,-.9],[-.25,-.62]]); polygon(g, [[.16,-.69],[.48,-.6],[.2,-.48]]);
  }},
  heracles: { name: '곤봉', draw: g => {
    g.save(); g.rotate(-.55); line(g, [[0,.9],[0,-.24]], .23); oval(g, 0,-.55,.29,.53);
    cut(g, () => { line(g, [[-.17,-.58],[.17,-.58]], .08); line(g, [[-.14,-.26],[.14,-.26]], .07); }); g.restore();
  }},
  perseus: { name: '날개 달린 샌들', draw: g => {
    polygon(g, [[-.77,.24],[-.31,.08],[.15,.34],[.72,.22],[.88,.37],[.56,.65],[-.3,.64],[-.81,.48]]);
    line(g, [[-.38,.12],[-.18,-.18],[.13,-.36]], .13);
    for (const [x,y] of [[-.17,-.17],[.06,-.3],[.28,-.32]]) polygon(g, [[x,y],[x+.16,y-.42],[x+.35,y-.2],[x+.17,y+.05]]);
  }},
  hera: { name: '디아뎀', draw: g => {
    polygon(g, [[-.84,.34],[-.7,-.35],[-.36,.08],[0,-.68],[.36,.08],[.7,-.35],[.84,.34]]);
    polygon(g, [[-.86,.3],[.86,.3],[.78,.63],[-.78,.63]]);
    cut(g, () => line(g, [[-.7,.34],[.7,.34]], .08)); disc(g,0,-.72,.11);
  }},
  penelope: { name: '베틀 북', draw: g => {
    polygon(g, [[0,-.9],[.42,-.52],[.29,.49],[0,.9],[-.29,.49],[-.42,-.52]]);
    cut(g, () => oval(g,0,0,.16,.46)); line(g,[[-.39,-.27],[.39,-.27]],.1);
    line(g,[[-.33,.34],[.33,.34]],.1);
  }},
  themis: { name: '저울', draw: g => {
    line(g,[[0,-.82],[0,.75]],.16); line(g,[[-.8,-.45],[.8,-.45]],.14); disc(g,0,-.75,.14);
    for (const s of [-1,1]) { line(g,[[s*.6,-.43],[s*.6,.22]],.07); polygon(g,[[s*.92,.2],[s*.3,.2],[s*.42,.47],[s*.8,.47]]); }
    line(g,[[-.3,.78],[.3,.78]],.15);
  }},
  poseidon: { name: '돌고래', draw: g => {
    g.beginPath(); g.moveTo(-.87,.31); g.quadraticCurveTo(-.29,-.82,.47,-.38); g.quadraticCurveTo(.7,-.27,.92,-.45);
    g.lineTo(.72,-.04); g.quadraticCurveTo(.38,.18,-.04,.13); g.quadraticCurveTo(-.44,.52,-.65,.77);
    g.lineTo(-.68,.29); g.closePath(); g.fill();
    polygon(g,[[-.17,-.37],[.13,-.92],[.24,-.32]]); disc(g,.53,-.25,.045);
  }},
  theseus: { name: '미궁', draw: g => {
    line(g,[[-.79,-.79],[.79,-.79],[.79,.79],[-.79,.79],[-.79,-.39],[.4,-.39],[.4,.4],[-.4,.4],[-.4,-.05],[.04,-.05],[.04,.13]],.16);
  }},
  bellerophon: { name: '황금 고삐', draw: g => {
    ring(g,0,-.42,.27,.12); line(g,[[-.19,-.24],[-.62,.59]],.17); line(g,[[.19,-.24],[.62,.59]],.17);
    line(g,[[-.65,.59],[.65,.59]],.18); disc(g,-.62,.59,.12); disc(g,.62,.59,.12);
  }},
  demeter: { name: '낫', draw: g => {
    line(g,[[-.38,.84],[.38,-.52]],.19);
    g.beginPath(); g.moveTo(.3,-.52); g.quadraticCurveTo(-.4,-1,-.77,-.19); g.quadraticCurveTo(-.47,-.52,.12,-.46); g.closePath(); g.fill();
  }},
  persephone: { name: '석류', draw: g => {
    oval(g,0,.17,.62,.66); polygon(g,[[-.31,-.41],[-.19,-.86],[0,-.66],[.19,-.86],[.31,-.41]]);
    cut(g, () => { disc(g,-.2,.1,.09); disc(g,.2,.1,.09); disc(g,0,.42,.09); });
  }},
  hestia: { name: '화로', draw: g => {
    polygon(g,[[-.84,.17],[.84,.17],[.6,.54],[-.6,.54]]); line(g,[[-.47,.56],[-.58,.83]],.14); line(g,[[.47,.56],[.58,.83]],.14);
    g.beginPath(); g.moveTo(0,.1); g.quadraticCurveTo(-.58,-.33,-.13,-.91); g.quadraticCurveTo(-.13,-.47,.27,-.63);
    g.quadraticCurveTo(.56,-.1,0,.1); g.fill();
  }},
  athena: { name: '올리브 가지', draw: g => {
    line(g,[[-.68,.8],[.67,-.8]],.12);
    for (const [x,y,s] of [[-.47,.48,-1],[-.15,.12,1],[.18,-.24,-1],[.48,-.6,1]]) oval(g,x+s*.16,y-.12,.13,.29,s*.65);
    disc(g,-.37,.28,.1); disc(g,.1,-.2,.1);
  }},
  odysseus: { name: '노', draw: g => {
    g.save(); g.rotate(.47); line(g,[[0,.83],[0,-.24]],.13); oval(g,0,-.57,.23,.43); g.restore();
    line(g,[[-.6,.62],[.6,.62]],.08);
  }},
  daedalus: { name: '컴퍼스', draw: g => {
    disc(g,0,-.71,.16); line(g,[[-.07,-.59],[-.57,.8]],.18); line(g,[[.07,-.59],[.57,.8]],.18);
    line(g,[[-.3,.05],[.3,.05]],.1); polygon(g,[[-.66,.92],[-.48,.71],[-.4,.92]]);
    polygon(g,[[.42,.92],[.56,.68],[.68,.92]]);
  }},
  apollo: { name: '월계관', draw: g => {
    g.lineWidth=.13; g.beginPath(); g.arc(0,.19,.67,.13*Math.PI,.87*Math.PI,true); g.stroke();
    for (const s of [-1,1]) for (const [x,y,a] of [[.55,.48,.65],[.62,.05,.05],[.43,-.36,-.65]]) oval(g,s*x,y,.12,.25,s*a);
    disc(g,0,.79,.1);
  }},
  achilles: { name: '창', draw: g => {
    line(g,[[-.66,.82],[.55,-.65]],.15); polygon(g,[[.46,-.59],[.84,-.93],[.7,-.43]]); disc(g,-.69,.84,.11);
  }},
  orpheus: { name: '리라', draw: g => {
    g.lineWidth=.18; g.beginPath(); g.moveTo(-.58,-.62); g.quadraticCurveTo(-.66,.57,0,.68); g.quadraticCurveTo(.66,.57,.58,-.62); g.stroke();
    line(g,[[-.69,-.59],[.69,-.59]],.17);
    for (const x of [-.36,-.12,.12,.36]) line(g,[[x,-.52],[x*.3,.56]],.055);
  }},
  artemis: { name: '활', draw: g => {
    g.lineWidth=.18; g.beginPath(); g.moveTo(-.48,-.84); g.quadraticCurveTo(.84,0,-.48,.84); g.stroke();
    line(g,[[-.48,-.8],[-.48,.8]],.065); line(g,[[-.72,0],[.42,0]],.13);
    polygon(g,[[.75,0],[.32,-.17],[.32,.17]]); polygon(g,[[-.7,0],[-.9,-.2],[-.83,0],[-.9,.2]]);
  }},
  atalanta: { name: '황금 사과', draw: g => {
    g.beginPath(); g.moveTo(0,-.45); g.bezierCurveTo(-.86,-.9,-.91,.13,-.43,.58); g.quadraticCurveTo(0,.95,.43,.58);
    g.bezierCurveTo(.91,.13,.86,-.9,0,-.45); g.fill();
    line(g,[[0,-.44],[.08,-.84]],.11); oval(g,.35,-.72,.31,.13,-.4);
  }},
  orion: { name: '허리띠의 세 별', draw: g => {
    for (const [x,y] of [[-.58,.25],[0,0],[.58,-.25]]) {
      polygon(g,[[x,y-.27],[x+.08,y-.08],[x+.27,y],[x+.08,y+.08],[x,y+.27],[x-.08,y+.08],[x-.27,y],[x-.08,y-.08]]);
    }
    line(g,[[-.83,.4],[.83,-.4]],.055);
  }},
  ares: { name: '투구', draw: g => {
    g.beginPath(); g.moveTo(-.68,.53); g.lineTo(-.68,-.02); g.quadraticCurveTo(-.58,-.73,0,-.73); g.quadraticCurveTo(.63,-.7,.66,-.02);
    g.lineTo(.66,.3); g.lineTo(.14,.3); g.lineTo(-.04,.56); g.closePath(); g.fill();
    polygon(g,[[-.76,-.54],[-.26,-.93],[.25,-.93],[.77,-.57],[.23,-.75],[-.23,-.75]]);
    cut(g,() => oval(g,-.23,-.02,.13,.09));
  }},
  hector: { name: '성벽 탑', draw: g => {
    polygon(g,[[-.7,-.4],[-.7,-.75],[-.4,-.75],[-.4,-.44],[-.16,-.44],[-.16,-.75],[.16,-.75],[.16,-.44],[.4,-.44],[.4,-.75],[.7,-.75],[.7,.75],[-.7,.75]]);
    cut(g,() => { g.fillRect(-.13,.12,.26,.63); g.fillRect(-.48,-.21,.2,.18); g.fillRect(.28,-.21,.2,.18); });
  }},
  penthesilea: { name: '양날 도끼', draw: g => {
    line(g,[[0,-.88],[0,.88]],.17);
    polygon(g,[[-.18,-.6],[-.79,-.79],[-.95,-.1],[-.78,.39],[-.18,.2]]);
    polygon(g,[[.18,-.6],[.79,-.79],[.95,-.1],[.78,.39],[.18,.2]]);
    cut(g,() => disc(g,0,-.21,.09));
  }},
  aphrodite: { name: '비둘기', draw: g => {
    g.beginPath(); g.moveTo(-.69,.47); g.quadraticCurveTo(-.32,-.3,.28,-.15); g.quadraticCurveTo(.42,-.61,.08,-.78);
    g.quadraticCurveTo(.7,-.72,.7,-.2); g.lineTo(.94,-.07); g.lineTo(.68,.07); g.quadraticCurveTo(.32,.69,-.39,.61); g.closePath(); g.fill();
    polygon(g,[[-.2,.24],[-.93,-.18],[-.63,.55]]); disc(g,.58,-.34,.045);
  }},
  psyche: { name: '나비', draw: g => {
    for (const s of [-1,1]) {
      oval(g,s*.43,-.28,.45,.36,s*.4); oval(g,s*.39,.38,.35,.3,-s*.45);
      cut(g,() => disc(g,s*.49,-.28,.09)); line(g,[[s*.07,-.59],[s*.2,-.85]],.07);
    }
    oval(g,0,.03,.1,.68);
  }},
  eros: { name: '화살', draw: g => {
    line(g,[[-.79,.62],[.58,-.53]],.17); polygon(g,[[.86,-.86],[.39,-.72],[.71,-.34]]);
    polygon(g,[[-.61,.47],[-.91,.12],[-.85,.6]]); polygon(g,[[-.62,.48],[-.28,.8],[-.78,.85]]);
  }},
  hephaestus: { name: '망치', draw: g => {
    g.save(); g.rotate(-.48); line(g,[[0,-.1],[0,.92]],.22); polygon(g,[[-.7,-.65],[.7,-.65],[.7,-.22],[-.7,-.22]]); g.restore();
    cut(g,() => line(g,[[-.49,-.37],[.2,-.69]],.07));
  }},
  prometheus: { name: '횃불', draw: g => {
    line(g,[[0,.84],[0,-.18]],.2); polygon(g,[[-.39,-.26],[.39,-.26],[.28,-.05],[-.28,-.05]]);
    g.beginPath(); g.moveTo(0,-.17); g.quadraticCurveTo(-.61,-.47,-.12,-.95); g.quadraticCurveTo(-.12,-.58,.24,-.75);
    g.quadraticCurveTo(.52,-.3,0,-.17); g.fill();
  }},
  talos: { name: '섬을 도는 세 바퀴 궤도', draw: g => {
    for (const r of [.3,.55,.79]) { g.lineWidth=.095; g.beginPath(); g.arc(0,0,r,-.15,TAU-.38); g.stroke(); }
    disc(g,.3,-.04,.09); disc(g,.54,-.1,.09); disc(g,.76,-.16,.09);
    polygon(g,[[-.19,.08],[-.11,-.12],[.08,-.16],[.18,.02],[.06,.16],[-.08,.13]]);
  }},
  hermes: { name: '날개 모자', draw: g => {
    oval(g,0,.29,.7,.15); g.beginPath(); g.ellipse(0,.18,.42,.44,0,Math.PI,TAU); g.closePath(); g.fill();
    for (const s of [-1,1]) for (const [x,y] of [[.32,-.3],[.47,-.56],[.63,-.76]])
      polygon(g,[[s*.34,.03],[s*x,y],[s*(x+.21),y+.11]]);
    cut(g,() => line(g,[[-.36,.13],[.36,.13]],.07));
  }},
  nike: { name: '종려 잎', draw: g => {
    line(g,[[-.44,.88],[.44,-.9]],.13);
    for (const [x,y] of [[-.22,.44],[0,.05],[.2,-.32]]) {
      polygon(g,[[x,y],[x-.53,y-.32],[x-.22,y-.28]]);
      polygon(g,[[x,y],[x+.43,y+.2],[x+.29,y-.08]]);
    }
  }},
  pheidippides: { name: '이정석', draw: g => {
    polygon(g,[[-.45,.85],[-.45,-.6],[0,-.88],[.45,-.6],[.45,.85]]);
    cut(g,() => { line(g,[[-.25,-.16],[.25,-.16]],.08); line(g,[[-.23,.17],[.23,.17]],.08); });
    line(g,[[-.64,.87],[.64,.87]],.12);
  }},
  dionysus: { name: '티르소스', draw: g => {
    line(g,[[0,.91],[0,-.37]],.14);
    polygon(g,[[0,-.95],[.29,-.73],[.22,-.36],[0,-.2],[-.22,-.36],[-.29,-.73]]);
    cut(g,() => { line(g,[[-.14,-.77],[.15,-.45]],.07); line(g,[[.14,-.77],[-.15,-.45]],.07); });
    for (const s of [-1,1]) oval(g,s*.34,-.3,.3,.12,s*.5);
  }},
  ariadne: { name: '실타래', draw: g => {
    ring(g,-.1,.04,.68,.51);
    g.lineWidth=.11; g.beginPath(); g.arc(-.1,.04,.36,-.95,2.9); g.stroke();
    g.beginPath(); g.arc(-.1,.04,.21,.2,4.7); g.stroke();
    line(g,[[.38,.48],[.85,.8]],.11); disc(g,.84,.8,.08);
  }},
  sisyphus: { name: '비탈 위 바위', draw: g => {
    line(g,[[-.92,.82],[.83,.27]],.15); disc(g,.24,-.25,.49);
    cut(g,() => { line(g,[[.06,-.41],[.36,-.52]],.07); line(g,[[.29,-.02],[.52,-.19]],.07); });
  }},
};
