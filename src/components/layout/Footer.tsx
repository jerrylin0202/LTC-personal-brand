import { site, ui } from '../../data/content'
import { useLang, pick } from '../../lib/useLang'

export function Footer() {
  const { lang } = useLang()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <div className="section__head" style={{ marginBottom: 0 }}>
            <span className="eyebrow">{ui.contact.eyebrow}</span>
          </div>
          <p className="footer__cta">
            {pick(ui.footerCta, lang)}<br />
            <a className="footer__mail" href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
        <div className="footer__meta">
          © {new Date().getFullYear()} {site.name} · {site.nameEn}
        </div>
      </div>
    </footer>
  )
}
