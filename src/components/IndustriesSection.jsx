import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { INDUSTRY_MEDIA } from '../i18n/media.js'

gsap.registerPlugin(ScrollTrigger)

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

function IndustryModal({ industry, onClose, closeLabel, eyebrowLabel }) {
  const backdropRef = useRef(null)
  const panelRef = useRef(null)
  const closeTweenRef = useRef(null)

  const animateClose = useCallback(() => {
    if (prefersReducedMotion()) {
      onClose()
      return
    }

    closeTweenRef.current?.kill()
    closeTweenRef.current = gsap.timeline({ onComplete: onClose })
    closeTweenRef.current
      .to(panelRef.current, {
        y: 20,
        scale: 0.97,
        autoAlpha: 0,
        duration: 0.28,
        ease: 'power2.in',
      })
      .to(
        backdropRef.current,
        {
          autoAlpha: 0,
          duration: 0.22,
          ease: 'power1.out',
        },
        '-=0.14',
      )
  }, [onClose])

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') animateClose()
    }
    document.addEventListener('keydown', handleKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = previousOverflow
      closeTweenRef.current?.kill()
    }
  }, [animateClose])

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined

    gsap.set(backdropRef.current, { autoAlpha: 0 })
    gsap.set(panelRef.current, { y: 28, scale: 0.96, autoAlpha: 0 })

    const ctx = gsap.context(() => {
      const tl = gsap.timeline()
      tl.to(backdropRef.current, {
        autoAlpha: 1,
        duration: 0.32,
        ease: 'power2.out',
      }).to(
        panelRef.current,
        {
          y: 0,
          scale: 1,
          autoAlpha: 1,
          duration: 0.42,
          ease: 'power3.out',
        },
        '-=0.18',
      )
        .from(
          '[data-industry-modal="heading"] > *',
          {
            y: 14,
            autoAlpha: 0,
            duration: 0.35,
            stagger: 0.06,
            ease: 'power2.out',
          },
          '-=0.22',
        )
        .from(
          '[data-industry-modal="tagline"]',
          {
            y: 12,
            autoAlpha: 0,
            duration: 0.32,
            ease: 'power2.out',
          },
          '-=0.2',
        )
        .from(
          '[data-industry-modal="feature"]',
          {
            y: 10,
            autoAlpha: 0,
            duration: 0.3,
            stagger: 0.04,
            ease: 'power2.out',
          },
          '-=0.18',
        )
    }, panelRef)

    return () => ctx.revert()
  }, [industry])

  return createPortal(
    <div
      ref={backdropRef}
      className="industry-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="industry-modal-title"
      onClick={animateClose}
    >
      <div
        ref={panelRef}
        className="industry-modal__panel"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="industry-modal__close"
          onClick={animateClose}
          aria-label={closeLabel}
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="industry-modal__media">
          <img src={industry.image} alt={industry.imageAlt} className="industry-modal__image" />
          <div className="industry-modal__media-overlay" aria-hidden="true" />
          <div className="industry-modal__heading" data-industry-modal="heading">
            <p className="industry-modal__eyebrow">{eyebrowLabel}</p>
            <h3 id="industry-modal-title" className="industry-modal__title">
              {industry.title}
            </h3>
          </div>
        </div>

        <div className="industry-modal__body">
          <p className="industry-modal__tagline" data-industry-modal="tagline">
            {industry.tagline}
          </p>
          <ul className="industry-modal__features">
            {industry.features.map((feature) => (
              <li
                key={feature.title}
                className="industry-modal__feature"
                data-industry-modal="feature"
              >
                <span className="industry-modal__feature-dot" aria-hidden="true" />
                <div className="industry-modal__feature-text">
                  <h4 className="industry-modal__feature-title">{feature.title}</h4>
                  <p className="industry-modal__feature-desc">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>,
    document.body,
  )
}

export default function IndustriesSection() {
  const sectionRef = useRef(null)
  const [activeIndustry, setActiveIndustry] = useState(null)
  const { tr, t } = useLanguage()

  const industries = useMemo(
    () =>
      tr.industries.items.map((item) => ({
        ...item,
        image: INDUSTRY_MEDIA[item.id].image,
      })),
    [tr],
  )

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined

    const ctx = gsap.context(() => {
      gsap.from('[data-industries="header"] .industries__badge, [data-industries="header"] .industries__title', {
        y: 28,
        autoAlpha: 0,
        duration: 0.65,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '[data-industries="header"]',
          start: 'top 85%',
          once: true,
        },
      })

      gsap.from('[data-industries="card"]', {
        y: 32,
        autoAlpha: 0,
        scale: 0.97,
        duration: 0.48,
        stagger: 0.06,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '[data-industries="grid"]',
          start: 'top 82%',
          once: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="industries"
      className="industries"
      ref={sectionRef}
      aria-labelledby="industries-heading"
    >
      <header className="industries__header" data-industries="header">
        <p className="industries__badge">{t('industries.badge')}</p>
        <h2 id="industries-heading" className="industries__title">
          {t('industries.titleBefore')}
          <span className="industries__title-accent">{t('industries.titleAccent')}</span>
        </h2>
      </header>

      <div className="industries__grid" data-industries="grid">
        {industries.map((industry, index) => (
          <article
            key={industry.id}
            className={`industries__card industries__card--${index + 1}`}
            data-industries="card"
          >
            <div className="industries__card-content">
              <h3 className="industries__card-title">{industry.title}</h3>
              <p className="industries__card-desc">{industry.description}</p>
            </div>
            <button
              type="button"
              className="industries__card-cta"
              onClick={() => setActiveIndustry(industry)}
              aria-label={t('industries.learnMoreAbout').replace('{{title}}', industry.title)}
            >
              <span className="industries__card-cta-label">{t('industries.learnMore')}</span>
              <span className="industries__card-cta-icon" aria-hidden="true">
                <ArrowIcon />
              </span>
            </button>
            <div className="industries__card-media">
              <img
                src={industry.image}
                alt={industry.imageAlt}
                className="industries__card-image"
                loading="lazy"
              />
              <div className="industries__card-media-overlay" aria-hidden="true" />
            </div>
          </article>
        ))}
      </div>

      {activeIndustry && (
        <IndustryModal
          industry={activeIndustry}
          onClose={() => setActiveIndustry(null)}
          closeLabel={t('industries.close')}
          eyebrowLabel={t('industries.modalEyebrow')}
        />
      )}
    </section>
  )
}
