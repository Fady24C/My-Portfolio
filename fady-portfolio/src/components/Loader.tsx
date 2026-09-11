// ============================================================================
// Loader.tsx — INTRO LOADING SCREEN
// Black background, a counter running 0% -> 100%, and quick flashing photos
// of your projects. When it hits 100% it calls onDone() and the site appears.
// Duration is controlled by LOADER_DURATION below.
// ============================================================================
import { useEffect, useState } from 'react';
import type { FC } from 'react';

interface LoaderProps {
  images: string[];   // project photos to flash while counting
  onDone: () => void; // called once we reach 100%
}

const LOADER_DURATION = 2000; // ms — total time of the intro counter

export const Loader: FC<LoaderProps> = ({ images, onDone }) => {
  const [progress, setProgress] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    // Counter 0 -> 100 driven by requestAnimationFrame for smooth updates
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(100, Math.round(((now - start) / LOADER_DURATION) * 100));
      setProgress(p);
      if (p < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        window.setTimeout(onDone, 250); // small pause on 100% before revealing
      }
    };
    raf = requestAnimationFrame(tick);

    // Cycle quickly through the project photos ("quick photos of my projects")
    const photoTimer = window.setInterval(() => {
      setImgIndex((i) => (images.length ? (i + 1) % images.length : 0));
    }, 300);

    return () => {
      cancelAnimationFrame(raf);
      window.clearInterval(photoTimer);
    };
  }, [images, onDone]);

  return (
    <div className="loader" aria-hidden>
      <div className="loader-photos">
        {images.length === 0 ? (
          // Fallback if projects.json has no images yet
          <div className="loader-empty">FRJ</div>
        ) : (
          images.slice(0, 6).map((src, i) => (
            <img key={src} src={src} alt="" className={i === imgIndex ? 'is-active' : ''} />
          ))
        )}
      </div>
      <div className="loader-bottom">
        <span className="loader-brand">Fady Romany Joachim — Portfolio</span>
        <span className="loader-count">{progress}%</span>
      </div>
    </div>
  );
}
