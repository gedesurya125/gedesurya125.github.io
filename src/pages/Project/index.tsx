import React from "react";
import { myProfile } from "../../data/myProfile";
import ProjectContainer from "./components/ProjectContainer";
import ContentContainer from '../../components/Container/ContentContainer';

const Project = () => {
  const {projects } = myProfile;


  return (
    <ContentContainer titleText="My Project" className="" label="Project">
      {/* <div className="description-container flex-1 p-10">
        <TitleText text="My Project" label="Project"/>
      </div> */}
      <ProjectContainer projects={projects}/>
    </ContentContainer>
  );
};

export default Project;
