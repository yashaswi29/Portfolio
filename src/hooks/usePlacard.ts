import React, { useCallback, useState } from 'react';

/**
 * Expand/collapse state for a placard, in one of two modes.
 *
 * `hover` (default) suits small cards: hover opens it, keyboard focus opens it,
 * and a tap pins it open on touch devices where hover never fires. Cheap to
 * trigger, cheap to undo.
 *
 * `click` suits cards big enough to reshape the page. Hover is ignored
 * entirely — only the disclosure button toggles it — because a card that grows
 * by half a screen shouldn't fire on a mouse passing over it, and because a
 * "show less" button can't work against a hover that would immediately reopen
 * the card.
 */

type PlacardHandlers = {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onFocus?: (e: React.FocusEvent<HTMLElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLElement>) => void;
  onClick?: () => void;
};

interface PlacardOptions {
  /** false → click-only. Defaults to true. */
  hover?: boolean;
  onToggle?: (open: boolean) => void;
}

/**
 * Keyboard focus should open a hover card; the focus a mouse click leaves
 * behind should not — otherwise clicking pins the card open *and* focuses it,
 * and the next click can never close it.
 */
function isKeyboardFocus(target: EventTarget | null): boolean {
  const el = target as HTMLElement | null;
  if (!el || typeof el.matches !== 'function') return false;
  try {
    return el.matches(':focus-visible');
  } catch {
    return true; // no :focus-visible support — err toward revealing content
  }
}

export function usePlacard({ hover = true, onToggle }: PlacardOptions = {}): {
  open: boolean;
  placardProps: PlacardHandlers;
  toggle: () => void;
} {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [pinned, setPinned] = useState(false);

  const onMouseEnter = useCallback(() => setHovered(true), []);

  // Leaving with the mouse also drops a pin, so a stray click on desktop
  // doesn't leave the card stuck open.
  const onMouseLeave = useCallback(() => {
    setHovered(false);
    setPinned(false);
  }, []);

  const onFocus = useCallback((e: React.FocusEvent<HTMLElement>) => {
    if (isKeyboardFocus(e.target)) setFocused(true);
  }, []);

  const onBlur = useCallback((e: React.FocusEvent<HTMLElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocused(false);
  }, []);

  const toggle = useCallback(() => {
    const next = !pinned;
    setPinned(next);
    onToggle?.(next);
  }, [pinned, onToggle]);

  return {
    open: hover ? hovered || focused || pinned : pinned,
    placardProps: hover
      ? { onMouseEnter, onMouseLeave, onFocus, onBlur, onClick: toggle }
      : {},
    toggle,
  };
}

export default usePlacard;
