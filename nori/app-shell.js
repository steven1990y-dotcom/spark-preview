/* Nori App shell：单机真路由 + 默认中文 + 设置内配色/演示态 */
(function () {
  if (!document.body.classList.contains('nori-app')) return;

  const SCREEN_KEY = 'nori_app_screen';
  const LEDGER_KEY = 'nori_app_ledger';
  const DRAFT_KEY = 'nori_app_drafts';
  let current = 'home';
  let restoredOnce = false;

  function $(s, root) { return (root || document).querySelector(s); }
  function $$(s, root) { return [...(root || document).querySelectorAll(s)]; }

  function showScreen(id) {
    if (!id) return;
    const el = $('#screen-' + id);
    if (!el) {
      // 回落首页，避免空白
      if (id !== 'home' && $('#screen-home')) id = 'home';
      else return;
    }
    current = id;
    try { sessionStorage.setItem(SCREEN_KEY, id); } catch (e) {}
    $$('#screens .screen-item').forEach((item) => {
      const on = item.id === 'screen-' + id;
      item.classList.toggle('is-active', on);
      item.hidden = !on;
      item.setAttribute('aria-hidden', on ? 'false' : 'true');
    });
    const content = $('#screen-' + id + ' .phone-content');
    if (content) content.scrollTop = 0;
  }

  // 覆盖画廊滚动导航 → 真换屏（赋值全局绑定，供 inline / v1.2 调用）
  go = function (id) { showScreen(id); };

  const prevRender = renderScreens;
  renderScreens = function () {
    prevRender();
    queueMicrotask(() => {
      injectSettingsExtras();
      showScreen(current || 'home');
      persistFromPatch();
      syncPaletteButtons();
    });
  };

  function injectSettingsExtras() {
    const host = $('#screen-settings .phone-content');
    if (!host || host.querySelector('.app-settings-block')) return;
    const zh = (typeof lang !== 'undefined' && lang === 'zh');
    const block = document.createElement('div');
    block.className = 'app-settings-block';
    block.innerHTML =
      '<div class="section-label">' + (zh ? '配色' : 'Palette') + '</div>' +
      '<div class="card settings-list" style="padding:12px 16px">' +
      '<p class="muted" style="font-size:12px;margin:0 0 8px">' + (zh ? '三套暖色，与设计规范同源。' : 'Same three warm palettes as the design system.') + '</p>' +
      '<div class="palette-row" role="group" aria-label="palette">' +
      '<button type="button" data-app-palette="cream" aria-pressed="false">Cream</button>' +
      '<button type="button" data-app-palette="apricot" aria-pressed="false">Apricot</button>' +
      '<button type="button" data-app-palette="sage" aria-pressed="false">Sage</button>' +
      '</div></div>' +
      '<div class="section-label">' + (zh ? '演示状态' : 'Demo states') + '</div>' +
      '<div class="card settings-list" style="padding:12px 16px">' +
      '<p class="muted" style="font-size:12px;margin:0 0 8px">' + (zh ? '用开关预览空态，不并排多机。' : 'Preview empty states without gallery phones.') + '</p>' +
      '<div class="demo-row" role="group" aria-label="demo">' +
      '<button type="button" data-app-demo="normal" aria-pressed="true">' + (zh ? '正常' : 'Normal') + '</button>' +
      '<button type="button" data-app-demo="empty" aria-pressed="false">' + (zh ? '首次' : 'First use') + '</button>' +
      '<button type="button" data-app-demo="quiet" aria-pressed="false">' + (zh ? '安静日' : 'Quiet day') + '</button>' +
      '<button type="button" data-app-demo="budget" aria-pressed="false">' + (zh ? '无预算' : 'No budget') + '</button>' +
      '</div></div>' +
      '<a class="app-link-design" href="spec.html">' + (zh ? '查看设计规范长页 →' : 'Open design system →') + '</a>';
    const firstSection = host.querySelector('.section-label');
    if (firstSection) host.insertBefore(block, firstSection);
    else host.appendChild(block);
    syncPaletteButtons();
  }

  function syncPaletteButtons() {
    const active = (typeof activePalette !== 'undefined') ? activePalette : 'cream';
    $$('[data-app-palette]').forEach((b) => {
      b.setAttribute('aria-pressed', String(b.dataset.appPalette === active));
    });
    const state = (window.NoriV12 && NoriV12.state && NoriV12.state.homeState) || 'normal';
    $$('[data-app-demo]').forEach((b) => {
      b.setAttribute('aria-pressed', String(b.dataset.appDemo === state));
    });
  }

  function persistFromPatch() {
    try {
      if (!window.NoriV12 || !NoriV12.state) return;
      localStorage.setItem(LEDGER_KEY, JSON.stringify(NoriV12.state.saved || []));
      localStorage.setItem(DRAFT_KEY, JSON.stringify(NoriV12.state.drafts || []));
    } catch (e) {}
  }

  function restoreLedgerIntoPatch() {
    if (restoredOnce) return;
    try {
      if (!window.NoriV12 || !NoriV12.state) return;
      const saved = JSON.parse(localStorage.getItem(LEDGER_KEY) || 'null');
      const drafts = JSON.parse(localStorage.getItem(DRAFT_KEY) || 'null');
      if (Array.isArray(saved) && saved.length) {
        NoriV12.state.saved.splice(0, NoriV12.state.saved.length, ...saved);
      }
      if (Array.isArray(drafts)) {
        NoriV12.state.drafts.splice(0, NoriV12.state.drafts.length, ...drafts);
      }
      restoredOnce = true;
      if (typeof syncTotals === 'function') syncTotals();
      if (typeof refreshDrafts === 'function') refreshDrafts();
    } catch (e) {}
  }

  document.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    if (b.dataset.appPalette) {
      const pal = document.querySelector('[data-palette="' + b.dataset.appPalette + '"]');
      if (pal) pal.click();
      syncPaletteButtons();
      return;
    }
    if (b.dataset.appDemo) {
      if (window.NoriV12 && NoriV12.state) {
        NoriV12.state.homeState = b.dataset.appDemo;
        current = 'home';
        renderScreens();
      }
      return;
    }
  }, true);

  document.addEventListener('click', () => { setTimeout(persistFromPatch, 30); });
  // capture：赶在 v1.2 stopImmediatePropagation 之前挂上
  document.addEventListener('submit', () => { setTimeout(persistFromPatch, 30); }, true);

  function ensureDefaultZh() {
    try {
      if (!localStorage.getItem('nori_lang') && typeof setLang === 'function') {
        setLang('zh', true);
      }
    } catch (e) {}
  }

  
  // 入库后强制落盘
  if (typeof phoneToast === 'function') {
    const _toast = phoneToast;
    phoneToast = function () {
      const r = _toast.apply(this, arguments);
      setTimeout(persistFromPatch, 0);
      return r;
    };
  }

  function bootApp() {
    ensureDefaultZh();
    try { current = sessionStorage.getItem(SCREEN_KEY) || 'home'; } catch (e) { current = 'home'; }
    if (current === 'onboarding') current = 'home';
    restoreLedgerIntoPatch();
    injectSettingsExtras();
    showScreen(current);
    if (typeof syncTotals === 'function') try { syncTotals(); } catch (e) {}
    syncPaletteButtons();
  }

  // v1.2 在本文件之前执行；再等一拍确保 NoriV12 已挂好
  setTimeout(bootApp, 0);
  window.addEventListener('load', () => {
    restoreLedgerIntoPatch();
    injectSettingsExtras();
    showScreen(current || 'home');
    if (typeof syncTotals === 'function') try { syncTotals(); } catch (e) {}
    syncPaletteButtons();
  });
})();
