import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "Ayush",
  title: "Hello, I'm Ayush",
  subTitle: emoji(
    "Enthusiastic Full Stack Software Developer 🚀 with a proven track record in crafting innovative Web and Mobile applications. Proficient in harnessing the power of JavaScript, React.js, Java, Python, Machine Learning and various frameworks/libraries to bring ideas to life. My passion lies in seamlessly blending creativity with functionality, ensuring each project is a testament to my commitment to excellence. Let's embark on a journey where code meets creativity, and every line written contributes to a digital masterpiece. Welcome to my world of endless possibilities! 💻✨"
  ),
  resumeLink: "",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/Ayush-1211",
  linkedin: "https://www.linkedin.com/in/ayush-prajapati-b51bbb166/",
  gmail: "ayushprajapati1211@gmail.com",
  //gitlab: "",
  //facebook: "",
  //medium: "",
  stackoverflow: "https://stackoverflow.com/users/12823911/ayush-prajapati",
  display: true
};

// Skills Section
const skillsSection = {
  title: "My Skills",
  subTitle: "An eager learner on a quest to unravel the intricacies of diverse tech stacks, solving challenges along the way.",
  skills: [
    emoji(
      "🚀 Web Developer exploring cutting-edge frameworks and technologies"
    ),
    emoji(
      "🚀 Enthusiastic problem-solver and competitive programmer adept in Data Structures and Algorithms"
    ),
    emoji(
      "🚀 Proficient in Java, Python, JavaScript, React.js, Machine Learning, and PHP"
    ),
    emoji(
      "🚀 Exploring advanced realms: AI, Deep Learning, and Data Science"
    ),
    emoji(
      "🚀 Rapid learner with a knack for staying ahead of the curve"
    ),
  ],


  softwareSkills: [
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "ML",
      fontAwesomeClassname: "fa fa-cubes"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fas fa-code-branch"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-folder-open"
    },
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Windsor",
      logo: require("./assets/images/education.caed892b.png"),
      subHeader: "Master of Applied Computing",
      duration: "Sept 2022 - Dec 2023",
      // desc: "",
      descBullets: ["GPA: 3.2/4"]
    },
    {
      schoolName: "Aditya Silver Oak Institute of Technology",
      logo: require("./assets/images/education.caed892b.png"),
      subHeader: "Bachelor of Engineering in Information Technology",
      duration: "Aug 2018 - May 2022",
      //desc: "",
      descBullets: ["CGPA: 9.40/10"]
    },
    // {
    //   schoolName: "Mangaldeep Vidhyalay",
    //   logo: require("./assets/images/education.caed892b.png"),
    //   subHeader: "Higher Secondary",
    //   duration: "2016 - 2018",
    //   //desc: "",
    //   //descBullets: [""]
    // }
  ]
};

// proficient stacks/tech experience
const techStack = {
  viewSkillBars: false,
  experience: [
    {
      Stack: "Java",
      progressPercentage: "80%"
    },
    {
      Stack: "Python",
      progressPercentage: "80%"
    },
    {
      Stack: "React.js",
      progressPercentage: "90%"
    },
    {
      Stack: "Node.js",
      progressPercentage: "85%"
    },
    {
      Stack: "JavaScript",
      progressPercentage: "90%"
    },
    {
      Stack: "Data Structures and Algorithm",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false
};

// Work experience section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Developer Intern",
      company: "RadicalX",
      companylogo: require("./assets/images/radical_x_logo.jpeg"),
      date: "Oct 2023 – Present",
      desc: "Toronto, Canada",
      descBullets: [
        "Spearheaded the development and enhancement of the RadicalX Missions module, resulting in a significant boost in user engagement and platform interactivity, positively impacting over 10,000 users.",
        "Implemented secure and scalable payout mechanisms, leading to a notable improvement in financial transactions and user satisfaction, with an increase in successful transactions.",
        "Led the integration with GitHub Codespaces, providing a collaborative and efficient coding environment that contributed to a 30% increase in development speed.",
        "Collaborated with cross-functional teams to troubleshoot and resolve complex issues, ensuring platform stability and resulting in a 15% reduction in system downtime.",
        "Conducted performance optimizations on critical backend processes, leading to a reduction in API response time and improving overall system efficiency."
      ]
    },
    {
      role: "Deep Learning Intern",
      company: "DHINEURAL",
      companylogo: require("./assets/images/dhineural.png"),
      date: "Jan 2022 – May 2022",
      desc: "Gandhinagar, India",
      descBullets: [
        "Conducted in-depth research on various deep learning techniques, including Convolution Neural Networks (CNN) and Artificial Neural Networks (ANN), contributing to the development of cutting-edge solutions.",
        "Performed data pre-processing for datasets, resulting in a clean and well-prepared data analysis that significantly improved model accuracy by 15%.",
        "Developed and fine-tuned deep learning models using ANN and CNN algorithms, leading to a 25% reduction in processing time.",
        "Integrated deep learning models into an Android application, ensuring robust testing and bug-fixing, resulting in improved app stability.",
        "Implemented a data augmentation pipeline that substantially diversified the training dataset, enhancing model generalization."
      ]
    },
    {
      role: "Python Django Intern",
      company: "BrainyBeam Technologies Pvt. Ltd.",
      companylogo: require("./assets/images/brainyBeam.png"),
      date: "May 2021 – Jun 2021",
      desc: "Ahmedabad, India",
      descBullets: [
        "Applied data structures for efficient data management, resulting in a 30% improvement in data retrieval speed.",
        "Contributed to the development of an e-commerce website with essential features, including user registration, product listings, shopping cart, and secure payment processing using Stripe API, leading to a substantial increase in user engagement.",
        "Designed and managed the database schema for efficient data storage and retrieval, resulting in a 25% reduction in database query time.",
        "Engaged in regular knowledge-sharing sessions with the development team, contributing to a collaborative and learning-oriented work culture."
      ]
    },
    // {
    //   role: "PHP Developer Intern",
    //   company: "Akash TechnoLabs",
    //   companylogo: require("./assets/images/akashTechnoLabs.png"),
    //   date: "May 2021 – Jun 2021",
    //   //desc: "",
    //   descBullets: [
    //     "Worked on Server-side programming language PHP",
    //     "PHP template Integration",
    //     "Managed database using MySQL",
    //     "Created E-commerce website using WordPress",
    //     "Created Book Store Website using PHP"
    //   ]
    // },
    // {
    //   role: "Web Development Intern",
    //   company: "The Sparks Foundation",
    //   companylogo: require("./assets/images/sparksFoundation.png"),
    //   date: "Jan 2021 – Jan 2021",
    //   //desc: "",
    //   descBullets: [
    //     "Leveraged JavaScript, Bootstrap, and PHP to develop a responsive and user-friendly web application and ensured a seamless user experience by implementing frontend and server-side development.",
    //     "Collaborated with a remote team to deliver a visually appealing and fully functional web application.",
    //     "Ensured data security and followed best practices for sensitive financial information.",
    //     "Highlighted capabilities in full-stack web development, emphasizing skills in frontend design, backend logic, and database management.",
    //   ]
    // },
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: false
};

// Major projects
const bigProjects = {
  title: "Projects",
  // subtitle: "SOME STARTUPS AND ACADEMIC PROJECTS THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/agroplace.png"),
      projectName: "AgroPlace",
      projectDesc: "Developed the AgroPlace Virtual Agricultural Marketplace, a transformative platform connecting farmers, specialists, and buyers, leveraging machine learning for personalized product insights. Utilized data-driven approaches to deliver valuable insights, contributing to the seamless implementation of various platform features. Revolutionized the agriculture industry by enhancing market access, optimizing decision-making, and contributing to economic stability.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Ayush-1211/AgroPlace"
        }
      ]
    },
    {
      image: require("./assets/images/eduwin.png"),
      projectName: "EduWin",
      projectDesc: "Designed and implemented EduWin, a Student Management System crafted in inspiration from Brightspace and Blackboard. The primary goal was to empower educators and students by delivering a user-friendly platform tailored for enriched learning experiences. Led the development of a comprehensive student management system, emphasizing a user-friendly interface for educators and students. Provided educators and students with a feature-rich dashboard for easy access to crucial information, including attendance reports, progress reports, and grades.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Ayush-1211/EduWin"
        }
      ]
    },
    {
      image: require("./assets/images/likeMe.png"),
      projectName: "Liked Me?",
      projectDesc: "Developed a mobile application called 'Liked Me' to empower users to assess the likeability of products using a cutting-edge machine learning model. Evaluated the Android platform compatibility of products on a scale of 1 to 10 and provide an attractive index to guide consumers and manufacturers in making informed decisions. Utilized the attractive index to offer insights to manufacturers for product improvement and innovation. This ongoing project showcases my proficiency in mobile app development, machine learning, and data analysis, highlighting my commitment to providing valuable tools for both consumers and manufacturers.",
      footerLink: [
        {
          name: "Visit Application",
          url: "https://play.google.com/store/apps/details?id=com.dhineural.liked_me_8"
        }
      ]
    },
    // {
    //   image: require("./assets/images/medicalAssistance.png"),
    //   projectName: "MedicalAssistance",
    //   projectDesc: "This project was completed by me and the other four group members. This website essentially functions as a hospital, providing information on finding hospitals, ordering medications, and other medical services. We used PHP, HTML, CSS, JAVASCRIPT, MySQL, BOOTSTRAP, and Xampp server for this project.",
    //   footerLink: [
    //     {
    //       name: "View Source Code",
    //       url: "https://github.com/Ayush-1211/MedicalAssistance"
    //     }
    //   ]
    // },
    // {
    //   image: require("./assets/images/bank.png"),
    //   projectName: "Banking System",
    //   projectDesc: "As a Web Development Intern at The Sparks Foundation, I completed this project. To finish my project, I used PHP, HTML, CSS, JAVASCRIPT, MySQL, and BOOTSTRAP classes. Additionally, I've placed this project on 000webhost, a free web host.",
    //   footerLink: [
    //     {
    //       name: "View Source Code",
    //       url: "https://github.com/Ayush-1211/Banking-System"
    //     }
    //   ]
    // }
  ],
  display: true
};

// Achievement Section
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Microsoft Certified: Azure Fundamentals",
      //subtitle: "",
      image: require("./assets/images/azure.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/438660d5-e32d-4f54-a4bd-c6e0e41d6827?source=linked_in_profile"
        }
      ]
    },
    {
      title: "Flipkart GRiD 3.0 - Software Development Challenge",
      //subtitle: "",
      image: require("./assets/images/flipkart.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1IM-0bYR2ptNgd0bJ54tQAoHhiiaDuxvk/view"
        }
      ]
    },

    {
      title: "Java",
      //subtitle: "",
      image: require("./assets/images/java-gold.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.hackerrank.com/Ayush_1211?hr_r=1"
        }
      ]
    },

    {
      title: "30 Days of Code Challenge",
      //subtitle: "",
      image: require("./assets/images/30-days.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.hackerrank.com/Ayush_1211?hr_r=1"
        }
      ]
    },

    {
      title: "Research Paper",
      //subtitle: "",
      image: require("./assets/images/ICT4SD.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://link.springer.com/chapter/10.1007/978-981-19-5221-0_43"
        }
      ]
    },

    {
      title: "Server-side Development with NodeJS, Express and MongoDB",
      //subtitle: "",
      image: require("./assets/images/coursera.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/FEYRZDMYLXTZ"
        }
      ]
    },

    {
      title: "Python and Django Framework",
      //subtitle: "",
      image: require("./assets/images/udemy.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-eb87403f-6422-43cc-b068-ef13607605c3/"
        }
      ]
    },

    {
      title: "Java Programming: Complete Beginner to Advanced",
      //subtitle: "",
      image: require("./assets/images/udemy.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-67772852-b591-4f02-b24f-1697f4dfc37a/"
        }
      ]
    },

  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true",
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false
};

// Talks Sections
const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  //number: "",
  email_address: "ayushprajapati1211@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "twitter",
  display: false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
