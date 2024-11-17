import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Xarrow, { Xwrapper } from "react-xarrows";

import {
  ActionsContainer,
  ApplyButton,
  ApplyNowContainer,
  RegistrationPageContainer,
  TeamImageContainer,
  TitleContainer
} from "./RegistrationPage.styled";
import Typography from "../display/typography/Typography";
import { MarqueeDemo } from "./Marquee";

const applicationData = {
  isOpen: false,
  link: ""
};

const RegistrationPage = () => {
  return (
    <RegistrationPageContainer style={{ paddingTop: "120px" }}>
      <TitleContainer>
        <Typography variant="displayLarge">
          What are you waiting for?
        </Typography>
        <Typography variant="body" className="descriptionText">
          {`If you're excited to learn and collaborate, don't wait.
          Apply now and embark on a journey of growth and opportunities!`}
        </Typography>
      </TitleContainer>
      <MarqueeDemo></MarqueeDemo>
      <ApplyNowContainer>
        <ActionsContainer>
          <Link
            href={applicationData.link ? applicationData.link : "#"}
            target="_blank"
          >
            <ApplyButton disabled={!applicationData.isOpen}>
              {applicationData.isOpen
                ? "Apply Now"
                : "Applications are closed. Stay tuned"}
            </ApplyButton>
          </Link>
        </ActionsContainer>
      </ApplyNowContainer>
    </RegistrationPageContainer>
  );
};

export default RegistrationPage;
