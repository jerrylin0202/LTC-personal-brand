import { useEffect, useState } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

/** 純函式版：在非 React 環境（如 useSmoothScroll 內）判斷一次。 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return window.matchMedia(QUERY).matches
}

/** React hook 版：會隨使用者系統設定變化即時更新。 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState<boolean>(prefersReducedMotion)

  useEffect(() => {
    const mql = window.matchMedia(QUERY)
    const onChange = () => setReduced(mql.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return reduced
}
