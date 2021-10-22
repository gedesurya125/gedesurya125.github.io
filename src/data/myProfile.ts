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

import efCert from "./img/Sertifikat/EF SET Certificate.png";
// import fccJsAlgorithmCert from "./img/Sertifikat/fcc_js_algorithm.jpg";
import fccResponsiveCert from "./img/Sertifikat/fcc_responsive_web_design.jpg";
import pgHtmlCssCert from "./img/Sertifikat/htmlcss-1.png";
import pgjavascriptCert from "./img/Sertifikat/javascript-1.png";
import pgGitCert from "./img/Sertifikat/progate-git-1.png";
import pgReactCert from "./img/Sertifikat/react-1.png";
import pgSassCert from "./img/Sertifikat/sass-1.png";
import glintsCert from "./img/Sertifikat/glintsCertSurya.svg";
import glintsAcheivemet from "./img/Sertifikat/glintsAcheivementSurya.svg";

export interface MyProfile {
  biodata: {
    name: string;
    dateOfBirth: Date;
    localAddress: {
      street: string;
      kelurahan: string;
      kecamatan: string;
      kabupaten: string;
      provinsi: string;
      nationality: string;
    };
  };
  contact: {
    mobile: string;
    email: string;
    linkedin: string;
    github: string;
    gitlab: string;
  };
  skills: {
    name: string;
    image: string;
    rating: number;
  }[];
  professionalSummary: string;
  project: {
    projectName: string;
    site: string;
    repository: string;
    descriptionList: string[];
  }[];
  experience: {
    company: string;
    role: string;
    startDate: Date;
    endDate: Date;
    jobDescriptionList: string[];
  }[];
  education: {
    institution: string;
    location: string;
    major: string;
    grade: number | null;
    graduationDate: Date;
  }[];
  additional: {
    language: {
      name: string;
      grade: "advanced" | "native";
    }[];
    certification: {
      title: string;
      publisher: string;
      credentialsLink: string;
      image: string;
    }[];
  };
}

//=================================
export const myProfile: MyProfile = {
  biodata: {
    name: "I Gede Surya Adi Pranata",
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
  project: [
    {
      projectName: "MUSICON",
      site: "https://musicon-web.herokuapp.com/",
      repository:
        "https://gitlab.com/binarxglints_batch13/finalproject/team-a/frontendteam_a",
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
    },
    {
      projectName: "GAMES-WORLD",
      site: "https://games-world.netlify.app/",
      repository: "https://github.com/gedesurya125/gamedirectory",
      descriptionList: [
        "Consumed 5 APIs from api.rawg.io",
        "Completed 5 important designs and functionalities of search bar, all games displayed with pagination. games details, games page based on category and utilized local storage to make favorited games page",
        "Utilized drawer component to gather important navigation of 3 major pages with 19 game genres",
      ],
    },
    {
      projectName: "MACAN MOVIE",
      site: "	http://macan-movie-app.herokuapp.com/",
      repository:
        "https://gitlab.com/binarxglints_batch13/miniproject/team-c/frontendteam_c",
      descriptionList: [
        "Settled 15+ APIs consumption from Backend Team",
        "Constructed project base using 4 cores of ReactJS, material-UI, Redux Saga, and React-router-dom",
        "Developed 6 tasks, e.g  home page, category page, search bar, movie review, movie artist and movie 	synopsis page and finalized  design and functionality of both movie rating and review.",
        "Finished the app with only 1 team member and Facilitated team meeting to Illustrated the App Flow Mentored when support needed",
        "Collaborated with the Back End Team to design 15+ required APIs",
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
        image: glintsCert,
      },
      {
        title: "The best team appreciation",
        publisher: "glints x Binnar Academy",
        credentialsLink:
          "https://drive.google.com/file/d/12oT-d_5SlV4gKkbfd15vryORFGEJB50E/view?usp=sharing",
        image: glintsAcheivemet,
      },
      {
        title: "Responsive Web Desgn",
        publisher: "FreeCodeCamp",
        credentialsLink:
          "https://www.freecodecamp.org/certification/fcc089fbae6-43a4-4363-ab74-6fae2f647b25/responsive-web-design",
        image: fccResponsiveCert,
      },
      {
        title: "Javascript Algorithn & Data Structure",
        publisher: "FreeCodeCamp",
        credentialsLink:
          "https://www.freecodecamp.org/certification/fcc089fbae6-43a4-4363-ab74-6fae2f647b25/javascript-algorithms-and-data-structures",
        image: fccResponsiveCert,
      },
      {
        title: "GIT Course",
        publisher: "Progate",
        credentialsLink:
          "https://progate.com/course_certificate/e1e534d6quujm6",
        image: pgGitCert,
      },
      {
        title: "HTML & CSS Course",
        publisher: "Progate",
        credentialsLink:
          "https://progate.com/course_certificate/8261c36aqusf7n",
        image: pgHtmlCssCert,
      },
      {
        title: "Javascript Course",
        publisher: "Progate",
        credentialsLink:
          "https://progate.com/course_certificate/113ca911quss16",
        image: pgjavascriptCert,
      },
      {
        title: "React Course",
        publisher: "Progate",
        credentialsLink:
          "https://progate.com/course_certificate/ab4c0a14quu7y8",
        image: pgReactCert,
      },
      {
        title: "Sass Course",
        publisher: "Progate",
        credentialsLink:
          "https://progate.com/course_certificate/baf949f1quuacy",
        image: pgSassCert,
      },
      {
        title: "English First Standard English Test (EF SET)",
        publisher: "English First",
        credentialsLink: "https://www.efset.org/cert/VxyBFQ",
        image: efCert,
      },
    ],
  },
};
