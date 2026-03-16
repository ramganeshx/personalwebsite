import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const ROLES = [
  "Software Engineer",
  "Cloud Engineer",
  "Cybersecurity Enthusiast",
  "Full-Stack Developer",
  "Tech Innovator",
];

const TypingText = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [pausing, setPausing] = useState(false);

  useEffect(() => {
    if (pausing) return;
    const role = ROLES[roleIdx];
    if (!deleting && displayed.length < role.length) {
      const t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 70);
      return () => clearTimeout(t);
    }
    if (!deleting && displayed.length === role.length) {
      setPausing(true);
      const t = setTimeout(() => { setPausing(false); setDeleting(true); }, 2000);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }
  }, [displayed, deleting, pausing, roleIdx]);

  return (
    <span style={{
      fontFamily: "'Orbitron', monospace",
      color: "#14a8ff",
      fontWeight: 700,
    }}>
      {displayed}
      <span className="typing-cursor" style={{ height: "1em", width: "3px", display: "inline-block", background: "#14a8ff", verticalAlign: "middle", marginLeft: 3, animation: "blink 0.8s step-end infinite" }} />
    </span>
  );
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Animated grid background */}
      <div className="hero-grid-bg" />
      {/* Scan line */}
      <div className="hero-scan-line" />

      {/* Ambient glow orbs */}
      <div style={{
        position: "absolute", top: "20%", right: "10%",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(16,104,161,0.15) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
        animation: "orbPulse 8s ease-in-out infinite"
      }} />
      <style>{`@keyframes orbPulse { 0%,100%{transform:scale(1);opacity:0.6}50%{transform:scale(1.2);opacity:0.9}}`}</style>
      <div style={{
        position: "absolute", bottom: "30%", left: "5%",
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,245,255,0.08) 0%, transparent 70%)",
        filter: "blur(50px)", pointerEvents: "none",
        animation: "orbPulse 10s ease-in-out infinite 2s"
      }} />

      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`} style={{ zIndex: 10, pointerEvents: "none" }}>
        {/* Accent line */}
        <div className="flex flex-col justify-center items-center mt-5" style={{ pointerEvents: "none" }}>
          <div style={{
            width: 18, height: 18, borderRadius: "50%",
            background: "linear-gradient(135deg, #1068a1, #14a8ff)",
            boxShadow: "0 0 15px rgba(20,168,255,0.8)"
          }} />
          <div style={{
            width: 3, height: 280,
            background: "linear-gradient(to bottom, #1068a1, rgba(16,104,161,0))",
            marginTop: 4, borderRadius: 2
          }} />
        </div>

        <div style={{ paddingTop: "4px", maxWidth: "520px", pointerEvents: "all" }}>
          {/* Greeting badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              background: "rgba(16,104,161,0.15)",
              border: "1px solid rgba(20,168,255,0.3)",
              borderRadius: 20,
              marginBottom: 16
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#14a8ff", boxShadow: "0 0 8px #14a8ff", display: "inline-block", animation: "blink 1.5s ease-in-out infinite" }} />
            <span style={{ color: "#14a8ff", fontSize: "0.78rem", fontFamily: "'Orbitron', monospace", letterSpacing: "0.15em", fontWeight: 600 }}>
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`${styles.heroHeadText} text-white`}
          >
            Hello, I'm{" "}
            <span className="hero-name-glow" style={{ color: "#14a8ff" }}>
              Ram
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-3"
            style={{ fontSize: "clamp(16px, 2vw, 22px)", color: "#dfd9ff", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}
          >
            <span style={{ opacity: 0.7 }}>I'm a </span>
            <TypingText />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-4"
            style={{ color: "#aaa6c3", maxWidth: 480, lineHeight: 1.7, fontSize: "clamp(13px, 1.3vw, 16px)" }}
          >
            Senior at Iowa State University · Software Engineering · Cybersecurity Minor
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#about" style={{
              padding: "12px 28px",
              background: "linear-gradient(135deg, #1068a1, #14a8ff)",
              border: "none",
              borderRadius: 10,
              color: "white",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              boxShadow: "0 4px 20px rgba(16,104,161,0.4)",
              display: "inline-block",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(20,168,255,0.5)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(16,104,161,0.4)"; }}
            >
              Explore My Work
            </a>
            <a href="#contact" style={{
              padding: "12px 28px",
              background: "transparent",
              border: "1px solid rgba(20,168,255,0.4)",
              borderRadius: 10,
              color: "#14a8ff",
              fontWeight: 600,
              fontSize: 14,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              display: "inline-block",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(20,168,255,0.1)"; e.currentTarget.style.borderColor = "#14a8ff"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(20,168,255,0.4)"; }}
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>

      <ComputersCanvas />

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div style={{
            width: 35, height: 62,
            borderRadius: 24,
            border: "2px solid rgba(20,168,255,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: 8,
            boxShadow: "0 0 15px rgba(20,168,255,0.2)"
          }}>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              style={{
                width: 12, height: 12,
                borderRadius: "50%",
                background: "#14a8ff",
                boxShadow: "0 0 8px #14a8ff"
              }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
