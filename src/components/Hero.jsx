import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import HeroCards from './HeroCards'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function Hero() {
  const heroRef = useRef(null)

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined

    const ctx = gsap.context(() => {
      gsap.set('[data-hero="badge"]', { autoAlpha: 0, y: 20 })
      gsap.set('[data-hero="headline"] .hero__headline-line-inner', { yPercent: 110 })
      gsap.set('[data-hero="subtext"]', { autoAlpha: 0, y: 28 })
      gsap.set('[data-hero="cta"]', { autoAlpha: 0, y: 20, scale: 0.96 })
      gsap.set('[data-hero="card"]', { autoAlpha: 0, y: 72, scale: 0.92 })

      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
        delay: 0.12,
      })

      timeline
        .to('[data-hero="badge"]', {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
        })
        .to(
          '[data-hero="headline"] .hero__headline-line-inner',
          {
            yPercent: 0,
            duration: 0.95,
            stagger: 0.14,
            ease: 'power4.out',
          },
          '-=0.38',
        )
        .to(
          '[data-hero="subtext"]',
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
          },
          '-=0.55',
        )
        .to(
          '[data-hero="cta"]',
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
          },
          '-=0.5',
        )
        .to(
          '[data-hero="card"]',
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            stagger: 0.09,
            ease: 'power3.out',
          },
          '-=0.42',
        )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero__content">
        <div className="hero__badge" data-hero="badge" data-hero-animate>
          One platform for your entire operation
        </div>

        <h1 className="hero__headline" data-hero="headline">
          <span className="hero__headline-line">
            <span className="hero__headline-line-inner">One platform.</span>
          </span>
          <span className="hero__headline-line hero__accent">
            <span className="hero__headline-line-inner">Complete operational control.</span>
          </span>
        </h1>

        <p className="hero__subtext" data-hero="subtext" data-hero-animate>
          Manage tasks, petty cash, funds, service requests, and your whole team across every site and
          industry, in real time.
        </p>

        <div className="hero__ctas">
          <a href="#contact" className="hero__cta hero__cta--primary" data-hero="cta" data-hero-animate>
            <span className="hero__cta-label">Contact us</span>
            <span className="hero__cta-icon" aria-hidden="true">
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

      <HeroCards />
    </section>
  )
}
