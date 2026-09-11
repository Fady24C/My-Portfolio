// ============================================================================
// Contact.tsx — SECTION 05 "CONTACT"
// Big headline + "Get in Touch" button (goes to Let's Connect page via the
// transition overlay) + availability / response-time info cards.
// ============================================================================
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Reveal } from './Reveal';
import { usePageTransition } from '../App';

export const ContactSection: FC = () => {
  const navigate = useNavigate();
  const playTransition = usePageTransition();

  return (
    <section className="section contact" id="contact">
      <Reveal>
        <p className="section-index">06 — Contact</p>
      </Reveal>

      <Reveal delay={100}>
        <h2 className="contact-title">
          Let&rsquo;s build
          <br />
          something <span className="accent-text">great</span>.
        </h2>
      </Reveal>

      <Reveal delay={180}>
        <p className="contact-desc">
          Have a project in mind or want to collaborate? I&rsquo;d love to hear from you
          and bring your ideas to life.
        </p>
        <button
          className="btn btn-big"
          onClick={() => playTransition(() => navigate('/connect'))}
        >
          Get in Touch
        </button>
      </Reveal>

      <div className="contact-info">
        <Reveal delay={120} className="info-card">
          <h4>Available for</h4>
          <p>Freelance &amp; Full-time</p>
        </Reveal>
        <Reveal delay={220} className="info-card">
          <h4>Response time</h4>
          <p>Within 24 hours</p>
        </Reveal>
      </div>
    </section>
  );
};
