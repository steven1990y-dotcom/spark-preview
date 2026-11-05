# P0 自查（2026-11-05）

方法：读 v1.2.js / index.html / app-shell.js + headless Chromium（390×844）实测。

| # | 问题 | 结论 | 处理 |
|---|------|------|------|
| 1 | 首页露出调试状态条 | **未发现**。首页仅有手机系统状态栏（9:41/信号），无 debug/演示态条；截图确认 | 无改动 |
| 2 | 保存后流水重复写入 | **存在**（手动记账表单）：连点/重复提交会写入 2 条（4→6）。单次提交正常；index.html 旧 submit 被 v1.2 捕获阶段拦截，不双写；小票草稿保存无重复 | 提交加 800ms 防重锁 `data-saving`，实测重复提交只 +1 |
| 3 | 入库后错跳报表下钻 | **存在**：手动保存后调用 `openFiltered(category,'reports')` 跳到报表筛选页 | 改为 `syncTotals(); go('home')`，toast 在首页显示 |
| 4 | 「+」面板金额与首页不一致 | **存在**：「+」面板写死 $1,284.50，首页按流水计算 $217.20 | `syncTotals()` 同步写入 `#screen-quick-add .amount`，实测两处一致且随保存更新 |

改动文件：仅 `v1.2.js`（3 处）。无 JS 报错。已重新打包 `/workspace/nori-prototype.tar.gz`。
