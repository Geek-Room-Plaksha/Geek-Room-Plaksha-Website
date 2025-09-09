import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import {
  Banner,
  ContentContainer,
  EventContainer,
  EventInfo,
  EventWrapper,
  InfoModal,
  InfoModalDate,
  InfoModalVenue,
  InfoModalRegistration,
  Left,
  Right,
  SpeakerCard,
  SpeakerInfo,
  SpeakerName,
  SpeakersCardContainer,
  SpeakersContainer,
  Button
} from "./EventPage.styled";
import Typography from "../../display/typography/Typography";
import Avatar from "../../avatar/Avatar";
import truncateText from "@/utils/truncate";
import capitalize from "@/utils/capitalize";
import isoToDate from "@/utils/isoToDate";

function EventPage({ eventData }) {
  const limit = 400;
  // Use eventData.isHack to determine the heading, defaulting to false if undefined.
  const isHack = eventData.isHack || false;

  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.tz.setDefault("Asia/Kolkata");

  const speakerElements =
    eventData.speakers != undefined &&
    eventData.speakers.length > 0 &&
    eventData.speakers.map((speaker) => (
      <Link
        href={speaker.profileLink}
        key={speaker.id}
        style={{ textDecoration: "none" }}
      >
        <SpeakerCard>
          <SpeakerInfo>
            <Avatar url={speaker.image} size="lg" borderWidth={"0"} />
            <SpeakerName>
              <Typography variant="h4" className="h4">
                {speaker.name}
              </Typography>
              <Typography variant="bodySmall" className="bodySmall">
                {speaker.title}
              </Typography>
            </SpeakerName>
          </SpeakerInfo>
        </SpeakerCard>
      </Link>
    ));

  return (
    <>
      {eventData && (
        <EventContainer style={{ paddingTop: "120px" }}>
          <Banner>
            <Image
              src={eventData.coverPhoto}
              alt="bannerImg"
              fill="responsive"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
              style={{
                objectFit: "cover",
                borderRadius: "inherit"
              }}
            />
          </Banner>
          <EventWrapper>
            <Left>
              <ContentContainer>
                <Typography variant="h1">{eventData.title}</Typography>
                <EventInfo>
                  <Typography variant="body">
                    {parse(eventData.description)}
                  </Typography>
                </EventInfo>
              </ContentContainer>
              {eventData.resourcesLink && (
                <Link
                  href={eventData.resourcesLink}
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>Resources</Button>
                </Link>
              )}
              {eventData.speakers != undefined &&
                eventData.speakers.length > 0 && (
                  <SpeakersContainer>
                    <Typography variant="h2" className="h2">
                      {isHack ? "Partners" : "Organizers"}
                    </Typography>

                    <SpeakersCardContainer>
                      {speakerElements}
                    </SpeakersCardContainer>
                  </SpeakersContainer>
                )}
            </Left>
            <Right>
              <InfoModal status={eventData.status}>
                <InfoModalDate>
                  <Typography variant="body" subdued className="body">
                    Mark your calendars for
                  </Typography>
                  <Typography variant="h4" className="h4">
                    {eventData.startDate &&
                    dayjs.tz(eventData.startDate).format("D") !==
                      dayjs.tz(eventData.endDate).format("D")
                      ? dayjs.tz(eventData.startDate).format("D") +
                        " - " +
                        isoToDate(eventData.endDate)
                      : isoToDate(eventData.startDate)}
                  </Typography>
                  <Typography variant="body" subdued className="body">
                    Time
                  </Typography>
                  <Typography variant="h4" className="h4">
                    {dayjs.tz(eventData.startDate).format("h:mm A")} -{" "}
                    {dayjs.tz(eventData.endDate).format("h:mm A")}
                  </Typography>
                </InfoModalDate>
                <InfoModalVenue>
                  <Typography variant="body" subdued className="body">
                    Venue
                  </Typography>
                  <Typography variant="h4" className="h4">
                    {eventData.venue}
                  </Typography>
                </InfoModalVenue>
                <InfoModalRegistration>
                  <Typography variant="body" subdued className="body">
                    Registration
                  </Typography>
                  <Typography variant="h4" className="h4">
                    {eventData.status === "upcoming" && capitalize("Open")}
                    {eventData.status === "closed" && capitalize("closed")}
                    {eventData.status === "ended" && capitalize("ended")}
                  </Typography>
                </InfoModalRegistration>
                {eventData.registrationLink && (
                  <Link
                    href={eventData.registrationLink ?? "#"}
                    style={{
                      textDecoration: "none"
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {eventData.status === "upcoming" && (
                      <Button>Register Now</Button>
                    )}
                  </Link>
                )}
              </InfoModal>
            </Right>
          </EventWrapper>
        </EventContainer>
      )}
    </>
  );
}

export default EventPage;
