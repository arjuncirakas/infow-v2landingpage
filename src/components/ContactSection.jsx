import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CONTACT_IMAGE =
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function ContactSection() {
  const sectionRef = useRef(null)

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
          <p className="contact__eyebrow">Get in touch</p>
          <h2 id="contact-heading" className="contact__title">
            Ready to bring your operations into one flow?
          </h2>
          <p className="contact__text">
            Talk to our team about demos, rollout plans, and how InFlow connects tasks, teams,
            finance, and field work across every site you run.
          </p>
          <a href="mailto:hello@inflow.com" className="contact__cta">
            <span className="contact__cta-label">Contact us</span>
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

        <div className="contact__visual" data-contact="visual">
          <img
            src={CONTACT_IMAGE}
            alt="Operations team collaborating around a shared workspace"
            className="contact__image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
