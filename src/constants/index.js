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
  UI,
  a,
  mern,
  salman,
  communityHub,
  insurance,
  teleMedicine,
  yoga,
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
    title: "MERN Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "NextJs Developer",
    icon: creator,
  },
  {
    title: "React Native Developer",
    icon: mobile,
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
  {
    name: "TypeScript",
    icon: typescript,
  },
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
];

const experiences = [
  {
    title: "React Native Developer",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Experienced Full Stack React Native Developer proficient in crafting end-to-end solutions for mobile applications, ensuring a seamless user experience.",
      "Integrating mobile applications with backend services and databases, ensuring optimal data flow and synchronization between the front-end and back-end components.",
      "Ensuring smooth navigation and user interactions, optimizing performance for various device specifications and screen sizes.",
      "Implementing state management solutions within the React Native ecosystem for efficient data handling and synchronization.",
    ],
  },
  {
    title: "React.js Developer",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "MERN Developer",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Integrating front-end components with back-end services using Node.js and Express.js, creating a cohesive and efficient full-stack development environment.",
      "Implementing and maintaining state management solutions, such as Redux, to handle complex application states and data flows within the MERN stack.",
      "Ensuring seamless user experiences by implementing responsive design principles and ensuring cross-browser compatibility across various platforms.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "NextJs Developer",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing dynamic and modern web applications using Next.js, a powerful React-based framework for server-side rendering and static site generation.",
      "Implementing server-side rendering (SSR) and ensuring efficient client-side rendering to achieve optimal page load times and user experiences.",
      "Integrating with APIs and external services, leveraging the flexibility of Next.js to connect front-end components with various back-end technologies.",
      "Integrating front-end components with back-end services and databases, creating a cohesive and scalable full-stack architecture within the Next.js framework.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "He crafted an outstanding full-stack mobile application for Narcotics Control Abbottabad, showcasing his exceptional development skills.",
    name: "Salman Khan",
    image: salman,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Numan",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Real-Time Yoga Pose Detection App",
    description:
      "A cutting-edge fitness app that leverages machine learning to detect yoga poses in real-time. Using advanced pose estimation models, the app evaluates users' movements, provides feedback on posture accuracy, and tracks their exercise progress. It also maintains a detailed record of completed exercises, allowing users to monitor their consistency and improvement over time. This app combines technology and wellness, offering a unique and engaging way to practice yoga with precision",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "contextapi",
        color: "pink-text-gradient",
      },
    ],
    image: yoga,
    source_code_link: "https://github.com/ibilawalkhan/KaleedulQuran",
  },
  {
    name: "Telemedicine",
    description:
      "A comprehensive telemedicine platform enabling users to book appointments with doctors and conduct secure video consultations. The web app includes features for uploading and managing prescriptions, ensuring a streamlined healthcare experience. Real-time notifications keep users updated on appointment statuses and reminders, enhancing engagement and convenience. This solution bridges the gap between patients and healthcare providers, offering a modern and efficient approach to virtual healthcare.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "contextapi",
        color: "pink-text-gradient",
      },
    ],
    image: teleMedicine,
    source_code_link: "https://github.com/ibilawalkhan/KaleedulQuran",
  },
  {
    name: "Community Hub",
    description:
      "A dynamic platform connecting skilled laborers with clients to collaborate on projects seamlessly. The web app facilitates real-time interactions through integrated chat and video calling features, enabling efficient communication. It also ensures secure transactions with robust payment gateway integration, providing a trustworthy environment for exchanging services. This app serves as a comprehensive hub for bridging the gap between service providers and clients, fostering collaboration and building lasting professional relationships.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "contextapi",
        color: "pink-text-gradient",
      },
    ],
    image: communityHub,
    source_code_link: "https://github.com/ibilawalkhan/KaleedulQuran",
  },
  {
    name: "Kaleed Ul Quran",
    description:
      "Crafted a dynamic Full Stack mobile app using React Native and Firebase. You can search for Quran verses, get translations, and recite Surahs. The app also suggests Duas based on your emotions and shares stories of Prophets. As part of my development process, I contributed to the development community by publishing my own npm library for Arabic diacritics removal",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "contextapi",
        color: "pink-text-gradient",
      },
    ],
    image: UI,
    source_code_link: "https://github.com/ibilawalkhan/KaleedulQuran",
  },
];

export { services, technologies, experiences, testimonials, projects };
