import jobBoard from "../assets/images/JobBoard.png";
import Swiggy from "../assets/images/SwiggyClone.png";
import Shopping from "../assets/images/shoppingList.png";

const msAppartment = Object.values(
  import.meta.glob("../assets/images/msAppartment/*.{jpeg,jpg,png,webp}", {
    eager: true,
    import: "default",
  })
);

const hydAirport = Object.values(
  import.meta.glob("../assets/images/hydAirport/*.{jpeg,jpg,png,webp}", {
    eager: true,
    import: "default",
  })
);

const hirandaini = Object.values(
  import.meta.glob("../assets/images/hirandaini/*.{jpeg,jpg,png,webp}", {
    eager: true,
    import: "default",
  })
);

const naviAirport = Object.values(
  import.meta.glob("../assets/images/naviAirport/*.{jpeg,jpg,png,webp}", {
    eager: true,
    import: "default",
  })
);
const desai=Object.values(
  import.meta.glob("../assets/images/nKDesai/*.{jpeg,jpg,png,webp}", {
    eager: true,
    import: "default",
  })
);

const PROJECTS = [
  {
    title: "Swiggy Clone",
    description:
      "Developed a food app. Integrated APIs to fetch real-time data and ensured code quality.",
    technologies: [
      "React.js",
      "Tailwind",
      "Redux",
      "Parcel",
      "JavaScript",
      "React Router",
      "Lazy Loading",
    ],
    link: "https://github.com/MAURICEDS0UZA/Namaste-React",
    image: Swiggy, // Add the image path
  },
  {
    title: "React Job Board",
    description:
      "Integrated React Router and reusable components (cards, hero sections, and job listings).",
    technologies: [
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "RESTful API",
      "GitHub",
      "JSX",
      "Vite",
    ],
    link: "https://github.com/MAURICEDS0UZA/react_basic",
    image: jobBoard, // Add the image path
  },
  {
    title: "Shopping List",
    description:
      "Implemented interactive features, form validation, dynamic updates, and integrated local storage.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Local storage",
      "Git",
      "GitHub",
      "Testing",
      "Debugging",
    ],
    link: "https://shoppingapp27.netlify.app/",
    image: Shopping,
  },
];

const SKILLS = [
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "HTML5/CSS3",
      "Responsive Design",
      "Bootstrap",
      "Babel.js",
      "Redux",
    ],
  },
  {
    category: "Backend",
    skills: ["Express.js", "SQL", "REST APIs"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git & GitHub", "Google Cloud Services", "AWS", "Jest"],
  },
];

const SOCIALMEDIA = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/maurice-dsouza/",
    icon: "FaLinkedin",
  },
  {
    platform: "GitHub",
    url: "https://github.com/MAURICEDS0UZA",
    icon: "FaSquareGithub",
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/mauricedsouz",
    icon: "FaSquareXTwitter",
  },
];

const RESUMEURL =
  "https://app.flowcv.com/api/public/download_resume?token=a1ip7tj9ag";
export { PROJECTS, SKILLS, SOCIALMEDIA, RESUMEURL };

const servicesData = [
  {
    title: "High/Low Voltage Infrastructure Development",
    description:
      "Expert installation and management of high and low voltage systems, ensuring reliability and efficiency for all your infrastructure needs.",
  },
  {
    title: "Power Upgradation",
    description:
      "Comprehensive power upgradation services to meet the increasing energy demands of modern facilities and infrastructure.",
  },
  {
    title: "Lighting and Power Distribution",
    description:
      "Tailored solutions for efficient and effective lighting and power distribution, ensuring optimal energy use and safety.",
  },
  {
    title: "Integrated Solutions for Network and Security",
    description:
      "We offer integrated solutions that combine computer networks, data, voice, fire access, surveillance, and security systems.",
  },
  {
    title: "Fire Safety and Access Control",
    description:
      "State-of-the-art fire safety and access control systems to ensure the security and safety of your premises.",
  },
  {
    title: "Surveillance and Security Systems",
    description:
      "Advanced surveillance and security systems designed to protect your assets and ensure peace of mind.",
  },
];
export { servicesData,  msAppartment,hydAirport,hirandaini ,naviAirport,desai};
