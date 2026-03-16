import { BrowserRouter } from "react-router-dom";
import { useEffect, useRef, useState } from "react"; // useRef kept for ScrollProgress
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";



// ── Scroll Progress Bar ──────────────────────────────────────────────
const ScrollProgress = () => {
  const barRef = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      const pct = (scrolled / total) * 100;
      if (barRef.current) barRef.current.style.width = pct + "%";
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div ref={barRef} className="scroll-progress" />;
};

// ── Back to Top Button ──────────────────────────────────────────────
const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      className={`back-to-top ${visible ? "visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
};

// ── Loading Screen ──────────────────────────────────────────────
const LoadingScreen = ({ onDone }) => {
  const [fading, setFading] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => {
      setFading(true);
      setTimeout(onDone, 800);
    }, 2200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div className={`loading-screen ${fading ? "fade-out" : ""}`}>
      <div style={{ textAlign: "center" }}>
        <p className="orbitron" style={{
          fontSize: "1.1rem",
          color: "#14a8ff",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          marginBottom: "8px",
          animation: "blink 1s step-end infinite"
        }}>Initializing</p>
        <p className="orbitron" style={{
          fontSize: "2.8rem",
          fontWeight: 900,
          color: "white",
          letterSpacing: "0.05em"
        }}>RAM GANESH</p>
        <p style={{ color: "#aaa6c3", fontSize: "0.85rem", letterSpacing: "0.15em", marginTop: "4px" }}>
          SOFTWARE ENGINEER · CLOUD · CYBERSECURITY
        </p>
        <div className="loading-bar-track">
          <div className="loading-bar-fill" />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <BrowserRouter>
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
      <ScrollProgress />
      <BackToTop />
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Works />
        <Experience />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
