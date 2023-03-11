import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  rogan,
  speezy,
  megalith,
  tshirt,
  secrets,
  dolla,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web3 Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React Native Developer",
    company_name: "ROGAN",
    icon: rogan,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Ongoing",
    points: [
      "Developing and maintaining web applications using React Native and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create quality screens for the app.",
      "Implementing responsive design and ensuring cross-browser and cross-mobile compatibility.",
      "Participating in code reviews with the CTO and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Speezy",
    icon: speezy,
    iconBg: "#383E56",
    date: "February 2023 - Ongoing",
    points: [
      "Developing and maintaining web applications using React.js.",
      "Collaborating with teams including designers and backend and other frontend developers.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Megalith, IIT Kharagpur",
    icon: megalith,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Coordinated with a team of 60+ members to decide the theme of the fest and worked on the development of the website including backend and frontend.",
      "Providing constructive criticism to other developers and also working along the mindset of seniors.",
      "Managed the workflow and development of the website ranging from work distribution to coordinating with the heads for successful organization of the fest.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "E Commerce T shirt App",
    description:
      "Web-based platform that allows users to search, book, and order T shirts from various providers, providing a convenient and efficient solution for clothing needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
    ],
    image: tshirt,
    source_code_link: "https://github.com/its-abhijeet/TSHIRT-WEBSITE",
  },
  {
    name: "Secrets - Share Thoughts Anonymously",
    description:
      "Web application that enables users to share their thoughts  meanwhile reading other person's thoughts.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
    ],
    image: secrets,
    source_code_link: "https://github.com/its-abhijeet/Secrets",
  },
  {
    name: "Dolla",
    description:
      "Manage Your Virtual Finance with this idea which represents a landing page of a professional ready to start buisness.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Styled-Components",
        color: "green-text-gradient",
      },
    ],
    image: dolla,
    source_code_link: "https://dolla-virtual-finance.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
