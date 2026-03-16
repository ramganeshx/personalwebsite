import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const STATS = [
  { number: "3.5", label: "GPA", suffix: "" },
  { number: "100+", label: "Students Tutored", suffix: "" },
  { number: "25+", label: "Bot Users", suffix: "" },
  { number: "4", label: "Years Experience", suffix: "" },
];

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[230px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card service-card-shine"
    >
      <div
        className="bg-tertiary rounded-[20px] py-5 px-10 min-h-[250px] flex justify-evenly items-center flex-col"
        style={{ background: "linear-gradient(135deg, #1d1836 0%, #0f0d22 100%)" }}
      >
        <div style={{
          width: 64, height: 64,
          background: "rgba(16,104,161,0.15)",
          borderRadius: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid rgba(16,104,161,0.3)",
          boxShadow: "0 0 15px rgba(16,104,161,0.2)"
        }}>
          <img src={icon} alt={title} style={{ width: 36, height: 36, objectFit: "contain" }} />
        </div>
        <h3 className="text-white text-[18px] font-bold text-center tracking-wide">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div style={{ position: "relative" }}>
      {/* Background decoration */}
      <div style={{
        position: "absolute", top: -100, right: -100,
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(16,104,161,0.08) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none"
      }} />

      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`} style={{ letterSpacing: "0.2em" }}>WHO I AM</p>
        <h2 className={`${styles.sectionHeadText} section-title-underline`}>About Me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-8 text-secondary text-[16px] max-w-3xl leading-[32px]"
        style={{ borderLeft: "3px solid rgba(16,104,161,0.5)", paddingLeft: "1.5rem", lineHeight: 1.85 }}
      >
Hello, my name is <span style={{ color: "#14a8ff", fontWeight: 600 }}>Ramsrivatsan Ganesh</span>. I’m a Software Engineering student at Iowa State University with a minor in Cybersecurity, graduating in May 2026. I’m passionate about cloud infrastructure, DevOps, and building reliable systems. During my internship at Western Union, I worked on automating CI/CD workflows and improving cloud-based deployment processes. I enjoy tackling complex technical challenges and continuously learning new technologies. Outside of tech, I’m a gym regular and a big Chicago sports fan.      </motion.p>

      {/* Stats row */}
      <motion.div
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-10 flex flex-wrap gap-5"
      >
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="stat-number">{s.number}{s.suffix}</div>
            <div className="stat-label">{s.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Service cards */}
      <div className="mt-16 flex flex-wrap gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
