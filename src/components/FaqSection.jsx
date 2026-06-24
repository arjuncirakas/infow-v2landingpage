import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

const FAQS = [
  {
    id: 'industry',
    question: 'Is InFlow designed for a specific industry?',
    answer:
      'No. InFlow is built for operational teams across construction, logistics, healthcare, supply chain, and more. The platform adapts to how your industry works — with configurable workflows, roles, and permissions — without forcing you into a one-size-fits-all template.',
  },
  {
    id: 'departments',
    question: 'Can multiple departments use InFlow together?',
    answer:
      'Yes. Operations, finance, HR, and site teams can all work inside the same platform. Tasks, requests, approvals, and reports stay connected across departments, so nothing gets lost between hand-offs or siloed tools.',
  },
  {
    id: 'field-teams',
    question: 'Is InFlow suitable for both office and field teams?',
    answer:
      'Absolutely. Office staff and field teams share one live view of work — from dispatch and site tasks to expenses and service requests. Everyone sees the same status, updates, and accountability trail, whether they are at a desk or on site.',
  },
  {
    id: 'accountability',
    question: 'How does InFlow improve accountability?',
    answer:
      'Every task, request, approval, and expense is tracked with clear ownership and a full audit trail. Managers see who is responsible, what stage work is in, and when actions were taken — so follow-ups are based on facts, not guesswork.',
  },
  {
    id: 'scale',
    question: 'Can InFlow grow with our organization?',
    answer:
      'InFlow scales from a single site to multi-location operations. Add teams, roles, sites, and workflows as you grow — without rebuilding your setup or switching platforms as complexity increases.',
  },
  {
    id: 'work-types',
    question: 'What types of work can be managed in InFlow?',
    answer:
      'Tasks and workflows, petty cash and expenses, service requests and approvals, team access, and live reporting — all in one place. If it moves your operation forward day to day, InFlow is designed to handle it.',
  },
  {
    id: 'replace-tools',
    question: 'Does InFlow replace existing tools?',
    answer:
      'InFlow brings your core operational work into one platform, reducing the need to jump between spreadsheets, chat threads, and disconnected apps. Many teams start by consolidating daily workflows first, then expand as they see what can move in.',
  },
  {
    id: 'onboarding',
    question: 'How quickly can teams start using InFlow?',
    answer:
      'Most teams can be up and running in days, not months. InFlow is designed for fast onboarding — with clear roles, ready-to-use workflows, and a setup that mirrors how your teams already work.',
  },
]

function ToggleIcon({ open }) {
  return (
    <span className="faq__toggle" aria-hidden="true">
      <svg
        className={`faq__toggle-arrow${open ? ' faq__toggle-arrow--open' : ''}`}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

function FaqItem({ item, index, isOpen, onToggle }) {
  const panelRef = useRef(null)
  const contentRef = useRef(null)
  const isFirstRender = useRef(true)

  useLayoutEffect(() => {
    const panel = panelRef.current
    const content = contentRef.current
    if (!panel || !content) return undefined

    if (prefersReducedMotion()) {
      panel.hidden = !isOpen
      return undefined
    }

    if (isFirstRender.current) {
      isFirstRender.current = false
      if (!isOpen) {
        gsap.set(panel, { height: 0, autoAlpha: 0 })
        panel.hidden = true
      }
      return undefined
    }

    gsap.killTweensOf([panel, content])

    if (isOpen) {
      panel.hidden = false
      const tl = gsap.timeline()
      tl.fromTo(
        panel,
        { height: 0, autoAlpha: 0 },
        { height: 'auto', autoAlpha: 1, duration: 0.36, ease: 'power2.out' },
      ).from(
        content,
        { y: 10, autoAlpha: 0, duration: 0.28, ease: 'power2.out' },
        '-=0.18',
      )
    } else {
      gsap.to(panel, {
        height: 0,
        autoAlpha: 0,
        duration: 0.26,
        ease: 'power2.in',
        onComplete: () => {
          panel.hidden = true
        },
      })
    }

    return undefined
  }, [isOpen])

  const panelId = `faq-panel-${item.id}`

  return (
    <article
      className={`faq__item${isOpen ? ' faq__item--open' : ''}`}
      data-faq="item"
    >
      <h3 className="faq__question-wrap">
        <button
          type="button"
          id={`faq-trigger-${item.id}`}
          className="faq__trigger"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="faq__number">{String(index + 1).padStart(2, '0')}.</span>
          <span className="faq__question">{item.question}</span>
          <span className="faq__icon">
            <ToggleIcon open={isOpen} />
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        ref={panelRef}
        className="faq__panel"
        role="region"
        aria-labelledby={`faq-trigger-${item.id}`}
        hidden={!isOpen}
      >
        <div ref={contentRef} className="faq__panel-inner">
          <p className="faq__answer">{item.answer}</p>
        </div>
      </div>
    </article>
  )
}

export default function FaqSection() {
  const sectionRef = useRef(null)
  const [openId, setOpenId] = useState(null)

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined

    const ctx = gsap.context(() => {
      gsap.from('[data-faq="header"] > *', {
        y: 24,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '[data-faq="header"]',
          start: 'top 85%',
          once: true,
        },
      })

      gsap.from('[data-faq="item"]', {
        y: 20,
        autoAlpha: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '[data-faq="list"]',
          start: 'top 82%',
          once: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="faq" className="faq" ref={sectionRef} aria-labelledby="faq-heading">
      <div className="faq__inner">
        <header className="faq__header" data-faq="header">
          <p className="faq__badge">Let&apos;s clear things up</p>
          <h2 id="faq-heading" className="faq__title">
            Everything you need to know about <span className="faq__title-accent">InFlow</span>.
          </h2>
          <p className="faq__intro">
            Whether you&apos;re exploring InFlow for the first time or evaluating it for your
            organization, here are answers to some of the most common questions about the platform.
          </p>
        </header>

        <div className="faq__list" data-faq="list">
          {FAQS.map((item, index) => (
            <FaqItem
              key={item.id}
              item={item}
              index={index}
              isOpen={openId === item.id}
              onToggle={() => setOpenId((current) => (current === item.id ? null : item.id))}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
