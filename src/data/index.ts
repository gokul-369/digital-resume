import type {
  experience,
  formField,
  skill,
  bio as BioType,
  hero as heroType,
  education,
  testimonial,
} from "../types";

import javascriptLogo from "../assets/javascript.svg";
import typescriptLogo from "../assets/typescript.svg";
import htmlLogo from "../assets/html.svg";
import cssLogo from "../assets/css.svg";
import tailwindLogo from "../assets/tailwindcss.svg";
import reactLogo from "../assets/react.svg";
import nextLogo from "../assets/nextjs.svg";
import reduxLogo from "../assets/redux.svg";
import reduxSagaLogo from "../assets/reduxsaga.svg";
import jestLogo from "../assets/jest.svg";
import gitLogo from "../assets/git.svg";
import githubLogo from "../assets/github.svg";
import githubActionsLogo from "../assets/githubactions.svg";
import jenkinsLogo from "../assets/jenkins.svg";
import dockerLogo from "../assets/docker.svg";
import googleCloudLogo from "../assets/googlecloud.svg";
import vercelLogo from "../assets/vercel.svg";
import bharathiImage from "../assets/bharathi.png";
import lavanyaImage from "../assets/lavanya.png";
import Akimage from "../assets/Ak.png";

export const navLinks: formField[] = [
  {
    name: "Home",
    value: "/#home",
  },
  {
    name: "About",
    value: "/#about",
  },
  {
    name: "Experience",
    value: "/experience",
  },
  {
    name: "Skills",
    value: "#skills",
  },
];

export const hero: heroType = {
  title: `Welcome to <span class="text-indigo-500">Gokul&apos;s </span> digital canvas`,
  punchLine: "Interfaces that breathe.",
  shortDescription:
    "A software engineer who is solving for scale. Building for users. Refining for impact.",
  longDescription: ` Hi, I&apos;m <span class="text-white dark:text-black">Gokul</span>, a software
                          engineer with a passion for crafting seamless user interfaces that
                          blend form and function. I&apos;m keen on building products that
                          not only meet user needs but also delight them.`,
};
export const bio: BioType = {
  name: "Gokul",
  title: "Software Engineer",
  description:
    "A Chennai based engineer, working at the intersection of engineering and design. I build frontends that are predictable for developers, intuitive for users, and fast in production. I care deeply about structure, motion, and performance refactoring component trees, fine-tuning micro-interactions, and obsessing over how systems behave under real-world traffic.",
};

export const fields: formField[] = [
  {
    name: "Email",
    value: "gokul369@outlook.com",
  },
  {
    name: "Phone",
    value: "+91 6381315837",
  },
  {
    name: "Location",
    value: "Chennai, India",
  },
];

export const socialLinks: formField[] = [
  {
    name: "LinkedIn",
    value: "https://www.linkedin.com/in/gokulrao369",
  },
  {
    name: "GitHub",
    value: "https://github.com/gokul-369",
  },
];

export const workExperiences: experience[] = [
  {
    company: "Tata Consultancy Services",
    role: "Software Engineer",
    duration: "April 2025 - Present",
    description: [
      "One of the Designated Front-End Engineers in Lloyds Banking Group project, one of the UK’s leading financial institutions.",
      "Contributing to the Card Controls team, developing Single Page Applications (SPAs) that enable customers to manage and restrict card usage and limits.",
      "Actively involved in building AI-driven solutions, including developing MCP servers, designing unique tools, and crafting elicitations for seamless integration with MCP clients.",
    ],
  },
  {
    company: "Paperflite",
    role: "Senior Software Engineer",
    duration: "January 2025 - March 2025",
    description: [
      "Worked on product revamp, migrating the legacy code to new code base, ensuring the compatibility of the codebases.",
      "Developed new nodules with real time analytics and data visualization",
      "Actively involved in organization level AI hackathon to build an AI based CLI that automates unit case generation using gemini 3.1",
    ],
  },
  {
    company: "Paperflite",
    role: "Software Engineer",
    duration: "August 2024 - January 2025",
    description: [
      "Involved in development of a product by working on new features that involved integrating AI product named 'Seek' built on top of open AI into our product ",
      "Fixed high priority customer tickets ",
      "Involved in fixing high priority defect there by reducing the overall bug count and ensuring the quality of the product",
    ],
  },
  {
    company: "Novac Technology Solutions",
    role: "Associate Project Manager",
    duration: "April 2024 - August 2024",
    description: [
      "Lead a team of 5 software developers in developing modules with payment related logics ",
      "Involved in Scrum, delivering modules with high quality code on a weekly sprint ",
      "Involved in Code reviews, reviewing peer code to achieve optimum performance ",
      "Involved in requirement discussion meetings, and understood key business goals thereby suggesting my ideas to the team in achieving the same",
    ],
  },
  {
    company: "Novac Technology Solutions",
    role: "Senior Software Engineer",
    duration: "July 2022 - April 2024",
    description: [
      "Actively involved in a team in developing various modules like Customer Portal, Admin Portal,Core business Application for Shriram Chits ,with payment gateways,Reports,and other finance related logics",
      "Did various R&Ds on React and React libraries for Pdf generation,Charts, Payment gateways and so on",
      "Worked on Reusable and scalable components in React",
      "Assisted team members on various stages of SDLC",
    ],
  },
  {
    company: "Novac Technology Solutions",
    role: "Software Engineer",
    duration: "June 2021 - July 2022",
    description: [
      "Worked on submitting various POCs on technologies like React,Redux,Webpack, Signal R and so on.",
      "Worked in a team,developing a CRM and core apps for Shriram Chits using React, Redux, Redux-saga, Axios and so on.",
      "Involved in setting up a development environment for React applications with modular and clean code along with project structuring for seamless development.",
    ],
  },
];

export const skills: skill[] = [
  // Languages
  {
    name: "JavaScript",
    imagePath: javascriptLogo,
  },
  {
    name: "TypeScript",
    imagePath: typescriptLogo,
  },

  // Markup & Styling
  {
    name: "HTML",
    imagePath: htmlLogo,
  },
  {
    name: "CSS",
    imagePath: cssLogo,
  },
  {
    name: "Tailwind CSS",
    imagePath: tailwindLogo,
  },

  // Frontend Frameworks
  {
    name: "React",
    imagePath: reactLogo,
  },
  {
    name: "Next.js",
    imagePath: nextLogo,
  },

  // State Management
  {
    name: "Redux",
    imagePath: reduxLogo,
  },
  {
    name: "Redux-Saga",
    imagePath: reduxSagaLogo,
  },

  // Testing
  {
    name: "Jest",
    imagePath: jestLogo,
  },

  // Version Control & Platforms
  {
    name: "Git",
    imagePath: gitLogo,
  },
  {
    name: "GitHub",
    imagePath: githubLogo,
  },

  // CI/CD & DevOps
  {
    name: "GitHub Actions",
    imagePath: githubActionsLogo,
  },
  {
    name: "Jenkins",
    imagePath: jenkinsLogo,
  },
  {
    name: "Docker",
    imagePath: dockerLogo,
  },
  {
    name: "Google Cloud",
    imagePath: googleCloudLogo,
  },

  // Hosting / Edge
  {
    name: "Vercel",
    imagePath: vercelLogo,
  },
];

export const educationItems: education[] = [
  {
    title: "B.Sc. Computer Science · RKM Vivekananda College",
    subTitle: "2018 – 2021 · First Class with Distinction",
  },
  {
    title: "High School · SBMHSS",
    subTitle: "2017 – 2018 · First Class with Distinction",
  },
  {
    title: "Beyond the classroom",
    subTitle:
      "Placement coordinator in college, top scorer in my department, and district physics symposium medalist.",
  },
];

export const interests: string[] = [
  "Automation",
  "Editing",
  "F1",
  "Frontend development",
  "Fitness and Health",
  "Football",
  "Gaming",
  "Gen AI",
  "Movies and TV shows",
  "Physics",
  "Photography",
  "Travel",
  "UI-UX",
];

export const testimonials: testimonial[] = [
  {
    name: "Leelavathi Dahanabal",
    jobTitle: "Lead Software Engineer",
    location: "Chennai, India",
    company: "TCS",
    testimonial:
      "It is a great experience working with Gokul, his dedication, postive attitude and commitment to delivering quality work truly stand out, he is very good when it comes to on time deliverables and maintaining good coordination with teams and clients.",
  },
  {
    name: "Bharathi Pachayappan",
    jobTitle: "Software Engineer",
    location: "Chennai, India",
    company: "Infosys",
    testimonial:
      "I’ve collaborated with him and exchanged technical ideas, and he consistently stands out for his quick learning ability and strong coding skills. He writes clean and optimized code, grasps new technologies and approaches challenges with clarity and confidence. It’s impressive to see such focus and growth at this stage of his career.",
    image: bharathiImage,
  },
  {
    name: "Lavanya Srinivasan",
    jobTitle: "Software Engineer",
    location: "Ajax, Cannada",
    company: "Inovyne",
    testimonial:
      "I worked with Gokul and what stood out immediately was his genuine passion for coding. He enjoys digging into problems, understanding how things work, and finding clean solutions rather than just getting something to “work.” He’s reliable, easy to collaborate with, and takes real ownership of his work. Any team that values curiosity and solid engineering would benefit from having him.",
    image: lavanyaImage,
  },
  {
    name: "Nabeel Ahmed",
    jobTitle: "Lead Engineer",
    location: "Edinburg, Scotland",
    company: "Lloyds Bank",
    testimonial:
      "I worked with Gokul and what stood out immediately was his genuine passion for coding. He enjoys digging into problems, understanding how things work, and finding clean solutions rather than just getting something to “work.” He’s reliable, easy to collaborate with, and takes real ownership of his work. Any team that values curiosity and solid engineering would benefit from having him.",
  },
  {
    name: "JM Mcghee",
    jobTitle: "Software Engineer",
    location: "Edinburg, Scotland",
    company: "Lloyds Bank",
    testimonial:
      "I worked with Gokul and what stood out immediately was his genuine passion for coding. He enjoys digging into problems, understanding how things work, and finding clean solutions rather than just getting something to “work.” He’s reliable, easy to collaborate with, and takes real ownership of his work. Any team that values curiosity and solid engineering would benefit from having him.",
  },
  {
    name: "Ajay Karthick",
    jobTitle: "Software Engineer",
    location: "Chennai, India",
    company: "Agilysis",
    testimonial:
      "I worked with Gokul and what stood out immediately was his genuine passion for coding. He enjoys digging into problems, understanding how things work, and finding clean solutions rather than just getting something to “work.” He’s reliable, easy to collaborate with, and takes real ownership of his work. Any team that values curiosity and solid engineering would benefit from having him.",
    image: Akimage,
  },
];
