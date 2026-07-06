/* =====================================================================
   網站內容 — 所有文字集中在此（中英雙語）。
   需要翻譯的欄位用 { zh, en } 成對存放；語言切換由 useLang 決定顯示哪個。
   要改文字 / 新增專案，只改這個檔案。
   ===================================================================== */

export type Lang = 'zh' | 'en'
export interface L { zh: string; en: string }
export interface LList { zh: string[]; en: string[] }

export interface Project {
  period: L
  domain: L
  title: L
  role: L
  summary: L
  tags: LList
}

export interface SkillGroup {
  label: L
  items: LList
}

export const site = {
  name: '林子鈞',
  nameEn: 'Jerry Lin',
  role: 'Project / Technical Program Manager · AI-driven delivery',
  email: 'jerrylin0202@gmail.com',
  // Hero 主標三行（最後一行為跳色）
  tagline: {
    zh: ['專案管理', '系統思維', 'AI 落地'],
    en: ['Project', 'Systems', 'AI Delivery'],
  } as LList,
  location: { zh: 'Based in Taiwan', en: 'Based in Taiwan' } as L,
  credential: { zh: 'PMP · 6 yrs', en: 'PMP · 6 yrs' } as L,
  nav: [
    { id: 'hero', label: { zh: '首頁', en: 'Home' } },
    { id: 'about', label: { zh: '關於', en: 'About' } },
    { id: 'experience', label: { zh: '經歷', en: 'Work' } },
    { id: 'skills', label: { zh: '技能', en: 'Skills' } },
  ] as { id: string; label: L }[],
}

export const ui = {
  about: { eyebrow: '01 / ABOUT', title: { zh: '關於我', en: 'About' } as L },
  experience: { eyebrow: '02 / EXPERIENCE', title: { zh: '經歷與專案', en: 'Experience' } as L },
  skills: { eyebrow: '03 / SKILLS', title: { zh: '技能', en: 'Skills' } as L },
  contact: { eyebrow: 'CONTACT' },
  langLabel: { zh: 'EN', en: '中' } as L, // 切換鈕上顯示的「另一個語言」
  photoPlaceholder: { zh: '個人照 / 視覺素材（待補）', en: 'Portrait / visual (coming soon)' } as L,
  footerCta: { zh: '一起把想法做成專案。', en: "Let's turn ideas into shipped projects." } as L,
}

export const about = {
  intro: {
    zh: [
      '我是林子鈞（Jerry），PMP 認證的專案管理師，六年橫跨 GIS、大數據到 AI 的專案經驗。習慣站在業務與工程中間，把模糊的需求拆解成能交付、能運行的系統。',
      '從防救災、公共安全到政府與能源領域，我同時扮演 PM、系統分析與資料分析的角色——管過價金上億的專案，也親手把 RAG、Text-to-SQL、LLM 導入真實的決策場景。',
      '好的專案經理不只會管甘特圖，而是能把技術聽懂、把業務講清楚、把價值準時交付。',
    ],
    en: [
      "I'm Jerry Lin, a PMP-certified project manager with six years spanning GIS, big data, and AI—working at the seam between business and engineering to turn vague requirements into systems that ship and run.",
      "Across disaster response, public safety, government, and energy, I've worn the PM, systems-analyst, and data-analyst hats at once—managing projects worth over NT$100M and personally bringing RAG, Text-to-SQL, and LLMs into real decision-making.",
      "A great PM doesn't just manage Gantt charts—they understand the tech, translate the business, and deliver on time.",
    ],
  } as LList,
  points: [
    { k: { zh: '角色', en: 'Role' }, v: { zh: 'PM / TPM · PMP', en: 'PM / TPM · PMP' } },
    { k: { zh: '專長', en: 'Focus' }, v: { zh: '專案交付 · 系統分析 · AI 落地', en: 'Delivery · Systems Analysis · AI' } },
    { k: { zh: '場域', en: 'Domains' }, v: { zh: '防救災 · 政府 · 能源 · 不動產', en: 'Disaster response · Gov · Energy · Real estate' } },
    { k: { zh: '語言', en: 'Languages' }, v: { zh: '中文 · English (TOEIC 850)', en: 'Chinese · English (TOEIC 850)' } },
  ] as { k: L; v: L }[],
  photo: null as string | null,
}

export const projects: Project[] = [
  {
    period: { zh: '現職 · 2025–2026', en: 'Current · 2025–2026' },
    domain: { zh: '政府 / 公共服務', en: 'Government / Public service' },
    title: { zh: 'AI 決策支援 Agent', en: 'AI Decision-Support Agent' },
    role: { zh: 'Sub PM / SA', en: 'Sub PM / SA' },
    summary: {
      zh: '以專家型 AI Agent 打造決策輔助系統，結合 RAG 與 Text-to-SQL，把分散資料轉化為給高階決策者的即時建議；主責需求訪談、系統分析到 Agent 設計。',
      en: 'Built a decision-support system with expert AI agents—combining RAG and Text-to-SQL to turn scattered data into real-time recommendations for senior leaders. Owned requirements, systems analysis, and agent design.',
    },
    tags: {
      zh: ['AI Agent', 'RAG', 'Text-to-SQL', '決策支援'],
      en: ['AI Agent', 'RAG', 'Text-to-SQL', 'Decision support'],
    },
  },
  {
    period: { zh: '2023–2025', en: '2023–2025' },
    domain: { zh: '公共安全', en: 'Public safety' },
    title: { zh: '防救災大數據平台', en: 'Disaster-Response Big-Data Platform' },
    role: { zh: 'PM', en: 'PM' },
    summary: {
      zh: '主責跨機關數據倉儲專案，整合 20+ 資料集並建置 AI 視覺化平台，促成新台幣 5 億元後續預算編列。',
      en: 'Led a cross-agency data-warehouse project—integrating 20+ datasets and an AI visualization platform that helped secure NT$500M in follow-on budget.',
    },
    tags: {
      zh: ['大數據', '資料整合', 'AI 視覺化', '專案治理'],
      en: ['Big data', 'Data integration', 'AI viz', 'Governance'],
    },
  },
  {
    period: { zh: '2024–2025', en: '2024–2025' },
    domain: { zh: '公共安全', en: 'Public safety' },
    title: { zh: '山域搜救 3D GIS 平台', en: '3D GIS Search-&-Rescue Platform' },
    role: { zh: '專案管理', en: 'Project Manager' },
    summary: {
      zh: '在價金 1.6 億元的專案中，從提案、時程/範疇/成本到跨團隊整合皆一手主導，以混合式專案管理準時交付 MVP，縮短 70% 交付時間。',
      en: 'On a NT$160M project, I drove everything from the proposal to schedule, scope, cost, and cross-team integration—delivering the MVP on time with hybrid PM and cutting delivery time by 70%.',
    },
    tags: {
      zh: ['專案管理', '混合式 PM', '交付', '跨團隊'],
      en: ['Project mgmt', 'Hybrid PM', 'Delivery', 'Cross-team'],
    },
  },
  {
    period: { zh: '2024–2025', en: '2024–2025' },
    domain: { zh: '產品研發', en: 'Product R&D' },
    title: { zh: 'AI 產品研發與資料倉儲', en: 'AI Product R&D · Data Warehouse' },
    role: { zh: 'PM / 產品規劃', en: 'PM / Product Planning' },
    summary: {
      zh: '主導 TRONCube 資料倉儲產品規劃與異質資料優化，縮短 80% AI 模型建置時間；導入 Transformer 與 LLM 使模型精度達 90%，並提出專利申請。',
      en: 'Led TRONCube data-warehouse planning and heterogeneous-data optimization—cutting AI model build time by 80%; applied Transformers and LLMs to reach 90% model accuracy, and filed a patent.',
    },
    tags: {
      zh: ['資料倉儲', 'LLM', '模型優化', '專利'],
      en: ['Data warehouse', 'LLM', 'Model tuning', 'Patent'],
    },
  },
]

export const skills: SkillGroup[] = [
  {
    label: { zh: '專案管理', en: 'Project Mgmt' },
    items: {
      zh: ['專案治理（時程·範疇·成本·風險）', '利害關係人溝通', '混合式／敏捷', 'ISO 27001 合規', 'Pre-Sale／備標'],
      en: ['Governance (time·scope·cost·risk)', 'Stakeholder comms', 'Hybrid / Agile', 'ISO 27001 compliance', 'Pre-sale / bidding'],
    },
  },
  {
    label: { zh: '系統與分析', en: 'Systems & Analysis' },
    items: {
      zh: ['系統分析（SA）', '需求訪談', 'API／資料流設計', '系統測試／UAT'],
      en: ['Systems analysis (SA)', 'Requirements interviews', 'API / data-flow design', 'Testing / UAT'],
    },
  },
  {
    label: { zh: 'AI 與資料', en: 'AI & Data' },
    items: {
      zh: ['AI Agent · RAG · Text-to-SQL', 'LLM 應用與備標', 'Transformer 模型', 'Python · SQL', '資料視覺化（Tableau／Power BI）'],
      en: ['AI Agent · RAG · Text-to-SQL', 'LLM apps & bidding', 'Transformer models', 'Python · SQL', 'Data viz (Tableau / Power BI)'],
    },
  },
  {
    label: { zh: '工具', en: 'Tools' },
    items: {
      zh: ['Office · Teams', 'Figma', 'Git', 'SAS', 'Redmine'],
      en: ['Office · Teams', 'Figma', 'Git', 'SAS', 'Redmine'],
    },
  },
]
