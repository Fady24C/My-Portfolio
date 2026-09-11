// ============================================================================
// Education.tsx — SECTION 03 "EDUCATION"
// Degree card + relevant coursework tags, plus a short "current experience"
// note underneath (ML + Software Engineering track).
// ============================================================================
import type { FC } from 'react';
import { Reveal } from './Reveal';

const COURSEWORK = [
  'Algorithms & Data Structures',
  'Object-Oriented Programming',
  'Database Systems',
  'Operating Systems',
  'Computer Networks',
  'Software Engineering',
  'Mathematics',
  'Machine Learning',
  'Artificial Intelligence',
];

export const Education: FC = () => (
  <section className="section" id="education">
    <Reveal>
      <p className="section-index">03 — Education</p>
      <h2>Where I&rsquo;m learning:</h2>
    </Reveal>

    <Reveal delay={120} className="pillar edu-card">
      <h3>Bachelor of Computer Science</h3>
      <p className="edu-meta">
        Helwan University — Faculty of Computers and Artificial Intelligence
        <br />
        Cairo, Egypt &middot; Expected Graduation 2028
      </p>
      <div className="tag-row">
        {COURSEWORK.map((c) => (
          <span className="tag" key={c}>
            {c}
          </span>
        ))}
      </div>
    </Reveal>
  </section>
);
