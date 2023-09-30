import {
  mobile,
  vue,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  python,
  mongodb,
  git,
  figma,
  swift,
  flutter,
  quatro,
  itc,
  codecademy,
  freecodecamp,
  py_lang_detector,
  countries,
  url,
  calculateIt,
  sleep_Buddy,
  yonatan,
  dror,
  isaac,
} from "../assets/assets";
import {
  Experience,
  FormDetails,
  NavLink,
  Project,
  Service,
  Technology,
  Testimonial,
} from "../ts/interfaces";

export const navLinks: NavLink[] = [
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

const services: Service[] = [
  {
    title: "Fullstack Web Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Localization Expert",
    icon: creator,
  },
  {
    title: "Polyglot",
    icon: backend,
  },
];

const technologies: Technology[] = [
  {
    name: "HTML",
    icon: html,
    docsUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    icon: css,
    docsUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    icon: javascript,
    docsUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    icon: typescript,
    docsUrl: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    icon: reactjs,
    docsUrl: "https://react.dev/",
  },
  {
    name: "Flutter",
    icon: flutter,
    docsUrl: "https://flutter.dev",
  },
  {
    name: "Vue JS (& Nuxt)",
    icon: vue,
    docsUrl: "https://vuejs.org/",
  },
  {
    name: "Python",
    icon: python,
    docsUrl: "https://www.python.org/",
  },
  {
    name: "Tailwind",
    icon: tailwind,
    docsUrl: "https://tailwindcss.com/",
  },
  {
    name: "Node JS",
    icon: nodejs,
    docsUrl: "https://nodejs.org/en/about",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    docsUrl: "https://www.mongodb.com/",
  },
  {
    name: "Git (Github & Bitbucket)",
    icon: git,
    docsUrl: "https://git-scm.com/",
  },
  {
    name: "Figma",
    icon: figma,
    docsUrl: "https://en.wikipedia.org/wiki/Figma_(software)",
  },
  {
    name: "Swift",
    icon: swift,
    docsUrl: "https://developer.apple.com/swift/",
  },
];

const experiences: Experience[] = [
  {
    title: "Fullstack & Flutter Developer",
    company_name: "Quatro Digital",
    icon: quatro,
    iconBg: "#383E56",
    date: "April 2022 - Now",
    points: [
      "Responsible for Pixel-Perfect Front-End oriented development for Web & Cross-Platform apps.",
      "Collaborating with cross-functional teams including designers, SEO team members, product managers, QA and other developers to create high-quality web & mobile apps.",
      "Implementing responsive & adaptive design, ensuring cross-platform & cross-browser compatibility.",
      "Testing & Deployment across mobile app stores and hosting services.",
      "Maintenance of live, client-facing apps using version-control, Content Management Systems.",
      "Techs: Flutter, Dart, Mobile-App Responsive-Design & deployment, Tailwind, Vue.js, Nuxt w Typescript, Wordpress & PHP, Figma",
    ],
    websiteUrl: "https://www.linkedin.com/company/quatro-digital/mycompany/",
  },
  {
    title: "Fullstack Dev Bootcamp",
    company_name: "Israel Tech Challenge",
    icon: itc,
    iconBg: "#383E56",
    date: "April 2021 - Jan 2022",
    points: [
      "Fullstack training course covering everything necessary to get you up & running for industry standards ☑️",
      "Frontend syllabus: HTML, CSS, BEM, Responsive Design, Sass, Modern Javascript, OOP, Typescipt, React, Material UI",
      "Backend syllabus: Node.js w Typescript, Express.js, SQL, MongoDB, Firebase",
      "Other topics: Testing, Git w Github, Deployment on Heroku & Netlify, Bash",
    ],
    websiteUrl: "https://www.linkedin.com/school/israel-tech-challenge/",
  },
  {
    title: "Fullstack Engineer Course",
    company_name: "Codecademy",
    icon: codecademy,
    iconBg: "#383E56",
    date: "2021 - 2022",
    points: [
      "A thorough Fullstack Course which covers all major topics in Web Development.",
    ],
    websiteUrl: "https://www.linkedin.com/company/codecademy/",
  },
  {
    title: "Python Programming",
    company_name: "FreeCodeCamp",
    icon: freecodecamp,
    iconBg: "#383E56",
    date: "January 2020 - August 2020",
    points: [
      "Introduction to Computer Programming.",
      "Python 3 basics, syntax, pip packages, modules, handling files.",
      "Simple Python projects.",
    ],
    websiteUrl: "https://www.linkedin.com/school/free-code-camp/",
  },
];

const testimonials: Testimonial[] = [
  {
    testimonial:
      "Lorem ipsum fsda Lorem ipsum asd Lorem df ipsum fsda Lorem fds ipsum Lorem ipsum f Lorem ipsum fsd Lorem ipsum Lorem ipsum Lorem ipsum.",
    name: "Dror Gahan",
    role: "Project Manager",
    company: "Quatro",
    image: dror,
  },
  {
    testimonial:
      "Yarden is a dedicated student with strong front-end skills. His commitment to creating visually appealing websites, his friendliness & curiosity, make an excellent fit for any development team.",
    name: "Yonatan Salmon",
    role: "Lecturer",
    company: "ITC",
    image: yonatan,
  },
  {
    testimonial:
      "I had the pleasure of collaborating with Yarden as a backend developer. Yarden's frontend skills are exceptional, and working together was a seamless and productive experience.",
    name: "Isaac Groisman",
    role: "Backend Dev",
    company: "Quatro",
    image: isaac,
  },
];

const projects: Project[] = [
  {
    name: "Sleep Buddy",
    description:
      "A white-noise sounds Flutter app for iOS (responsive on iPads), Android (& Tablets) & MacOS (with configured menu).",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "ios",
        color: "pink-text-gradient",
      },
      {
        name: "android",
        color: "blue-text-gradient",
      },
      {
        name: "macos",
        color: "green-text-gradient",
      },
    ],
    image: sleep_Buddy,
    sourceCodeLink: "https://github.com/Yarden-Tal/Sleep-Buddy",
  },
  {
    name: "CalculateIt",
    description:
      "My React TypeScript calculator web app, geared at pixel-perfect Front End based on a Dribbble design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: calculateIt,
    sourceCodeLink: "https://github.com/Yarden-Tal/Calculate-It",
  },
  {
    name: "Url Shortener",
    description:
      "Web application that integrates the shrtcode API to create shortened URLs and display them like in the Frontend Mentor designs.",
    tags: [
      {
        name: "vue.js",
        color: "blue-text-gradient",
      },
      {
        name: "nuxt.js",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "sass",
        color: "blue-text-gradient",
      },
    ],
    image: url,
    sourceCodeLink: "https://github.com/Yarden-Tal/url-Shortener",
  },
  {
    name: "REST Countries",
    description:
      "A Frontend Mentor design Pixel-Perfect project using with the countries API, persistent dark theme, search & filter & routing.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
      {
        name: "api",
        color: "blue-text-gradient",
      },
    ],
    image: countries,
    sourceCodeLink: "https://github.com/Yarden-Tal/rest-countries-api",
  },
  {
    name: "Python Lang Detector",
    description:
      "Small Python tkinter Graphical UI project using Langdetect & Langcodes, downloadable for Windows or MacOS.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tkinker",
        color: "green-text-gradient",
      },
      {
        name: "macos",
        color: "pink-text-gradient",
      },
      {
        name: "windows",
        color: "blue-text-gradient",
      },
    ],
    image: py_lang_detector,
    sourceCodeLink: "https://github.com/Yarden-Tal/Python-Lang-Detector",
  },
  {
    name: "Pet Hero",
    description:
      "🚧 UNDER MAINTENANCE 🚧 A pet adoption Fullstack app - final project for the Bootcamp with Material UI.",
    tags: [
      {
        name: "react.ts",
        color: "blue-text-gradient",
      },
      {
        name: "node.ts",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
    ],
    image:
      "https://media.istockphoto.com/id/1155869460/photo/under-construction-tape-barrier-on-white-background.jpg?s=170667a&w=0&k=20&c=oCwU5pYaocuA6sGFUw37OlIZUOxmSyFzR8GBas8q9MU=",
    sourceCodeLink: "https://github.com/Yarden-Tal/Pet-Hero",
  },
];

const projectsTxt: string = `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described with
  links to code repositories and live demos in it. It reflects my
  ability to solve complex problems, work with different technologies,
  and manage projects effectively.`;

const toName: string = "Yarden Tal";
const toEmail: string = "yardental1989@gmail.com";

const formDetails: FormDetails = {
  name: "",
  email: "",
  message: "",
};

const socialMediaLinks: Record<string, string> = {
  linkedIn: "https://www.linkedin.com/in/yarden-tal-245095112/",
  github: "https://github.com/Yarden-Tal",
  instagram: "https://www.instagram.com/ty_9891",
};

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  projectsTxt,
  toName,
  toEmail,
  formDetails,
  socialMediaLinks,
};
