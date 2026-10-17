import { useState, useEffect } from 'react';

/**
 * Hook to detect if current screen viewport is a desktop/larger computer screen (>= 1024px and not touch-only).
 * Mobile and tablet devices (< 1024px or touch-based tablets) return false to avoid laggy animations and touch-hover bugs.
 */
export function useIsDesktop(breakpoint = 1024): boolean {
  const [isDesktop, setIsDesktop] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const isTouch = window.matchMedia('(pointer: coarse)').matches;
      return window.innerWidth >= breakpoint && !isTouch;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const check = () => {
      const isTouch = window.matchMedia('(pointer: coarse)').matches;
      setIsDesktop(window.innerWidth >= breakpoint && !isTouch);
    };

    check();

    const mql = window.matchMedia(`(min-width: ${breakpoint}px)`);
    if (mql.addEventListener) {
      mql.addEventListener('change', check);
    } else {
      mql.addListener(check);
    }

    window.addEventListener('resize', check);
    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener('change', check);
      } else {
        mql.removeListener(check);
      }
      window.removeEventListener('resize', check);
    };
  }, [breakpoint]);

  return isDesktop;
}
