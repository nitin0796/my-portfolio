// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import pythonLogo from "./assets/tech_logo/python.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Education Section Logo's
import manipalLogo from "./assets/education_logo/manipal_logo.png";
import jetKingLogo from "./assets/education_logo/jetking.png";

// Project Section Logo's
import movraxLogo from "./assets/project_logo/Movrax.png";
import quoteGeneratorLogo from "./assets/project_logo/Quote_gentrator.png";
import resumeForgeLogo from "./assets/project_logo/Resume-Forge.png";
import dialo from "./assets/project_logo/Dialo.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
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
    img: manipalLogo,
    school: "Manipal University Jaipur",
    date: "July 2022 - Dec 2024",
    desc: "I earned my Bachelor's degree in Computer Applications (BCA) from Manipal University, Jaipur, where I developed a solid foundation in computer science. During the program, I explored various areas of technology.",
    degree: "Bachelor In Computer Applications - BCA",
  },
  {
    id: 1,
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
    title: "Dialo",
    description:
      "Dialo is a modern watch marketplace platform where sellers can list and showcase their watches for potential buyers. The platform acts as a bridge between buyers and sellers by providing detailed watch listings along with seller contact information, enabling direct communication and seamless deal negotiation. Buyers can explore a variety of watches, connect with sellers, and purchase their preferred timepieces with ease. Built with Next.js, TypeScript, MongoDB, and Mongoose, Dialo delivers a fast, scalable, and responsive user experience with efficient data management and a robust full-stack architecture",
    image: dialo,
    tags: ["NextJS", "TypeScript", "MongoDB", "Mongoose"],
    github: "https://github.com/nitin0796/dialo",
    webapp: "https://dialo-kappa.vercel.app/",
  },
  {
    id: 1,
    title: "Resume Forge",
    description:
      "Resume Forge is a full-stack MERN application designed to help users create professional resumes with ease. Built using React.js, Node.js, Express, MongoDB, and Tailwind CSS, the platform offers a seamless and intuitive interface for entering personal details, work experience, and educational background. It integrates the Google Gemini AI model to enhance content generation and utilizes ImageKit for efficient image storage and management. The application focuses on delivering a smooth user experience while enabling users to generate polished, job-ready resumes quickly and efficiently.",
    image: resumeForgeLogo,
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "React Router Dom",
      "Axios",
      "Redux Tool-Kit",
      "Image-kit",
      "MongoDB",
      "JWT",
      "Gemini AI",
    ],
    github: "https://github.com/nitin0796/AI-Resume-Builder",
    webapp: "https://ai-resume-builder-frontend-17tb.onrender.com",
  },
  {
    id: 2,
    title: "Movrax",
    description:
      "MovraX is a modern movie and TV series discovery platform built with React, designed to help you explore and search the latest films and shows effortlessly. With debounced search for smooth, real-time results and an infinite scroll feature for seamless browsing, MovraX delivers an optimized and engaging experience for finding your next favorite watch.",
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
  {
    id: 3,
    title: "Quote Generator",
    description:
      "A Quote Generator is a simple web app built with HTML, CSS, and JavaScript that fetches quotes from an API and displays them randomly. It also allows users to share their favorite quotes directly to their X (Twitter) profile.",
    image: quoteGeneratorLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/nitin0796/Quote-Generator",
    webapp: "https://xquotegenrator.netlify.app/",
  },
];
