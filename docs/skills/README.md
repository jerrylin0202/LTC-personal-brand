# 參考用的三個 Skill

你在需求裡列了三個 GitHub skill。**在這個對話環境無法直接幫你安裝** skill（skill 是唯讀的）。
要真正安裝到 Claude 桌面版，請到 **Settings → Capabilities** 手動加入。

不過我已把每個 skill 的**核心規範摘要**存在這個資料夾，並實際套用在本專案的設計與流程上，
所以就算還沒安裝，效果也已經體現在程式碼裡。

| Skill | 檔案 | 在本專案怎麼被應用 |
|-------|------|------------------|
| **UI/UX Pro Max** | `ui-ux-pro-max.md` | 無障礙對比、動畫時長 150–300ms、transform/opacity、stagger、語意色彩 token、幾何/深色風格 |
| **Debugging & Error Recovery** | `debugging-and-error-recovery.md` | build 驗證流程：先重現→定位→修根因→驗證（本專案 build 抓到的兩個型別錯誤就是照此修掉的） |
| **Project Scaffolding** | `scaffolding.md` | 專案骨架分層（data/styles/lib/components）、Vite+React+TS 設定慣例 |

## 來源
- UI/UX Pro Max: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- Debugging & Error Recovery: https://github.com/addyosmani/agent-skills/blob/main/skills/debugging-and-error-recovery/SKILL.md
- Scaffolding: https://github.com/hmohamed01/Claude-Code-Scaffolding-Skill
