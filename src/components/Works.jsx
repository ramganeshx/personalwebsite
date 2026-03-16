import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, text.lastIndexOf(" ", maxLength)) + "...";
};

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 15, scale: 1.02, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full flex flex-col justify-between"
        style={{
          minHeight: 580,
          background: "linear-gradient(135deg, #1d1836 0%, #0f0d22 100%)",
          border: `1px solid ${hovered ? "rgba(20,168,255,0.4)" : "rgba(16,104,161,0.15)"}`,
          boxShadow: hovered ? "0 8px 40px rgba(16,104,161,0.25)" : "0 4px 20px rgba(0,0,0,0.3)",
          transition: "border-color 0.3s, box-shadow 0.3s",
          borderRadius: 16
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div>
          <div className="relative w-full h-[220px]" style={{ borderRadius: 12, overflow: "hidden" }}>
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
              style={{ transition: "transform 0.5s ease", transform: hovered ? "scale(1.05)" : "scale(1)" }}
            />
            {/* Overlay */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(15,13,34,0.85) 0%, transparent 60%)",
              borderRadius: 12,
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.35s ease"
            }} />
            {/* GitHub button */}
            <div
              className="absolute inset-0 flex justify-end items-start m-3"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <div style={{
                width: 40, height: 40,
                borderRadius: "50%",
                background: "rgba(0,0,0,0.7)",
                border: "1px solid rgba(255,255,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(8px)",
                transition: "background 0.2s, transform 0.2s",
                transform: hovered ? "scale(1.1)" : "scale(1)"
              }}>
                <img src={github} alt="source code" style={{ width: "55%", height: "55%", objectFit: "contain" }} />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <h3 className="text-white font-bold text-[20px] tracking-wide">{name}</h3>
              <span style={{
                fontSize: 11,
                color: "#14a8ff",
                fontFamily: "Orbitron, monospace",
                padding: "3px 8px",
                border: "1px solid rgba(20,168,255,0.3)",
                borderRadius: 4,
                marginLeft: 8,
                whiteSpace: "nowrap",
                marginTop: 2
              }}>0{index + 1}</span>
            </div>
            <p className="mt-2 text-secondary text-[13px] leading-relaxed">
              {truncateText(description, 220)}
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "3px 10px",
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 500,
                background: "rgba(16,104,161,0.15)",
                border: "1px solid rgba(16,104,161,0.3)",
                transition: "all 0.2s"
              }}
              className={`${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`} style={{ letterSpacing: "0.2em" }}>WHAT I'VE BUILT</p>
        <h2 className={`${styles.sectionHeadText} section-title-underline`}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[16px] max-w-3xl leading-[30px]"
      >
        Real-world projects that showcase my technical range — from Discord bots to mobile apps to cryptographic systems. Each one built to solve actual problems.
      </motion.p>

      <div className="mt-16 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
