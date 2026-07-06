# UI/UX Pro Max — 核心規範摘要

來源：https://github.com/nextlevelbuilder/ui-ux-pro-max-skill

依優先序（1 最重要）挑重點，本專案已套用打勾者：

1. **無障礙 (CRITICAL)**：文字對比 ≥ 4.5:1、可見 focus ring、圖示按鈕加 aria-label、
   支援 `prefers-reduced-motion`、色彩不作為唯一資訊來源。✅ 已套用
2. **觸控與互動 (CRITICAL)**：點擊區 ≥ 44×44px、間距 ≥ 8px、載入要有回饋、
   不能只靠 hover。✅（連結/卡片皆有 hover+焦點狀態）
3. **效能 (HIGH)**：圖片 WebP/AVIF + lazy load、預留空間避免 CLS、只動 transform/opacity。✅
4. **風格選擇 (HIGH)**：風格對應產品類型、全站一致、用 SVG 圖示（不要 emoji 當圖示）、
   色票取自產業。✅（幾何 + 深色 + 科技橘/珊瑚紅）
5. **版面 / RWD (HIGH)**：mobile-first、系統化斷點、內文 ≥ 16px、不要橫向捲動、4/8 間距節奏。✅
6. **字體與色彩 (MEDIUM)**：行高 1.5–1.75、每行 65–75 字、字級有級距、語意色彩 token（不要在元件寫死 hex）。✅
7. **動畫 (MEDIUM)**：微互動 150–300ms、進場 ease-out / 退場 ease-in、
   退場比進場快、stagger 30–50ms、動畫要有意義、彈簧手感、尊重 reduced-motion。✅
8. **表單與回饋 (MEDIUM)**：可見 label、錯誤顯示在欄位旁、送出有 loading/成功/失敗狀態。（本站無表單）
9. **導覽 (HIGH)**：位置固定一致、目前位置要標示、返回可預期。✅
10. **圖表與資料 (LOW)**：圖例、tooltip、無障礙色彩。（本站未用圖表）

**專業感常被忽略的點**：圖示用向量不用 emoji、圖示尺寸/描邊一致、
按壓回饋不要造成 layout shift、深淺模式分別測對比。
