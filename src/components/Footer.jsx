import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function StoreBadge({ store }) {
  if (store === 'google') {
    return (
      <a href="#" className="footer__store-badge" aria-label="Get it on Google Play">
        <span className="footer__store-icon" aria-hidden="true">
          <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
            <path d="M1.2 1.4v21.2c0 .7.8 1.1 1.4.7l12.2-7.1-12.2-7.3c-.6-.4-1.4 0-1.4.5Z" fill="#00C1FF" />
            <path d="M14.8 13.1 3.1 20.9c-.5.4-.3 1.1.3 1.1h.2l12.9-7.5-1.7-1.4Z" fill="#FF3A44" />
            <path d="M14.8 10.9 3.6 3.4c-.6-.4-1.4 0-1.4.6v.1l11.3 6.5 1.3-1.7Z" fill="#FFD300" />
            <path d="M17.1 11.6 14.8 10.9l-1.3 1.6 1.3 1.6 2.3-.7c.7-.2.7-1.2 0-1.4Z" fill="#00E676" />
          </svg>
        </span>
        <span className="footer__store-copy">
          <span className="footer__store-eyebrow">Get it on</span>
          <span className="footer__store-name">Google Play</span>
        </span>
      </a>
    )
  }

  return (
    <a href="#" className="footer__store-badge" aria-label="Download on the App Store">
      <span className="footer__store-icon" aria-hidden="true">
        <svg width="20" height="24" viewBox="0 0 20 24" fill="currentColor">
          <path d="M15.8 12.6c0-2.5 1.4-3.8 3.5-4.1-1.3-1.9-3.4-2.1-4.1-2.1-1.8-.2-3.5 1.1-4.4 1.1-.9 0-2.3-1-3.8-1-2 0-3.8 1.2-4.8 3-2.1 3.6-.5 8.8 1.5 11.7 1 1.5 2.2 3.1 3.8 3.1 1.5 0 2.1-1 3.9-1 1.8 0 2.3 1 3.9.9 1.6 0 2.6-1.5 3.6-3 1.1-1.6 1.6-3.2 1.6-3.3-.1 0-3.1-1.2-3.1-4.9Z" />
          <path d="M13 3.7c.8-1 1.4-2.4 1.2-3.7-1.2.1-2.6.8-3.4 1.8-.8.9-1.4 2.3-1.2 3.6 1.3.1 2.6-.6 3.4-1.7Z" />
        </svg>
      </span>
      <span className="footer__store-copy">
        <span className="footer__store-eyebrow">Download on the</span>
        <span className="footer__store-name">App Store</span>
      </span>
    </a>
  )
}

function SocialIcon({ type }) {
  const props = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    'aria-hidden': true,
  }

  switch (type) {
    case 'instagram':
      return (
        <svg {...props}>
          <rect x="4" y="4" width="16" height="16" rx="4.5" />
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'x':
      return (
        <svg {...props}>
          <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg {...props}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 10v7M8 7.2v.01" strokeLinecap="round" />
          <path d="M12 17v-4.2c0-1.2.9-2.1 2.1-2.1s1.9.8 1.9 2.1V17" strokeLinecap="round" />
        </svg>
      )
    default:
      return null
  }
}

export default function Footer() {
  const footerRef = useRef(null)

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
            <a href="/" className="footer__logo" aria-label="InFlow home">
              <img src="/inflow-logo.png" alt="InFlow" className="footer__logo-img" />
            </a>
            <p className="footer__desc">
              An AI-powered work management platform that brings tasks, teams, communication,
              workflows, approvals, and insights into one intelligent workspace.
            </p>
            <div className="footer__social" aria-label="Social links">
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <SocialIcon type="instagram" />
              </a>
              <a href="#" className="footer__social-link" aria-label="X">
                <SocialIcon type="x" />
              </a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn">
                <SocialIcon type="linkedin" />
              </a>
            </div>
          </div>

          <div className="footer__aside" data-footer="aside">
            <p className="footer__tagline">
              Empowering organizations to work smarter, move faster, and stay connected.
            </p>
            <div className="footer__stores">
              <StoreBadge store="google" />
              <StoreBadge store="apple" />
            </div>
          </div>
        </div>

        <div className="footer__divider" data-footer="divider" aria-hidden="true" />

        <p className="footer__copyright" data-footer="copyright">
          © 2026 All rights reserved
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
