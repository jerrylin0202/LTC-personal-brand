import { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'
import { prefersReducedMotion } from '../../lib/useReducedMotion'

/**
 * 自訂游標：一個小點（即時跟隨）+ 一個外圈（帶阻尼延遲跟隨）。
 * 移到連結 / 按鈕 / 卡片時外圈放大，強化互動回饋。
 * 觸控裝置與 reduced-motion 不啟用（維持系統游標）。
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return
    if (prefersReducedMotion() || matchMedia('(pointer: coarse)').matches) return

    document.body.classList.add('has-custom-cursor')

    const dotX = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power2.out' })
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power2.out' })
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.35, ease: 'power3.out' })
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.35, ease: 'power3.out' })

    const onMove = (e: MouseEvent) => {
      dotX(e.clientX)
      dotY(e.clientY)
      ringX(e.clientX)
      ringY(e.clientY)
    }

    const grow = () => gsap.to(ring, { scale: 1.8, duration: 0.3, ease: 'power3.out' })
    const shrink = () => gsap.to(ring, { scale: 1, duration: 0.3, ease: 'power3.out' })

    const interactive = 'a, button, .skill-card, .exp__item'
    const bind = () =>
      document.querySelectorAll(interactive).forEach((el) => {
        el.addEventListener('mouseenter', grow)
        el.addEventListener('mouseleave', shrink)
      })

    window.addEventListener('mousemove', onMove)
    bind()

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.body.classList.remove('has-custom-cursor')
      document.querySelectorAll(interactive).forEach((el) => {
        el.removeEventListener('mouseenter', grow)
        el.removeEventListener('mouseleave', shrink)
      })
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
