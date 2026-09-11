// ============================================================================
// Projects.tsx — SECTION 03 "SELECTED WORK"
// Asymmetrical Bento Grid of projects, loaded from src/data/projects.json.
// Each card: project photo + a FLOATING numbered circle (accent color) at the
// top-left + on hover the name & link slide in from the bottom.
//
// >>> TO ADD A PROJECT: just add an entry to src/data/projects.json <<<
// ============================================================================
import type { FC } from 'react';
import { Reveal } from './Reveal';
import projectsData from '../data/projects.json';
import type { Project } from '../types/project';

// Asymmetrical bento pattern: [columnSpan, rowSpan] on a 6-column grid.
// The pattern repeats across projects — tweak the numbers to reshape the grid.
const SPANS: [number, number][] = [
  [4, 3], [2, 3], // big + tall
  [2, 2], [2, 2], [2, 2], // three small
  [4, 2], [2, 2], // wide + small (repeats from here)
];

export const Projects: FC = () => {
  const projects = projectsData.projects as Project[];

  return (
    <section className="section" id="work">
      <Reveal>
        <p className="section-index">04 — Selected Work</p>
        <h2>Projects</h2>
      </Reveal>

      <div className="bento">
        {projects.map((p, i) => {
          const [col, row] = SPANS[i % SPANS.length];
          return (
            <Reveal
              key={p.id ?? i}
              className="bento-item"
              delay={(i % 3) * 90}
              style={{ gridColumn: `span ${col}`, gridRow: `span ${row}` }}
            >
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                width="1200"
                height="800"
                style={{ objectPosition: p.imagePosition ?? 'center' }}
              />
              {/* Floating number circle (accent color) */}
              <span className="proj-num">{i + 1}</span>
              {/* Hover overlay: name + link slide up from the bottom */}
              <a className="proj-overlay" href={p.link} target="_blank" rel="noreferrer">
                <span className="proj-title">{p.title}</span>
                <span className="proj-link">View Project &rarr;</span>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};
