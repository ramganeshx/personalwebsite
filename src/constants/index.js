import {
  mobile,
  backend,
  creator,
  web,
  lin,
  javascript,
  foot,
  html,
  css,
  disc,
  reactjs,
  tailwind,
  nodejs,
  mona,
  mongodb,
  git,
  sql,
  and,
  boot,
  threejs,
  state,
  saint,
  dining,
  ia,
  wu,
  yt,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Cloud Engineer",
    icon: web,
  },
  {
    title: "Cybersecurity Enthusiast",
    icon: mobile,
  },
  {
    title: "Full-Stack Developer",
    icon: backend,
  },
  {
    title: "Tech Innovator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Linux",
    icon: lin,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Android Studio",
    icon: and,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "MySQL",
    icon: sql,
  },
  {
    name: "Bootstrap",
    icon: boot,
  },
];

const experiences = [
  {
    title: "Undergraduate Degree",
    company_name: "Iowa State University",
    icon: state,
    iconBg: "#E6DEDD",
    date: "August 2022 - May 2026",
    points: [
      "I'm currently studying software engineering at Iowa State University, while pursuing a minor in Cybersecurity.",
    ],
  },
  {
    title: "Cloud and AI Teaching Assistant",
    company_name: "Iowa State University",
    icon: ia,
    iconBg: "#F9F6EE",
    date: "February 2026 - Present",
    points: [
      "Supporting 50+ students this semester in building cloud-native and DevOps projects using GitLab CI/CD pipelines, Docker, and AWS services such as S3, Lambda, and Step Functions. Led hands-on workshops on infrastructure-as-code and cloud security best practices while providing code reviews and technical guidance to help students build production-style workflows and infrastructure."
    ],
  },
  {
    title: "DevOps Intern at Western Union",
    company_name: "Western Union",
    icon: wu,
    iconBg: "#FDDA0D",
    date: "June 2025 - August 2025",
    points: [
      "My internship focused on the end-to-end DevOps lifecycle, from code to production. I not only automated core CI/CD workflows and improved system observability but also took a full-stack application from development to a production-ready state, showcasing a complete understanding of the software delivery process.",
    ],
  },
  {
    title: "Iowa State Dining",
    company_name: "Iowa State University",
    icon: dining,
    iconBg: "#F9F6EE",
    date: "March 2025 - May 2025",
    points: [
      "I worked with 10+ team members to cater to 100+ students a day.",
    ],
  },
  {
    title: "Calculus Tutor",
    company_name: "Iowa State University",
    icon: ia,
    iconBg: "#F9F6EE",
    date: "August 2024 - May 2025",
    points: [
      "I was a calculus tutor for 50+ students per semester. I'm helping reinforce key Calculus concepts, developing custom study guides and practice materials, and improving student engagement and comprehension."
    ],
  },
  
  {
    title: "High School Diploma",
    company_name: "St. Charles, IL",
    icon: saint,
    iconBg: "#383E56",
    date: "May 2022",
    points: [
      "Graduated high school magna cum laude with a GPA of 5.47. Part took in clubs like speech, and DECA, while also playing for the high school volleyball team.",
      ,
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Discord Music Bot",
    description:
      "Built a Discord music bot that allows users to request songs in voice channels by integrating Spotify and YouTube APIs. Used across multiple servers by 25+ users, processing 35–40 song requests daily."
    ,
    tags: [
      
    ],
    image: disc,
    source_code_link: "https://github.com/ramganeshx/discordbot",
  },
  {
    name: "Lift Tracker",
    description:
    "Built a fitness tracking app that lets users log workouts, meals, and water intake while monitoring daily progress. Developed with Android Studio and SQL."
      
    ,
    tags: [
      
    ],
    image: yt,
    source_code_link: "https://youtu.be/9lff6QGI3us?si=Y7qgzSu3r7VUpdAm",
  },
  {
    name: "Binary Decoder",
    description:
      "Developed a program that decodes encrypted messages compressed using a binary tree–based algorithm. The output reconstructs the Mona Lisa in the console, demonstrating my understanding of data structures."
    ,
    tags: [
      
    ],
    image: mona,
    source_code_link: "https://github.com/ramganeshx/binarydecoder",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
