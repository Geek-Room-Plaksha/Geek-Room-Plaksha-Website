import React, { useEffect, useMemo, useState } from "react";
import debounce from "lodash.debounce";
import dynamic from "next/dynamic";
const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);
import {
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  MoveIn,
  Sticky,
  Zoom
} from "react-scroll-motion";
import {
  HeroAvatarWrapper,
  HeroBackgroundContainer,
  HeroBackgroundTextSpan,
  HeroSectionContainer,
  HeroTextSpan,
  LogoContainer,
  MouseContainer,
  MouseScroll
} from "./Hero.styled.js";
import Xarrow, { Xwrapper, useXarrow } from "react-xarrows";
import Avatar from "../avatar/Avatar";
import { devices } from "@/constants/theme.js";
import MobileHero from "./MobileHero.jsx";
import Image from "next/image.js";

const Hero = ({ isMobile }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const heroTextElements = useMemo(
    () => [
      { text: "Web", 
        id: "web", 
        color: "#00acb2", 
        x: 38, 
        y: 20, 
        delay: 0.1 
      },
      {
        text: "AI ML",
        id: "tensorflow",
        color: "#f15b22",
        x: 22,
        y: 80,
        delay: 0.4
      },
      {
        text: "Android",
        id: "android",
        color: "#00acb2",
        x: 8,
        y: 20,
        delay: 1.2
      },
      {
        text: "DSA",
        id: "flutter",
        color: "#f15b22",
        x: 52,
        y: 80,
        delay: 2.3
      },
      {
        text: "Cloud",
        id: "cloud",
        color: "#00acb2",
        x: 68,
        y: 20,
        delay: 1.6
      },
      {
        text: "Blockchain",
        id: "blockchain",
        color: "#f15b22",
        x: 82,
        y: 80,
        delay: 0.8
      }
    ],
    []
  );

  const heroAvatarElements = useMemo(
    () => [
      {
        url: "/images/team/armaan.png",
        borderColor: "#f15b22",
        id: "a1",
        x: 22,
        y: 20,
        delay: 0.9
      },
      {
        url: "/images/team/shreya.png",
        borderColor: "#00acb2",
        id: "a2",
        x: 38,
        y: 70,
        delay: 1.5
      },
      {
        url: "/images/team/divy.png",
        borderColor: "#00acb2",
        id: "a3",
        x: 8,
        y: 70,
        delay: 0.3
      },
      {
        url: "/images/team/manavi.jpg",
        borderColor: "#f15b22",
        id: "a4",
        x: 52,
        y: 20,
        delay: 0.3
      },
      {
        url: "/images/team/maan.png",
        borderColor: "#00acb2",
        id: "a5",
        x: 68,
        y: 70,
        delay: 0.7
      },
      {
        url: "/images/team/trinav.jpg",
        borderColor: "#f15b22",
        id: "a6",
        x: 82,
        y: 20,
        delay: 1.1
      }
    ],
    []
  );

  const [isTextHighlighted, setIsTextHighlighted] = useState(false);
  const [isAvatarHighlighted, setIsAvatarHighlighted] = useState(false);
  const [isBuildHighlighted, setIsBuildHighlighted] = useState(false);
  const [isGrowHighlighted, setIsGrowHighlighted] = useState(false);

  const updatedXArrows = useXarrow();
  const handleUpdateXArrows = debounce(updatedXArrows, 100);
  useEffect(() => {
    handleUpdateXArrows.cancel(); // Cancel any pending debounce on unmount
  }, []);
  const refsById = useMemo(() => {
    const refs = {};
    heroTextElements.forEach((item) => {
      refs[item.id] = React.createRef(null);
    });
    heroAvatarElements.forEach((item) => {
      refs[item.id] = React.createRef(null);
    });
    return refs;
  }, [heroAvatarElements, heroTextElements]);

  useEffect(() => {
    if (refsById != null) {
      handleUpdateXArrows();
    }
  }, [refsById, handleUpdateXArrows]);

  if (!isClient) return null;

  return (
    <HeroSectionContainer>
      {!isMobile ? (
        <ScrollContainer snap="none">
          <ScrollPage>
            <Animator animation={batch(Fade(-0.5), Sticky(), MoveIn())}>
              <HeroBackgroundContainer>
                <div className="mainText">
                  <HeroTextSpan
                    color="#f15b22"
                    onMouseEnter={() => setIsTextHighlighted(true)}
                    onMouseLeave={() => setIsTextHighlighted(false)}
                  >
                    Learn.
                  </HeroTextSpan>
                  <HeroTextSpan
                    color="#f15b22"
                    onMouseEnter={() => setIsAvatarHighlighted(true)}
                    onMouseLeave={() => setIsAvatarHighlighted(false)}
                  >
                    Connect.
                  </HeroTextSpan>
                  <HeroTextSpan
                    color="#00acb2"
                    onMouseEnter={() => setIsBuildHighlighted(true)}
                    onMouseLeave={() => setIsBuildHighlighted(false)}
                  >
                    Grow.
                  </HeroTextSpan>
                  <HeroTextSpan
                    color="#00acb2"
                    onMouseEnter={() => setIsGrowHighlighted(true)}
                    onMouseLeave={() => setIsGrowHighlighted(false)}
                  >
                    Inspire.
                  </HeroTextSpan>
                </div>
                <Xwrapper>
                  {heroTextElements.map((element, index) => (
                    <HeroBackgroundTextSpan
                      isHighlighted={isTextHighlighted || isGrowHighlighted}
                      top={element.y}
                      left={element.x}
                      key={index}
                      color={element.color}
                      id={element.id}
                      ref={refsById[element.id]}
                      delay={element.delay}
                    >
                      {element.text}
                    </HeroBackgroundTextSpan>
                  ))}
                  {heroAvatarElements.map((element, index) => (
                    <HeroAvatarWrapper
                      isHighlighted={isAvatarHighlighted || isGrowHighlighted}
                      top={element.y}
                      left={element.x}
                      key={index}
                      id={element.id}
                      ref={refsById[element.id]}
                      delay={element.delay}
                    >
                      <Avatar
                        size="lg"
                        url={element.url}
                        borderColor={element.borderColor}
                        blur={true}
                        priority={true}
                      />
                    </HeroAvatarWrapper>
                  ))}
                  <Xarrow
                    start={refsById["a1"]}
                    end={refsById["a2"]}
                    showHead={false}
                    showTail={false}
                    startAnchor={"middle"}
                    endAnchor={"middle"}
                    headShape={"circle"}
                    tailShape={"circle"}
                    tailSize={3}
                    headSize={3}
                    curveness={0}
                    strokeWidth={2}
                    zIndex={-2}
                    headColor={
                      isGrowHighlighted
                        ? "#00acb2"
                        : isTextHighlighted
                        ? "#f15b22"
                        : "#F1F1F1"
                    }
                    tailColor={
                      isGrowHighlighted
                        ? "#00acb2"
                        : isTextHighlighted
                        ? "#f15b22"
                        : "#F1F1F1"
                    }
                    lineColor={
                      isGrowHighlighted
                        ? "#00acb2"
                        : isAvatarHighlighted
                        ? "#f15b22"
                        : "#F1F1F1"
                    }
                  />
                  <Xarrow
                    start={refsById["a2"]}
                    end={refsById["a4"]}
                    showHead={false}
                    showTail={false}
                    startAnchor={"middle"}
                    endAnchor={"middle"}
                    headShape={"circle"}
                    tailShape={"circle"}
                    tailSize={3}
                    headSize={3}
                    curveness={0}
                    strokeWidth={2}
                    zIndex={-2}
                    headColor={
                      isGrowHighlighted || isBuildHighlighted
                        ? "#00acb2"
                        : isTextHighlighted
                        ? "#f15b22"
                        : "#F1F1F1"
                    }
                    tailColor={
                      isGrowHighlighted || isBuildHighlighted
                        ? "#00acb2"
                        : isTextHighlighted
                        ? "#f15b22"
                        : "#F1F1F1"
                    }
                    lineColor={
                      isGrowHighlighted || isBuildHighlighted
                        ? "#00acb2"
                        : isAvatarHighlighted
                        ? "#f15b22"
                        : "#F1F1F1"
                    }
                  />
                  <Xarrow
                    start={refsById["a4"]}
                    end={refsById["a5"]}
                    showHead={false}
                    showTail={false}
                    startAnchor={"middle"}
                    endAnchor={"middle"}
                    headShape={"circle"}
                    tailShape={"circle"}
                    tailSize={3}
                    headSize={3}
                    curveness={0}
                    strokeWidth={2}
                    zIndex={-2}
                    headColor={
                      isGrowHighlighted || isBuildHighlighted
                        ? "#00acb2"
                        : isTextHighlighted
                        ? "#f15b22"
                        : "#F1F1F1"
                    }
                    tailColor={
                      isGrowHighlighted || isBuildHighlighted
                        ? "#00acb2"
                        : isTextHighlighted
                        ? "#f15b22"
                        : "#F1F1F1"
                    }
                    lineColor={
                      isGrowHighlighted || isBuildHighlighted
                        ? "#00acb2"
                        : isAvatarHighlighted
                        ? "#f15b22"
                        : "#F1F1F1"
                    }
                  />
                  <Xarrow
                    start={refsById["a5"]}
                    end={refsById["a6"]}
                    showHead={false}
                    showTail={false}
                    startAnchor={"middle"}
                    endAnchor={"middle"}
                    headShape={"circle"}
                    tailShape={"circle"}
                    tailSize={3}
                    headSize={3}
                    curveness={0}
                    strokeWidth={2}
                    zIndex={-2}
                    headColor={
                      isGrowHighlighted || isBuildHighlighted
                        ? "#00acb2"
                        : isTextHighlighted
                        ? "#f15b22"
                        : "#F1F1F1"
                    }
                    tailColor={
                      isGrowHighlighted || isBuildHighlighted
                        ? "#00acb2"
                        : isTextHighlighted
                        ? "#f15b22"
                        : "#F1F1F1"
                    }
                    lineColor={
                      isGrowHighlighted || isBuildHighlighted
                        ? "#00acb2"
                        : isAvatarHighlighted
                        ? "#f15b22"
                        : "#F1F1F1"
                    }
                  />
                  <Xarrow
                    start={refsById["a1"]}
                    end={refsById["a3"]}
                    showHead={false}
                    showTail={false}
                    startAnchor={"middle"}
                    endAnchor={"middle"}
                    headShape={"circle"}
                    tailShape={"circle"}
                    tailSize={3}
                    headSize={3}
                    curveness={0}
                    strokeWidth={2}
                    zIndex={-2}
                    headColor={
                      isGrowHighlighted || isBuildHighlighted
                        ? "#00acb2"
                        : isTextHighlighted
                        ? "#f15b22"
                        : "#F1F1F1"
                    }
                    tailColor={
                      isGrowHighlighted || isBuildHighlighted
                        ? "#00acb2"
                        : isTextHighlighted
                        ? "#f15b22"
                        : "#F1F1F1"
                    }
                    lineColor={
                      isGrowHighlighted || isBuildHighlighted
                        ? "#00acb2"
                        : isAvatarHighlighted
                        ? "#f15b22"
                        : "#F1F1F1"
                    }
                  />

                  <Xarrow
                    start="flutter"
                    end="web"
                    showHead={true}
                    showTail={true}
                    startAnchor={"left"}
                    endAnchor={"right"}
                    headShape={"circle"}
                    tailShape={"circle"}
                    tailSize={3}
                    headSize={3}
                    curveness={0}
                    zIndex={-2}
                    strokeWidth={2}
                    headColor={
                      isGrowHighlighted || isBuildHighlighted
                        ? "#00acb2"
                        : isTextHighlighted
                        ? "#f15b22"
                        : "#F1F1F1"
                    }
                    tailColor={
                      isGrowHighlighted || isBuildHighlighted
                        ? "#00acb2"
                        : isTextHighlighted
                        ? "#f15b22"
                        : "#F1F1F1"
                    }
                    lineColor={
                      isGrowHighlighted || isBuildHighlighted
                        ? "#00acb2"
                        : isTextHighlighted
                        ? "#f15b22"
                        : "#F1F1F1"
                    }
                  />

                  <Xarrow
                    start="tensorflow"
                    end="web"
                    showHead={true}
                    showTail={true}
                    startAnchor={"right"}
                    endAnchor={"left"}
                    headShape={"circle"}
                    tailShape={"circle"}
                    tailSize={3}
                    headSize={3}
                    curveness={0}
                    zIndex={-2}
                    strokeWidth={2}
                    headColor={
                      isGrowHighlighted || isBuildHighlighted
                        ? "#00acb2"
                        : isTextHighlighted
                        ? "#f15b22"
                        : "#F1F1F1"
                    }
                    tailColor={
                      isGrowHighlighted || isBuildHighlighted
                        ? "#00acb2"
                        : isTextHighlighted
                        ? "#f15b22"
                        : "#F1F1F1"
                    }
                    lineColor={
                      isGrowHighlighted || isBuildHighlighted
                        ? "#00acb2"
                        : isTextHighlighted
                        ? "#f15b22"
                        : "#F1F1F1"
                    }
                  />

                  <Xarrow
                    start="tensorflow"
                    end="android"
                    showHead={true}
                    showTail={true}
                    startAnchor={"left"}
                    endAnchor={"bottom"}
                    headShape={"circle"}
                    tailShape={"circle"}
                    tailSize={3}
                    headSize={3}
                    curveness={0}
                    zIndex={-2}
                    strokeWidth={2}
                    headColor={
                      isGrowHighlighted || isBuildHighlighted
                        ? "#00acb2"
                        : isTextHighlighted
                        ? "#f15b22"
                        : "#F1F1F1"
                    }
                    tailColor={
                      isGrowHighlighted || isBuildHighlighted
                        ? "#00acb2"
                        : isTextHighlighted
                        ? "#f15b22"
                        : "#F1F1F1"
                    }
                    lineColor={
                      isGrowHighlighted || isBuildHighlighted
                        ? "#00acb2"
                        : isTextHighlighted
                        ? "#f15b22"
                        : "#F1F1F1"
                    }
                  />

                  <Xarrow
                    start="flutter"
                    end="cloud"
                    showHead={true}
                    showTail={true}
                    startAnchor={"right"}
                    endAnchor={"left"}
                    headShape={"circle"}
                    tailShape={"circle"}
                    tailSize={3}
                    headSize={3}
                    curveness={0}
                    zIndex={-2}
                    strokeWidth={2}
                    headColor={
                      isGrowHighlighted || isBuildHighlighted
                        ? "#00acb2"
                        : isTextHighlighted
                        ? "#f15b22"
                        : "#F1F1F1"
                    }
                    tailColor={
                      isGrowHighlighted || isBuildHighlighted
                        ? "#00acb2"
                        : isTextHighlighted
                        ? "#f15b22"
                        : "#F1F1F1"
                    }
                    lineColor={
                      isGrowHighlighted || isBuildHighlighted
                        ? "#00acb2"
                        : isTextHighlighted
                        ? "#f15b22"
                        : "#F1F1F1"
                    }
                  />

                  <Xarrow
                    start="cloud"
                    end="blockchain"
                    showHead={true}
                    showTail={true}
                    startAnchor={"right"}
                    endAnchor={"top"}
                    headShape={"circle"}
                    tailShape={"circle"}
                    tailSize={3}
                    headSize={3}
                    curveness={0}
                    zIndex={-2}
                    strokeWidth={2}
                    headColor={
                      isGrowHighlighted || isBuildHighlighted
                        ? "#00acb2"
                        : isTextHighlighted
                        ? "#f15b22"
                        : "#F1F1F1"
                    }
                    tailColor={
                      isGrowHighlighted || isBuildHighlighted
                        ? "#00acb2"
                        : isTextHighlighted
                        ? "#f15b22"
                        : "#F1F1F1"
                    }
                    lineColor={
                      isGrowHighlighted || isBuildHighlighted
                        ? "#00acb2"
                        : isTextHighlighted
                        ? "#f15b22"
                        : "#F1F1F1"
                    }
                  />
                </Xwrapper>
              </HeroBackgroundContainer>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      ) : (
        <MobileHero />
      )}
    </HeroSectionContainer>
  );
};

export default Hero;
