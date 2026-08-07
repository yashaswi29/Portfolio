import React from 'react';
import Placard, { Reveal } from './Placard';

export interface Metric {
  value: string;
  label: string;
}

export interface Highlight {
  icon: React.ReactNode;
  title: string;
  body: string;
}

interface FeaturedProjectProps {
  path: string;
  status: string;
  title: React.ReactNode;
  /** Always visible. */
  lead: React.ReactNode;
  /** Revealed on hover. */
  detail: React.ReactNode;
  metrics: Metric[];
  highlights: Highlight[];
  stackIcon: React.ReactNode;
  stack: string[];
  focusLabel: string;
  focus: React.ReactNode;
  principleLabel: string;
  principle: React.ReactNode;
  /** Decorative blur blob, positioned by the caller. */
  glowClassName?: string;
  onToggle?: (open: boolean) => void;
}

/**
 * Featured project placard. At rest it's a panel of identity, numbers and the
 * headline of every engineering point; on hover it grows over whatever sits
 * below it and fills in the prose.
 *
 * Expanded it's capped at 80vh and scrolls internally — the content is long
 * enough that scrolling the *page* would drag the card out from under the
 * cursor and collapse it mid-read.
 */
const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  path,
  status,
  title,
  lead,
  detail,
  metrics,
  highlights,
  stackIcon,
  stack,
  focusLabel,
  focus,
  principleLabel,
  principle,
  glowClassName = 'top-0 right-0 w-72 h-72',
  onToggle,
}) => (
  <Placard
    className="rounded-2xl border border-accent/25 bg-gradient-to-br from-primary-800 via-primary-800 to-primary-950 overflow-hidden"
    expandedClassName="hoverable:-mx-4 hoverable:max-h-[80vh] hoverable:overflow-y-auto border-accent/60 glow-accent"
    onToggle={onToggle}
  >
    {(open) => (
      <>
        <div className={`absolute bg-accent/10 rounded-full blur-3xl pointer-events-none ${glowClassName}`} />

        <div className="relative z-10 grid lg:grid-cols-5 gap-8 lg:gap-10 p-6 md:p-10">
          {/* Left: narrative */}
          <div className="lg:col-span-3">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <p className="font-mono text-xs text-accent">{path}</p>
              <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent">
                {status}
              </span>
            </div>

            <h3 className="font-mono text-2xl md:text-3xl font-bold text-[#F8F8F8] mb-3">
              {title}
            </h3>

            <div className="text-primary-200 leading-relaxed">
              <p>{lead}</p>
              <Reveal open={open}>
                <p className="pt-3 text-primary-300">{detail}</p>
              </Reveal>
            </div>

            {/* metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-accent/20 border border-accent/20 rounded-lg overflow-hidden mt-6 mb-6">
              {metrics.map((m, i) => (
                <div key={i} className="bg-primary-900/60 px-3 py-2.5">
                  <div className="font-mono text-base font-bold text-accent leading-none mb-1.5">{m.value}</div>
                  <div className="font-mono text-[10px] text-primary-400 leading-tight">{m.label}</div>
                </div>
              ))}
            </div>

            {/* highlights: titles in the tile, bodies once there's room —
                staggered so six paragraphs unfold as a cascade, not one jump */}
            <ul className="space-y-3">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3.5">
                  <span className="text-accent mt-0.5 shrink-0">{h.icon}</span>
                  <div className="min-w-0">
                    <div className="font-mono text-sm font-semibold text-[#F8F8F8]">{h.title}</div>
                    <Reveal open={open} delay={40 + i * 35}>
                      <p className="pt-1 text-sm leading-relaxed text-primary-300">{h.body}</p>
                    </Reveal>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: stack, then the rest once expanded */}
          <div className="lg:col-span-2 lg:border-l lg:border-accent/20 lg:pl-10">
            <h4 className="font-mono text-sm font-semibold text-accent mb-4 flex items-center gap-2">
              {stackIcon} stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {stack.map((tech, i) => (
                <span
                  key={i}
                  className="font-mono text-xs px-2.5 py-1 rounded bg-accent/10 border border-accent/25 text-accent-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Reveal open={open} delay={80}>
              <div className="pt-8">
                <h4 className="font-mono text-sm font-semibold text-accent mb-3">{focusLabel}</h4>
                <p className="font-mono text-xs leading-relaxed text-primary-300 mb-8">{focus}</p>
                <h4 className="font-mono text-sm font-semibold text-accent mb-3">{principleLabel}</h4>
                <p className="text-xs leading-relaxed text-primary-300 border-l-2 border-accent/40 pl-4">
                  {principle}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </>
    )}
  </Placard>
);

export default FeaturedProject;
