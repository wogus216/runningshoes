// Actual questionnaire/result QA; ad and analytics requests are blocked.
// node docs/recommend-harness/drive.mjs <output> <recommend URL> [smoke]
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { spawn, execFileSync } from 'node:child_process';
const [dest, url, mode] = process.argv.slice(2);
if (!dest || !url) throw new Error('output and recommend URL required');
const output = path.resolve(dest); fs.mkdirSync(output, { recursive: true });
const profiles = JSON.parse(execFileSync(process.execPath, ['--require', 'tsx/cjs', '-e', `
const {getCardShoes}=require('./src/lib/data/shoes'); const {recommendShoes}=require('./src/lib/recommendation');
const b={experience:'beginner',weeklyDistance:'low',purpose:'training',footArch:'normal',footWidth:'standard',injuries:[],budget:'low',preferredBrands:[],targetPace:'slow',season:'all'};
const cases=[['beginner',b],['trail',{...b,purpose:'trail',footArch:'flat',targetPace:'fast'}],['recovery',{...b,experience:'advanced',purpose:'recovery',targetPace:'fast',budget:'high'}],['injuries',{...b,purpose:'trail',footWidth:'wide',injuries:['plantarFasciitis','achillesTendinopathy','kneeIssues','shinSplints']}]];
console.log(JSON.stringify(cases.map(([label,profile])=>({label,profile,results:recommendShoes(getCardShoes(),profile)}))));
`], { encoding: 'utf8' }));
const PORT = 9600 + Math.floor(Math.random() * 300);
const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', ['--headless=new', `--remote-debugging-port=${PORT}`, `--user-data-dir=${fs.mkdtempSync(path.join(os.tmpdir(),'recommend-qa-'))}`, '--no-first-run', '--disable-extensions', '--host-resolver-rules=MAP *googlesyndication.com 0.0.0.0, MAP *doubleclick.net 0.0.0.0, MAP *google-analytics.com 0.0.0.0, MAP *googletagmanager.com 0.0.0.0, MAP *adtrafficquality.google 0.0.0.0, MAP *googleadservices.com 0.0.0.0, MAP *fundingchoicesmessages.google.com 0.0.0.0', 'about:blank'], { stdio: 'ignore' });
const sleep = ms => new Promise(r => setTimeout(r, ms));
const blocked = ['*googlesyndication*','*doubleclick*','*googletagmanager*','*google-analytics*','*adtrafficquality*','*googleadservices*','*fundingchoices*'];
let ws;
const timer = setTimeout(() => { chrome.kill('SIGKILL'); process.exit(2); }, 240000);
try {
  let page;
  for(let i=0;i<100&&!page;i++) {try {page=await(await fetch(`http://127.0.0.1:${PORT}/json/new?about:blank`,{method:'PUT'})).json();}catch {await sleep(100);}}
  if(!page)throw new Error('Chrome unavailable');
  ws=new WebSocket(page.webSocketDebuggerUrl);await new Promise(r=>ws.onopen=r);
  let id=0;const pending=new Map(),errors=[];
  ws.onmessage=e=>{const m=JSON.parse(e.data);if(pending.has(m.id)){pending.get(m.id)(m);pending.delete(m.id);}if(m.method==='Runtime.exceptionThrown')errors.push(m.params.exceptionDetails.exception?.description||'exception');};
  const send=(method,params={})=>new Promise(r=>{const i=++id;pending.set(i,r);ws.send(JSON.stringify({id:i,method,params}));});
  const ev=async expression=>{const m=await send('Runtime.evaluate',{expression,awaitPromise:true,returnByValue:true});if(m.result?.exceptionDetails)throw new Error(m.result.exceptionDetails.exception?.description||'evaluate failed');return m.result?.result?.value;};
  const until=async expression=>{for(let i=0;i<120;i++){if(await ev(expression))return;await sleep(150);}throw new Error('timed out: '+expression);};
  await send('Runtime.enable');await send('Page.enable');await send('Network.enable');await send('Network.setBlockedURLs',{urls:blocked});
  await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:2,mobile:true});
  async function clickText(text) {
    const box=await ev(`(() => {const b=[...document.querySelectorAll('button')].find(b=>!b.disabled&&(b.innerText.trim()===${JSON.stringify(text)}||b.querySelector('p.font-semibold')?.textContent===${JSON.stringify(text)}));if(!b)return null;b.scrollIntoView({block:'center'});const r=b.getBoundingClientRect();return{x:r.x+r.width/2,y:r.y+r.height/2};})()`);
    if(!box)throw new Error('missing button '+text);
    for(const type of ['mousePressed','mouseReleased'])await send('Input.dispatchMouseEvent',{type,x:box.x,y:box.y,button:'left',clickCount:1});await sleep(100);
  }
  async function navigate() {await send('Page.navigate',{url});await until(`!!document.querySelector('h1')`);await sleep(500);}
  const labels={experience:{beginner:'입문',intermediate:'중급',advanced:'상급'},weeklyDistance:{low:'20km 미만',medium:'20-40km',high:'40km 이상'},purpose:{training:'훈련',racing:'레이스',recovery:'회복',trail:'트레일',all:'다목적'},targetPace:{slow:'6분대 이상',medium:'5-6분대',fast:'5분 미만'},season:{all:'사계절',summer:'여름',winter:'겨울'},footArch:{normal:'정상',flat:'평발',high:'높은 아치'},footWidth:{standard:'표준',wide:'넓음',narrow:'좁음'},budget:{low:'20만원까지',mid:'30만원까지',high:'상한 없음'}};
  async function answer(profile) {
    for(const key of ['experience','weeklyDistance','purpose','targetPace','season','footArch','footWidth']){await clickText(labels[key][profile[key]]);await clickText('다음');}
    const injuries={plantarFasciitis:'족저근막염',achillesTendinopathy:'아킬레스 건염',kneeIssues:'무릎 통증',shinSplints:'정강이 통증'};
    for(const i of profile.injuries.length?profile.injuries:['none'])await clickText(i==='none'?'없음':injuries[i]);
    await clickText('다음');await clickText(labels.budget[profile.budget]);await clickText('결과 보기');
  }
  const report=[];
  async function check(test) {
    await until(`!!document.querySelector('#recommend-results')`);
    const actual=await ev(`(() => {const r=document.querySelector('#recommend-results');return{names:[...r.querySelectorAll('h3')].map(e=>e.textContent),text:document.body.innerText,links:[...document.querySelectorAll('a[href*="/shoes/"]')].map(e=>new URL(e.href).pathname),width:innerWidth,overflow:document.documentElement.scrollWidth>innerWidth};})()`);
    if(JSON.stringify(actual.names)!==JSON.stringify(test.results.map(s=>s.name)))throw new Error(test.label+' ranking differs from engine');
    if(/SANCHO RUNNER TYPE|삼국지 러너 분석|내 유형 공유/.test(actual.text))throw new Error('archetype feature remains');
    if(actual.overflow)throw new Error('mobile overflow');
    for(const link of actual.links)if(!test.results.some(s=>link.replace(/\/$/,'')==='/shoes/'+s.slug))throw new Error('injury panel ignored profile '+link);
    const first=test.results[0];
    const weight=first.comparisonToAvg.weight;
    const delta=weight===0?'평균':`${weight>0?'+':'-'}${Math.abs(weight)}g`;
    const comparison=await ev(`(() => {const p=[...document.querySelectorAll('p')].find(p=>p.textContent==='추천 신발 평균 대비');return p?.parentElement.textContent;})()`);
    if(!comparison?.includes('무게'+delta))throw new Error('weight sign/average incorrect: '+comparison);
    if(test.results.some(s=>s.matchWarnings.some(w=>w.includes('주의 필요')))&&!actual.text.includes('주의 필요'))throw new Error('caution hidden');
    await ev(`document.querySelector('#recommend-results').scrollIntoView({block:'start'})`);await sleep(200);
    const shot=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync(path.join(output,test.label+'.png'),Buffer.from(shot.result.data,'base64'));
    await send('Emulation.setDeviceMetricsOverride',{width:320,height:740,deviceScaleFactor:2,mobile:true});
    await sleep(100);if(await ev('document.documentElement.scrollWidth>innerWidth'))throw new Error('320px overflow');
    await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:2,mobile:true});
    report.push({label:test.label,count:actual.names.length,links:actual.links.length});console.log(report.at(-1));
  }
  await navigate();await answer(profiles[0].profile);await check(profiles[0]);
  if(mode!=='smoke') {
    for(const test of profiles.slice(1)) {
      await ev(`sessionStorage.setItem('recommend-profile',${JSON.stringify(JSON.stringify(test.profile))})`);
      await navigate();await check(test);
    }
    // A failed data request must show retry, never a fake empty result. Retrying preserves the completed answers.
    await ev('sessionStorage.clear()');await send('Network.setBlockedURLs',{urls:[...blocked,'*shoes-card.json*']});await navigate();await answer(profiles[0].profile);
    await until(`document.body.innerText.includes('신발 데이터를 불러오지 못했어요')`);
    if(await ev(`document.body.innerText.includes('조건에 맞는 신발을 찾지 못했습니다')`))throw new Error('network failure treated as empty');
    await send('Network.setBlockedURLs',{urls:blocked});await clickText('다시 불러오기');await check({...profiles[0],label:'network-retry'});
    await navigate();await check({...profiles[0],label:'restored'});
    await clickText('다시 하기');await until(`!![...document.querySelectorAll('button')].find(b=>b.innerText.trim()==='다음')`);
    if(await ev(`sessionStorage.getItem('recommend-profile')!==null`))throw new Error('reset did not clear session');
    await ev(`sessionStorage.setItem('recommend-profile','{"budget":"broken"}')`);await navigate();
    if(await ev(`!!document.querySelector('#recommend-results')`))throw new Error('corrupt session restored');
    if(await ev(`sessionStorage.getItem('recommend-profile')!==null`))throw new Error('corrupt session not cleared');
  }
  if(errors.length)throw new Error(errors.join('\n'));
  fs.writeFileSync(path.join(output,'report.json'),JSON.stringify({report,errors},null,2));
  console.log('recommend QA passed');
} finally {clearTimeout(timer);ws?.close();chrome.kill('SIGKILL');}
