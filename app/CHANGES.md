# Pages app 子路径适配

目标地址：https://steven1990y-dotcom.github.io/spark-preview/app/

状态：待发布；本次仅准备静态产物，发布由下一步完成。临时隧道仍可能失效。

## 修改文件

- `web/vite.config.ts`
- `web/index.html`
- `web/src/lib/paths.ts`
- `web/src/lib/paths.test.tsx`
- `web/src/lib/navigation.ts`
- `web/src/RouteApp.tsx`
- `web/src/App.tsx`
- `web/src/Startup.tsx`
- `web/src/main.tsx`
- `web/src/components/Brand.tsx`
- `web/src/components/DemoBet.tsx`
- `web/src/components/PlanetTexture.tsx`
- `web/src/config/wallet.ts`
- `web/src/pages/BatchTemplates.ts`
- `web/src/pages/BatchPage.tsx`
- `web/src/pages/ChainPage.tsx`
- `web/src/pages/Faucet.tsx`
- `web/src/pages/PageContent.tsx`
- `web/scripts/check-bundle.mjs`
- `web/scripts/check-bundle.test.mjs`
- `web/README.md`
- `tasks/HANDOFF-QA.md`

生成内容：本目录完整 Vite 构建（含 `.vite/manifest.json`、assets、logo、planet-engine.js 和其余 public 内容），以及与 index.html 完全相同的 404.html、.nojekyll、本说明。历史会话日志及旧路径产物已移至 `/tmp/spark-pages-session-logs/`，不随站点发布。

## 用法

```bash
cd /workspace/xinghuo/web
# 本地默认根路径；不设置 base 环境变量
npm test
npm run build
npm run preview

# Pages 构建，独立输出以保留本地根路径 dist
npx vite build --base=/spark-preview/app/ --outDir=/tmp/spark-pages-app-dist --emptyOutDir
mkdir -p ../tasks/pages-app
cp -a /tmp/spark-pages-app-dist/. ../tasks/pages-app/
cp ../tasks/pages-app/index.html ../tasks/pages-app/404.html
touch ../tasks/pages-app/.nojekyll

# 也可直接生成到 web/dist（会覆盖本地根路径产物）
VITE_BASE=/spark-preview/app/ npm run build
# 等价：BASE=/spark-preview/app/ npm run build
# 或：npx vite build --base=/spark-preview/app/
```

CLI --base 优先于配置，环境变量 VITE_BASE 优先于 BASE，无设置时为 `/`。发布时将本目录完整内容置于 spark-preview 仓库 Pages 发布根目录下的 app/，不是直接放到仓库根。404.html 支持 SPA 深层路径刷新；GitHub Pages 的初次 HTTP 状态可能仍为 404。

## 验证

- `web/ npm test`：20 个测试文件、1000 个测试通过，包含根路径和 Pages 子路径用例。
- `web/ npm run build`：默认 `/` 构建通过，首屏 JS 检查通过（239190 / 500000 bytes）。
- 独立 Pages 构建通过；index.html 的 script/link 地址均以 `/spark-preview/app/` 开头。
- 404.html 与 index.html 字节一致；public 文件完整保留。
- 应用源码、文档及部署路径均使用 app；第三方钱包包中的厂商外部深链协议保持原样。
- 未读取 .secrets/、未发链上交易、未修改合约和 tasks/tunnel.sh。
