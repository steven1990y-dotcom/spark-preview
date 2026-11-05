// Run after python3 -m http.server 8000 and Chrome with --remote-debugging-port=9222.
const assert = require('node:assert/strict');
(async () => {
  const targets = await (await fetch('http://127.0.0.1:9222/json')).json();
  const ws = new WebSocket(targets.find(t => t.type === 'page').webSocketDebuggerUrl);
  await new Promise(resolve => ws.addEventListener('open', resolve, {once:true}));
  let seq = 0; const pending = new Map(), errors = [];
  ws.addEventListener('message', ({data}) => {
    const m = JSON.parse(data);
    if (m.method === 'Runtime.exceptionThrown') errors.push(m.params.exceptionDetails.text);
    if (m.id) {const p = pending.get(m.id); pending.delete(m.id); m.error ? p.reject(m.error) : p.resolve(m.result);}
  });
  const call = (method, params={}) => new Promise((resolve,reject) => {const id=++seq;pending.set(id,{resolve,reject});ws.send(JSON.stringify({id,method,params}));});
  const evaluate = async expression => {
    const r = await call('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});
    if (r.exceptionDetails) throw Error(JSON.stringify(r.exceptionDetails));
    return r.result.value;
  };
  const settle = () => evaluate('new Promise(r=>setTimeout(r,80))');
  const snapshot = () => evaluate(`({width:innerWidth, count:NoriV12.state.saved.length, rows:document.querySelectorAll('#transaction-rows > .patch-row').length, home:document.querySelector('#screen-home .home-hero .amount')?.textContent, quick:document.querySelector('#screen-quick-add .amount').textContent, screen:document.querySelector('.screen-item.is-active')?.id, toast:!!document.querySelector('#screen-home .patch-toast'), controls:document.querySelectorAll('#screen-home .patch-controls, #screen-home [data-patch^="state:"], #screen-home [data-go="system-preview"]').length})`);
  const reset = async () => {await evaluate("NoriV12.reset();go('home')"); await settle();};
  const check = (s,count,total) => {assert.equal(s.width,390); assert.equal(s.count,count);assert.equal(s.rows,count);assert.equal(s.home,total);assert.equal(s.quick,total);assert.equal(s.screen,'screen-home');assert.equal(s.controls,0);assert.ok(s.toast);};
  try {
    await call('Runtime.enable');
    await call('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
    await call('Page.navigate',{url:'http://127.0.0.1:8000/?app'});
    for(let n=0;n<100;n++){if(await evaluate("document.readyState==='complete' && !!window.NoriV12"))break;await new Promise(r=>setTimeout(r,50));}
    await evaluate('localStorage.clear();sessionStorage.clear();location.reload()');
    await new Promise(r=>setTimeout(r,500));
    await reset();
    let s=await snapshot();assert.equal(s.controls,0);assert.equal(s.home,s.quick);assert.equal(await evaluate('controls()'), '');
    assert.equal(await evaluate("document.querySelectorAll('#screen-settings [data-app-demo]').length"),7);
    await evaluate(`document.querySelector('#screen-home .phone-content').insertAdjacentHTML('beforeend','<div class="patch-controls"><button>有流水</button></div><button data-go="system-preview">通知与小组件</button>');patchHome()`);
    assert.equal((await snapshot()).controls,0);
    console.log('PASS App home: no demo controls; existing controls removed; all 7 states in Settings');
    await reset();
    await evaluate(`go('add-manual');const f=document.querySelector('#manual-form');f.elements.merchant.value='P0 manual';f.elements.amount.value='10.25';f.querySelector('[type=submit]').click()`);
    await settle();s=await snapshot();check(s,5,'$227.45');
    console.log('PASS manual: 4 → 5 ledger and DOM rows; $217.20 → $227.45 once; home + toast');
    await evaluate('renderScreens()');await settle();s=await snapshot();assert.equal(s.home,'$227.45');assert.equal(s.quick,s.home);assert.equal(s.controls,0);
    console.log('PASS totals remain equal after renderScreens');
    await reset();await evaluate("openDraft(2);document.querySelector('#confirm-save').click()");await settle();check(await snapshot(),5,'$241.20');
    console.log('PASS receipt confirmation: +1 row, home + toast, matching totals');
    await reset();await evaluate("go('drafts');document.querySelector('[data-patch=all]').click();document.querySelector('[data-patch=allCommit]').click()");await settle();check(await snapshot(),6,'$260.00');
    console.log('PASS confirm all: +2 rows, home + toast, matching totals');
    await reset();await evaluate("go('drafts');document.querySelector('[data-patch=\"save:2\"]').click()");await settle();check(await snapshot(),5,'$241.20');
    await reset();await evaluate("openDraft(1);document.querySelector('[data-patch=merge]').click()");await settle();check(await snapshot(),4,'$217.20');
    console.log('PASS draft save and merge: home + toast, correct row counts and totals');
    await reset();await evaluate("go('settings');document.querySelector('[data-app-demo=budget]').click()");await settle();s=await snapshot();assert.equal(s.controls,0);assert.equal(s.screen,'screen-home');assert.equal(s.home,s.quick);
    console.log('PASS Settings demo state navigation: home has no controls and matching totals');
    assert.deepEqual(errors,[]);console.log('PASS no JavaScript exceptions');
  } finally {ws.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
