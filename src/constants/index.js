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
    flutter,
    meta,
    Radhe_telecom,
    tesla,
    shopify,
    feedback,
    votting,
    radhe,
    threejs,
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "App Developer",
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
    {
      name: "Flutter",
      icon: flutter,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Radhe Telecom",
      icon: Radhe_telecom,
      iconBg: "#383E56",
      date: "March 2023 - April 2024",
      points: [
        "Developing and maintaining web applications using  HTML/CSS and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
      // title: "Web Developer",
      // company_name: "Shopify",
      // icon: shopify,
      // iconBg: "#383E56",
      // date: "Jan 2022 - Jan 2023",
      // points: [
      //   "Developing and maintaining web applications using React.js and other related technologies.",
      //   "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      //   "Implementing responsive design and ensuring cross-browser compatibility.",
      //   "Participating in code reviews and providing constructive feedback to other developers.",
      // ],
    // },
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
      name: "Votting Application",
      description:
        "Console-based platform that allows users to choose or vote their representative, providing a convenient and efficient solution for small needs.",
      tags: [
        {
          name: "c",
          color: "blue-text-gradient",
        },
        {
          name: "c++",
          color: "pink-text-gradient",
        },
        {
          name: "file handling",
          color: "green-text-gradient",
        },
        
      ],
      image: votting,
      source_code_link: "https://github.com/Dev-tilak/Voting-Application",
    },
    {
      name: "Radhe-Telecom",
      description:
        " E-commerce Web application that enables users to search for Electrical products,  and user can buy new mobile phone , Mobile releted accessories also.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: radhe,
      source_code_link: "https://github.com/Dev-tilak/Radhe-Telecom",
    },
    {
      name: "Feedback-Management",
      description:
        "A Feedback Management is a react-based system designed to collect, manage, and analyze feedback from Students. There is an admin pannel that can  handle the over all system. ",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "Node",
          color: "green-text-gradient",
        },
        {
          name: "Mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: feedback,
      source_code_link: "https://github.com/Dev-tilak/Feedback-Web",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };