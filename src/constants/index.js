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
  fusionsuite,
  bluemines,
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "MERN Developer",
    icon: web,
  },
  {
    title: "NestJs Developer",
    icon: mobile,
  },
  {
    title: "Cloud AWS",
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
    title: "NestJs Developer",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Experienced Backend Developer with expertise in building scalable and maintainable server-side applications using NestJS.",
      "Proficient in designing and implementing robust RESTful APIs and real-time communication using WebSockets.",
      "Skilled in integrating backend services with databases (SQL and NoSQL), managing authentication/authorization workflows, and ensuring data integrity and security.",
      "ImpleCapable of orchestrating microservices and handling complex business logic while ensuring optimal performance and maintainability.",
    ],
  },
  {
    title: "NodeJs Developer",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Skilled Backend Developer with hands-on experience in building high-performance server-side applications using Node.js and Express.js.",
      "Experienced in managing asynchronous operations, optimizing performance, and ensuring system reliability using Node.js’s non-blocking I/O model.",
      "Strong knowledge of backend architecture, including authentication, data validation, error handling, and API versioning, with seamless database integration (MongoDB, PostgreSQL, etc.)",
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
    title: "WordPress Developer",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Experienced WordPress Developer skilled in building and customizing dynamic, responsive websites using WordPress as a CMS.",
      "Proficient in developing custom themes and plugins to meet unique client or project requirements, ensuring performance, scalability, and maintainability.",
      "Well-versed in leveraging page builders (Elementor, WPBakery, etc.) and optimizing websites for SEO, accessibility, and fast load times.",
      "Capable of managing WordPress security, backups, and performance tuning, delivering fully functional websites from concept to deployment.",
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
      "I've never seen a developer so dedicated to delivering quality, maintaining clear communication, and truly understanding the client's vision.",
    name: "Numan",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    testimonial:
      "Working with him on Maelano was a game-changer. His ability to turn complex requirements into a smooth, user-friendly platform was impressive.",
    name: "Mohsin",
    image: "https://randomuser.me/api/portraits/men/7.jpg"
  }
  
];

const projects = [
  {
    name: "FusionSuite",
    description:
      "FusionSuite.io is a comprehensive platform designed to streamline mobile app testing and lifecycle management throughout the software development process. It offers a unified suite of tools including bug and crash reporting, version control, and force update capabilities to ensure apps remain stable, up-to-date, and reliable. The platform also features customizable surveys and sentiment insights to gather valuable user feedback and prioritize improvements effectively. Accessible via a dedicated mobile app and a convenient web extension, FusionSuite empowers development teams to efficiently track issues, manage releases, and enhance collaboration.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "microservices",
        color: "green-text-gradient",
      },
      {
        name: "mongodb postgres mariadb clickhouse",
        color: "pink-text-gradient",
      },
    ],
    image: fusionsuite,
    source_code_link: "https://github.com/ibilawalkhan/KaleedulQuran",
  },
  {
    name: "Maelano",
    description:
      "A next-generation e-commerce platform built for scalability and seamless user experience, inspired by platforms like Amazon. This solution leverages intelligent algorithms to personalize product recommendations, optimize search results, and enhance customer engagement. It features a robust product catalog system, real-time inventory management, and a secure, scalable checkout process with integrated payment gateways. The platform tracks user behavior and purchase history to offer data-driven insights and improve customer retention.",
    tags: [
      {
        name: "nodeJs",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "microservices",
        color: "pink-text-gradient",
      },
    ],
    image: a,
    source_code_link: "https://github.com/ibilawalkhan/Maelano",
  },
  {
    name: "Bluemines",
    description:
      "An innovative chain marketing and referral-based platform designed to incentivize user growth and engagement through a structured rewards system. Bluemines.xyz enables users to earn through multi-level referrals, creating a self-sustaining network that drives exponential growth. Built with a focus on transparency, performance, and scalability, the platform includes automated referral tracking, wallet integration, and real-time commission distribution. Users can monitor their network performance, earnings, and referral trees via a clean, intuitive dashboard.",
    tags: [
      {
        name: "nestJs",
        color: "blue-text-gradient",
      },
      {
        name: "postgres",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
    ],
    image: bluemines,
    source_code_link: "https://github.com/ibilawalkhan/YogaPoseDetection",
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
    source_code_link: "https://github.com/ibilawalkhan/Telemedicine",
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
    source_code_link: "https://github.com/ibilawalkhan/CommunityHub",
  },
  {
    name: "Insurance Management System",
    description:
      "A comprehensive insurance management platform that streamlines policy management, claims processing, and customer service. The system features automated workflows for policy creation, real-time claim tracking, and integrated payment processing. It includes advanced analytics for risk assessment and customer insights, helping insurance companies optimize their operations and improve customer satisfaction.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: insurance,
    source_code_link: "https://github.com/ibilawalkhan/InsuranceSystem",
  }
];

export { services, technologies, experiences, testimonials, projects };
