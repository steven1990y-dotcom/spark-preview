# P0 verification (2026-11-05)

Served with `python3 -m http.server 8000`; tested `/?app` using Google Chrome headless and the Node CDP script `qa-p0.cjs`, with a 390 × 844 mobile viewport.

| Check | Result |
| --- | --- |
| Home demo controls | PASS: absent from DOM; `controls()` returns empty in App mode; previously inserted controls removed by `patchHome()`. All seven state selectors and notifications/widgets entry available in Settings. |
| Manual save once | PASS: ledger and transaction DOM rows 4 → 5; net spending $217.20 → $227.45 for a $10.25 expense. Legacy inline submit handler removed; v1.2 owns submissions. |
| Receipt confirmation | PASS: rows 4 → 5, spending $241.20, home active with toast. |
| Confirm all | PASS: rows 4 → 6, spending $260.00, home active with toast. |
| Draft save / merge | PASS: save adds one row; merge adds none; both return home with toast. |
| Quick-add amount | PASS: matches home initially, after saves, after `renderScreens()`, and after selecting the budget demo from Settings. No hardcoded $1,284.50 in index.html, v1.2.js, or app-shell.js. |
| JavaScript exceptions | PASS: none during the test. |

Implementation: `index.html`, `v1.2.js`, `app-shell.js`.
Verification: `qa-p0.cjs`, this report.

Re-run with a local HTTP server and Chrome launched with `--headless --no-sandbox --remote-debugging-port=9222`, then `node qa-p0.cjs`.
