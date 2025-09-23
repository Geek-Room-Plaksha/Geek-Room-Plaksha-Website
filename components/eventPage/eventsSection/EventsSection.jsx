import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "styled-components";

import {
  Button,
  Container,
  DateLine,
  EventCard,
  EventCardContainer,
  TopContainer,
  ExploreButton,
  ImageContainer,
  TitleContainer
} from "./EventsSection.styled";
import Typography from "../../display/typography/Typography";
import truncateText from "@/utils/truncate";
import capitalize from "@/utils/capitalize";
import isoToDate from "@/utils/isoToDate";
import staticEventsData from "../Data/EventData";

function EventsSection({ isMobile }) {
  const theme = useTheme();
  const limit = 140;

  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    setEventsData(staticEventsData);
  }, []);

  const cardsElement = eventsData.map((event) => (
    <EventCard key={event.id}>
      <TopContainer>
        <ImageContainer>
          <Image
            src={event.thumbnail}
            fill="responsive"
            alt={event.title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
            style={{
              borderRadius: "8px",
              objectFit: "cover"
            }}
          />
        </ImageContainer>
        <DateLine>
          <Typography variant="bodySmall">
            {isoToDate(event.startDate)}
          </Typography>
          {event.status === "upcoming" ? (
            <Typography variant="bodySmall" color={theme?.colors.brandGreen}>
              {capitalize(event.status)}
            </Typography>
          ) : (
            ""
          )}
        </DateLine>
        <Typography variant="h4">{event.title}</Typography>
        <Typography variant="bodySmall">
          {truncateText(event.shortDescription, limit)}
        </Typography>
      </TopContainer>
      {/* Check if isSlug is false and externalUrl exists, if so use that URL, otherwise use the slug page */}
      {event.isSlug === false && event.externalUrl ? (
        <Link
          href={event.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Button>Learn More</Button>
        </Link>
      ) : (
        <Link href={`/events/${event.slug}`} style={{ textDecoration: "none" }}>
          <Button>Learn More</Button>
        </Link>
      )}
    </EventCard>
  ));

  return (
    <Container>
      <TitleContainer>
        <Typography variant="h1" style={{ paddingTop: "120px" }}>
          Our Events
        </Typography>
      </TitleContainer>
      <EventCardContainer>{cardsElement}</EventCardContainer>
    </Container>
  );
}

export default EventsSection;
