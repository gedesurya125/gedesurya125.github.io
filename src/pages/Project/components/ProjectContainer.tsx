import React from 'react'
import ProjectCard from "./ProjectCard";
import {ProjectValidator} from '../../../data/myProfile';


interface Props {
  projects: ProjectValidator[],
  className?: string
}
const ProjectContainer = ({projects, className}:Props) => {
  return (
    <div className={`relative p-5 ${className}`}>
      <ul className="list-none">
        {projects.map((project, index) => <ProjectCard key={index} project={project}/>)}
      </ul>
    </div>
  )
}

export default ProjectContainer
