// ============================================================================
// Footer.tsx — DARK FOOTER (#1A1A1A), three columns:
//   1) FRJ brand + short description + copyright
//   2) Navigation links
//   3) Contact (Gmail / WhatsApp) + Social (Facebook, Instagram, LinkedIn)
// >>> Add your social links in src/data/socials.json <<<
// ============================================================================
import type { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import socials from '../data/socials.json';

const NAV = [
  { id: 'me', label: 'Me' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'work', label: 'Work' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'contact', label: 'Contact' },
];

export const Footer: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        {/* Column 1 — brand */}
        <div className="footer-col">
          <span className="footer-logo">FRJ</span>
          <p className="footer-desc">
            Fady Romany Joachim — Computer Science student building toward a career
            as a Machine Learning Engineer.
          </p>
          <p className="footer-copy">&copy; 2026 Fady Romany Joachim. All rights reserved.</p>
        </div>

        {/* Column 2 — navigation */}
        <div className="footer-col">
          <h4>Navigation</h4>
          {NAV.map((n) => (
            <button key={n.id} onClick={() => goToSection(n.id)}>
              {n.label}
            </button>
          ))}
        </div>

        {/* Column 3 — contact + social */}
        <div className="footer-col">
          <h4>Contact</h4>
          <a href={`mailto:${socials.email}`}>{socials.email}</a>
          <a href={socials.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp — {socials.whatsappDisplay}
          </a>
          <h4 className="social-heading">Social</h4>
          {/* Replace the empty links in socials.json with your real profile URLs */}
          <a href={socials.facebook || '#'} target="_blank" rel="noreferrer">Facebook</a>
          <a href={socials.instagram || '#'} target="_blank" rel="noreferrer">Instagram</a>
          <a href={socials.linkedin || '#'} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};
