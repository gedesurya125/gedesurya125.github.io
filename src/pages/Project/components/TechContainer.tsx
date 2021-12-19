import React from "react";
import TechStackLabel from "./TechStackLabel";
interface TechContainerProps {
  techStacks: string[];
  className?: string
}
const TechContainer = ({ techStacks, className }: TechContainerProps) => {
  return (
    <div className={`flex gap-1 border border-solid rounded p-1 pt-3 relative ${className}`}>
      <div className="absolute bg-gray-800 px-3 -top-3 left-3">
        <h3 className="font-bold whitespace-nowrap">Tech Stacks :</h3>
      </div>
      <div className="flex flex-wrap gap-1">
        {techStacks.map((tech, index) => (
          <TechStackLabel key={index} techStack={tech} />
        ))}
      </div>
    </div>
  );
};

export default TechContainer;
