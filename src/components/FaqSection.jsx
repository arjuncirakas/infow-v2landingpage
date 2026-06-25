import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '../i18n/LanguageContext.jsx'

gsap.registerPlugin(ScrollTrigger)

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

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
  const { tr, t } = useLanguage()

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
          <p className="faq__badge">{t('faq.badge')}</p>
          <h2 id="faq-heading" className="faq__title">
            {t('faq.titleBefore')}
            <span className="faq__title-accent">{t('faq.titleAccent')}</span>
            {t('faq.titleAfter')}
          </h2>
          <p className="faq__intro">{t('faq.intro')}</p>
        </header>

        <div className="faq__list" data-faq="list">
          {tr.faq.items.map((item, index) => (
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
