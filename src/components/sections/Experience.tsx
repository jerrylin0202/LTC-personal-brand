import { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'
import { prefersReducedMotion } from '../../lib/useReducedMotion'
import { useLang, pick } from '../../lib/useLang'
import { projects, ui } from '../../data/content'

export function Experience() {
  const rootRef = useRef<HTMLElement>(null)
  const { lang } = useLang()

  useEffect(() => {
    const root = rootRef.current
    if (!root || prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.exp__item').forEach((item) => {
        gsap.from(item, {
          opacity: 0, x: -40, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 85%' },
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" className="section" ref={rootRef}>
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">{ui.experience.eyebrow}</span>
          <h2 className="section__title">{pick(ui.experience.title, lang)}</h2>
        </div>

        <div className="exp__list">
          {projects.map((p, i) => (
            <article className="exp__item" key={i}>
              <span className="exp__year">{pick(p.period, lang)}</span>
              <div>
                <p className="exp__role" style={{ color: 'var(--color-accent)', marginBottom: 'var(--space-2)' }}>
                  {pick(p.domain, lang)}
                </p>
                <h3 className="exp__title">{pick(p.title, lang)}</h3>
                <p className="exp__role">{pick(p.role, lang)}</p>
                <p className="exp__summary">{pick(p.summary, lang)}</p>
              </div>
              <div className="exp__tags">
                {pick(p.tags, lang).map((t, j) => (
                  <span className="exp__tag" key={j}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
