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
import githubdetLogo from "./assets/project_logo/github_det.png";
import csprepLogo from "./assets/project_logo/cs_prep.png";
import movierecLogo from "./assets/project_logo/movie_rec.png";
import taskremLogo from "./assets/project_logo/task_rem.png";
import npmLogo from "./assets/project_logo/npm.png";
import webverLogo from "./assets/project_logo/web_dig.png";
import cmLogo from "./assets/project_logo/cm.png";
import imagesearchLogo from "./assets/project_logo/image_search.png";
import removebgLogo from "./assets/project_logo/remove_bg.png";

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
    title: "GitHub Profile Detective",
    description:
      "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    image: githubdetLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github:
      "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
    webapp: "https://githubprofiledetective.netlify.app/",
  },
  {
    id: 1,
    title: "CS Prep",
    description:
      "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
    image: csprepLogo,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/codingmastr/CSPrep",
    webapp: "https://csprep.netlify.app/",
  },
  {
    id: 2,
    title: "Movie Recommendation App",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: movierecLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/codingmastr/Movie-Recommendation-App",
    webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
  {
    id: 3,
    title: "Email Validator NPM Package",
    description:
      "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    image: npmLogo,
    tags: ["React JS", "Node.js", "NPM", "Validation"],
    github: "https://github.com/codingmastr/cmtk-email-validator",
    webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  },
  {
    id: 4,
    title: "Task Reminder Chrome Extension Tool",
    description:
      "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    image: taskremLogo,
    tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    github: "https://github.com/codingmastr/Task-Reminder-Tool",
    webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  },
  {
    id: 5,
    title: "Webverse Digital",
    description:
      "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    image: webverLogo,
    tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    github: "https://github.com/codingmastr/Webverse-Digital",
    webapp: "https://webversedigital.com/",
  },
  {
    id: 6,
    title: "Coding Master",
    description:
      "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    image: cmLogo,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    github: "https://codingmasterweb.in/",
    webapp: "https://codingmasterweb.in/",
  },
  {
    id: 7,
    title: "Image Search App",
    description:
      "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    image: imagesearchLogo,
    tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    github: "https://github.com/codingmastr/Image-Search-App",
    webapp: "https://imagsearch.netlify.app/",
  },
  {
    id: 8,
    title: "Image Background Remover",
    description:
      "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    image: removebgLogo,
    tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    github: "https://github.com/codingmastr/Image-Background-Remover",
    webapp: "https://removeyourbg.netlify.app/",
  },
];
