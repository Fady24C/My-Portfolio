// ============================================================================
// Header.tsx — GLASSY FIXED HEADER
// Same color as the background (#F5F2EB) with a blur effect, "FRJ" cursive
// logo on the left, navigation + "Let's Connect" button, mobile hamburger.
// ============================================================================
import { useState } from 'react';
import type { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Section ids on the home page — edit labels here to rename menu items
const NAV = [
  { id: 'me', label: 'Me' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'work', label: 'Work' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'contact', label: 'Contact' },
];

export const Header: FC = () => {
  const [open, setOpen] = useState(false); // mobile menu state
  const navigate = useNavigate();
  const location = useLocation();

  // Smooth-scroll to a section; if we're on another page, go home first
  const goToSection = (id: string) => {
    setOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goConnect = () => {
    setOpen(false);
    navigate('/connect');
  };

  return (
    <header className={`site-header ${open ? 'menu-open' : ''}`}>
      {/* Logo — cursive font, defined in global.css */}
      <button className="logo" onClick={() => goToSection('me')} aria-label="Fady Romany Joachim — home">
        FRJ
      </button>

      <nav className={open ? 'is-open' : ''}>
        {NAV.map((n) => (
          <button key={n.id} className="nav-link" onClick={() => goToSection(n.id)}>
            {n.label}
          </button>
        ))}
        <button className="btn btn-small" onClick={goConnect}>
          Let&rsquo;s Connect
        </button>
      </nav>

      {/* Hamburger — visible on mobile only (see sections.css media queries) */}
      <button className="burger" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
