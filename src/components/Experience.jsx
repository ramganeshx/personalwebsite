import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(135deg, #1d1836 0%, #0f0d22 100%)",
        color: "#fff",
        border: "1px solid rgba(16,104,161,0.25)",
        boxShadow: "0 4px 25px rgba(0,0,0,0.4)",
        borderRadius: 16,
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(16,104,161,0.3)" }}
      date={experience.date}
      dateClassName="text-secondary"
      iconStyle={{
        background: experience.iconBg,
        boxShadow: `0 0 0 4px rgba(16,104,161,0.3), 0 0 20px rgba(16,104,161,0.2)`,
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[22px] font-bold tracking-wide">{experience.title}</h3>
        <p
          className="text-[14px] font-semibold mt-1"
          style={{ margin: 0, color: "#14a8ff", letterSpacing: "0.05em" }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-none ml-0 space-y-3">
        {experience.points.map((point, index) =>
          point ? (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] tracking-wide leading-relaxed"
              style={{ display: "flex", gap: 10, alignItems: "flex-start" }}
            >
              <span style={{
                minWidth: 6, height: 6, borderRadius: "50%",
                background: "#14a8ff",
                boxShadow: "0 0 6px #14a8ff",
                marginTop: 7, display: "inline-block"
              }} />
              {point}
            </li>
          ) : null
        )}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`} style={{ letterSpacing: "0.2em" }}>
          WHAT I'VE DONE
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My Journey.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="rgba(16,104,161,0.4)">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
