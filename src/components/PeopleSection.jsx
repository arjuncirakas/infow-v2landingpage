import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { PEOPLE_MEDIA } from '../i18n/media.js'

gsap.registerPlugin(ScrollTrigger)

const LAYOUT = [
  { rot: -9, y: -10 },
  { rot: -4.5, y: -3 },
  { rot: 0, y: 0 },
  { rot: 4.5, y: -3 },
  { rot: 9, y: -10 },
]

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function PeopleSection() {
  const sectionRef = useRef(null)
  const { t } = useLanguage()

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined

    const ctx = gsap.context(() => {
      gsap.from('[data-people="header"] .people__badge, [data-people="header"] .people__title', {
        y: 32,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.14,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '[data-people="header"]',
          start: 'top 85%',
          once: true,
        },
      })

      gsap.from('[data-people="fan"]', {
        y: 64,
        autoAlpha: 0,
        scale: 0.96,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '[data-people="fan"]',
          start: 'top 82%',
          once: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="people" className="people" ref={sectionRef} aria-labelledby="people-heading">
      <header className="people__header" data-people="header">
        <p className="people__badge">{t('people.badge')}</p>
        <h2 id="people-heading" className="people__title">
          {t('people.titleBefore')}
          <span className="people__title-accent">{t('people.titleAccent1')}</span>
          {t('people.titleMiddle')}
          <span className="people__title-accent">{t('people.titleAccent2')}</span>
          {t('people.titleAfter')}
        </h2>
      </header>

      <div className="people__fan-wrap">
        <div className="people__fan" data-people="fan">
          {PEOPLE_MEDIA.map((person, index) => {
            const title = t(`people.roles.${person.roleKey}`)

            return (
              <div
                key={person.id}
                className="people__card"
                style={{
                  '--rot': `${LAYOUT[index].rot}deg`,
                  '--y': `${LAYOUT[index].y}px`,
                }}
              >
                <img
                  src={person.image}
                  alt={title}
                  className="people__card-image"
                  loading="lazy"
                />
                <div className="people__card-overlay" aria-hidden="true" />
                <p className="people__card-title">{title}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
