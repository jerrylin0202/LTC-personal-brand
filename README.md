# 林子鈞 · Personal Brand

黑白 × 科技橘/珊瑚紅的個人品牌單頁網站。Vite + React + TypeScript + GSAP + Lenis。
大量互動動畫：阻尼捲動、進場揭示、滑鼠視差、3D 傾斜卡片、自訂游標。

## 快速開始

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # 產出 dist/（含 TypeScript 型別檢查）
```

## 想改東西？

- 改**文字/專案內容** → `src/data/content.ts`
- 改**顏色/字體/間距** → `src/styles/tokens.css`
- 加/移除**區塊** → `src/components/sections/` + `src/App.tsx`

完整說明見 **[docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)**。

## 部署

推到 GitHub main → repo Settings → Pages → Source 選「GitHub Actions」即自動上線。
（`vite.config.ts` 的 `base` 需等於 `/<repo 名稱>/`，預設 `/personal-brand/`。）
