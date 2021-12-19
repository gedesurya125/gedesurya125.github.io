// import css3Icon from "./img/icon/CSS3.png";
// import es6Icon from "./img/icon/ES6.png";
// import expressJsIcon from "./img/icon/express.png";
// import facebookIcon from "./img/icon/Facebook.svg";
// import html5Icon from "./img/icon/html5.png";
// import insagramIcon from "./img/icon/instagram.webp";
// import linkedinIcon from "./img/icon/linkedin.png";
import materialUiIcon from "./img/icon/MaterialUi.png";
import reactIcon from "./img/icon/React.webp";
// import reduxIcon from "./img/icon/Redux.webp";
import sassIcon from "./img/icon/Sass.png";
import tailwindIcon from "./img/icon/tailwind-css.png";
// import twitterIcon from "./img/icon/twitter.png";
import reduxSagaIcon from "./img/icon/redux-saga.svg";
import bootstrapIcon from "./img/icon/bootstrap2.svg";
import gitIcon from "./img/icon/gitIcon.svg";
import projectImage from "./img/icon/th-large-solid2.svg";
import skillsImage from "./img/icon/tools-solid2.svg";
import profileImage from "./img/icon/user-solid.svg";
import contactImage from "./img/icon/envelope-solid2.svg";
import homeImage from "./img/icon/home-solid2.svg";

// INTERFACE LINST ====

export interface BiodataValidator {
  name: string;
  nickname: string;
  role: string;
  dateOfBirth: Date;
  localAddress: {
    street: string;
    kelurahan: string;
    kecamatan: string;
    kabupaten: string;
    provinsi: string;
    nationality: string;
  };
}

export interface ContactValidator {
  mobile: string;
  email: string;
  linkedin: string;
  github: string;
  gitlab: string;
}

export interface SkillsValidator {
  name: string;
  image: string;
  rating: number;
}

export interface RepositoryValidator {
  github: string | null;
  gitlab: string | null;
}

export interface ProjectValidator {
  id: string;
  projectName: string;
  imageList: string[];
  site: string;
  repository: RepositoryValidator;
  descriptionList: string[];
  brief: string;
  techStacks: string[];
}

export interface ExperienceValidator {
  company: string;
  role: string;
  startDate: Date;
  endDate: Date;
  jobDescriptionList: string[];
}

export interface EducationValidator {
  institution: string;
  location: string;
  major: string;
  grade: number | null;
  graduationDate: Date;
}

export interface LanguageValidator {
  name: string;
  grade: "intermediate" | "advanced" | "native";
}

export interface CertificationValidator {
  title: string;
  publisher: string;
  credentialsLink: string;
  image: string;
}

export interface AdditionValidator {
  language: LanguageValidator[];
  certification: CertificationValidator[];
}

export interface MyProfile {
  biodata: BiodataValidator;
  contact: ContactValidator;
  skills: SkillsValidator[];
  professionalSummary: string;
  projects: ProjectValidator[];
  experience: ExperienceValidator[];
  education: EducationValidator[];
  additional: AdditionValidator;
}

export type LabelType = "Home" | "Project" | "Contact" | "Skills" | "About";

export interface NavigationValidator {
  iconClassName: string;
  label: LabelType;
  link: string;
  image: string;
}

export type SocialMediaValidator = {
  iconClassName: string;
  label: string;
  link: string;
};

// ============ DATA LIST =================

// Profile Data
export const myProfile: MyProfile = {
  biodata: {
    name: "I Gede Surya Adi Pranata",
    nickname: "Surya Adi",
    role: "Front end web developer",
    dateOfBirth: new Date("1993-10-06"),
    localAddress: {
      street: "BTN Dalung Permai Blok C3 No 11, Lingk Bumi Kertha",
      kelurahan: "Kerobokan Kaja",
      kecamatan: "Kuta Utara",
      kabupaten: "Badung",
      provinsi: "Bali",
      nationality: "Indonesia",
    },
  },
  contact: {
    mobile: "+6281246317320",
    email: "gedesurya125@gmail.com",
    linkedin: "https://www.linkedin.com/in/i-gede-surya-adi-pranata-9a2853213/",
    github: "https://github.com/gedesurya125",
    gitlab: "https://gitlab.com/gedesurya125",
  },
  skills: [
    {
      name: "ReactJS",
      image: reactIcon,
      rating: 90,
    },
    {
      name: "Material-UI",
      image: materialUiIcon,
      rating: 90,
    },
    {
      name: "Scss",
      image: sassIcon,
      rating: 90,
    },
    {
      name: "Git",
      image: gitIcon,
      rating: 80,
    },
    {
      name: "Redux-Saga",
      image: reduxSagaIcon,
      rating: 100,
    },
    {
      name: "Bootstrap",
      image: bootstrapIcon,
      rating: 80,
    },
    {
      name: "TailwindCSS",
      image: tailwindIcon,
      rating: 80,
    },
  ],
  professionalSummary:
    "Frontend Engineer, experienced at inspiring and coordinating teams. Skilled at ReactJS and Material Ui. Accurately translated UI/UX design into application. Have a passion for innovation. Dedicated to never stop learning as has high curiosity on awesome latest technology",
  projects: [
    {
      id: "1",
      projectName: "MUSICON",
      imageList: [
        "https://i.ibb.co/n6fH7Lj/rate-Playlist.png",
        "https://i.ibb.co/MZgGL2R/album-page.png",
        "https://i.ibb.co/gmkLqTS/liked-song.png",
        "https://i.ibb.co/99g28HX/landing-Page.png",
        "https://i.ibb.co/dm8sQPC/playlist.png",
      ],
      site: "https://musicon-web.herokuapp.com/",
      repository: {
        github: null,
        gitlab:
          "https://gitlab.com/binarxglints_batch13/finalproject/team-a/frontendteam_a",
      },
      descriptionList: [
        "Constructed project base with 4 cores setup: ReactJS, material-UI, Redux Saga, and React-router-dom",
        "Contributed on 9 pages design of landing page, home page, browse page, all user’s playlist page, current user’s created playlist page, user’s loved songs page, artist and album page, and user’s account page.",
        "Succeeded in finished music player with 7 cores functionality of  play-pause, repeat, shuffle, currently played song display, playing progress-bar, and music lyric display.",
        "Implemented 2 additionals user login by google and facebook auth, and  implemented a Progressive Web App technology for native supported installation",
        "Implemented 2 additionals user login by google and facebook auth, and  implemented a Progressive Web App technology for native supported installation",
        "Collaborated with 2 Back End Team members to establish required API and Socket.IO notification",
        "Consumed 28+ APIs that enable App worked correctly",
        "Facilitated 2 FE team members for meeting and Illustrated app flow, and Mentored when they need support to get out from stuck",
        "Executed 40+ unit testing  of 7 widely used functions.",
      ],
      brief:
        "Musicon is a simple music player app, just a few button clicks away to discover songs you like. It has highly-customizable playlist features. Discover other's playlists and rate them or publish your playlists for the world to show your good taste in music.",
      techStacks: [
        "ReactJS",
        "Axios",
        "Redux-Saga",
        "HTML5",
        "Material UI",
        "JSS",
        "Socket.IO",
        "Google OAuth 2.0",
        "Facebook Auth",
        "Progressive Web App",
      ],
    },
    {
      id: "2",
      projectName: "GAMES-WORLD",
      imageList: [
        "https://i.ibb.co/TPcpgc5/homepage-Full.png",
        "https://i.ibb.co/YbLSQmr/games-Detail.png",
        "https://i.ibb.co/hCcGvdG/favouritegames.png",
        "https://i.ibb.co/f80RhYg/homepage.png",
        "https://i.ibb.co/42pcHyK/category-Page.png",
        "https://i.ibb.co/D5TjHjp/searchbar.png",
      ],
      site: "https://games-world.netlify.app/",
      repository: {
        github: "https://github.com/gedesurya125/gamedirectory",
        gitlab: null,
      },
      descriptionList: [
        "Consumed 5 APIs from api.rawg.io",
        "Completed 5 important designs and functionalities of search bar, all games displayed with pagination. games details, games page based on category and utilized local storage to make favorited games page",
        "Utilized drawer component to gather important navigation of 3 major pages with 19 game genres",
      ],
      brief:
        "Games World is a Web app that shows you the latest popular games and its details or you can search your desired game and save it to your favorite page.",
      techStacks: [
        "ReactJS",
        "MaterialUI",
        "JSS",
        "Redux-Saga",
        "Axios",
        "Local Storage",
        "Git",
        "GitHub",
      ],
    },
    {
      id: "3",
      projectName: "MACAN MOVIE",
      imageList: [
        "https://i.ibb.co/NL68V3b/homepage.png",
        "https://i.ibb.co/cFBQfCM/user-Page-With-Photo.png",
        "https://i.ibb.co/nbg53YG/userpage.png",
        "https://i.ibb.co/qjdkzLm/reviewpage.png",
        "https://i.ibb.co/KFRsf2x/synopsis.png",
        "https://i.ibb.co/QCM7vRS/homepage-Dark.png",
      ],
      site: "	http://macan-movie-app.herokuapp.com/",
      repository: {
        gitlab: "https://gitlab.com/binarxglints_batch13/miniproject/team-c/frontendteam_c",
        github: null,
      },
      descriptionList: [
        "Settled 15+ APIs consumption from Backend Team",
        "Constructed project base using 4 cores of ReactJS, material-UI, Redux Saga, and React-router-dom",
        "Developed 6 tasks, e.g  home page, category page, search bar, movie review, movie artist and movie 	synopsis page and finalized  design and functionality of both movie rating and review.",
        "Finished the app with only 1 team member and Facilitated team meeting to Illustrated the App Flow Mentored when support needed",
        "Collaborated with the Back End Team to design 15+ required APIs",
      ],
      brief:
        "Macan Movie App is the app that provides you with the latest information on trending movies. You can see how much rating for the movie and its synopsis, its artist and user reviews on it. If you want to create a review to a movie you have to login first.",
      techStacks: [
        "ReactJS",
        "MaterialUI",
        "JSS",
        "Git",
        "Gitlab",
        "Heroku",
        "Axios",
        "Redux-Saga",
      ],
    },
  ],
  experience: [
    {
      company: "PT. Dirahayu Valuta Prima",
      role: "Supervisor",
      startDate: new Date("2019-12-01"),
      endDate: new Date("2021-04-01"),
      jobDescriptionList: [
        "Authored purchases of hardware and an inventory of 16 branch offices and 1 head office.",
        "Liaise with third parties and do research for provided service and hardware to get the best value for both cost and quality",
        "Accomplished total of 20+  technical manuals about tech to IT staff and about system usage to operational requirements",
        "Accomplished 3 IT trainings that held once in a month to back office staffs and tellers about Point of Sales (POS) and office programs in order to increase their productivity",
      ],
    },
    {
      company: "PT. Dirgahayu Valuta Prima",
      role: "IT Support Staff",
      startDate: new Date("2016-07-11"),
      endDate: new Date("2019-04-01"),
      jobDescriptionList: [
        "Successfully repaired and configured a broken VPN network that connected as Point To Point and Secure Connection between 16 Branch Offices that use RB750 to a Head Office that uses Mikrotik RB3110",
        "Resolved network performance drop of 16 branch office that analysed up to 12 hours everyday",
        "Configured 16 local servers of branch office and 1 server of head office",
      ],
    },
  ],
  education: [
    {
      institution: "Glints x Binar Academy",
      location: "Batam, Riau Islands",
      major: "Frontend Developer",
      grade: null,
      graduationDate: new Date("2021-09-15"),
    },
    {
      institution: "Udayana University",
      location: "Badung Bali",
      major: "Bachelor degree of science (physics)",
      grade: 3.58,
      graduationDate: new Date("2015-09-18"),
    },
  ],
  additional: {
    language: [
      { name: "English", grade: "advanced" },
      { name: "Indonesian", grade: "native" },
    ],
    certification: [
      {
        title: "Frontend Developer Certification",
        publisher: "glints x Binar Academy",
        credentialsLink:
          "https://drive.google.com/file/d/13kAp_XIch6KKMToINjJ05dx6IvX7M4NL/view?usp=sharing",
        image: "https://i.ibb.co/hDxybB3/suryacert.png",
      },
      {
        title: "The best team appreciation",
        publisher: "glints x Binnar Academy",
        credentialsLink:
          "https://drive.google.com/file/d/12oT-d_5SlV4gKkbfd15vryORFGEJB50E/view?usp=sharing",
        image: "https://i.ibb.co/yRymPkJ/musicon.png",
      },
      {
        title: "Responsive Web Desgn",
        publisher: "FreeCodeCamp",
        credentialsLink:
          "https://www.freecodecamp.org/certification/fcc089fbae6-43a4-4363-ab74-6fae2f647b25/responsive-web-design",
        image: "https://i.ibb.co/jLt13PY/fcc-responsive-web-design.jpg",
      },
      {
        title: "Javascript Algorithn & Data Structure",
        publisher: "FreeCodeCamp",
        credentialsLink:
          "https://www.freecodecamp.org/certification/fcc089fbae6-43a4-4363-ab74-6fae2f647b25/javascript-algorithms-and-data-structures",
        image: "https://i.ibb.co/JmsdGvq/fcc-js-algorithm.jpg",
      },
      {
        title: "GIT Course",
        publisher: "Progate",
        credentialsLink:
          "https://progate.com/course_certificate/e1e534d6quujm6",
        image: "https://i.ibb.co/RSBtybk/progate-git-1.png",
      },
      {
        title: "HTML & CSS Course",
        publisher: "Progate",
        credentialsLink:
          "https://progate.com/course_certificate/8261c36aqusf7n",
        image: "https://i.ibb.co/JRZ8m3q/htmlcss-1.png",
      },
      {
        title: "Javascript Course",
        publisher: "Progate",
        credentialsLink:
          "https://progate.com/course_certificate/113ca911quss16",
        image: "https://i.ibb.co/31cqbWP/javascript-1.png",
      },
      {
        title: "React Course",
        publisher: "Progate",
        credentialsLink:
          "https://progate.com/course_certificate/ab4c0a14quu7y8",
        image: "https://i.ibb.co/pwD42cs/react-1.png",
      },
      {
        title: "Sass Course",
        publisher: "Progate",
        credentialsLink:
          "https://progate.com/course_certificate/baf949f1quuacy",
        image: "https://i.ibb.co/s9wSMZz/sass-1.png",
      },
      {
        title: "English First Standard English Test (EF SET)",
        publisher: "English First",
        credentialsLink: "https://www.efset.org/cert/VxyBFQ",
        image: "https://i.ibb.co/rkx9pnh/EF-SET-Certificate.png",
      },
    ],
  },
};

// Navigation Data
export const navigationIcon: NavigationValidator[] = [
  {
    iconClassName: "fas fa-home",
    label: "Home",
    link: "/",
    image: homeImage,
  },
  {
    iconClassName: "fas fa-th-large",
    label: "Project",
    link: "/project",
    image: projectImage,
  },
  {
    iconClassName: "fas fa-envelope",
    label: "Contact",
    link: "/contact",
    image: contactImage,
  },
  {
    iconClassName: "fas fa-tools",
    label: "Skills",
    link: "/skills",
    image: skillsImage,
  },
  {
    iconClassName: "fas fa-user",
    label: "About",
    link: "/about",
    image: profileImage,
  },
];

// Social Media Data
export const socialMedia: SocialMediaValidator[] = [
  {
    iconClassName: "fab fa-github",
    label: "github",
    link: myProfile.contact.github,
  },
  {
    iconClassName: "fab fa-gitlab",
    label: "gitlab",
    link: myProfile.contact.gitlab,
  },
  {
    iconClassName: "fab fa-linkedin",
    label: "linkedIn",
    link: myProfile.contact.linkedin,
  },
];
