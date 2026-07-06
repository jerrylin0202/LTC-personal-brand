import { useEffect, useRef } from 'react'
import { gsap } from './gsap'
import { prefersReducedMotion } from './useReducedMotion'

/* =====================================================================
   互動動畫 hooks — 滑鼠驅動、即時回饋。
   全部尊重 reduced-motion（訪客開了才會停用）。
   ===================================================================== */

/**
 * 磁吸 (magnetic)：元素會被游標「吸」過去一點，離開後彈回。
 * 適合按鈕、連結、品牌字。
 */
export function useMagnetic<T extends HTMLElement>(strength = 0.4) {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return
    const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' })
    const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' })

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      const relX = e.clientX - (r.left + r.width / 2)
      const relY = e.clientY - (r.top + r.height / 2)
      xTo(relX * strength)
      yTo(relY * strength)
    }
    const onLeave = () => {
      xTo(0)
      yTo(0)
    }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [strength])
  return ref
}

/**
 * 3D 傾斜 (tilt)：卡片依游標位置做 perspective 傾斜，帶浮起感。
 */
export function useTilt<T extends HTMLElement>(max = 10) {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return
    const rotX = gsap.quickTo(el, 'rotationX', { duration: 0.4, ease: 'power2.out' })
    const rotY = gsap.quickTo(el, 'rotationY', { duration: 0.4, ease: 'power2.out' })
    gsap.set(el, { transformPerspective: 800, transformStyle: 'preserve-3d' })

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width - 0.5
      const py = (e.clientY - r.top) / r.height - 0.5
      rotY(px * max)
      rotX(-py * max)
    }
    const onLeave = () => {
      rotX(0)
      rotY(0)
    }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [max])
  return ref
}

/**
 * 滑鼠視差 (parallax)：容器內的 [data-depth] 子元素依游標移動，
 * depth 越大移動越多，做出層次感（Hero 幾何背景用）。
 */
export function usePointerParallax<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    const root = ref.current
    if (!root || prefersReducedMotion()) return
    const layers = Array.from(root.querySelectorAll<HTMLElement>('[data-depth]'))
    const setters = layers.map((l) => ({
      x: gsap.quickTo(l, 'x', { duration: 1, ease: 'power3.out' }),
      y: gsap.quickTo(l, 'y', { duration: 1, ease: 'power3.out' }),
      depth: parseFloat(l.dataset.depth || '0'),
    }))
    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      const dx = (e.clientX - cx) / cx
      const dy = (e.clientY - cy) / cy
      setters.forEach((s) => {
        s.x(dx * s.depth * 40)
        s.y(dy * s.depth * 40)
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])
  return ref
}
