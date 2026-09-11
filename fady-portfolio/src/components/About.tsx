// ============================================================================
// About.tsx — SECTION 02 "ABOUT"
// "A bit about me:" + one paragraph + three pillars: Focus / Approach / Goal.
// Edit the texts below to change what they say.
// ============================================================================
import type { FC } from 'react';
import { Reveal } from './Reveal';

// The three highlight cards — edit title/text freely
const PILLARS = [
  {
    title: 'Focus',
    text: 'Approaching machine learning problems from both a data and a software engineering perspective.',
  },
  {
    title: 'Approach',
    text: 'Strengthening my skills step by step: Mathematics → Data Analysis → Machine Learning → Deep Learning → AI, through hands-on projects.',
  },
  {
    title: 'Goal',
    text: 'To become a Machine Learning Engineer who combines solid software foundations with ML expertise to build reliable, scalable intelligent systems.',
  },
];

export const About: FC = () => (
  <section className="section" id="about">
    <Reveal>
      <p className="section-index">02 — About</p>
      <h2>A bit about me:</h2>
    </Reveal>

    <Reveal delay={120}>
      <p className="about-lead">
        I&rsquo;m Fady — a Computer Science student at Helwan University focused on becoming
        a Machine Learning Engineer. I have a strong foundation in programming, algorithms,
        data structures, databases, mathematics, and software engineering, which helps me
        approach machine learning problems from both a data and software perspective. I&rsquo;m
        currently developing my expertise in Machine Learning and Data Analysis, working with
        Python and libraries such as NumPy, Pandas, and Matplotlib, and I&rsquo;ve implemented
        fundamental algorithms including Linear Regression, Logistic Regression, and Softmax
        Regression. My software engineering background — Java, OOP, MVC, SOLID principles, and
        MySQL — rounds out my goal of combining solid engineering practices with machine
        learning to build reliable, scalable, and practical intelligent systems.
      </p>
    </Reveal>

    <div className="pillars">
      {PILLARS.map((p, i) => (
        <Reveal key={p.title} delay={i * 120} className="pillar">
          <h3>{p.title}</h3>
          <p>{p.text}</p>
        </Reveal>
      ))}
    </div>
  </section>
)
