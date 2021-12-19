import React from 'react'


interface TechStackProps {
  techStack: string
}
const TechStackLabel = ({techStack}:TechStackProps) => {
  return (
    <span className="px-3 rounded bg-yellow-300 whitespace-nowrap text-black py-1">
      {techStack}
    </span>
  )
}

export default TechStackLabel
