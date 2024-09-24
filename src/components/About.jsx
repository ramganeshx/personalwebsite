import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Overview</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hello, my name is Ramsrivatsan Ganesh, and I am a student at Iowa State
        University, where I am pursuing a Bachelor of Science in Software
        Engineering with a minor in Cybersecurity. I am set to graduate in May
        2026, and my ambition is to become a successful Web Developer and/or
        Cloud Security Engineer. From a young age, I was drawn to technology,
        which sparked my passion for innovation and problem-solving. This
        passion naturally led me to pursue a career in a field as dynamic as
        technology. I firmly believe that to truly make an impact, you must love
        what you do and must be fully committed to it. This mindset drives the
        seriousness and dedication I bring to all my studies and projects.
        Technology provides the ideal platform for me to channel my energy and
        curiosity. Whether if it's fixing the table fan in my room, or finding
        and correcting issues in my code, I enjoy the challenge of finding
        solutions. Outside of my academic life, I like to stay active by going
        to the gym. I'm also a huge football fan and am a big fan of Chicago
        sports teams. Overall, my personal philosophy extends to all aspects of
        my life: whether it's a school project, a piece of code, or a personal
        goal, I never like to settle for anything less than excellence. I
        believe that attention to detail and a commitment to quality are what
        separate good work from great work, and I want to ensure I give the best
        work in anything I do. You can further connect with me through LinkedIn
        @ramsrivatsanganesh, or email me at ramsrivatsang38@gmail.com
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
