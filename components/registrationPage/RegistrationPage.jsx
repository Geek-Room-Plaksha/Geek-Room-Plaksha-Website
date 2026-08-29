import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  RegistrationPageContainer,
  TitleContainer,
  FormSection
} from "./RegistrationPage.styled";
import Typography from "../display/typography/Typography";
import { MarqueeDemo } from "./Marquee";
import ApplicationForm from "./form";

const applicationData = {
  isOpen: true, // Applications open flag — used by the home-page CTA too
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
          {`If you're eager to learn, collaborate, and grow, don't wait — apply now to join Geek Room Plaksha and embark on an exciting journey of opportunities!`}
        </Typography>
      </TitleContainer>

      {/*
        Form sits immediately below the title, above the marquee.
        No more click-to-reveal — the goal is to make applying the
        lowest-friction action on the page.
      */}
      <FormSection id="application-form">
        <ApplicationForm />
      </FormSection>

      <MarqueeDemo></MarqueeDemo>
    </RegistrationPageContainer>
  );
};

export default RegistrationPage;
