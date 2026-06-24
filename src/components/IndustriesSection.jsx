import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

const INDUSTRIES = [
  {
    title: 'Construction & engineering',
    description: 'Site tasks, safety compliance, and contractor hand-offs.',
    tagline: 'Complete operational control, from blueprint to build.',
    features: [
      {
        title: 'On-site resource allocation',
        description: 'Get more out of every crew, machine, and material.',
      },
      {
        title: 'Safety & compliance',
        description:
          'Track audits, certifications, and contractor hand-offs without the paperwork pile-up.',
      },
      {
        title: 'Absolute accountability',
        description: 'Know exactly who owns what, at any given moment.',
      },
      {
        title: 'Live site tracking',
        description: 'Real-time visibility across every site, every day.',
      },
    ],
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Construction team reviewing plans on a building site',
  },
  {
    title: 'Logistics & transportation',
    description: 'Dispatch fleets and track every load in real time.',
    tagline: 'Move your fleet effortlessly — fast, simple, safe routing.',
    features: [
      {
        title: 'Fleet dispatch',
        description: 'Assign drivers and vehicles in a few taps.',
      },
      {
        title: 'Live route tracking',
        description: 'Every truck and load on one map, in real time.',
      },
      {
        title: 'Delivery status',
        description: "Know what's en route, delivered, or delayed, instantly.",
      },
      {
        title: 'Inventory in motion',
        description: 'Keep stock levels and shipments in sync.',
      },
    ],
    image:
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Fleet dispatcher monitoring trucks on the road',
  },
  {
    title: 'Healthcare',
    description: 'Coordinate shifts, patient pathways, and secure staff chat.',
    tagline: 'Keeping work in flow when every second counts.',
    features: [
      {
        title: 'Secure collaboration',
        description: 'Encrypted, compliant coordination across every ward.',
      },
      {
        title: 'Smart scheduling',
        description: 'Cover shifts and patient pathways in a few taps.',
      },
      {
        title: 'Compliance built in',
        description: 'Track training, licenses, and certifications automatically.',
      },
      {
        title: 'Unified alignment',
        description: 'Keep every practitioner moving in the same direction.',
      },
    ],
    image:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Healthcare professionals collaborating in a clinical setting',
  },
  {
    title: 'Supply chain',
    description: 'Monitor stock, vendors, and procurement end to end.',
    tagline: 'Keep the line moving — from stock to vendor to delivery.',
    features: [
      {
        title: 'Stock visibility',
        description: 'Track inventory levels before anything runs short.',
      },
      {
        title: 'Vendor & procurement',
        description: 'Manage purchase orders and suppliers in one place.',
      },
      {
        title: 'Early alerts',
        description: 'Catch low-stock and bottlenecks before they cost you.',
      },
      {
        title: 'End-to-end traceability',
        description: 'Follow every item from order to arrival.',
      },
    ],
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Warehouse operations and inventory management',
  },
  {
    title: 'Operations',
    description: 'Run tasks, teams, and daily workflows across every site.',
    tagline: 'One platform for every team that keeps the business running.',
    features: [
      {
        title: 'Cross-team tasks',
        description: 'Coordinate work across departments, not silos.',
      },
      {
        title: 'Money & requests',
        description: 'Handle expenses, funds, and approvals in one flow.',
      },
      {
        title: 'People & access',
        description: 'Manage roles, permissions, and who owns what.',
      },
      {
        title: 'Full visibility',
        description: 'Live reporting across the whole operation.',
      },
    ],
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Operations team collaborating in a meeting',
  },
]

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

function IndustryModal({ industry, onClose }) {
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
          aria-label="Close"
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
            <p className="industry-modal__eyebrow">Industry</p>
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
        <p className="industries__badge">One platform, every industry</p>
        <h2 id="industries-heading" className="industries__title">
          Made for the way your{' '}
          <span className="industries__title-accent">industry actually works.</span>
        </h2>
      </header>

      <div className="industries__grid" data-industries="grid">
        {INDUSTRIES.map((industry, index) => (
          <article
            key={industry.title}
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
              aria-label={`Learn more about ${industry.title}`}
            >
              <span className="industries__card-cta-label">Learn more</span>
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
        <IndustryModal industry={activeIndustry} onClose={() => setActiveIndustry(null)} />
      )}
    </section>
  )
}
