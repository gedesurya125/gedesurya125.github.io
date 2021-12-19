import React from "react";
import { ProjectValidator } from "../../../data/myProfile";
import TechContainer from "./TechContainer";

interface Props {
  project: ProjectValidator;
  className?: React.ClassAttributes<HTMLLIElement>;
}
const ProjectCard = ({ project, className }: Props) => {
  return (
    <li
      className={`flex gap-5 mb-9 bg-gray-800 bg-opacity-90 p-5 rounded-md ${className}`}
    >
      <div className="w-1/3 max-h-60 overflow-y-scroll">
        <img
          className="w-full rounded-lg"
          src={project.imageList[0]}
          alt={project.projectName}
        />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-2xl mb-3">{project.projectName}</h3>
          <p className="mb-3">{project.brief}</p>
        </div>
        <TechContainer className="" techStacks={project.techStacks} />
      </div>
    </li>
  );
};

export default ProjectCard;
