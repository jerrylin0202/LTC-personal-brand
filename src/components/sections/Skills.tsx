import { useReveal } from '../../lib/useReveal'
import { useTilt } from '../../lib/useInteractions'
import { useLang, pick } from '../../lib/useLang'
import { skills, ui, type SkillGroup } from '../../data/content'

function SkillCard({ group }: { group: SkillGroup }) {
  const tiltRef = useTilt<HTMLDivElement>(12)
  const { lang } = useLang()
  return (
    <div className="skill-card" ref={tiltRef} data-reveal>
      <div className="skill-card__label">{pick(group.label, lang)}</div>
      <ul className="skill-card__items">
        {pick(group.items, lang).map((item, i) => (
          <li className="skill-card__item" key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export function Skills() {
  const ref = useReveal<HTMLElement>({ stagger: 0.1 })
  const { lang } = useLang()

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container">
        <div className="section__head">
          <span className="eyebrow" data-reveal>{ui.skills.eyebrow}</span>
          <h2 className="section__title" data-reveal>{pick(ui.skills.title, lang)}</h2>
        </div>

        <div className="skills__grid">
          {skills.map((group, i) => (
            <SkillCard key={i} group={group} />
          ))}
        </div>
      </div>
    </section>
  )
}
