# Project Scaffolding — 核心規範摘要

來源：https://github.com/hmohamed01/Claude-Code-Scaffolding-Skill

一個「像 IDE 專案精靈」的 scaffolding skill，支援 70+ 種專案類型。
本專案採用它建議的 **React (Vite)** 慣例：

## 本專案採用的 React + Vite 慣例
- 套件管理：npm；語言：TypeScript（strict）
- 建置：Vite；程式碼品質可再加 ESLint / Prettier
- 目錄分層：資料 / 樣式 / 邏輯(hooks) / 畫面(components) 分開

## Scaffolding skill 對 React+Vite 的快速起手指令（參考）
```bash
npm create vite@latest my-app -- --template react-ts
```

## 建議的最佳實務（本專案已遵循）
- 每種東西只有一個「該放的地方」，降低尋找成本
- 設定集中（tokens.css / content.ts）而非散落各處
- 元件小而單一職責（Nav、Hero、SkillCard…）
- 附 README / 架構文件，讓後續維護者（含 AI）能快速上手

> 若日後要擴充成多頁、加後端或資料庫，這個 skill 也涵蓋 Next.js、FastAPI、
> 各種全端樣板，可再依需求切換。
