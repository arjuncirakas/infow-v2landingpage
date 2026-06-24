import { useCallback, useLayoutEffect, useRef, useState } from 'react'

const MODULES = [
  { id: 'tasks', label: 'Tasks' },
  { id: 'finance', label: 'Finance' },
  { id: 'requests', label: 'Requests' },
  { id: 'chat', label: 'Chat' },
  { id: 'reports', label: 'Reports' },
]

const GHOST_SLOTS = [
  { slot: 'tl', id: 'email', label: 'Email' },
  { slot: 'tc', id: 'sheets', label: 'Sheets' },
  { slot: 'tr', id: 'calendar', label: 'Calendar' },
  { slot: 'bl', id: 'chats', label: 'Chats' },
  { slot: 'br', id: 'cash', label: 'Cash book' },
]

const TOP_GHOSTS = GHOST_SLOTS.filter((tool) => ['tl', 'tc', 'tr'].includes(tool.slot))
const BOTTOM_GHOSTS = GHOST_SLOTS.filter((tool) => ['bl', 'br'].includes(tool.slot))

const FLOW_DURATION = '3s'

function buildMergePath(start, end) {
  return `M${start.x} ${start.y} L${end.x} ${end.y}`
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

function getMergeAnchors(tool, ghostRect, platformRect, layoutRect) {
  const ghostLeft = ghostRect.left - layoutRect.left
  const ghostRight = ghostRect.right - layoutRect.left
  const ghostTop = ghostRect.top - layoutRect.top
  const ghostBottom = ghostRect.bottom - layoutRect.top
  const ghostCenterX = (ghostLeft + ghostRight) / 2

  const platformLeft = platformRect.left - layoutRect.left
  const platformRight = platformRect.right - layoutRect.left
  const platformTop = platformRect.top - layoutRect.top
  const platformBottom = platformRect.bottom - layoutRect.top
  const platformCenterX = clamp(ghostCenterX, platformLeft, platformRight)

  const isTop = ['tl', 'tc', 'tr'].includes(tool.slot)

  if (isTop) {
    return {
      start: { x: ghostCenterX, y: ghostBottom },
      end: { x: platformCenterX, y: platformTop },
    }
  }

  return {
    start: { x: ghostCenterX, y: ghostTop },
    end: { x: platformCenterX, y: platformBottom },
  }
}

function extendLineEndpoints(start, end, overlap = 2) {
  const dx = end.x - start.x
  const dy = end.y - start.y
  const len = Math.hypot(dx, dy) || 1
  const ux = dx / len
  const uy = dy / len

  return {
    start: { x: start.x - ux * overlap, y: start.y - uy * overlap },
    end: { x: end.x + ux * overlap, y: end.y + uy * overlap },
  }
}

function ToolIcon({ type }) {
  const props = {
    width: 14,
    height: 14,
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

function ModuleIcon({ type }) {
  const props = {
    width: 14,
    height: 14,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.85,
    'aria-hidden': true,
  }

  switch (type) {
    case 'tasks':
      return (
        <svg {...props}>
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <path d="M8.5 12.5 L11 15 L16.5 9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'finance':
      return (
        <svg {...props}>
          <path d="M12 3v18M8.5 8h5a2 2 0 0 1 0 4h-5a2 2 0 0 0 0 4h6" strokeLinecap="round" />
        </svg>
      )
    case 'requests':
      return (
        <svg {...props}>
          <path d="M7 3h10v18H7z" strokeLinejoin="round" />
          <path d="M10 8h6M10 12h6M10 16h4" strokeLinecap="round" />
        </svg>
      )
    case 'chat':
      return (
        <svg {...props}>
          <path
            d="M5 6h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H10l-4 3v-3H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'reports':
      return (
        <svg {...props}>
          <path d="M6 20V10M12 20V4M18 20v-8" strokeLinecap="round" />
        </svg>
      )
    default:
      return null
  }
}

function GhostTool({ tool, ghostRef }) {
  return (
    <div ref={ghostRef} className={`inflow-merge__ghost inflow-merge__ghost--${tool.slot}`}>
      <span className="inflow-merge__ghost-icon">
        <ToolIcon type={tool.id} />
      </span>
      <span className="inflow-merge__ghost-label">{tool.label}</span>
    </div>
  )
}

export default function InflowHubCard() {
  const layoutRef = useRef(null)
  const platformRef = useRef(null)
  const ghostRefs = useRef({})
  const [lines, setLines] = useState({ width: 0, height: 0, paths: [] })

  const setGhostRef = useCallback(
    (id) => (node) => {
      ghostRefs.current[id] = node
    },
    [],
  )

  useLayoutEffect(() => {
    const layout = layoutRef.current
    const platform = platformRef.current
    if (!layout || !platform) return undefined

    const updateLines = () => {
      const layoutRect = layout.getBoundingClientRect()
      if (layoutRect.width === 0 || layoutRect.height === 0) return

      const platformRect = platform.getBoundingClientRect()

      const paths = GHOST_SLOTS.map((tool) => {
        const ghostEl = ghostRefs.current[tool.id]
        if (!ghostEl) return null

        const ghostRect = ghostEl.getBoundingClientRect()
        const { start, end } = getMergeAnchors(tool, ghostRect, platformRect, layoutRect)
        const line = extendLineEndpoints(start, end)

        return {
          id: tool.id,
          d: buildMergePath(line.start, line.end),
        }
      }).filter(Boolean)

      setLines({ width: layoutRect.width, height: layoutRect.height, paths })
    }

    updateLines()

    const observer = new ResizeObserver(updateLines)
    observer.observe(layout)
    observer.observe(platform)
    const bottomRow = layout.querySelector('.inflow-merge__bottom')
    if (bottomRow) observer.observe(bottomRow)
    GHOST_SLOTS.forEach((tool) => {
      const el = ghostRefs.current[tool.id]
      if (el) observer.observe(el)
    })

    window.addEventListener('resize', updateLines)

    const raf = requestAnimationFrame(updateLines)

    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
      window.removeEventListener('resize', updateLines)
    }
  }, [])

  return (
    <article className="workflow__panel workflow__panel--inflow" data-workflow="card">
      <div className="workflow__panel-surface" aria-hidden="true" />

      <p className="workflow__panel-label workflow__panel-label--accent">
        <span className="workflow__panel-dot workflow__panel-dot--accent" />
        With inFlow
      </p>

      <div className="workflow__stage workflow__stage--merge">
        <div ref={layoutRef} className="inflow-merge__layout">
          {lines.width > 0 && (
            <svg
              className="inflow-merge__lines"
              width={lines.width}
              height={lines.height}
              viewBox={`0 0 ${lines.width} ${lines.height}`}
              aria-hidden="true"
            >
              {lines.paths.map((path) => (
                <path key={path.id} d={path.d} className="inflow-merge__path" />
              ))}
              {lines.paths.map((path) => (
                <g key={`arrow-${path.id}`} className="inflow-merge__arrow">
                  <path d="M-6,-3.5 L4,0 L-6,3.5 Z" className="inflow-merge__arrow-head" />
                  <animateMotion
                    dur={FLOW_DURATION}
                    repeatCount="indefinite"
                    path={path.d}
                    rotate="auto"
                    calcMode="linear"
                  />
                </g>
              ))}
            </svg>
          )}

          {TOP_GHOSTS.map((tool) => (
            <GhostTool key={tool.id} tool={tool} ghostRef={setGhostRef(tool.id)} />
          ))}

          <div ref={platformRef} className="inflow-merge__platform">
            <header className="inflow-merge__head">
              <div className="inflow-merge__brand">
                <span className="inflow-merge__logo-wrap">
                  <img src="/inflow-logo.png" alt="" className="inflow-merge__logo" width={20} height={20} />
                </span>
                <div>
                  <span className="inflow-merge__name">InFlow</span>
                  <span className="inflow-merge__tag">One platform</span>
                </div>
              </div>
              <span className="inflow-merge__sync">
                <span className="inflow-merge__sync-dot" />
                All synced
              </span>
            </header>

            <div className="inflow-merge__modules">
              {MODULES.map((mod) => (
                <span key={mod.id} className="inflow-merge__chip">
                  <ModuleIcon type={mod.id} />
                  {mod.label}
                </span>
              ))}
            </div>

            <p className="inflow-merge__caption">
              Tasks, finance, chat, requests &amp; reports — unified
            </p>
          </div>

          <div className="inflow-merge__bottom">
            {BOTTOM_GHOSTS.map((tool) => (
              <GhostTool key={tool.id} tool={tool} ghostRef={setGhostRef(tool.id)} />
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
