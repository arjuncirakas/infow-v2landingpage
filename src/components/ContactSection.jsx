import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { CONTACT_IMAGE } from '../i18n/media.js'

gsap.registerPlugin(ScrollTrigger)

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function ContactSection() {
  const sectionRef = useRef(null)
  const { t } = useLanguage()

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: '[data-contact="banner"]',
          start: 'top 85%',
          once: true,
        },
      })

      timeline
        .from('[data-contact="banner"]', {
          y: 32,
          autoAlpha: 0,
          duration: 0.65,
          ease: 'power3.out',
        })
        .from(
          '[data-contact="content"] > *',
          {
            y: 22,
            autoAlpha: 0,
            duration: 0.48,
            stagger: 0.08,
            ease: 'power3.out',
          },
          '-=0.38',
        )
        .from(
          '[data-contact="visual"]',
          {
            x: 32,
            autoAlpha: 0,
            scale: 1.04,
            duration: 0.58,
            ease: 'power3.out',
          },
          '-=0.48',
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="contact" className="contact" ref={sectionRef} aria-labelledby="contact-heading">
      <div className="contact__banner" data-contact="banner">
        <div className="contact__content" data-contact="content">
          <p className="contact__eyebrow">{t('contact.eyebrow')}</p>
          <h2 id="contact-heading" className="contact__title">
            {t('contact.title')}
          </h2>
          <p className="contact__text">{t('contact.text')}</p>
          <a href="mailto:hello@inflow.com" className="contact__cta">
            <span className="contact__cta-label">{t('contact.contactUs')}</span>
            <span className="contact__cta-icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M4 12L12 4M12 4H6.5M12 4V9.5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>

        <div className="contact__visual" data-contact="visual" aria-hidden="true">
          <img
            src={CONTACT_IMAGE}
            alt={t('contact.imageAlt')}
            className="contact__image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
