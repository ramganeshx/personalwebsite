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
    title: "Web Developer",
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
  {
    title: "Undergraduate Degree",
    company_name: "Iowa State University",
    icon: state,
    iconBg: "#E6DEDD",
    date: "August 2022 - May 2026",
    points: [
      "I am currently studying software engineering at Iowa State University, while pursuing a minor in Cybersecuirty.",

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
      "Built a Discord bot that plays music in voice channels, allowing users to request songs by name. The bot searches both Spotify and YouTube APIs to find and stream songs. Over 25 users used my bot across various Discord servers. On average, it processes 35 - 40 song requests daily. It is built using a established comprehensive framework for handling API authentication and error management for Spotify and YouTube Data APIs, thus resulting close to a 50% reduction in troubleshooting time and increasing development efficiency."
    ,
    tags: [
      {
        name: "Node JS",
        color: "blue-text-gradient",
      },
      {
        name: "APIs",
        color: "green-text-gradient",
      },
      {
        name: "Discord JS",
        color: "pink-text-gradient",
      },
    ],
    image: disc,
    source_code_link: "https://github.com/ramganeshx/discordbot",
  },
  {
    name: "StartSmart",
    description:
      "Currently working on creating a fantasy football website that utilizes APIs to fetch player data and provides insights based on the upcoming opponent’s defense and player performance history to generate feedback on your fantasy lineup. It's based on the data analysis, and it generates automated start/sit recommendations with the reasoning provided. The website is designed so people can use this tool to help win their fantasy leagues."
      
    ,
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "APIs",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: foot,
    source_code_link: "https://github.com/ramganeshx/discordbot",
  },
  {
    name: "Binary Decoder",
    description:
      "Created a program to unzip encrypted messages archived with a binary tree-based algorithm. Decoded a given message from a file and printed it to the console. The de-crypted message printed out the mona lisa in the console. This project demonstrates my understanding of data structures."
    ,
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Binary Trees",
        color: "green-text-gradient",
      },
      {
        name: "Data Structures",
        color: "pink-text-gradient",
      },
    ],
    image: mona,
    source_code_link: "https://github.com/ramganeshx/binarydecoder",
  },
  
];

export { services, technologies, experiences, testimonials, projects };