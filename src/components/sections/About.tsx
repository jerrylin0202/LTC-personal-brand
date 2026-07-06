import { useReveal } from '../../lib/useReveal'
import { useLang, pick } from '../../lib/useLang'
import { about, ui } from '../../data/content'

export function About() {
  const ref = useReveal<HTMLElement>()
  const { lang } = useLang()

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <div className="section__head">
          <span className="eyebrow" data-reveal>{ui.about.eyebrow}</span>
          <h2 className="section__title" data-reveal>{pick(ui.about.title, lang)}</h2>
        </div>

        <div className="about__grid">
          <div>
            {pick(about.intro, lang).map((para, i) => (
              <p
                className="about__intro"
                data-reveal
                key={i}
                style={{ marginBottom: 'var(--space-6)' }}
              >
                {para}
              </p>
            ))}
            <ul className="about__points" style={{ marginTop: 'var(--space-8)' }}>
              {about.points.map((p, i) => (
                <li className="about__point" key={i} data-reveal>
                  <span className="about__point-k">{pick(p.k, lang)}</span>
                  <span className="about__point-v">{pick(p.v, lang)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="about__photo" data-reveal>
            {about.photo ? (
              <img src={about.photo} alt="林子鈞 Jerry Lin" />
            ) : (
              <div className="placeholder" style={{ height: '100%' }}>
                {pick(ui.photoPlaceholder, lang)}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
