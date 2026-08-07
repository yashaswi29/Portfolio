import React from 'react';
import { usePlacard } from '../hooks/usePlacard';

/**
 * A placard has two sizes of itself: a compact tile at rest, and a larger
 * version on hover that holds the full content comfortably.
 *
 * The expansion happens on the z-axis, never in the document flow. The card is
 * absolutely positioned inside a slot, so it grows *over* its neighbours —
 * the grid never reflows and the page height never changes.
 *
 * What holds the slot open is a hidden copy of the resting card rendered
 * underneath (`children(false)`). That means the slot is always exactly as tall
 * as the tile actually is, at any breakpoint and after any font loads, with no
 * hardcoded heights to drift out of sync with the content.
 *
 * Where there is no cursor there is nothing to hover, so the whole mechanism
 * switches off: the ghost is dropped, the card returns to normal flow, and the
 * content renders in full. That's gated on the `hoverable:` variant — pointer
 * capability, not screen width, since a narrow desktop window still hovers and
 * a large tablet still can't. Collapsed styling in child components is
 * therefore written as `hoverable:`-only.
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
    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
      open
        ? 'grid-rows-[1fr] opacity-100'
        : 'grid-rows-[1fr] opacity-100 hoverable:grid-rows-[0fr] hoverable:opacity-0'
    } ${className}`}
  >
    <div className="min-h-0 overflow-hidden">{children}</div>
  </div>
);

interface PlacardProps {
  /** The card surface: padding, background, border, radius. */
  className?: string;
  /** Applied to the card only while expanded — how it grows past its slot. */
  expandedClassName?: string;
  onToggle?: (open: boolean) => void;
  children: (open: boolean) => React.ReactNode;
}

const Placard: React.FC<PlacardProps> = ({
  className = '',
  expandedClassName = 'hoverable:-mx-3',
  onToggle,
  children,
}) => {
  const { open, placardProps } = usePlacard({ onToggle });

  return (
    <div className="relative">
      {/* Holds the slot open at exactly the resting height. visibility:hidden
          keeps it out of screen readers and find-in-page. */}
      <div aria-hidden className={`invisible hidden hoverable:block ${className}`}>
        {children(false)}
      </div>

      <div
        {...placardProps}
        className={`group transition-all duration-300 ease-out hoverable:absolute hoverable:inset-x-0 hoverable:top-0 hoverable:min-h-full ${className} ${
          open ? `z-30 hoverable:-translate-y-1 ${expandedClassName}` : 'z-10'
        }`}
      >
        {children(open)}
      </div>
    </div>
  );
};

export default Placard;
