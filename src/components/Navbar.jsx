import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const productLinks = [
  { label: 'Documentation', href: 'https://docs.azoraengine.org' },
  { label: 'Studio', href: 'https://azorastudio.org' },
  { label: 'Language', href: 'https://azoralang.org' },
]

const ecosystemLinks = [
  { label: 'Azora Labs', description: 'Open-source organization', href: 'https://azoralabs.org' },
  { label: 'Azora Language', description: 'Safe systems programming', href: 'https://azoralang.org' },
  { label: 'Azora Studio', description: 'Development environment', href: 'https://azorastudio.org' },
  { label: 'Azora Dev', description: 'Community and technical Q&A', href: 'https://azora.dev' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [ecosystemOpen, setEcosystemOpen] = useState(false)
  const ecosystemRef = useRef(null)

  useEffect(() => {
    const closeMenus = (event) => {
      if (event.key === 'Escape') {
        setMobileOpen(false)
        setEcosystemOpen(false)
      }
      if (event.type === 'pointerdown' && !ecosystemRef.current?.contains(event.target)) {
        setEcosystemOpen(false)
      }
    }
    document.addEventListener('keydown', closeMenus)
    document.addEventListener('pointerdown', closeMenus)
    return () => {
      document.removeEventListener('keydown', closeMenus)
      document.removeEventListener('pointerdown', closeMenus)
    }
  }, [])

  return (
    <nav className="site-nav">
      <div className="site-nav__inner">
        <Link to="/" className="site-nav__brand" aria-label="Azora Engine home">
          <img src="/assets/azora_logo.svg" alt="" />
          <span>Azora Engine</span>
        </Link>
        <div className="site-nav__meta">
          <span>Game engine</span>
          <span className="version-tag">v0.0.4</span>
        </div>
        <div className="site-nav__links">
          {productLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          <div className="site-nav__ecosystem" ref={ecosystemRef}>
            <button
              className={`site-nav__ecosystem-trigger ${ecosystemOpen ? 'is-open' : ''}`}
              aria-expanded={ecosystemOpen}
              aria-haspopup="menu"
              onClick={() => setEcosystemOpen((open) => !open)}
            >
              Azora Labs
            </button>
            {ecosystemOpen && (
              <div className="site-nav__dropdown" role="menu">
                {ecosystemLinks.map((link) => (
                  <a key={link.href} href={link.href} role="menuitem">
                    <strong>{link.label}</strong><span>{link.description}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
          <a className="site-nav__donate" href="https://azoralabs.org/donate">Donate</a>
        </div>
        <button
          onClick={() => setMobileOpen((open) => !open)}
          className="site-nav__toggle"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span aria-hidden="true">{mobileOpen ? '×' : '☰'}</span>
        </button>
      </div>
      {mobileOpen && (
        <div className="site-nav__mobile">
          {productLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          <span className="site-nav__mobile-label">Azora Labs</span>
          {ecosystemLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          <a className="site-nav__mobile-donate" href="https://azoralabs.org/donate">Donate</a>
        </div>
      )}
    </nav>
  )
}
