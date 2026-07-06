import { site, ui } from '../../data/content'
import { useLang, pick } from '../../lib/useLang'

export function Nav() {
  const { lang, toggle } = useLang()
  return (
    <nav className="nav">
      <a className="nav__brand" href="#hero">{site.nameEn}</a>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }}>
        <ul className="nav__links">
          {site.nav.map((item) => (
            <li key={item.id}>
              <a className="nav__link" href={`#${item.id}`}>{pick(item.label, lang)}</a>
            </li>
          ))}
        </ul>
        <button
          className="nav__link"
          onClick={toggle}
          aria-label="Switch language"
          style={{
            border: '1px solid currentColor', borderRadius: '999px',
            padding: '3px 12px', background: 'none', color: 'inherit',
            cursor: 'pointer', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)',
          }}
        >
          {pick(ui.langLabel, lang)}
        </button>
      </div>
    </nav>
  )
}
