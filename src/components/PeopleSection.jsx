import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PEOPLE = [
  {
    id: 'operations-leader',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=640&h=800&q=80',
    title: 'Operations leader',
  },
  {
    id: 'field-technician',
    image:
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=640&h=800&q=80',
    title: 'Field technician',
  },
  {
    id: 'site-manager',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=640&h=800&q=80',
    title: 'Site manager',
  },
  {
    id: 'healthcare-staff',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=640&h=800&q=80',
    title: 'Healthcare staff',
  },
  {
    id: 'warehouse-lead',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=640&h=800&q=80',
    title: 'Warehouse lead',
  },
  {
    id: 'team-coordinator',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=640&h=800&q=80',
    title: 'Team coordinator',
  },
]

// Fan layout: outer cards tilt more; slight lift forms a gentle arc at the top.
const LAYOUT = [
  { rot: -9, y: -10 },
  { rot: -5.5, y: -4 },
  { rot: -2, y: 0 },
  { rot: 2, y: 0 },
  { rot: 5.5, y: -4 },
  { rot: 9, y: -10 },
]

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function PeopleSection() {
  const sectionRef = useRef(null)

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
        <p className="people__badge">Built around people</p>
        <h2 id="people-heading" className="people__title">
          Made <span className="people__title-accent">for</span> the{' '}
          <span className="people__title-accent">people</span> who keep work moving.
        </h2>
      </header>

      <div className="people__fan-wrap">
        <div className="people__fan" data-people="fan">
          {PEOPLE.map((person, index) => (
            <div
              key={person.id}
              className="people__card"
              style={{
                '--rot': `${LAYOUT[index].rot}deg`,
                '--y': `${LAYOUT[index].y}px`,
              }}
            >
              <img src={person.image} alt="" className="people__card-image" loading="lazy" />
              <div className="people__card-overlay" aria-hidden="true" />
              <p className="people__card-title">{person.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
