/**
 * Session-scoped state for the homepage intro.
 *
 * Plain module scope survives client-side navigation within a tab but resets
 * on every full page load (refresh / direct link entry) — exactly the
 * lifecycle needed to decide whether the intro should play.
 */

let introPlayed = false;
let clientSideNavOccurred = false;

export function isIntroPlayed(): boolean {
  return introPlayed;
}

export function markIntroPlayed(): void {
  introPlayed = true;
}

export function markClientSideNavOccurred(): void {
  clientSideNavOccurred = true;
}

/** The intro plays only on the initial full page load — never after a
 *  client-side navigation (logo click, back button, product links…). */
export function shouldPlayIntro(): boolean {
  return !clientSideNavOccurred && !introPlayed;
}
