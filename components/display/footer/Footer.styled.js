import styled from "styled-components";
import { devices } from "@/constants/theme";
import Link from "next/link";

export const AvatarStack = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .first {
    z-index: 3;
    margin-right: -16px;
  }
  .second {
    z-index: 2;
  }
  .third {
    z-index: 1;
    margin-left: -16px;
  }

  .hover-effect {
    transition: transform 0.1s ease-in;

    &:hover {
      transform: translateY(-4px);
      z-index: 5;
    }
  }

  @media screen and (${devices.md}) {
    width: 100%;
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (${devices.md}) {
    flex-direction: column;
    gap: 1.7em;
  }

  @media screen and (${devices.sm}) {
    padding: 2em 0;
  }
`;

export const LogoWrapper = styled.div`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  gap: 1em;

  @media screen and (${devices.md}) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

export const LogoContainer = styled.div`
  width: 80%;
  aspect-ratio: 380/42;
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const FooterSocials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  @media ${devices.sm} {
    margin-top: 1rem;
  }
`;

export const FooterSocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  gap: 0.5rem;
`;

export const FooterMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 0.5rem;
`;

export const FooterGithub = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: gray;
`;

export const Authors = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

export const ThemeToggleSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: url("/cursors/cursor-pointer.svg") 10 0, auto;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  position: relative;
  width: 90px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: 25px;
  padding: 5px;
  transition: background-color 0.3s ease;

  .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: left 0.3s ease;
    width: 25px;
  }

  .sun {
    left: ${({ isDarkMode }) => (isDarkMode ? "5px" : "50px")};
    color: ${({ theme }) => theme.colors.brandYellow};
  }

  .moon {
    left: ${({ isDarkMode }) => (isDarkMode ? "50px" : "5px")};
    color: ${({ theme }) => theme.colors.brandBlue};
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 2rem;

  @media ${devices.md} {
    flex-direction: row;
  }

  @media ${devices.sm} {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const FooterDivider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin: 1.5rem 0;
  opacity: 0.5;
`;
