import React, { useState, useEffect } from "react";

interface Props {
  className: string;
  character: string;
  wait: number;
}
const Character = ({ className, character, wait }: Props) => {
  const [hidden, setHidden] = useState(true);


  useEffect(() => {
    const delayRender = setTimeout(() => setHidden(false),wait);

    return () => {
      setHidden(true);
      clearTimeout(delayRender);
    }
  },[wait])

  if (hidden) return <></>;
  return <span className={className}>{character}</span>;
};

export default Character;
