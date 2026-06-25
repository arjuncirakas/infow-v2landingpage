import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const NAV_IDS = [
  { id: 'platform', key: 'platform' },
  { id: 'people', key: 'people' },
  { id: 'process', key: 'process' },
  { id: 'industries', key: 'industries' },
  { id: 'faq', key: 'faq' },
]

function GlobeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 12h18M12 3c2.5 2.8 4 6 4 9s-1.5 6.2-4 9M12 3c-2.5 2.8-4 6-4 9s1.5 6.2 4 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M2.5 4.5L6 8L9.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ArrowUpRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M3.5 10.5L10.5 3.5M10.5 3.5H5.25M10.5 3.5V8.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function LanguageSwitcher({ className = '' }) {
  const { language, setLanguage, languages, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)
  const active = languages.find((lang) => lang.code === language) ?? languages[0]

  useEffect(() => {
    if (!open) return undefined

    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [open])

  const selectLanguage = (code) => {
    setLanguage(code)
    setOpen(false)
  }

  const languageAria = t('nav.languageLabel').replace('{{label}}', active.label)

  return (
    <div className={`navbar__lang ${className}`.trim()} ref={rootRef}>
      <button
        type="button"
        className="navbar__lang-trigger"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={languageAria}
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        <span className="navbar__lang-icon">
          <GlobeIcon />
        </span>
        <span className="navbar__lang-code">{active.short}</span>
        <span className={`navbar__lang-chevron ${open ? 'navbar__lang-chevron--open' : ''}`}>
          <ChevronDown />
        </span>
      </button>

      {open && (
        <ul className="navbar__lang-menu" role="listbox" aria-label={t('nav.selectLanguage')}>
          {languages.map((lang) => (
            <li key={lang.code} role="option" aria-selected={lang.code === language}>
              <button
                type="button"
                className={[
                  'navbar__lang-option',
                  lang.code === language ? 'navbar__lang-option--active' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                onClick={() => selectLanguage(lang.code)}
              >
                <span className="navbar__lang-option-code">{lang.short}</span>
                <span>{lang.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('')

  const navLinks = useMemo(
    () =>
      NAV_IDS.map((link) => ({
        id: link.id,
        href: `#${link.id}`,
        label: t(`nav.${link.key}`),
      })),
    [t],
  )

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map((link) => document.getElementById(link.id)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-42% 0px -48% 0px', threshold: [0, 0.15, 0.35, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [navLinks])

  useEffect(() => {
    if (!menuOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [menuOpen])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeMenu()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [closeMenu])

  return (
    <header
      className={[
        'navbar',
        scrolled ? 'navbar--scrolled' : '',
        menuOpen ? 'navbar--open' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="navbar__shell">
        <div className="navbar__float">
          <a href="/" className="navbar__logo" aria-label={t('nav.inflowHome')}>
            <img src="/inflow-logo.png" alt="InFlow" className="navbar__logo-img" />
          </a>

          <nav className="navbar__nav" aria-label="Main navigation">
            <ul className="navbar__list">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={[
                      'navbar__link',
                      activeId === link.id ? 'navbar__link--active' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar__actions">
            <LanguageSwitcher className="navbar__lang--desktop" />

            <a href="/sign-in" className="navbar__cta" onClick={closeMenu}>
              <span className="navbar__cta-label">{t('nav.signIn')}</span>
              <span className="navbar__cta-icon" aria-hidden="true">
                <ArrowUpRight />
              </span>
            </a>

            <button
              type="button"
              className="navbar__toggle"
              aria-expanded={menuOpen}
              aria-controls="navbar-mobile-menu"
              aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="navbar__toggle-line" />
              <span className="navbar__toggle-line" />
            </button>
          </div>
        </div>
      </div>

      <div
        id="navbar-mobile-menu"
        className={['navbar__mobile', menuOpen ? 'navbar__mobile--open' : '']
          .filter(Boolean)
          .join(' ')}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className="navbar__mobile-backdrop"
          aria-label={t('nav.closeMenu')}
          tabIndex={menuOpen ? 0 : -1}
          onClick={closeMenu}
        />
        <div className="navbar__mobile-panel" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="navbar__mobile-top">
            <div className="navbar__mobile-brand">
              <span className="navbar__mobile-kicker">{t('nav.navigation')}</span>
              <span className="navbar__mobile-brandname">InFlow</span>
            </div>
            <button
              type="button"
              className="navbar__mobile-close"
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              <span>{t('nav.close')}</span>
              <CloseIcon />
            </button>
          </div>

          <nav className="navbar__mobile-nav" aria-label="Mobile navigation">
            <ul className="navbar__mobile-list">
              {navLinks.map((link, index) => (
                <li key={link.id} style={{ '--i': index }}>
                  <a
                    href={link.href}
                    className={[
                      'navbar__mobile-link',
                      activeId === link.id ? 'navbar__mobile-link--active' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    onClick={closeMenu}
                    tabIndex={menuOpen ? 0 : -1}
                  >
                    <span className="navbar__mobile-index">0{index + 1}</span>
                    <span className="navbar__mobile-label">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar__mobile-footer">
            <div className="navbar__mobile-footer-row">
              <LanguageSwitcher className="navbar__lang--panel" />
              <a href="/sign-in" className="navbar__mobile-signin" onClick={closeMenu}>
                {t('nav.signIn')}
              </a>
            </div>
            <a href="#contact" className="navbar__mobile-cta" onClick={closeMenu}>
              <span className="navbar__mobile-cta-label">{t('nav.requestDemo')}</span>
              <span className="navbar__mobile-cta-icon" aria-hidden="true">
                <ArrowUpRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
