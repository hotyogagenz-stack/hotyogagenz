import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls the window to the top whenever the route (pathname) changes.
 * Keeps hash navigation intact (e.g. /page#section).
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If the new URL includes a hash, let the browser handle the anchor scroll.
    if (hash) return;

    // Smooth scroll feels nicer in this UI; fall back safely.
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } catch {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
