# Nori v4 Final — Squircle

- **Shape:** Squircle (超圆角方), traced from Grok Bot `squircle-neutral-blue` silhouette
- **Default body:** `#F3E3C3` Cream Warm（在 `#FAF6EE` 画布与白卡片上对比清晰；官方 `#F1EFE9` 过浅易融进背景；`#E7B65C` 过跳，适合强调而非默认）
- **Eyes:** `#111111` black pills；无腮红/高光/描边/嘴巴
- **Master:** `nori-squircle.svg`（含全部图层，由 CSS class 切换状态）
- **Static frames:** `nori-squircle-{idle,thinking,orbit,notification,waiting,swirl,done}.svg`

## Scene → state

| App scene | State |
|---|---|
| Onboarding / Home greeting / Settings companion / Empty | idle |
| Receipt OCR / AI draft question | thinking |
| Longer AI work / insight generating feel | orbit |
| Quota / needs attention (paywall) | notification |
| Waiting for user confirm | waiting |
| Decorative working swirl | swirl |
| Confirm saved success | done |

## Animation params (CSS)

See `design-tokens.json` → `nori.animations` and `ui-preview/index.html` `.nori.m-*` rules.
