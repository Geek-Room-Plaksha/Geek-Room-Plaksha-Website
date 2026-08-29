import { devices } from "@/constants/theme";
import { styled } from "styled-components";

export const RegistrationPageContainer = styled.main`
  width: 100%;
  padding: 40px 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;

  @media screen and (${devices.lg}) {
    padding: 15px 50px;
  }

  @media screen and (${devices.md}) {
    padding: 15px 20px;
    gap: 40px;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  gap: 1em;

  .descriptionText {
    text-align: center;
    max-width: 600px;
  }

  @media screen and (${devices.md}) {
    padding: 10px 0px;
  }
`;

/*
 * FormSection wraps the application form so it sits immediately
 * below the title. Styled to be the focal point of the page.
 */
export const FormSection = styled.section`
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
`;

export const TeamImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  position: relative;
  object-fit: cover;
  overflow: hidden;
  border-radius: 8px;
`;
