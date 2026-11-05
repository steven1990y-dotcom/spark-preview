# Nori 交互稿（可真实操作）

离线 H5 预览包。手机打开应是一台可点的 App，而不是设计规范长页。

## 打开哪个文件

| 文件 | 用途 |
|------|------|
| **`index.html` / `app.html`** | **主入口**：单机 390×844 可操作交互稿（推荐） |
| `design.html` | 原设计系统长页（色板 / 规范 / 多机画廊） |
| `v1.2.js` / `v1.2.css` | 交互补丁与样式 |
| `app-shell.js` / `app-shell.css` | App 壳：真路由、隐藏画廊、设置内配色与演示态 |
| `design-tokens.json` | 设计 Token 源 |
| `nori-v4/` · `nori-v5/` | Nori 形象资源 |

部署到 GitHub Pages 时，把本目录内容作为站点根（或 `/nori/` 子路径）上传即可。**不要**只发 `design.html` 当首页。

## 本地预览

```bash
cd /workspace/nori-design-preview
python3 -m http.server 8765
# 浏览器打开 http://127.0.0.1:8765/app.html
# 或 http://127.0.0.1:8765/ （index = App）
```

## 可操作路径（验收）

1. 底部 Tab：首页 / 账单 / ＋ / 报表 / 洞察  
2. ＋ → 三种记法 → 草稿确认 → 入库（金额与列表会变；ledger 写入 localStorage）  
3. 报表下钻、洞察、家庭 / 设置 / 付费墙  
4. 设置内：中英、深色、配色、演示空态（不并排多机）  
5. 真机 Safari 可直接点；桌面为居中单壳

## 说明

- 默认中文（无 `nori_lang` 偏好时）。  
- 规范长页仍保留在 `design.html`，App 设置页有入口。  
- 本稿不发起网络请求、不真实扣款。
