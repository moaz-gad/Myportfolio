/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
}

//Home Page
const greeting = {
  title: "Welcome to my portfolio!",

  logo_name: "Moaz Gad",
  // nickname: "harry / picleric",
  full_name: "Moaz Gad",
  subTitle: "excited to share my work with you",
  resumeLink:
    "https://drive.google.com/file/d/1lFqkZnNUg5N2muUuv6qIF6so6xloY6-4/view?usp=sharing",
  mail: "mailto:sumitsharma9968@gmail.com",
}

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/moaz-gad",
  linkedin: "https://www.linkedin.com/in/moazgad",
  gmail: "moaz.a.gad@gmail.com",
}

const skills = {
  data: [
    {
      _id: "354c54b7-ffd8-40f1-972f-1d006733df25",
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive user interfaces and backend for web applications",
        "⚡ Building responsive website front end using React and Angular",
        "⚡ Creating application backend in Node, Express, MongoDB and Rest API",
        "⚡ Integration of third party services such as Firebase, Vercel etc.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0769ad",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#593D88",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#dd0031",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "gray",
          },
        },
        {
          skillName: "Material UI",
          fontAwesomeClassname: "simple-icons:uikit",
          style: {
            color: "#007FFF",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "logos:tailwindcss-icon",
          style: {
            color: "#635BFF",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Framer Motion",
          fontAwesomeClassname: "logos:framer",
          style: {
            color: "#635BFF",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Styled Components",
          fontAwesomeClassname: "vscode-icons:file-type-styled",
          style: {
            color: "#635BFF",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563d7c",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#FF6C37",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Cloudinary",
          fontAwesomeClassname: "logos:cloudinary-icon",
          style: {
            color: "#635BFF",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Stripe",
          fontAwesomeClassname: "logos:stripe",
          style: {
            color: "#635BFF",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      _id: "c026fe64-1542-42b0-84ab-9311840c169f",
      title: "Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "Google Cloud Platform",
          fontAwesomeClassname: "skill-icons:gcp-dark",
          style: {
            backgroundColor: "transparent",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "skill-icons:vercel-light",
          style: {
            color: "gray",
            fill: "gray",
            // backgroundColor: "white",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
            width: "1em",
            height: "1em",
          },
        },
        // {
        //   skillName: "Docker",
        //   fontAwesomeClassname: "simple-icons:docker",
        //   style: {
        //     color: "#1488C6",
        //   },
        // },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
            width: "1em",
            height: "1em",
          },
        },
      ],
    },
  ],
}

const degrees = {
  degrees: [
    {
      title: "Information Technology Institute (ITI)",
      subtitle: "Frontend and cross platform",
      logo_path: "iti-logo.png",
      alt_name: "ITI",
      duration: "4/22 - 7/22",
      descriptions: [
        "⚡ Completed an intensive program in Frontend and cross-platform mobile development with a variety of courses.",
        "⚡ Applied the learned technologies to multiple projects.",
        "⚡ Graduation project focused on developing an E-commerce platform.",
      ],
    },

    {
      title: "Yat Learning Center",
      subtitle: "Diploma of Education, Web Development",
      logo_path: "YAT-Learnming-Center-logopng.png",
      alt_name: "YAT",
      duration: "2017 - 2018",
      descriptions: [
        "⚡ Studied programming languages such as PHP and JavaScript during my diploma program.",
        "⚡ Dedicated sufficient time to understanding databases, specifically the main concepts of KEYS, JOINS, VIEWS, NORMALIZATION, SUBQUERIES, CLONING TABLES, SQL SEQUENCE, and TEMPORARY TABLES.",
        "⚡ Developed a school system website for my graduation project using PHP, SQL, and JQuery.",
        "⚡ Gradutaion project: PHP/MySQL CRUD school application",
      ],
    },
    {
      title: "Tanta university",
      subtitle: "Bachelor of Engineering (Computer Engineering)",
      logo_path: "Tanta-university-logo.png",
      alt_name: "Tanta-university-logo",
      duration: "2015 - 2020",
      descriptions: [
        "⚡ Completed a Bachelor's degree in Engineering with a specialization in Computer Science.",
        "⚡ Studied computer programming, software engineering, and fundamental computer science concepts such as operating systems, computer networks, and databases.",
        "⚡ Completed a successful graduation project in ecommerce using PHP and MySQL, earning an A+ degree.",
      ],
    },
  ],
}

const certifications = {
  certifications: [
    {
      title: "Professional Front-End Web Development",
      subtitle: "",
      logo_path: "logo-udacity.svg",
      certificate_link: "https://graduation.udacity.com/confirm/MMQS2JFL",
      alt_name: "Udacity",
      color_code: "#2015ff",
    },
    {
      title: "Full Stack Developer",
      subtitle: "",
      logo_path: "logo-udacity.svg",
      certificate_link:
        "https://drive.google.com/file/d/1ikCVEFId-sCL3M_jMGvyAwpFRLwexIbA/view",
      alt_name: "Udacity",
      color_code: "#2015ff",
    },
    {
      title: "WEB DEVELOPMENT CHALLENGER TRACK (FWD)",
      subtitle: "",
      logo_path: "logo-udacity.svg",
      certificate_link:
        "https://drive.google.com/file/d/1v9KEWdWrpEBNyXPhHZopYLT-aijx903L/view",
      alt_name: "Udacity",
      color_code: "#2015ff",
    },
    {
      title: "YAT Professional Diploma for Web Development",
      subtitle: "",
      logo_path: "YAT-Learnming-Center-logopng.png",
      certificate_link:
        "https://drive.google.com/file/d/15klbXR5X-y6b293AbsAkIVM7RHYxhUWS/view?usp=sharing",
      alt_name: "YAT",
      color_code: "#042653",
    },
    {
      title: "Learning the JavaScript Language",
      subtitle: "",
      logo_path: "Linked-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1cyhdyS9YJ5nkfr0OZRmR5VgZpiLAMxD7/view",
      alt_name: "Linkedin",
      color_code: "#ffffff",
    },
    {
      title: "JavaScript Essential Training",
      subtitle: "",
      logo_path: "Linked-logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/35b3c14295c2e760bb126fae2358c3b3c48c0d2e5d9fa2e2abacfcffbb57d653?trk=share_certificate",
      alt_name: "Linkedin",
      color_code: "#ffffff",
    },
    {
      title: "Javascript ",
      subtitle: "",
      logo_path: "iti-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1HRun9PoXTVoQGAW8AqOj3YUg-BBHmOtR/view",
      alt_name: "Information Technology Institute (ITI)",
      color_code: "#ffffff",
    },
  ],
}

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Apprenticeship",
  description:
    "I've over 2 years of experience as a full stack developer. I've worked on building products for multiple stakeholders in Infosys as well as my personal projects.",
  header_image_path: "experience.svg",
  sections: {
    title: "Work Experience",
    experiences: [
      {
        title: "Operations Executive",
        company: "Infosys",
        company_url: "https://www.infosys.com/",
        logo_path: "infosys-logo.png",
        alt_name: "infosys-logo",
        duration: "(Nov, 2021 - May, 2023)",
        location: "Remote",
        description:
          "<li>Developed 2 new tools with an intuitive design in Lex (Learning platform for the employees of Infosys) for interactive content creation using Angular v12. Used by 150+ educators for creating new interactive courses, consumed by 1000+ learners.</li><br><li>Developed a web based AR/VR learning solution for the learners to enhance their learning experience in a classroom using open-source web framework A-frame and Networked A-frame. Implemented REST API using Node and Express, multi-user experience and other features like chat, screen, audio and video share.</li><br><li>Developed a PWA (Progressive Web Application) within Lex with an intuitive design for all the educators in Infosys for creating their own analogy with add on animations in their content using HTML, CSS, JavaScript and a open source library Fabric.js. Used by 200+ educators with 2000+ pages of content published in Lex.</li>",
        color: "#0071C5",
      },
      {
        title: "Java Full Stack Developer Trainee",
        company: "Infosys",
        company_url: "https://www.infosys.com/",
        logo_path: "infosys-logo.png",
        alt_name: "infosys-logo",
        duration: "(Aug, 2021 - Nov, 2021)",
        location: "Remote",
        description:
          "Worked on multiple Capstone projects using Spring Boot and Angular.",
        color: "#4285F4",
      },
    ],
  },
}

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create MERN and MEAN Stack Projects. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
}

const projects = {
  data: [
    {
      id: "project-0",
      name: "Crafty Commerce",
      url: "https://crafty-commerce.vercel.app/",
      repoUrl: "https://github.com/sumit-sharma-02/crafty-commerce",
      description:
        "Crafty Commerce is a full stack e-commerce web application that allows you to purchase different categories of product online. You can apply filters accordingly and find your favourite products in crafty commerce. You can pay with debit/credit cards and in just few click your product will be delivered.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        {
          name: "Redux",
          iconifyClass: "logos:redux",
        },
        {
          name: "Express",
          iconifyClass: "simple-icons:express",
        },
        {
          name: "Nodejs",
          iconifyClass: "logos:nodejs",
        },
        {
          name: "MongoDB",
          iconifyClass: "vscode-icons:file-type-mongo",
        },
        {
          name: "Stripe",
          iconifyClass: "logos:stripe",
        },
        {
          name: "Tailwind",
          iconifyClass: "vscode-icons:file-type-tailwind",
        },
        {
          name: "Cloudinary",
          iconifyClass: "logos:cloudinary-icon",
        },
        {
          name: "Framer Motion",
          iconifyClass: "logos:framer",
        },
      ],
    },
    {
      id: "project-1",
      name: "Tikkaway",
      url: "https://restaurant-app-bceb0.web.app/",
      repoUrl: "https://github.com/sumit-sharma-02/tikkaway",
      description:
        "Tikkaway is a full stack restaurant web application that allows you to order food online. It has wide variety of categories on the menu like Chicken, Curry, Rice, Fish, Fruits, Icecreams, Soft Drinks etc.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        {
          name: "Redux",
          iconifyClass: "logos:redux",
        },
        {
          name: "Firebase",
          iconifyClass: "logos:firebase",
        },
        {
          name: "Tailwind",
          iconifyClass: "vscode-icons:file-type-tailwind",
        },
        {
          name: "Framer Motion",
          iconifyClass: "logos:framer",
        },
      ],
    },
    {
      id: "project-2",
      name: "MEAN Agency",
      url: "",
      repoUrl: "https://github.com/sumit-sharma-02/mean-agency",
      description:
        "Mean Agency is a full stack service provider web application that allows you to provide services to other companies.",
      languages: [
        {
          name: "Angular",
          iconifyClass: "logos:angular-icon",
        },
        {
          name: "Express",
          iconifyClass: "simple-icons:express",
        },
        {
          name: "Nodejs",
          iconifyClass: "logos:nodejs",
        },
        {
          name: "MongoDB",
          iconifyClass: "vscode-icons:file-type-mongo",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos:bootstrap",
        },
        {
          name: "Handlebars",
          iconifyClass: "vscode-icons:file-type-handlebars",
        },
      ],
    },
    {
      id: "project-3",
      name: "Countdown Timer",
      url: "https://countdown-timer-sumit-sharma-02.vercel.app/",
      repoUrl: "https://github.com/sumit-sharma-02/countdown-timer",
      description: "A Simple React App for countdown to new year using hooks.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "project-4",
      name: "Portfolio",
      url: "",
      repoUrl: "https://github.com/sumit-sharma-02/sumit-portfolio",
      description: "You are watching it right now 😉.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React Reveal",
          iconifyClass: "simple-icons:scrollreveal",
        },
        {
          name: "Styled Components",
          iconifyClass: "vscode-icons:file-type-styled",
        },
      ],
    },
  ],
}

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "portfolioProfileImage.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
}

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
}
