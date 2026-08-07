import React, { useCallback, useState } from 'react';

/**
 * Hover state for a placard.
 *
 * Hover is the whole interaction — there is no button and nothing to click.
 * Two things ride along for the cases hover can't cover: keyboard focus opens
 * a card so it's reachable without a pointer, and a tap pins it open on touch
 * devices, where hover never fires at all. Moving the mouse away drops the pin
 * as well, so the card always returns to its tile when the cursor leaves.
 */

type PlacardHandlers = {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onFocus: (e: React.FocusEvent<HTMLElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLElement>) => void;
  onClick: () => void;
};

interface PlacardOptions {
  onToggle?: (open: boolean) => void;
}

/**
 * Keyboard focus should open the card; the focus a mouse click leaves behind
 * should not — otherwise a click pins the card open *and* focuses it, and the
 * next click can never close it.
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

export function usePlacard({ onToggle }: PlacardOptions = {}): {
  open: boolean;
  placardProps: PlacardHandlers;
} {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [pinned, setPinned] = useState(false);

  const onMouseEnter = useCallback(() => setHovered(true), []);

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

  const onClick = useCallback(() => {
    const next = !pinned;
    setPinned(next);
    onToggle?.(next);
  }, [pinned, onToggle]);

  return {
    open: hovered || focused || pinned,
    placardProps: { onMouseEnter, onMouseLeave, onFocus, onBlur, onClick },
  };
}

export default usePlacard;
