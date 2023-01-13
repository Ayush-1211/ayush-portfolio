/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ayush",
  title: "Hi all, I'm Ayush",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🖥️ and a Student having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / Java / Python and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
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
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My Skills",
  subTitle: "A PASSIONATE STUDENT WHO WANTS TO EXPLORE EVERY TECH STACK AND SOLVE PROBLEMS",
  skills: [
    emoji(
      "⚡ A student having experience in building Web Apps using new Frameworks and Technologies"
    ),
    emoji(
      "⚡ Passionate about problem-solving and Competitive programmer with a demonstrated history of solving problems in DSA"
    ),
    emoji(
      "⚡ Skilled in Java, Python, Javascript, React.js, Node.js and PHP"
    ),
    emoji(
      "⚡ Familiar with advanced technologies like Artificial Intelligence, Machine Learning, Deep Learning, and Data Science"
    ),
    emoji(
      "⚡ A Quick Learner"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Windsor",
      logo: require("./assets/images/education.caed892b.png"),
      subHeader: "Master of Applied Computing",
      duration: "September 2022 - December 2023",
      /*desc: "",
      descBullets: [
        "",
        ""
      ]*/
    },
    {
      schoolName: "Aditya Silver Oak Institute of Technology",
      logo: require("./assets/images/education.caed892b.png"),
      subHeader: "Bachelors of Engineering in Information Technology",
      duration: "August 2018 - May 2022",
      //desc: "",
      descBullets: ["CGPA: 9.40/10"]
    },
    {
      schoolName: "Mangaldeep Vidhyalay",
      logo: require("./assets/images/education.caed892b.png"),
      subHeader: "Higher Secondary",
      duration: "2016 - 2018",
      //desc: "",
      //descBullets: [""]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Java", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Python",
      progressPercentage: "90%"
    },
    {
      Stack: "React.js",
      progressPercentage: "70%"
    },
    {
      Stack: "Node.js",
      progressPercentage: "75%"
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
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Deep Learning Intern",
      company: "DHINEURAL",
      companylogo: require("./assets/images/dhineural.png"),
      date: "Jan 2022 – May 2022",
      //desc: "",
      descBullets: [
        "Worked on Research-based project",
        "Performed Data Preprocessing",
        "Built Deep Learning Models",
        "Integrated Deep Learning models into the Android Application",
        "Created Flutter Application"
      ]
    },
    {
      role: "Python Django Intern",
      company: "BrainyBeam Technologies Pvt. Ltd.",
      companylogo: require("./assets/images/brainyBeam.png"),
      date: "May 2021 – Jun 2021",
      //desc: "",
      descBullets: [
        "Worked on Data structures and OOPs concepts",
        "Worked on Python Libraries",
        "Created E-commerce website using Django Framework",
      ]
    },
    {
      role: "PHP Developer Intern",
      company: "Akash TechnoLabs",
      companylogo: require("./assets/images/akashTechnoLabs.png"),
      date: "May 2021 – Jun 2021",
      //desc: "",
      descBullets: [
        "Worked on Server-side programming language PHP",
        "PHP template Integration",
        "Managed database using MySQL",
        "Created E-commerce website using WordPress",
        "Created Book Store Website using PHP"
      ]
    },
    {
      role: "Web Development Intern",
      company: "The Sparks Foundation",
      companylogo: require("./assets/images/sparksFoundation.png"),
      date: "Jan 2021 – Jan 2021",
      //desc: "",
      descBullets: [
        "Created Full Stack Website (Banking System)",
        "Hosted website using 000webhost", 
        "Frontend work: HTML, CSS, JavaScript, Bootstrap",
        "Backend work: PHP",
        "Database work: MySQL"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND ACADEMIC PROJECTS THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/likeMe.png"),
      projectName: "Liked Me?",
      projectDesc: "Liked Me? is a Machine Learning Model inculcated in a mobile app. It provides an attractive index based on the Android platform of a product selected product from 1-10. It provides two prominent applications namely for consumers and for manufacturers. It provides customers with the attractive index of a product which helps the customer to make a decision whether to buy the product or not according to approximate population rating. On the other hand, it helps manufacturers to build a product that is updated with the current trends.",
      footerLink: [
        {
          name: "Visit Application",
          url: "https://play.google.com/store/apps/details?id=com.dhineural.liked_me_8"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/medicalAssistance.png"),
      projectName: "MedicalAssistance",
      projectDesc: "This project was completed by me and the other four group members. This website essentially functions as a hospital, providing information on finding hospitals, ordering medications, and other medical services. We used PHP, HTML, CSS, JAVASCRIPT, MySQL, BOOTSTRAP, and Xampp server for this project.",
      footerLink: [
        {
          name: "View Source Code",
          url: "https://github.com/Ayush-1211/MedicalAssistance"
        }
      ]
    },
    {
      image: require("./assets/images/bank.png"),
      projectName: "Banking System",
      projectDesc: "As a Web Development Intern at The Sparks Foundation, I completed this project. To finish my project, I used PHP, HTML, CSS, JAVASCRIPT, MySQL, and BOOTSTRAP classes. Additionally, I've placed this project on 000webhost, a free web host.",
      footerLink: [
        {
          name: "View Source Code",
          url: "https://github.com/Ayush-1211/Banking-System"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

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
          url: "https://www.linkedin.com/posts/ayush-prajapati-b51bbb166_research-paper-certificates-activity-6960103424164016128-oRax?utm_source=linkedin_share&utm_medium=member_desktop_web"
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
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
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
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
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
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
