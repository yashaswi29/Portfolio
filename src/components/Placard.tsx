import React from 'react';
import { ChevronDown } from 'lucide-react';
import { usePlacard } from '../hooks/usePlacard';

/**
 * Placards are cards that stay compact until you look at them: the summary is
 * always visible, the body unfolds on hover (see `usePlacard` for how the
 * open state is driven across pointer, keyboard and touch).
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

interface PlacardHintProps {
  open: boolean;
  label?: string;
  openLabel?: string;
  className?: string;
}

/**
 * The affordance that makes a collapsed card read as "there is more here" —
 * and a real disclosure control, so the card is one tab stop that announces its
 * expanded state instead of a focusable generic div. The click bubbles to the
 * placard wrapper, which owns the open state.
 */
export const PlacardHint: React.FC<PlacardHintProps> = ({
  open,
  label = 'expand',
  openLabel,
  className = '',
}) => (
  <button
    type="button"
    aria-expanded={open}
    className={`inline-flex shrink-0 items-center gap-1 rounded font-mono text-[11px] outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-accent/60 ${
      open ? 'text-accent' : 'text-primary-500 dark:text-primary-400'
    } ${className}`}
  >
    <ChevronDown
      size={12}
      className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
    />
    {open ? openLabel ?? 'less' : label}
  </button>
);

interface PlacardProps {
  className?: string;
  /**
   * Makes the card itself a tab stop. Only needed when it has no `PlacardHint`
   * — the hint is already a focusable control, and two stops means two tabs.
   */
  focusable?: boolean;
  onPin?: (pinned: boolean) => void;
  children: (open: boolean) => React.ReactNode;
}

const Placard: React.FC<PlacardProps> = ({
  className = '',
  focusable = false,
  onPin,
  children,
}) => {
  const { open, placardProps } = usePlacard(onPin);

  return (
    <div
      {...placardProps}
      tabIndex={focusable ? 0 : undefined}
      className={`group outline-none focus-visible:ring-2 focus-visible:ring-accent/50 ${className}`}
    >
      {children(open)}
    </div>
  );
};

export default Placard;
