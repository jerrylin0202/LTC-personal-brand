import { useEffect, useRef } from 'react'
import { gsap } from './gsap'
import { prefersReducedMotion } from './useReducedMotion'

interface RevealOptions {
  /** 選取容器內哪些子元素做進場（預設 [data-reveal]） */
  selector?: string
  /** 位移距離 px */
  y?: number
  /** 每個元素間隔（stagger）秒 */
  stagger?: number
  /** ScrollTrigger 觸發點 */
  start?: string
}

/**
 * 通用「捲動進場」hook。
 * 在區塊掛上 ref，區塊內任何 [data-reveal] 元素會在捲入視窗時，
 * 由下往上淡入，並依序 stagger。尊重 reduced-motion。
 *
 * 用法：
 *   const ref = useReveal<HTMLElement>()
 *   <section ref={ref}> <h2 data-reveal>...</h2> ... </section>
 */
export function useReveal<T extends HTMLElement>(opts: RevealOptions = {}) {
  const ref = useRef<T>(null)
  const {
    selector = '[data-reveal]',
    y = 40,
    stagger = 0.08,
    start = 'top 80%',
  } = opts

  useEffect(() => {
    const root = ref.current
    if (!root) return

    // reduced-motion：直接顯示，不做動畫
    if (prefersReducedMotion()) return

    const targets = root.querySelectorAll(selector)
    if (targets.length === 0) return

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        y,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger,
        scrollTrigger: {
          trigger: root,
          start,
        },
      })
    }, root)

    return () => ctx.revert()
  }, [selector, y, stagger, start])

  return ref
}
