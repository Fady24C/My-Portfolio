// ============================================================================
// App.tsx — ROOT COMPONENT
// Handles: routing, the intro loader (0% -> 100%), and the "crafting the
// next page" transition overlay shown whenever the user moves between pages.
// ============================================================================
import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';
import { PageTransition } from './components/PageTransition';
import { HomePage } from './pages/HomePage';
import { ConnectPage } from './pages/ConnectPage';
import projectsData from './data/projects.json';

// ---- Page transition context ----------------------------------------------
// Call usePageTransition() anywhere to show the transition overlay for ~1s.
// The midAction callback runs mid-way (navigate / scroll) while covered.
type PlayTransition = (midAction?: () => void) => void;
const TransitionContext = createContext<PlayTransition>(() => {});
export const usePageTransition = () => useContext(TransitionContext);

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);              // intro 0->100% loader
  const [transitioning, setTransitioning] = useState(false); // between-pages overlay
  const prevPath = useRef(location.pathname);

  // Show the transition overlay on every route change EXCEPT the very first
  // load, because the intro Loader already covers that moment.
  useEffect(() => {
    if (prevPath.current === location.pathname) return;
    prevPath.current = location.pathname;
    setTransitioning(true);
    const t = window.setTimeout(() => setTransitioning(false), 1000);
    return () => window.clearTimeout(t);
  }, [location.pathname]);

  // playTransition: 1s overlay — swap content at 450ms, reveal at 1000ms.
  const playTransition = useCallback<PlayTransition>((midAction) => {
    setTransitioning(true);
    window.setTimeout(() => midAction?.(), 450);
    window.setTimeout(() => setTransitioning(false), 1000);
  }, []);

  return (
    <TransitionContext.Provider value={playTransition}>
      {/* Intro loader: black screen, 0% -> 100% counter + quick project photos */}
      {loading && (
        <Loader
          images={projectsData.projects.map((p) => p.image)}
          onDone={() => setLoading(false)}
        />
      )}

      {/* "crafting the next page" overlay (circular FRJ logo) */}
      <PageTransition active={transitioning} />

      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/connect" element={<ConnectPage />} />
        </Routes>
      </main>
      <Footer />
    </TransitionContext.Provider>
  );
}

export default function App() {
  return (
    // HashRouter = works on any static host with zero server config.
    // Swap to BrowserRouter if you prefer clean URLs (needs server fallback).
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}
