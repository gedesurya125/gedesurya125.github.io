import React, { useState, useEffect } from "react";
import illustration from "../../assets/img/withPhoto1.svg";
import AnimatedText from "../../components/animatedText/AnimatedText";
import LabelIcon from "../../components/LabelIcon/LabelIcon";
import { myProfile } from "../../data/myProfile";

const Home = () => {
  const [renderSubtitle, setRenderSubtitle] = useState(false);
  const [renderImage, setRenderImage] = useState(false);
  const {biodata} = myProfile

  useEffect(() => {
    const waitImage = setTimeout(() => setRenderImage(true), 500);
    const waitSubtitle = setTimeout(() => setRenderSubtitle(true), 2000);
    return () => {
      setRenderSubtitle(false);
      setRenderImage(false);
      clearTimeout(waitSubtitle);
      clearTimeout(waitImage);
    };
  }, []);
  return (
    <div className="flex flex-col-reverse md:flex-row w-full items-center bg-black transform scale-0 animate-scaleup overflow-hidden">
      {/* <ContentContainer label="Home" className="overflow-y-hidden" content={{className:"flex flex-col-reverse items-center md:flex-row w-full"}}> */}
      <div className="absolute h-0 w-0 top-0">
        <LabelIcon
          labelType={"Home"}
          className={"text-xxl text-gray-900 transform rotate-12"}
        />
      </div>
      <div className="flex-1 text-xl text-center md:text-left md:pl-20">
        <h1>
          <AnimatedText
            text={`Hi I'am ${biodata.nickname}`}
            variant="title"
            className=" text-4xl md:text-6xl"
          />
        </h1>
        {renderSubtitle ? (
          <h1>
            {AnimatedText({
              text: `A ${biodata.role}`,
              variant: "subtitle",
              className: "text-base md:text-xl md:pl-2 cursor-default",
            })}
          </h1>
        ) : null}
      </div>
      <div className="flex-1 p-11 flex justify-center">
        {renderImage && (
          <img
            className="w-full transition-all transform animate-scaleup"
            src={illustration}
            alt="..."
          />
        )}
      </div>
      {/* </ContentContainer> */}
    </div>
  );
};

export default Home;
