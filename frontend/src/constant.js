// Skills Section Logo's
import htmlLogo from '/assets/tech_logo/html.png';
import cssLogo from '/assets/tech_logo/css.png';
import javascriptLogo from '/assets/tech_logo/javascript.png';
import reactjsLogo from '/assets/tech_logo/reactjs.png';
import reduxLogo from '/assets/tech_logo/redux.png';
// import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from '/assets/tech_logo/tailwindcss.png';
import materialuiLogo from '/assets/tech_logo/materialui.png';
import bootstrapLogo from '/assets/tech_logo/bootstrap.png';
import nodejsLogo from '/assets/tech_logo/nodejs.png';
import expressjsLogo from '/assets/tech_logo/express.png';
import mysqlLogo from '/assets/tech_logo/mysql.png';
import mongodbLogo from '/assets/tech_logo/mongodb.png';
// import cLogo from './assets/tech_logo/c.png';
// import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from '/assets/tech_logo/java.png';
// import pythonLogo from './assets/tech_logo/python.png';
// import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from '/assets/tech_logo/git.png';
import githubLogo from '/assets/tech_logo/github.png';
import vscodeLogo from '/assets/tech_logo/vscode.png';
// import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from '/assets/tech_logo/mc.png';
// import figmaLogo from './assets/tech_logo/figma.png';
// import netlifyLogo from './assets/tech_logo/netlify.png';
// import vercelLogo from './assets/tech_logo/vercel.png';
// import postgreLogo from './assets/tech_logo/postgre.png';
// import csharpLogo from './assets/tech_logo/csharp.png';

// Education Section Logo's
import ptrcmmpsLogo from '/assets/education_logo/logo.png'
import geniusLogo from '/assets/education_logo/logoname2.png'
import kpLogo from '/assets/education_logo/kp.jpeg'

// Project Section Logo's


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo, desc: 'Hello' },
      { name: 'CSS', logo: cssLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Mongo DB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      // { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      // { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
    ],
  },
];

  // export const experiences = [
  //   {
  //     id: 0,
  //     img: webverseLogo,
  //     role: "Fullstack Developer",
  //     company: "Webverse Digital",
  //     date: "April 2024 - Present",
  //     desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
  //     skills: [
  //       "HTML",
  //       "CSS",
  //       "JavaScript",
  //       "React JS",
  //       "TypeScript",
  //       "Node JS",
  //       "Tailwind CSS",
  //       "MongoDb",
  //       "Redux",
  //       " Next Js",
  //     ],
  //   },
  //   {
  //     id: 1,
  //     img: agcLogo,
  //     role: "Fullstack Engineer",
  //     company: "Agumentik Group of Companies",
  //     date: "July 2023 - March 2024",
  //     desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
  //     skills: [
  //       "ReactJS",
  //       "Redux",
  //       "JavaScript",
  //       "Tailwind CSS",
  //       "HTML",
  //       "CSS",
  //       "SQL",
  //     ],
  //   },
  //   {
  //     id: 2,
  //     img: newtonschoolLogo,
  //     role: "Frontend Intern",
  //     company: "Newton School",
  //     date: "September 2021 - August 2022",
  //     desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
  //     skills: [
  //       "HTML",
  //       "CSS",
  //       "Javascript",
  //       "Bootstrap",
  //       "Figma",
  //       "Material UI",
  //     ],
  //   },
  // ];
  
  export const education = [
    {
      id: 0,
      img: kpLogo,
      school: "K.P. Uchha Siksha Sansthan, Prayagraj",
      date: "July 2024 - Present",
      grade: "---",
      desc: "I am pursing my Bachelor's degree in Computer Application (B.C.A) from K.P. Higher Education Institute, Prayagraj. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at KP College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Computer Application - BCA",
    },
    {
      id: 1,
      img: geniusLogo,
      school: "Genius Public Inter College, Prayagraj",
      date: "Apr 2023 - March 2024",
      grade: "71%",
      desc: "I completed my class 12 education from Genius Public Inter College, Prayagraj, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: ptrcmmpsLogo,
      school: "Pt. Ram Chandra Mishra Memorial Public School, Prayagraj",
      date: "Apr 2021 - March 2022",
      grade: "78.4%",
      desc: "I completed my class 10 education from Pt. Ram Chandra Mishra Memorial Public School, Prayagraj, under CBSE board.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Hikee",
      description:
        "A small Airbnb-like web app (Express + EJS + MongoDB). This contains the server, views (EJS), static assets and example data used to build and list short-term rental listings and reviews.",
      // image: githubdetLogo,
      tags: ["Ejs","Express","Javascript","CSS","Bootstrap","Node.js","MongoDB","Joi","Passport","Cloudinary","leaflet","Geoapify"],
      github: "https://github.com/Uni0Satyam/Hikee",
      webapp: "https://major-project-gx8l.onrender.com/listings",
    },
  ];  