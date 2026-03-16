import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/ramganeshx", icon: "⌥" },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: "in" },
];

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        { from_name: form.name, to_name: "Personal Website Inquiries", from_email: form.email, to_email: "ramsrivatsang38@gmail.com", message: form.message },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 5000);
      })
      .catch(() => {
        setLoading(false);
        alert("Ahh, something went wrong. Please try again.");
      });
  };

  const inputStyle = (field) => ({
    background: "rgba(21, 16, 48, 0.9)",
    border: `1px solid ${focused === field ? "#14a8ff" : "rgba(16,104,161,0.25)"}`,
    boxShadow: focused === field ? "0 0 15px rgba(20,168,255,0.15)" : "none",
    color: "white",
    padding: "14px 20px",
    borderRadius: 10,
    width: "100%",
    outline: "none",
    transition: "border-color 0.3s, box-shadow 0.3s",
    fontSize: 14,
  });

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        style={{
          flex: "0.75",
          background: "linear-gradient(135deg, #100d25 0%, #0a0818 100%)",
          padding: "2.5rem",
          borderRadius: 20,
          border: "1px solid rgba(16,104,161,0.2)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.4)"
        }}
      >
        <p className={styles.sectionSubText} style={{ letterSpacing: "0.2em" }}>REACH OUT</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* Social quick links */}
        <div style={{ display: "flex", gap: 12, marginTop: 20, marginBottom: 32 }}>
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 16px",
                background: "rgba(16,104,161,0.1)",
                border: "1px solid rgba(16,104,161,0.25)",
                borderRadius: 8,
                color: "#aaa6c3",
                fontSize: 13,
                fontWeight: 500,
                transition: "all 0.2s",
                textDecoration: "none"
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#14a8ff"; e.currentTarget.style.color = "#14a8ff"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(16,104,161,0.25)"; e.currentTarget.style.color = "#aaa6c3"; }}
            >
              <span style={{ fontFamily: "monospace", fontSize: 12 }}>{s.icon}</span>
              {s.label}
            </a>
          ))}
        </div>

        <form ref={formRef} onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span style={{ color: "white", fontWeight: 600, fontSize: 14, letterSpacing: "0.05em" }}>Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              style={inputStyle("name")}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused(null)}
            />
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span style={{ color: "white", fontWeight: 600, fontSize: 14, letterSpacing: "0.05em" }}>Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              style={inputStyle("email")}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
            />
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span style={{ color: "white", fontWeight: 600, fontSize: 14, letterSpacing: "0.05em" }}>Your Message</span>
            <textarea
              rows={6}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to say?"
              style={{ ...inputStyle("message"), resize: "vertical" }}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
            />
          </label>

          <button
            type="submit"
            className="send-btn"
            style={{
              padding: "14px 36px",
              borderRadius: 12,
              color: "white",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              alignSelf: "flex-start",
              border: "1px solid rgba(20,168,255,0.4)",
              background: sent ? "linear-gradient(135deg, #0d7a2e, #15a34a)" : "linear-gradient(135deg, #1068a1, #0d4f7a)",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: 8
            }}
          >
            {loading ? (
              <><span style={{ display: "inline-block", width: 14, height: 14, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "white", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} /> Sending...</>
            ) : sent ? (
              <><span>✓</span> Message Sent!</>
            ) : (
              <><span>↗</span> Send Message</>
            )}
          </button>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
