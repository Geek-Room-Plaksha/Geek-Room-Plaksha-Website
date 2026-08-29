import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { devices } from "@/constants/theme";

/*
 * ApplicationsCta
 * ----------------
 * Slim "Applications are open" banner shown on the home page. Sits
 * between the Intro and Stats sections. Links to /join-us.
 *
 * Visibility is controlled by a static `isOpen` flag for now. When
 * applications close, set `isOpen = false` (or remove the <ApplicationsCta />
 * from pages/index.js) to hide it.
 */
const ApplicationsCta = () => {
  return (
    <Container>
      <Content>
        <TextBlock>
          <Tag>Applications Open</Tag>
          <Heading>Join Geek Room Plaksha.</Heading>
          <Sub>
            Build, learn, and ship with us. Applications are open for the
            upcoming batch — takes about 3 minutes to apply.
          </Sub>
        </TextBlock>
        <ApplyLink href="/join-us">
          Apply now
          <Arrow aria-hidden="true">→</Arrow>
        </ApplyLink>
      </Content>
    </Container>
  );
};

export default ApplicationsCta;

const Container = styled.section`
  width: 100%;
  padding: 56px 48px;
  background: linear-gradient(
    135deg,
    rgba(241, 91, 34, 0.10) 0%,
    rgba(0, 172, 178, 0.10) 100%
  );
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  @media screen and (${devices.md}) {
    padding: 40px 20px;
  }
`;

const Content = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;

  @media screen and (${devices.md}) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextBlock = styled.div`
  flex: 1;
  min-width: 0;
`;

const Tag = styled.span`
  display: inline-block;
  background: rgba(0, 172, 178, 0.15);
  color: #00acb2;
  padding: 5px 12px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 14px;
`;

const Heading = styled.h2`
  font-size: clamp(22px, 3vw, 30px);
  font-weight: 700;
  color: #f1f1f1;
  margin: 0 0 6px 0;
  line-height: 1.2;
  letter-spacing: -0.01em;
`;

const Sub = styled.p`
  color: #a1a1a1;
  font-size: 14px;
  line-height: 1.55;
  max-width: 540px;
  margin: 0;

  @media screen and (${devices.md}) {
    margin: 0 auto;
  }
`;

const ApplyLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: #f15b22;
  color: #ffffff;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.02em;
  transition: all 0.2s ease-in-out;
  flex-shrink: 0;
  white-space: nowrap;

  &:hover {
    background: #ff7b3d;
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(241, 91, 34, 0.35);
  }

  &:hover > span {
    transform: translateX(4px);
  }

  @media screen and (${devices.md}) {
    width: 100%;
    justify-content: center;
  }
`;

const Arrow = styled.span`
  display: inline-block;
  transition: transform 0.2s ease;
  font-weight: 400;
`;
