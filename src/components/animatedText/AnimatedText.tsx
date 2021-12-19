import React from "react";
import Character from "./Character";

const selectTitleStyles = (
  textClassNames: TextClassNames,
  separateChar: string[],
  variant: Props["variant"]
) => {
  let firstChar = true;
  switch (variant) {
    case "title":
      return separateChar.map((char: string, index: number) => {
        if (firstChar) {
          firstChar = false;
          // return <span key={index} className={`${anchorCharProps.className}`}>{char}</span>
          return (
            <Character
              key={index}
              className={textClassNames.anchorCharProps}
              character={char}
              wait={index * 100}
            />
          );
        } else {
          // return <span key={index} className={`${titleCharProps.className} ${char === " " && "w-4"}`}>{char}</span>
          return (
            <Character
              key={index}
              className={`${textClassNames.titleCharProps} ${
                char === " " && "w-4"
              }`}
              character={char}
              wait={index * 100}
            />
          );
        }
      });
    case "subtitle":
      return separateChar.map((char: string, index: number) => {
        // return <span key={index} {...subtitleCharProps}>{char}</span>
        return (
          <Character
            key={index}
            className={`${textClassNames.subtitleCharProps} ${
              char === " " && "w-3"
            }`}
            character={char}
            wait={index * 100}
          />
        );
      });
  }
};

interface TextClassNames {
  anchorCharProps: string;
  titleCharProps: string;
  subtitleCharProps: string;
}

interface Props {
  text: string;
  variant: "title" | "subtitle";
  className?: string;
}
const AnimatedText = ({
  text,
  variant,
  className,
}: Props) => {
  const separateChar = text.split("");

  const textClassNames: TextClassNames = {
    anchorCharProps: `text-blue-800 font-extrabold inline-block animate-rubber hover:cursor-default hover:animate-keepGrow ${
      className || ""
    }`,
    titleCharProps: `font-extrabold inline-block animate-rubber cursor-default hover:animate-keepGrow ${
      className || ""
    }`,
    subtitleCharProps: `font-extrabold inline-block animate-rubber cursor-default hover:animate-keepGrow ${
      className || ""
    }`,
  };

  return <span>{selectTitleStyles(textClassNames, separateChar, variant)}</span>
};

export default AnimatedText;
