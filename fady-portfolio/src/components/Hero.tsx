// ============================================================================
// Hero.tsx — SECTION 01 "ME"
// Left:  "Available for Work" tag (goes to Let's Connect), name, role,
//        description, "View My Work" button (plays transition first!).
// Right: your photo with a sage-green leaf shape behind it.
// ============================================================================
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Reveal } from './Reveal';
import { usePageTransition } from '../App';

export const Hero: FC = () => {
  const navigate = useNavigate();
  const playTransition = usePageTransition();

  return (
    <section className="hero" id="me">
      {/* ---- LEFT: text ---- */}
      <div className="hero-text">
        <Reveal>
          <p className="section-index">01 — me</p>
        </Reveal>

        <Reveal delay={80}>
          {/* "Available for Work" tag -> Let's Connect page (via transition) */}
          <button
            className="avail-tag"
            onClick={() => playTransition(() => navigate('/connect'))}
          >
            <span className="dot" />
            Available for Work <span className="arrow">&rarr;</span>
          </button>
        </Reveal>

        <Reveal delay={160}>
          <h1>
            Hi, I&rsquo;m <span className="accent-text">Fady Romany Joachim</span>
          </h1>
          <p className="role">Aspiring Machine Learning Engineer</p>
          <p className="desc">
            Computer Science student building a strong foundation in Machine Learning
            and Artificial Intelligence, supported by practical experience in software
            engineering and application development. Currently pursuing my degree at
            Helwan University.
          </p>
        </Reveal>

        <Reveal delay={240}>
          {/* "View My Work" — shows the crafting transition first, THEN scrolls to projects */}
          <div className="hero-actions">
            <button
              className="btn"
              onClick={() =>
                playTransition(() =>
                  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }),
                )
              }
            >
              View My Work
            </button>
          </div>
        </Reveal>
      </div>

      {/* ---- RIGHT: photo with leaf-shaped accent background ---- */}
      <Reveal delay={200} className="hero-photo-col">
        <div className="hero-photo-wrap">
          <div className="leaf-bg" aria-hidden />
          {/* Replace /images/profile.svg with your real photo (keep the path or update it) */}
          <img
            className="hero-photo"
            src="/images/my-profile.jpg"
            alt="Fady Romany Joachim"
            width="840"
            height="1050"
          />
          <svg className="leaf-deco" viewBox="0 0 100 100" aria-hidden>
            <path
              d="M50 5 C25 25 8 50 8 78 C8 92 18 98 30 96 C62 90 88 60 94 12 C70 30 45 55 33 84"
              fill="none"
              stroke="#A1AE89"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </Reveal>
    </section>
  );
}
