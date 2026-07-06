import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from './gsap'
import { prefersReducedMotion } from './useReducedMotion'

/**
 * 全站阻尼捲動（smooth / damped scroll）。
 * - 用 Lenis 讓滾動有慣性與阻尼感（lerp 越小越黏）。
 * - 把 Lenis 接到 GSAP 的 ticker，並在每次捲動時更新 ScrollTrigger，
 *   讓捲動動畫與阻尼捲動同步、不會抖動。
 * - 若使用者開啟「減少動態」，直接不啟用，回到瀏覽器原生捲動。
 */
export function useSmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return

    const lenis = new Lenis({
      duration: 1.1,          // 阻尼時間（秒），越大越滑
      lerp: 0.1,              // 線性插值，越小越黏、阻尼感越重
      wheelMultiplier: 1,
      smoothWheel: true,
    })

    // Lenis 每一幀回報捲動位置 → 通知 ScrollTrigger 重新計算
    lenis.on('scroll', ScrollTrigger.update)

    // 用 GSAP 的 ticker 驅動 Lenis（單一 rAF 迴圈，效能較佳）
    const raf = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
    }
  }, [])
}
