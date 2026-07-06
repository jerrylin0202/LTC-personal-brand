import { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'
import { prefersReducedMotion } from '../../lib/useReducedMotion'

/**
 * 幾何背景：同心多邊形 + 細格線。
 * - 用 SVG 畫幾何線框（輕量、可縮放、好維護），比 3D 引擎更好讓人讀懂。
 * - GSAP 讓多邊形緩慢反向旋轉，帶出科技/未來感。
 * - reduced-motion 時維持靜態不旋轉。
 * 之後若想換成 3D，可把這個元件換成 Three.js 版本，介面不變。
 */
export function GeometricBackdrop() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (prefersReducedMotion() || !svgRef.current) return
    const rings = svgRef.current.querySelectorAll('[data-ring]')
    const ctx = gsap.context(() => {
      rings.forEach((ring, i) => {
        gsap.to(ring, {
          rotation: i % 2 === 0 ? 360 : -360,
          transformOrigin: '50% 50%',
          repeat: -1,
          ease: 'none',
          duration: 60 + i * 20,
        })
      })
    })
    return () => ctx.revert()
  }, [])

  // 產生正 N 邊形的點座標
  const polygon = (cx: number, cy: number, r: number, sides: number) =>
    Array.from({ length: sides }, (_, i) => {
      const a = (Math.PI * 2 * i) / sides - Math.PI / 2
      return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`
    }).join(' ')

  return (
    <div className="geo" aria-hidden="true">
      <div className="geo__grid" />
      <svg className="geo__svg" viewBox="0 0 400 400" ref={svgRef}>
        <polygon data-ring className="geo__ring" points={polygon(200, 200, 190, 6)} />
        <polygon data-ring className="geo__ring geo__ring--accent" points={polygon(200, 200, 150, 3)} />
        <polygon data-ring className="geo__ring" points={polygon(200, 200, 110, 6)} />
        <circle data-ring className="geo__ring" cx="200" cy="200" r="70" />
        <circle className="geo__dot" cx="200" cy="10" r="4" />
        <circle className="geo__dot" cx="200" cy="390" r="4" />
      </svg>
    </div>
  )
}
