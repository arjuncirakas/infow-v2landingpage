import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import InflowHubCard from './InflowHubCard'
import { useLanguage } from '../i18n/LanguageContext.jsx'

gsap.registerPlugin(ScrollTrigger)

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

const OLD_TOOL_IDS = [
  { id: 'email', x: 14, y: 20, rotate: -11 },
  { id: 'calendar', x: 80, y: 16, rotate: 9 },
  { id: 'chats', x: 12, y: 80, rotate: -7 },
  { id: 'cash', x: 84, y: 76, rotate: 8 },
  { id: 'sheets', x: 50, y: 48, rotate: -3 },
]

const CHAOS_PATHS = [
  'M50 48 C58 32 68 22 80 16',
  'M50 48 C38 36 24 28 14 20',
  'M50 48 C36 62 22 74 12 80',
  'M50 48 C64 64 76 72 84 76',
  'M80 16 C72 38 88 58 84 76',
  'M14 20 C28 42 18 62 12 80',
  'M80 16 C52 40 28 52 14 20',
  'M84 76 C60 58 40 62 12 80',
]

function ToolIcon({ type }) {
  const props = {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.85,
    'aria-hidden': true,
  }

  switch (type) {
    case 'email':
      return (
        <svg {...props}>
          <path d="M4 6h16v12H4z" strokeLinejoin="round" />
          <path d="M4 7l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'calendar':
      return (
        <svg {...props}>
          <rect x="4" y="5" width="16" height="16" rx="2" />
          <path d="M8 3v4M16 3v4M4 10h16" strokeLinecap="round" />
        </svg>
      )
    case 'chats':
      return (
        <svg {...props}>
          <path d="M5 6h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-4 3v-3H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" strokeLinejoin="round" />
        </svg>
      )
    case 'cash':
      return (
        <svg {...props}>
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      )
    case 'sheets':
      return (
        <svg {...props}>
          <path d="M7 4h7l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" strokeLinejoin="round" />
          <path d="M14 4v5h5" strokeLinejoin="round" />
        </svg>
      )
    default:
      return null
  }
}

function WorkflowNode({ tool, style, rotate }) {
  return (
    <div
      className="workflow__node workflow__node--old"
      style={{
        ...style,
        '--node-rotate': `${rotate ?? 0}deg`,
      }}
    >
      <div className="workflow__node-icon">
        <ToolIcon type={tool.id} />
      </div>
      <span className="workflow__node-label">{tool.label}</span>
    </div>
  )
}

export default function WorkFlowSection() {
  const sectionRef = useRef(null)
  const { t } = useLanguage()

  const oldTools = OLD_TOOL_IDS.map((tool) => ({
    ...tool,
    label: t(`workflow.tools.${tool.id}`),
  }))

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined

    const ctx = gsap.context(() => {
      gsap.from('[data-workflow="header"] .workflow__eyebrow, [data-workflow="header"] .workflow__title', {
        y: 32,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.14,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '[data-workflow="header"]',
          start: 'top 85%',
          once: true,
        },
      })

      gsap.from('[data-workflow="card"]', {
        y: 52,
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.14,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '[data-workflow="compare"]',
          start: 'top 80%',
          once: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="platform" className="workflow" ref={sectionRef} aria-labelledby="workflow-heading">
      <div className="workflow__glow" aria-hidden="true" />

      <div className="workflow__inner">
        <header className="workflow__header" data-workflow="header">
          <p className="workflow__eyebrow">{t('workflow.eyebrow')}</p>
          <h2 id="workflow-heading" className="workflow__title">
            {t('workflow.titleBefore')}
            <span className="workflow__title-accent">{t('workflow.titleAccent')}</span>
          </h2>
        </header>

        <div className="workflow__compare" data-workflow="compare">
          <article className="workflow__panel workflow__panel--old" data-workflow="card">
            <div className="workflow__panel-surface" aria-hidden="true" />
            <p className="workflow__panel-label">
              <span className="workflow__panel-dot workflow__panel-dot--muted" />
              {t('workflow.oldWay')}
            </p>

            <div className="workflow__stage workflow__stage--chaos">
              <svg className="workflow__chaos-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="chaos-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
                  </linearGradient>
                </defs>
                {CHAOS_PATHS.map((path, index) => (
                  <path
                    key={path}
                    d={path}
                    stroke="url(#chaos-stroke)"
                    strokeWidth={index % 2 === 0 ? 0.45 : 0.35}
                    strokeDasharray={index % 3 === 0 ? '1.2 1.8' : undefined}
                    opacity={0.35 + (index % 4) * 0.12}
                  />
                ))}
              </svg>

              {oldTools.map((tool, index) => (
                <WorkflowNode
                  key={tool.id}
                  tool={tool}
                  rotate={tool.rotate}
                  style={{
                    left: `${tool.x}%`,
                    top: `${tool.y}%`,
                    animationDelay: `${index * -1.25}s`,
                  }}
                />
              ))}
            </div>
          </article>

          <div className="workflow__bridge" data-workflow="card" aria-hidden="true">
            <span className="workflow__bridge-ring" />
            <span className="workflow__bridge-btn">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path
                  d="M5 10h10M11 6l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>

          <InflowHubCard />
        </div>
      </div>
    </section>
  )
}
