"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { markClientSideNavOccurred } from "./introSession";

/**
 * Rendered once in the root layout. The layout persists across client-side
 * route changes, so this component can detect that a navigation happened
 * after the initial full page load and tell the intro to never play again
 * during this session (e.g. clicking the logo back to the home page).
 */
export default function IntroSessionTracker() {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      markClientSideNavOccurred();
      prevPathname.current = pathname;
    }
  }, [pathname]);

  return null;
}
