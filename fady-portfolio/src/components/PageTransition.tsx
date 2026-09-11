// ============================================================================
// PageTransition.tsx — "CRAFTING THE NEXT PAGE" OVERLAY
// A dark screen with a circular FRJ logo + the text "crafting the next page".
// Shown for ~1s every time the user moves between pages/sections.
// Controlled by App.tsx (active prop).
// ============================================================================
import type { FC } from 'react';

export const PageTransition: FC<{ active: boolean }> = ({ active }) => (
  <div className={`transition-overlay ${active ? 'is-active' : ''}`} aria-hidden>
    <div className="transition-circle">
      <span className="transition-logo">FRJ</span>
    </div>
    <p className="transition-text">crafting the next page</p>
  </div>
);
