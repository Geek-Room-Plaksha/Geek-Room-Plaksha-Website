import React from "react";
import Typography from "../typography/Typography";
import Image from "next/image";
import {
  Container,
  OfferCard,
  OfferInfo,
  OfferLogo,
  OffersContainer,
  Title
} from "./OfferSection.styled";

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
            <Image
              src="/icons/tech.svg"
              alt="Tech icon"
              width={50}
              height={50}
            />
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
            delay={200}
          >
            <Image
              src="/icons/events.svg"
              alt="Events icon"
              width={50}
              height={50}
            />
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
            delay={400}
          >
            <Image
              src="/icons/market.svg"
              alt="Marketing icon"
              width={60}
              height={60}
            />
          </OfferLogo>
          <OfferInfo>
            <Typography variant="h3">Marketing</Typography>
            <Typography variant="bodySmall">
              The Marketing team creates compelling campaigns and promotions,
              ensuring our message reaches and resonates with a wide audience
              across campus and beyond.
            </Typography>
          </OfferInfo>
        </OfferCard>

        <OfferCard>
          <OfferLogo
            bgcolor={["#0F9D58", "#64D8CB"]}
            rgb="100, 216, 203"
            delay={600}
          >
            <Image
              src="/icons/design.svg"
              alt="Design icon"
              width={50}
              height={50}
            />
          </OfferLogo>
          <OfferInfo>
            <Typography variant="h3">Design</Typography>
            <Typography variant="bodySmall">
              The Design team crafts visually stunning graphics, interfaces, and
              branding materials that communicate our vision effectively and
              create a consistent visual identity for Geek Room.
            </Typography>
          </OfferInfo>
        </OfferCard>

        <OfferCard>
          <OfferLogo
            bgcolor={["#FF5722", "#FF8A65"]}
            rgb="255, 138, 101"
            delay={800}
          >
            <Image
              src="/icons/content.svg"
              alt="Content icon"
              width={40}
              height={40}
            />
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
            bgcolor={["#0F9D58", "#64D8CB"]}
            rgb="100, 216, 203"
            delay={1000}
          >
            <Image
              src="/icons/collaboration.svg"
              alt="Outreach icon"
              width={65}
              height={65}
            />
          </OfferLogo>
          <OfferInfo>
            <Typography variant="h3">Outreach</Typography>
            <Typography variant="bodySmall">
              The Outreach team builds strategic partnerships with industry,
              academic institutions, and other student groups to expand our
              network and create opportunities for collaboration and growth.
            </Typography>
          </OfferInfo>
        </OfferCard>
      </OffersContainer>
    </Container>
  );
}

export default OfferSection;
