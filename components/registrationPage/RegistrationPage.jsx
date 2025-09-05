import React, { useState } from "react";
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
import ApplicationForm from "./form";

const applicationData = {
  isOpen: true, // Changed to true to allow applications
  link: ""
};

const RegistrationPage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <RegistrationPageContainer style={{ paddingTop: "120px" }}>
      <TitleContainer>
        <Typography variant="displayLarge">
          What are you waiting for?
        </Typography>
        <Typography variant="body" className="descriptionText">
          {`If you're eager to learn, collaborate, and grow, don't wait—apply now to join Geek Room Plaksha and embark on an exciting journey of opportunities!`}
        </Typography>
      </TitleContainer>
      <MarqueeDemo></MarqueeDemo>

      <ApplyNowContainer>
        <ActionsContainer>
          <ApplyButton
            disabled={!applicationData.isOpen}
            onClick={() => applicationData.isOpen && setShowForm(true)}
          >
              Applications are currently closed
          </ApplyButton>
        </ActionsContainer>
      </ApplyNowContainer>

      {/* <div className="mt-12">
        <ApplicationForm />
      </div> */}
    </RegistrationPageContainer>
  );
};

export default RegistrationPage;
