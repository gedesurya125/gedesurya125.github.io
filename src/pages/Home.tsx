import React, { useState, useEffect } from "react";
import illustration from "../assets/img/withPhoto1.svg";
import AnimatedText from "../components/animatedText/AnimatedText";

const Home = () => {
  const [renderSubtitle, setRenderSubtitle] = useState(false);

  useEffect(() => {
    const waitSubtitle = setTimeout(() => setRenderSubtitle(true), 2000);
    return () => {
      setRenderSubtitle(false);
      clearTimeout(waitSubtitle);
    };
  }, []);
  return (
    <div className="flex w-full items-center bg-gray-900">
      <div className="flex-1 pl-20">
        <h1>
          {AnimatedText({
            text: "Hi I'am Surya Adi",
            variant: "title",
            // className: renderSubtitle ? "" : "mb-7",
          })}
        </h1>
        {renderSubtitle ? (
          <h1>
            {AnimatedText({
              text: "A Frontend Developer",
              variant: "subtitle",
              className: "text-xl pl-2 cursor-default",
            })}
          </h1>
        ) : null}
      </div>
      <div className="flex-1 p-11 flex justify-center">
        <img
          className="w-full transition-all transform hover:scale-105"
          src={illustration}
          alt="..."
        />
      </div>
    </div>
  );
};

export default Home;
