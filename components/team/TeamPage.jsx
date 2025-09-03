import React, { useEffect, useState } from "react";
import { devices } from "@/constants/theme";
import {
  LeadContainer,
  TeamContainer,
  TeamMembersWrapper,
  TeamPageContainer,
  CoreMembersWrapper
} from "./TeamPage.styled";
import Typography from "../display/typography/Typography";
import { useTheme } from "styled-components";
import MemberCard from "./memberCard/MemberCard";

const TeamPage = ({ teamData }) => {
  const theme = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia(devices.lg);
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  const borderColors = [
    theme.colors.brandBlue,
    theme.colors.brandGreen,
    theme.colors.brandRed,
    theme.colors.brandYellow
  ];
  return (
    <TeamPageContainer>
      <TeamContainer>
        <Typography variant="h2">Core</Typography>
        <CoreMembersWrapper>
          {teamData.core.map((member, index) => (
            <MemberCard
              key={member.id}
              member={member}
              // avatarBorderColor={borderColors[index % 4]}
              avatarBorderColor="#f15b22"
              avatarSize={isMobile ? "lg" : "xl"}
            />
          ))}
        </CoreMembersWrapper>
      </TeamContainer>
      <TeamContainer>
        <Typography variant="h2">Members</Typography>
        <TeamMembersWrapper>
          {teamData.poc.map((member, index) => (
            <MemberCard
              key={member.id}
              member={member}
              avatarBorderColor="#f15b22"
              avatarSize={isMobile ? "lg" : "xl"}
            />
          ))}
          {teamData.members.map((member, index) => (
            <MemberCard
              key={member.id}
              member={member}
              avatarBorderColor="#00acb2"
              avatarSize={isMobile ? "lg" : "xl"}
            />
          ))}
        </TeamMembersWrapper>
      </TeamContainer>

      {teamData.alumni && teamData.alumni.length > 0 && (
        <TeamContainer>
          <Typography variant="h2">Alumni</Typography>
          <TeamMembersWrapper>
            {teamData.alumni.map((member, index) => (
              <MemberCard
                key={member.id}
                member={member}
                avatarBorderColor="#7d3ac1"
                avatarSize={isMobile ? "lg" : "xl"}
              />
            ))}
          </TeamMembersWrapper>
        </TeamContainer>
      )}
    </TeamPageContainer>
  );
};

export default TeamPage;
