import React from "react";
import { myProfile } from "../../data/myProfile";

const DrawerContainer = () => {
  const navigationIcon = [
    {
      iconClassName: "fas fa-home",
      label: "Home",
    },
    {
      iconClassName: "fas fa-project-diagram",
      label: "Project",
    },
    {
      iconClassName: "fas fa-envelope",
      label: "Contact",
    },
    {
      iconClassName: "fas fa-tools",
      label: "Skills",
    },
    {
      iconClassName: "fas fa-user",
      label: "About",
    },
  ];

  type SocialMediaValidator = {
    iconClassName: string;
    label: string;
    link: string;
  }[];

  const socialMedia: SocialMediaValidator = [
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

  const renderNavIcon = () =>
    navigationIcon.map((nav, index) => (
      <div
        key={index}
        className="group transition-all duration-500 hover:bg-blue-700 cursor-pointer text-center relative"
      >
        <i
          className={`${nav.iconClassName} p-5 transition-all duration-500 text-xl bg-transparent group-hover:opacity-0`}
        ></i>
        <span className="opacity-0 transition-all duration-500 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent">
          {nav.label}
        </span>
      </div>
    ));

  const renderSocialMedia = () => {
    return socialMedia.map((soc) => (
      <div
        key={soc.label}
        className="group transition-all duration-500 hover:bg-blue-700 cursor-pointer text-center relative"
      >
        <i
          className={`${soc.iconClassName} leading-10 transition-all duration-500 text-xl bg-transparent`}
        ></i>
        <span className="opacity-0 transform z-0 -translate-x-52 group-hover:translate-x-5 transition-all duration-500  group-hover:opacity-100 absolute bg-blue-700 leading-10 px-10">
          {soc.label}
        </span>
      </div>
    ));
  };

  return (
    <div className="border-r-2 h-screen border-solid border-blue-800 flex flex-col justify-between bg-black">
      <div className="nav-container">{renderNavIcon()}</div>
      <div className="social-media">{renderSocialMedia()}</div>
    </div>
  );
};

export default DrawerContainer;
