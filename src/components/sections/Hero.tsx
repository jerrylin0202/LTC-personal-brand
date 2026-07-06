import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../../lib/gsap'
import { prefersReducedMotion } from '../../lib/useReducedMotion'
import { usePointerParallax } from '../../lib/useInteractions'
import { useLang, pick } from '../../lib/useLang'
import { GeometricBackdrop } from '../ui/GeometricBackdrop'
import { site } from '../../data/content'

export function Hero() {
  const rootRef = useRef<HTMLElement>(null)
  const parallaxRef = usePointerParallax<HTMLDivElement>()
  const { lang } = useLang()
  const tagline = pick(site.tagline, lang)

  useEffect(() => {
    const root = rootRef.current
    if (!root || prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      const lines = root.querySelectorAll('.line-inner')
      gsap
        .timeline({ delay: 0.15 })
        .from(lines, { yPercent: 120, duration: 1, ease: 'power4.out', stagger: 0.12 })
        .from('.hero__role', { opacity: 0, y: 20, duration: 0.6 }, '-=0.6')
        .from('.hero__meta > *', { opacity: 0, y: 20, duration: 0.5, stagger: 0.08 }, '-=0.4')
        .from('.hero__scroll', { opacity: 0, duration: 0.5 }, '-=0.2')

      gsap.to('.hero__inner', {
        yPercent: -30, opacity: 0.2, ease: 'none',
        scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', scrub: true },
      })
      gsap.to('.geo__svg', {
        yPercent: 20, scale: 1.15, ease: 'none',
        scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', scrub: true },
      })
    }, root)
    return () => {
      ctx.revert()
      ScrollTrigger.refresh()
    }
  }, [])

  return (
    <section id="hero" className="hero" ref={rootRef}>
      <div ref={parallaxRef} style={{ position: 'absolute', inset: 0 }}>
        <div data-depth="0.6" style={{ position: 'absolute', inset: 0 }}>
          <GeometricBackdrop />
        </div>
      </div>

      <div className="container hero__inner">
        <p className="hero__role">{site.role}</p>
        <h1 className="hero__title">
          {tagline.map((line, i) => (
            <span key={i}>
              <span className={`line-inner${i === tagline.length - 1 ? ' accent' : ''}`}>{line}</span>
            </span>
          ))}
        </h1>
        <div className="hero__meta">
          <span>{site.name} / {site.nameEn}</span>
          <span>{pick(site.credential, lang)}</span>
          <span>{pick(site.location, lang)}</span>
        </div>
      </div>

      <div className="hero__scroll">
        <span className="hero__scroll-line" />
        SCROLL
      </div>
    </section>
  )
}
