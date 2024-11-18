import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import debounce from "lodash.debounce";

import {
  IntroContainer,
  LeftContainer,
  RightContainer,
  LeftInnerContainer,
  HeadingContainer,
  AvatarContainer,
  IntersectingPoint,
  Span,
  ClubName
} from "./Intro.styled";
import Typography from "../display/typography/Typography";
import { useTheme } from "styled-components";
import FloatingLabel from "../display/typography/floatingLabel/FloatingLabel";
import FloatingAvatar from "../avatar/floatingAvatar/FloatingAvatar";
import { devices } from "@/constants/theme";

function Intro({ isMobile }) {
  const theme = useTheme();
  const updateXarrow = useXarrow();
  const handleXarrowUpdate = debounce(updateXarrow, 0.1);
  const ref0 = useRef();
  const ref1 = useRef();
  const ref2 = useRef();

  useEffect(() => {
    if (
      ref0.current !== undefined &&
      ref1.current !== undefined &&
      ref2.current !== undefined
    )
      return handleXarrowUpdate();
  }, [handleXarrowUpdate, ref0, ref1, ref2]);

  const avatarData = [
    {
      url: "/images/events/hero/Event1.jpg",
      borderColor: "#bbbbbb",
      x: 0,
      y: 30
    },
    {
      url: "/images/events/hero/Event2.jpg",
      borderColor: theme.colors.brandGreen,
      x: isMobile ? 190 : 250,
      y: 100
    },
    {
      url: "/images/events/hero/Event3.jpg",
      borderColor: theme.colors.brandRed,
      x: 50,
      y: isMobile ? 210 : 260
    }
  ];

  const floatingLabelData = [
    {
      label: "Projects",
      color: "##bbbbbb",
      x: isMobile ? -20 : -50,
      y: isMobile ? 150 : 210
    },

    {
      label: "Competitions",
      color: theme.colors.brandGreen,
      x: isMobile ? 150 : 200,
      y: 30
    },
    {
      label: "Workshops",
      color: theme.colors.brandRed,
      x: isMobile ? 180 : 250,
      y: isMobile ? 260 : 280
    }
  ];

  const avatarElements = avatarData.map((avatar, index) => {
    return (
      <FloatingAvatar
        key={index}
        id={`avatar-${index}`}
        url={avatar.url}
        alt={avatar.alt}
        size={isMobile ? "lg" : "xl"}
        borderColor={avatar.borderColor}
        top={avatar.y}
        left={avatar.x}
        delay={index}
        ref={
          index === 0 ? ref0 : index === 1 ? ref1 : index === 2 ? ref2 : null
        }
        blur={true}
      />
    );
  });

  const floatingLabelElements = floatingLabelData.map((label, index) => {
    return (
      <FloatingLabel
        key={index}
        variant="h4"
        color={label.color}
        top={label.y}
        left={label.x}
        delay={index}
        opacity={1}
      >
        {label.label}
      </FloatingLabel>
    );
  });

  return (
    <IntroContainer>
      <LeftContainer>
        <LeftInnerContainer>
          <HeadingContainer>
            <Typography variant="h1">Why join Us ?</Typography>
          </HeadingContainer>
          <Typography variant="body">
            Geek Room Plaksha is a community dedicated to helping each other get
            better at coding. Join us in building meaningful projects together!
            As an official chapter of Geek Room, we are committed to fostering a
            strong tech culture among students who are passionate about
            interdisciplinary learning.
          </Typography>
          <Typography variant="body">
            Our focus is on empowering students to enhance their technical
            skills, explore cutting-edge technologies, and collaborate on
            innovative projects. With a variety of workshops, coding sessions,
            and project teams, Geek Room Plaksha offers a supportive environment
            to grow, connect with like-minded peers, and make a lasting impact.
          </Typography>
        </LeftInnerContainer>
      </LeftContainer>
      <RightContainer>
        <div className="w-full h-full md:ml-48 mt-48 md:mt-0 ml-12">
          <AvatarContainer>
            <Xwrapper>
              {avatarElements}
              <IntersectingPoint id="center" delay={1.2} />
              {floatingLabelElements}
              <Xarrow
                start={ref0}
                end={"center"}
                startAnchor={"middle"}
                endAnchor={"middle"}
                curveness={0}
                showHead={false}
                zIndex={-1}
                strokeWidth={2}
                path={"grid"}
                gridBreak="70%"
                color={theme.colors.bgTertiary}
              />
              <Xarrow
                start={ref1}
                end={"center"}
                startAnchor={"middle"}
                endAnchor={"middle"}
                curveness={0}
                showHead={false}
                zIndex={-1}
                strokeWidth={2}
                path={"grid"}
                gridBreak="70%"
                color={theme.colors.bgTertiary}
              />
              <Xarrow
                start={ref2}
                end={"center"}
                startAnchor={"middle"}
                endAnchor={"middle"}
                curveness={0}
                showHead={false}
                zIndex={-1}
                strokeWidth={2}
                path={"grid"}
                gridBreak="70%"
                color={theme.colors.bgTertiary}
              />
            </Xwrapper>
          </AvatarContainer>
        </div>
      </RightContainer>
    </IntroContainer>
  );
}

export default Intro;
