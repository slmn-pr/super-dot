'use client'

import { ECOSYSTEM_NODES, CORE_NODE } from '@/shared/constants'

const RADIUS = 160 // orbit radius in px
const CENTER = 220  // SVG center
const SVG_SIZE = 440

export function EcosystemVisualization() {
  const nodes = ECOSYSTEM_NODES.map((node) => {
    const angleRad = (node.angle! - 90) * (Math.PI / 180)
    return {
      ...node,
      x: CENTER + RADIUS * Math.cos(angleRad),
      y: CENTER + RADIUS * Math.sin(angleRad),
    }
  })

  return (
    <div
      aria-label="نمودار اکوسیستم دات وان"
      role="img"
      className="relative w-full max-w-[440px] mx-auto"
    >
      <svg
        width={SVG_SIZE}
        height={SVG_SIZE}
        viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
        className="w-full h-auto"
        aria-hidden="true"
      >
        {/* Orbit ring */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          stroke="#e4e4e7"
          strokeWidth="1"
          strokeDasharray="4 6"
        />

        {/* Connection lines from center to each node */}
        {nodes.map((node) => (
          <line
            key={`line-${node.id}`}
            x1={CENTER}
            y1={CENTER}
            x2={node.x}
            y2={node.y}
            stroke="#e4e4e7"
            strokeWidth="1"
          />
        ))}

        {/* Satellite nodes */}
        {nodes.map((node) => (
          <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
            {/* Node background circle */}
            <circle cx={0} cy={0} r={26} fill="#ffffff" stroke="#e4e4e7" strokeWidth="1" />
            {/* Hover ring */}
            <circle
              cx={0}
              cy={0}
              r={26}
              fill="transparent"
              stroke="transparent"
              strokeWidth="6"
              className="cursor-pointer hover:stroke-blue-100 transition-colors duration-200"
            />
            {/* Icon — render as foreignObject for Lucide */}
            <foreignObject x={-10} y={-10} width={20} height={20}>
              <div
                className="w-5 h-5 flex items-center justify-center text-zinc-700"
              >
                <node.icon size={14} />
              </div>
            </foreignObject>
            {/* Label */}
            <text
              x={0}
              y={38}
              textAnchor="middle"
              className="text-[11px] fill-zinc-500 font-medium"
              style={{ fontSize: '10px', fontFamily: 'Vazirmatn, sans-serif' }}
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>

      {/* Center node — positioned absolutely over SVG center */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-label={`${CORE_NODE.label} — ${CORE_NODE.description}`}
      >
        <div className="flex flex-col items-center gap-2 pointer-events-auto">
          <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center shadow-lg">
            <CORE_NODE.icon size={32} className="text-white" aria-hidden="true" />
          </div>
          <div className="text-center">
            <p className="text-sm font-bold text-foreground">{CORE_NODE.label}</p>
            <p className="text-xs text-zinc-500 mt-0.5">{CORE_NODE.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
