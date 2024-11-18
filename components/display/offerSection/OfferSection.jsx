import React from "react";
import Typography from "../typography/Typography";
import {
  Container,
  OfferCard,
  OfferInfo,
  OfferLogo,
  OffersContainer,
  Title
} from "./OfferSection.styled";
import BookSvg from "@icons/book1.svg";
import CubeSvg from "@icons/i3dcubescan.svg";
import MessageSvg from "@icons/messageprogramming.svg";
import ContentSvg from "@icons/content.svg";
import RobotSvg from "@icons/robot.svg";
import EventsSvg from "@icons/events.svg";

function OfferSection() {
  return (
    <Container>
      <Title>
        <Typography variant="h1">Our Team Structure</Typography>
      </Title>
      <OffersContainer>
        <OfferCard>
          <OfferLogo
            bgcolor={["#FF5722", "#FF8A65"]}
            rgb="255, 138, 101"
            delay={0}
          >
            <CubeSvg />
          </OfferLogo>
          <OfferInfo>
            <Typography variant="h3">Tech</Typography>
            <Typography variant="bodySmall">
              Our Tech team is divided into DSA, Development, AI-ML, and
              Emerging Tech subdivisions, each focusing on innovative projects
              that benefit the community and advance technical skills.
            </Typography>
          </OfferInfo>
        </OfferCard>

        <OfferCard>
          <OfferLogo
            bgcolor={["#0F9D58", "#64D8CB"]}
            rgb="100, 216, 203"
            delay={800}
          >
            <EventsSvg />
          </OfferLogo>
          <OfferInfo>
            <Typography variant="h3">Events</Typography>
            <Typography variant="bodySmall">
              Open to all members, events are driven by the collective efforts
              of interested members from all the teams. The Events team
              organizes workshops, competitions, etc to foster a culture of
              learning and collaboration.
            </Typography>
          </OfferInfo>
        </OfferCard>

        <OfferCard>
          <OfferLogo
            bgcolor={["#FF5722", "#FF8A65"]}
            rgb="255, 138, 101"
            delay={600}
          >
            <RobotSvg />
          </OfferLogo>
          <OfferInfo>
            <Typography variant="h3">Robotics</Typography>
            <Typography variant="bodySmall">
              The Robotics team empowers members to design, build, and program
              robots through engaging projects and interactive workshops.
            </Typography>
          </OfferInfo>
        </OfferCard>

        <OfferCard>
          <OfferLogo
            bgcolor={["#0F9D58", "#64D8CB"]}
            rgb="100, 216, 203"
            delay={200}
          >
            <ContentSvg />
          </OfferLogo>
          <OfferInfo>
            <Typography variant="h3">Content</Typography>
            <Typography variant="bodySmall">
              The Content team produces engaging blogs, newsletters, and video
              content that keeps our community informed and inspired, sharing
              insights on the latest trends and developments.
            </Typography>
          </OfferInfo>
        </OfferCard>

        <OfferCard>
          <OfferLogo
            bgcolor={["#FF5722", "#FF8A65"]}
            rgb="255, 138, 101"
            delay={400}
          >
            <MessageSvg />
          </OfferLogo>
          <OfferInfo>
            <Typography variant="h3">Marketing and Design</Typography>
            <Typography variant="bodySmall">
              The Marketing & Design team creates visually compelling campaigns,
              promotes our initiatives, and ensures our message resonates with a
              wide audience.
            </Typography>
          </OfferInfo>
        </OfferCard>

        <OfferCard>
          <OfferLogo
            bgcolor={["#0F9D58", "#64D8CB"]}
            rgb="100, 216, 203"
            delay={800}
          >
            <BookSvg />
          </OfferLogo>
          <OfferInfo>
            <Typography variant="h3">Research</Typography>
            <Typography variant="bodySmall">
              The Research team promotes a strong research culture at Plaksha,
              offering a space for students to learn research methodologies and
              conduct meaningful studies.
            </Typography>
          </OfferInfo>
        </OfferCard>
      </OffersContainer>
    </Container>
  );
}

export default OfferSection;
