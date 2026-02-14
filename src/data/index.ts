import type { experience, formField, skill, bio as BioType } from "../types";

export const bio: BioType = {
  name: "Gokul",
  title: "Software Engineer",
  description:
    "A Chennai based software engineer with an eye for elegant solutions and a passion for crafting seamless UIs that blend form and function, keen on building products that not only meet user needs but also delight them, and comes with good movie recommendations.",
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
    imagePath: "src/assets/javascript.svg",
  },
  {
    name: "TypeScript",
    imagePath: "src/assets/typescript.svg",
  },

  // Markup & Styling
  {
    name: "HTML",
    imagePath: "src/assets/html.svg",
  },
  {
    name: "CSS",
    imagePath: "src/assets/css.svg",
  },
  {
    name: "Tailwind CSS",
    imagePath: "src/assets/tailwindcss.svg",
  },

  // Frontend Frameworks
  {
    name: "React",
    imagePath: "src/assets/react.svg",
  },
  {
    name: "Next.js",
    imagePath: "src/assets/nextjs.svg",
  },

  // State Management
  {
    name: "Redux",
    imagePath: "src/assets/redux.svg",
  },
  {
    name: "Redux-Saga",
    imagePath: "src/assets/reduxsaga.svg",
  },

  // Testing
  {
    name: "Jest",
    imagePath: "src/assets/jest.svg",
  },

  // Version Control & Platforms
  {
    name: "Git",
    imagePath: "src/assets/git.svg",
  },
  {
    name: "GitHub",
    imagePath: "src/assets/github.svg",
  },

  // CI/CD & DevOps
  {
    name: "GitHub Actions",
    imagePath: "src/assets/githubactions.svg",
  },
  {
    name: "Jenkins",
    imagePath: "src/assets/jenkins.svg",
  },
  {
    name: "Docker",
    imagePath: "src/assets/docker.svg",
  },
  {
    name: "Google Cloud",
    imagePath: "src/assets/googlecloud.svg",
  },

  // Hosting / Edge
  {
    name: "Vercel",
    imagePath: "src/assets/vercel.svg",
  },
];
