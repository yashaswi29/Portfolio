import React from 'react';
import { ChevronDown } from 'lucide-react';
import { usePlacard } from '../hooks/usePlacard';

/**
 * Placards are cards that stay compact until asked to open: the summary is
 * always visible, the body unfolds behind a disclosure control (see
 * `usePlacard` for hover vs. click modes).
 *
 * Collapsed content is clipped, never removed from the DOM, so screen readers
 * and in-page search still see the full text.
 */

interface RevealProps {
  open: boolean;
  /** Opening stagger in ms. Closing is always immediate, so cards snap shut. */
  delay?: number;
  className?: string;
  children: React.ReactNode;
}

/**
 * Height-animated container. The 0fr → 1fr grid row is what lets an unknown
 * content height animate; put spacing on the inner content, not on this
 * wrapper, or the margin survives the collapse.
 */
export const Reveal: React.FC<RevealProps> = ({ open, delay = 0, className = '', children }) => (
  <div
    style={delay ? { transitionDelay: open ? `${delay}ms` : '0ms' } : undefined}
    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
      open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
    } ${className}`}
  >
    <div className="min-h-0 overflow-hidden">{children}</div>
  </div>
);

interface DisclosureProps {
  open: boolean;
  onToggle: () => void;
  label?: string;
  openLabel?: string;
  className?: string;
}

/**
 * Both controls stop propagation: on a hover placard the wrapper also toggles
 * on click, and without this the two would cancel each other out.
 */
const handle = (onToggle: () => void) => (e: React.MouseEvent) => {
  e.stopPropagation();
  onToggle();
};

/** Understated chevron for small cards, where hover does most of the work. */
export const PlacardHint: React.FC<DisclosureProps> = ({
  open,
  onToggle,
  label = 'read more',
  openLabel = 'show less',
  className = '',
}) => (
  <button
    type="button"
    aria-expanded={open}
    onClick={handle(onToggle)}
    className={`inline-flex shrink-0 items-center gap-1 rounded font-mono text-[11px] outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-accent/60 ${
      open ? 'text-accent' : 'text-primary-500 hover:text-accent dark:text-primary-400 dark:hover:text-accent'
    } ${className}`}
  >
    <ChevronDown
      size={12}
      className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
    />
    {open ? openLabel : label}
  </button>
);

/**
 * The full control for big cards: on a card that fills half the screen the
 * only way in has to be obvious.
 */
export const ReadMore: React.FC<DisclosureProps> = ({
  open,
  onToggle,
  label = 'read more',
  openLabel = 'show less',
  className = '',
}) => (
  <button
    type="button"
    aria-expanded={open}
    onClick={handle(onToggle)}
    className={`inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-accent/5 px-4 py-2 font-mono text-xs font-semibold text-accent outline-none transition-colors duration-300 hover:bg-accent/15 hover:border-accent/70 focus-visible:ring-2 focus-visible:ring-accent/60 ${className}`}
  >
    {open ? openLabel : label}
    <ChevronDown
      size={14}
      className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
    />
  </button>
);

interface PlacardProps {
  className?: string;
  /** false → click-only, for cards big enough that hover would be disruptive. */
  hover?: boolean;
  onToggle?: (open: boolean) => void;
  children: (open: boolean, toggle: () => void) => React.ReactNode;
}

const Placard: React.FC<PlacardProps> = ({ className = '', hover = true, onToggle, children }) => {
  const { open, placardProps, toggle } = usePlacard({ hover, onToggle });

  return (
    <div {...placardProps} className={`group ${className}`}>
      {children(open, toggle)}
    </div>
  );
};

export default Placard;
