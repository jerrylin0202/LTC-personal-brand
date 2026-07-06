# 個人品牌網站 — 專案架構文件

> 給「未來的你」和「任何一版 Claude」看的說明書。
> 讀完這份，你應該能知道：每個檔案在做什麼、想改東西要動哪裡、怎麼部署。

---

## 1. 這是什麼

林子鈞的個人品牌**單頁網站**（single-page，靠捲動瀏覽）。
四個區塊：**Hero（首頁）→ About（關於）→ Experience（經歷）→ Skills（技能）**。

風格：黑白為底、科技橘 `#F2913D` / 珊瑚紅 `#F25749` 跳色、幾何視覺、
大量互動動畫（阻尼捲動、進場揭示、滑鼠視差、3D 傾斜、自訂游標）。

---

## 2. 技術選型（為什麼這樣選）

| 技術 | 用途 | 為什麼選它 |
|------|------|-----------|
| **Vite** | 開發伺服器 + 打包 | 啟動快、設定少，`build` 出來就是純靜態檔，最適合 GitHub Pages |
| **React 18 + TypeScript** | UI 元件 | 元件化好維護；TS 型別讓「所有 Claude 模型」都能準確理解程式意圖、減少改壞 |
| **GSAP + ScrollTrigger** | 動畫引擎 | 業界最穩的動畫庫，捲動觸發、時間軸、quickTo 都很順 |
| **Lenis** | 阻尼捲動 | 一個輕量套件就能做出「滑順、有慣性」的捲動手感 |
| **純 CSS + 設計變數** | 樣式 | 不引入 Tailwind，降低設定與心智負擔；用 CSS 變數當設計 token，改一處全站生效 |

> 為什麼不用 Next.js？因為要部署到 GitHub Pages（純靜態），Next 的靜態輸出會多很多設定摩擦。單頁品牌站用 Vite 更乾淨、更好維護。

---

## 3. 目錄結構

```
personal-brand/
├── index.html                  # 網頁進入點（掛載 #root）
├── package.json                # 依賴與指令
├── vite.config.ts              # Vite 設定（★ GitHub Pages 的 base path 在這）
├── tsconfig*.json              # TypeScript 設定
├── .github/workflows/deploy.yml# 推到 main 自動部署到 GitHub Pages
│
├── docs/                       # 文件（就是這份 + skill 參考）
│   ├── ARCHITECTURE.md
│   └── skills/                 # 三個外部 skill 的參考規範
│
└── src/
    ├── main.tsx                # React 進入點，載入全域 CSS
    ├── App.tsx                 # 組合所有區塊（★ 想加/移除區塊改這）
    │
    ├── data/
    │   └── content.ts          # ★★ 所有網站文字都在這，改內容只改這一檔
    │
    ├── styles/
    │   ├── tokens.css          # ★ 設計 token：顏色/字體/間距/動畫參數
    │   ├── globals.css         # reset + 基礎排版 + 共用 class
    │   └── components.css       # 各區塊的樣式（用註解分段）
    │
    ├── lib/                    # 可重複使用的邏輯（hooks / 工具）
    │   ├── gsap.ts             # GSAP 統一入口（註冊外掛）
    │   ├── useSmoothScroll.ts  # Lenis 阻尼捲動
    │   ├── useReducedMotion.ts # 偵測「減少動態」偏好
    │   ├── useReveal.ts        # 捲動進場（淡入 + stagger）
    │   └── useInteractions.ts  # 互動：磁吸 / 3D 傾斜 / 滑鼠視差
    │
    └── components/
        ├── layout/             # Nav、Footer
        ├── sections/           # Hero、About、Experience、Skills（四大區塊）
        └── ui/                 # GeometricBackdrop（幾何背景）、CustomCursor（自訂游標）
```

**分層原則**：資料（data）／樣式（styles）／邏輯（lib）／畫面（components）分開放，
每一種東西只有一個「該去的地方」，找檔案不用猜。

---

## 4. 常見維護情境：我想改 X，要動哪個檔？

| 我想…… | 改這裡 |
|--------|--------|
| 改網站上的**文字 / 標語 / 專案內容** | `src/data/content.ts` |
| 換**主色 / 跳色 / 字體 / 間距** | `src/styles/tokens.css` |
| 調某個區塊的**版面樣式** | `src/styles/components.css`（找對應註解段落） |
| **新增 / 移除一個區塊** | 在 `src/components/sections/` 新增元件，再到 `src/App.tsx` 引用 |
| 調**阻尼捲動手感**（黏度、慣性） | `src/lib/useSmoothScroll.ts` 的 `lerp` / `duration` |
| 調**進場動畫**（位移、間隔） | `src/lib/useReveal.ts` 或各區塊內的 GSAP timeline |
| 調**滑鼠互動**（磁吸力道、傾斜角度） | `src/lib/useInteractions.ts` |
| 放**個人照 / 圖片** | 把圖丟進 `public/`，在 `content.ts` 把對應 `photo: null` 改成 `'/圖檔名'` |

---

## 5. 內容區塊現況（哪些留空待補）

| 區塊 | 狀態 | 待補素材 |
|------|------|---------|
| Hero | ✅ 已有標語、姓名、角色 | 若要換一句話定位，改 `content.ts` 的 `tagline` |
| About | ⚠️ 文字已放、**個人照留空**（顯示佔位框） | 個人照或代表視覺 |
| Experience | ✅ 三個專案（依現有資料整理、已淡化敏感資訊） | 可再補作品連結、成果數據 |
| Skills | ✅ 四組技能 | 可再增減項目 |
| Contact（Footer） | ✅ Email 已放 | 可加 LinkedIn / GitHub 連結 |

> 尚未有素材的地方會自動顯示虛線「佔位框」，一眼看得出這裡還要補東西。

---

## 6. 本機開發

```bash
cd personal-brand
npm install        # 安裝依賴（第一次或換機器時）
npm run dev        # 開發模式，開 http://localhost:5173
npm run build      # 產出正式檔到 dist/（會先做 TypeScript 型別檢查）
npm run preview    # 預覽 build 後的結果
```

---

## 7. 部署到 GitHub Pages

已附自動部署設定 `.github/workflows/deploy.yml`。步驟：

1. 把 `personal-brand/` 推到 GitHub repo 的 `main` 分支。
2. GitHub repo → **Settings → Pages → Source** 選 **GitHub Actions**。
3. 之後每次 push 到 main 就會自動 build 並上線。

**重要：base path**
GitHub Pages 網址是 `https://<帳號>.github.io/<repo 名稱>/`，
所以 `vite.config.ts` 的 `base` 要等於 `"/<repo 名稱>/"`（預設是 `/personal-brand/`）。
- 若你的 repo 叫別的名字 → 改 `vite.config.ts` 的 `repoName`，並同步改 workflow 裡的 `BASE_PATH`。
- 若用自訂網域或 `<帳號>.github.io`（根目錄）→ 把 `base` 改成 `"/"`。

---

## 8. 無障礙與動畫的關係（重要觀念）

程式裡有偵測 `prefers-reduced-motion`。這**不會減少一般訪客看到的動畫**——
它只在「訪客自己的作業系統開啟了『減少動態』」時才生效，屬於無障礙保險絲。
一般人打開網站，會看到完整的阻尼捲動、進場、視差、傾斜、自訂游標等所有互動動畫。

若你想**再加更多動畫**，建議加在：
- `src/lib/useInteractions.ts`（新的滑鼠互動 hook）
- 各 section 元件內的 `gsap.context(...)` timeline（新的進場/捲動效果）

---

## 9. 給 Claude 的維護提示

- 想找「內容」→ `src/data/content.ts`；想找「樣式變數」→ `src/styles/tokens.css`。
- 所有 GSAP 都從 `src/lib/gsap.ts` import，不要各自 `registerPlugin`。
- 改完務必跑 `npm run build`（含型別檢查）確認沒壞，這是驗收關卡。
- 除錯流程參考 `docs/skills/debugging-and-error-recovery.md`：先重現、再定位、修根因、加測試。
