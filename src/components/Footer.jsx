import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '../i18n/LanguageContext.jsx'

gsap.registerPlugin(ScrollTrigger)

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

const STORE_LINKS = {
  google:
    'https://play.google.com/store/apps/details?id=com.cirakas.inflow.app',
  apple: 'https://apps.apple.com/in/app/inflow-team-coordination/id6753862375',
}

function StoreBadge({ store }) {
  const { t } = useLanguage()

  if (store === 'google') {
    return (
      <a
        href={STORE_LINKS.google}
        className="footer__store-badge"
        aria-label={t('footer.googlePlayAria')}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="footer__store-icon" aria-hidden="true">
          <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
            <path d="M1.2 1.4v21.2c0 .7.8 1.1 1.4.7l12.2-7.1-12.2-7.3c-.6-.4-1.4 0-1.4.5Z" fill="#00C1FF" />
            <path d="M14.8 13.1 3.1 20.9c-.5.4-.3 1.1.3 1.1h.2l12.9-7.5-1.7-1.4Z" fill="#FF3A44" />
            <path d="M14.8 10.9 3.6 3.4c-.6-.4-1.4 0-1.4.6v.1l11.3 6.5 1.3-1.7Z" fill="#FFD300" />
            <path d="M17.1 11.6 14.8 10.9l-1.3 1.6 1.3 1.6 2.3-.7c.7-.2.7-1.2 0-1.4Z" fill="#00E676" />
          </svg>
        </span>
        <span className="footer__store-copy">
          <span className="footer__store-eyebrow">{t('footer.getItOn')}</span>
          <span className="footer__store-name">{t('footer.googlePlay')}</span>
        </span>
      </a>
    )
  }

  return (
    <a
      href={STORE_LINKS.apple}
      className="footer__store-badge"
      aria-label={t('footer.appStoreAria')}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="footer__store-icon" aria-hidden="true">
        <svg width="20" height="24" viewBox="0 0 20 24" fill="currentColor">
          <path d="M15.8 12.6c0-2.5 1.4-3.8 3.5-4.1-1.3-1.9-3.4-2.1-4.1-2.1-1.8-.2-3.5 1.1-4.4 1.1-.9 0-2.3-1-3.8-1-2 0-3.8 1.2-4.8 3-2.1 3.6-.5 8.8 1.5 11.7 1 1.5 2.2 3.1 3.8 3.1 1.5 0 2.1-1 3.9-1 1.8 0 2.3 1 3.9.9 1.6 0 2.6-1.5 3.6-3 1.1-1.6 1.6-3.2 1.6-3.3-.1 0-3.1-1.2-3.1-4.9Z" />
          <path d="M13 3.7c.8-1 1.4-2.4 1.2-3.7-1.2.1-2.6.8-3.4 1.8-.8.9-1.4 2.3-1.2 3.6 1.3.1 2.6-.6 3.4-1.7Z" />
        </svg>
      </span>
      <span className="footer__store-copy">
        <span className="footer__store-eyebrow">{t('footer.downloadOn')}</span>
        <span className="footer__store-name">{t('footer.appStore')}</span>
      </span>
    </a>
  )
}

export default function Footer() {
  const footerRef = useRef(null)
  const { t } = useLanguage()

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: '[data-footer="inner"]',
          start: 'top 88%',
          once: true,
        },
      })

      timeline
        .from('[data-footer="brand"] > *', {
          y: 20,
          autoAlpha: 0,
          duration: 0.48,
          stagger: 0.08,
          ease: 'power3.out',
        })
        .from(
          '[data-footer="aside"] > *',
          {
            x: 24,
            autoAlpha: 0,
            duration: 0.48,
            stagger: 0.08,
            ease: 'power3.out',
          },
          '-=0.34',
        )
        .from(
          '[data-footer="divider"]',
          {
            scaleX: 0,
            duration: 0.45,
            ease: 'power2.inOut',
            transformOrigin: 'left center',
          },
          '-=0.18',
        )
        .from(
          '[data-footer="copyright"]',
          {
            y: 12,
            autoAlpha: 0,
            duration: 0.38,
            ease: 'power2.out',
          },
          '-=0.28',
        )
        .from(
          '[data-footer="wordmark"]',
          {
            y: 40,
            autoAlpha: 0,
            duration: 0.62,
            ease: 'power3.out',
          },
          '-=0.3',
        )
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer__inner" data-footer="inner">
        <div className="footer__hero">
          <div className="footer__brand-main" data-footer="brand">
            <a href="/" className="footer__logo" aria-label={t('footer.homeAria')}>
              <img src="/inflow-logo.png" alt="InFlow" className="footer__logo-img" />
            </a>
            <p className="footer__desc">{t('footer.description')}</p>
          </div>

          <div className="footer__aside" data-footer="aside">
            <p className="footer__tagline">{t('footer.tagline')}</p>
            <div className="footer__stores">
              <StoreBadge store="google" />
              <StoreBadge store="apple" />
            </div>
          </div>
        </div>

        <div className="footer__divider" data-footer="divider" aria-hidden="true" />

        <p className="footer__copyright" data-footer="copyright">
          {t('footer.copyright')}
        </p>
      </div>

      <div className="footer__wordmark-wrap" aria-hidden="true">
        <p className="footer__wordmark" data-footer="wordmark">
          {'INFLOW'.split('').map((letter, index) => (
            <span key={index} className="footer__wordmark-letter">
              {letter}
            </span>
          ))}
        </p>
      </div>
    </footer>
  )
}
