// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import pythonLogo from "./assets/tech_logo/python.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Education Section Logo's
import masaiLogo from "./assets/education_logo/masai_logo.png";
import manipalLogo from "./assets/education_logo/manipal_logo.png";
import jetKingLogo from "./assets/education_logo/jetking.png";

// Project Section Logo's
import movraxLogo from "./assets/project_logo/Movrax.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "GSAP", logo: gsapLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Express JS", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "Node JS", logo: nodejsLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", logo: javascriptLogo },
      { name: "Python", logo: pythonLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: masaiLogo,
    school: "Masai School",
    date: "August 2024 - June 2025",
    desc: "I have successfully completed an intensive, industry-focused MERN Stack Development program at Masai School, where I gained hands-on experience and deep expertise in building scalable, full-stack web applications using MongoDB, Express.js, React, and Node.js.",
    degree: "Full Stack Developer - MERN",
  },
  {
    id: 1,
    img: manipalLogo,
    school: "Manipal University Jaipur",
    date: "July 2022 - Dec 2024",
    desc: "I earned my Bachelor's degree in Computer Applications (BCA) from Manipal University, Jaipur, where I developed a solid foundation in computer science. During the program, I explored various areas of technology.",
    degree: "Bachelor In Computer Applications - BCA",
  },
  {
    id: 2,
    img: jetKingLogo,
    school: "Jetking, Delhi",
    date: "June 2019 - March 2021",
    desc: "I completed my Diploma in Network Administration from Jetking, Delhi, where I received hands-on training in configuring, managing, and securing computer networks. The program covered key areas such as networking protocols, system administration.I gained practical experience with industry-standard tools and technologies, including Cisco routers and switches, Windows Server, and Linux systems.",
    degree: "Diploma In Network Administration",
  },
];

export const projects = [
  {
    id: 0,
    title: "Movrax",
    description:
      "MovraX is a modern movie and TV Series discovery platform built on React that lets you browse and search the latest films and entertainment content. Featuring debounced search functionality for smooth, responsive queries, MovraX provides an optimized experience for finding your next favorite movie.",
    image: movraxLogo,
    tags: [
      "React JS",
      "API",
      "Redux Tool-Kit",
      "TailwindCSS",
      "React Router Dom",
      "Axios",
    ],
    github: "https://github.com/nitin0796/Movarx",
    webapp: "https://movarx.vercel.app",
  },
];
