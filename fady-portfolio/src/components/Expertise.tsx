// ============================================================================
// Expertise.tsx — SECTION 04 "EXPERTISE"
// Technologies & Skills in 4 category cards. Edit SKILLS below to update.
// ============================================================================
import type { FC } from 'react';
import { Reveal } from './Reveal';

// Skill categories — edit freely
const SKILLS = [
  {
    title: 'Machine Learning & Data',
    items: [
      'Data Preprocessing',
      'Exploratory Data Analysis',
      'Feature Engineering',
      'Linear / Logistic / Softmax Regression',
      'Classification & Model Evaluation',
    ],
  },
  {
    title: 'Python & Data Libraries',
    items: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Scikit-Learn'],
  },
  {
    title: 'Software Engineering',
    items: ['Java', 'OOP', 'MVC', 'SOLID Principles', 'Clean Code'],
  },
  {
    title: 'Databases & Other',
    items: ['MySQL', 'SQL', 'JavaScript', 'PHP', 'Git & GitHub'],
  },
];

export const Expertise: FC = () => (
  <section className="section" id="expertise">
    <Reveal>
      <p className="section-index">05 — Expertise</p>
      <h2>Technologies &amp; Skills</h2>
    </Reveal>

    <div className="skills-grid">
      {SKILLS.map((group, i) => (
        <Reveal key={group.title} delay={i * 100} className="skill-card">
          <h3>{group.title}</h3>
          <ul>
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  </section>
);
