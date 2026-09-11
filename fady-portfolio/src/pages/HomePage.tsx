// HomePage.tsx — the one-page portfolio: Me / About / Work / Expertise / Contact
import type { FC } from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Education } from '../components/Education';
import { Projects } from '../components/Projects';
import { Expertise } from '../components/Expertise';
import { ContactSection } from '../components/Contact';

export const HomePage: FC = () => (
  <>
    <Hero />
    <About />
    <Education />
    <Projects />
    <Expertise />
    <ContactSection />
  </>
);
