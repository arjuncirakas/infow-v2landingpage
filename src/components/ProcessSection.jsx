import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

const PILLARS = [
  {
    id: 'tasks',
    title: 'Tasks & workflows',
    description: 'Assign work, automate the routing, and keep every job moving to done.',
  },
  {
    id: 'cash',
    title: 'Cash & expenses',
    description: 'Track petty cash, funds, and expenses — with approvals and a clear trail.',
  },
  {
    id: 'requests',
    title: 'Service requests & approvals',
    description: 'Raise, route, and resolve service requests without the back-and-forth.',
  },
  {
    id: 'people',
    title: 'People & access',
    description: 'Manage your whole team — roles, permissions, and who owns what.',
  },
  {
    id: 'reports',
    title: 'Reports & decisions',
    description: 'Live dashboards across all of it, so you act with confidence.',
  },
]

export default function ProcessSection() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined

    const ctx = gsap.context(() => {
      const fadeUp = {
        opacity: 0,
        y: 18,
        duration: 0.45,
        ease: 'power2.out',
        force3D: true,
      }

      gsap.from('[data-process="intro"] .process__badge, [data-process="intro"] .process__title', {
        ...fadeUp,
        stagger: 0.07,
        scrollTrigger: {
          trigger: '[data-process="intro"]',
          start: 'top 88%',
          once: true,
        },
      })

      gsap.from('[data-process="media"]', {
        ...fadeUp,
        scrollTrigger: {
          trigger: '[data-process="media"]',
          start: 'top 90%',
          once: true,
        },
      })

      gsap.from('[data-process="timeline"]', {
        opacity: 0,
        duration: 0.35,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: '[data-process="steps"]',
          start: 'top 88%',
          once: true,
        },
      })

      gsap.from('[data-process="step"]', {
        opacity: 0,
        y: 14,
        duration: 0.38,
        stagger: 0.05,
        ease: 'power2.out',
        force3D: true,
        scrollTrigger: {
          trigger: '[data-process="steps"]',
          start: 'top 88%',
          once: true,
        },
      })

      gsap.from('[data-process="footer"]', {
        opacity: 0,
        y: 12,
        duration: 0.4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '[data-process="footer"]',
          start: 'top 92%',
          once: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="process" className="process" ref={sectionRef} aria-labelledby="process-heading">
      <div className="process__inner">
        <div className="process__layout" data-process="layout">
          <div className="process__intro" data-process="intro">
            <p className="process__badge">Everything in one platform</p>
            <h2 id="process-heading" className="process__title">
              Built around the natural flow of work.
            </h2>
            <div className="process__media" data-process="media">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
                alt="Operations team collaborating around a shared workspace"
                className="process__image"
                loading="lazy"
              />
            </div>
          </div>

          <ol className="process__steps" data-process="steps">
            <span className="process__timeline" data-process="timeline" aria-hidden="true" />
            {PILLARS.map((pillar, index) => (
              <li key={pillar.id} className="process__step" data-process="step">
                <div className="process__step-marker" aria-hidden="true">
                  <span className="process__step-number">{index + 1}</span>
                </div>
                <div className="process__step-body">
                  <h3 className="process__step-title">{pillar.title}</h3>
                  <p className="process__step-desc">{pillar.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="process__footer" data-process="footer">
          <a href="#contact" className="process__cta">
            <span className="process__cta-label">One platform. Complete operational control.</span>
            <span className="process__cta-icon" aria-hidden="true">
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
      </div>
    </section>
  )
}
