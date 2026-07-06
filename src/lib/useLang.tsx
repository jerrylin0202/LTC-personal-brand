import { createContext, useContext, useState, type ReactNode } from 'react'
import type { Lang } from '../data/content'

interface LangState { lang: Lang; toggle: () => void }
const Ctx = createContext<LangState>({ lang: 'zh', toggle: () => {} })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('zh')
  const toggle = () => setLang((l) => (l === 'zh' ? 'en' : 'zh'))
  return <Ctx.Provider value={{ lang, toggle }}>{children}</Ctx.Provider>
}

export function useLang() {
  return useContext(Ctx)
}

/** 依目前語言從 { zh, en } 取值 */
export function pick<T>(pair: { zh: T; en: T }, lang: Lang): T {
  return pair[lang]
}
