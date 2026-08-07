import React, { useCallback, useState } from 'react';

/**
 * Hover-to-expand state for a placard.
 *
 * Hover drives it on desktop; focus opens it for keyboard users; a tap pins it
 * open on touch devices, where hover never fires. Moving the mouse away also
 * drops the pin, so a stray click can't leave a card stuck open.
 */

type PlacardHandlers = {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onFocus: (e: React.FocusEvent<HTMLElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLElement>) => void;
  onClick: () => void;
};

/**
 * Keyboard focus should open the card; the focus a mouse click leaves behind
 * should not — otherwise clicking the hint pins the card open *and* focuses it,
 * and the second click can never close it.
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

export function usePlacard(onPin?: (pinned: boolean) => void): {
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
    onPin?.(next);
  }, [pinned, onPin]);

  return {
    open: hovered || focused || pinned,
    placardProps: { onMouseEnter, onMouseLeave, onFocus, onBlur, onClick },
  };
}

export default usePlacard;
