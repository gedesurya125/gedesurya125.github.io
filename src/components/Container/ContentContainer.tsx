import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import type { LabelType } from "../../data/myProfile";
import TitleText from "../TitleText/TitleText";
import useSelectBackgroundImage from "../../utils/useSelectBackgroundImage";
import { gsap, Power1, Bounce, Power0 } from "gsap";

interface Props {
  children: React.ReactNode;
  titleText?: string;
  className?: string;
  content?: {
    className?: string;
  };
  label?: LabelType;
}

/**
 *
 * This is container for all content with default class :
 * bg-black flex-1 animate-scaleup items-center
 */
const ContentContainer = ({
  children,
  titleText,
  className,
  label,
  content,
}: Props) => {
  const [showTitle, setShowTitle] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const rootEl = useRef(null);
  const tl = useRef<GSAPTimeline>();
  const bgImg = useSelectBackgroundImage(label || "Home");

  useLayoutEffect(() => {
    const q = gsap.utils.selector(rootEl);
    const titleTimout = setTimeout(() => {
      setShowTitle(true);
    }, 300);

    tl.current = gsap
      .timeline()
      .from(rootEl.current, {
        transformOrigin: 'bottom left',
        rotationZ: "-90deg",
        ease: Bounce.easeOut,
        opacity: 0
      })
      .from(
        q(".content-display"),
        {
          opacity: 0,
          y: 200,
        },
        0.8
      );

    return () => {
      clearTimeout(titleTimout);
      tl.current?.kill()
    };
  }, []);

  useEffect(() => {
    const q = gsap.utils.selector(rootEl);
    if (scrollTop > 50) {
      gsap.to(q(".header-text"), {
        backgroundColor: "rgba(16,22,44, 0.9)",
        ease: Power0.easeNone,
        padding: "0.5rem 2.5rem",
        duration: 0.05,
      });
      gsap.to(q(".animated-text"), {
        fontSize: "1.5rem",
      });
      gsap.to(q(".title-icon"), {
        fontSize: "2rem",
        rotate: "180deg",
        x: 0,
      });
      // gsap.to(rootEl.current, {
      //   rotate: '20deg'
      // })
    } else {
      gsap.to(q(".header-text"), {
        backgroundColor: "rgba(16,22,44, 0.0)",
        ease: Power0.easeNone,
        padding: "2.5rem",
        duration: 0.05,
      });
      gsap.to(q(".animated-text"), {
        fontSize: "2.25rem",
      });
      gsap.to(q(".title-icon"), {
        fontSize: "4.5rem",
        rotate: "-45deg",
        x: "-2.5rem",
      });
    }
  }, [scrollTop]);

  return (
    <div
      id="container"
      className={`bg-black flex-1 bg items-center z-0 bg-no-repeat bg-center h-screen overflow-x-hidden overflow-y-scroll relative ${className}`}
      onScroll={(e) => {
        setScrollTop(e.currentTarget.scrollTop);
      }}
      style={{ backgroundImage: `url(${bgImg})` }}
      ref={rootEl}
    >
      <div className="top-0 w-full">
        {titleText && (
          <div
            className={`header-text sticky w-screen z-20 top-0 description-container transition-all flex-1 p-10`}
          >
            {showTitle && (
              <TitleText
                className="title-text"
                text={titleText}
                label={label || "Home"}
              />
            )}
          </div>
        )}
        <div
          className={`content-display z-10 flex-1 ${content?.className}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContentContainer;
