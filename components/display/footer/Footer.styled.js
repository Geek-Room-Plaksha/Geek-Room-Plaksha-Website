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

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  border-radius: 30px 30px 0 0;

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
  align-items: center;
  justify-content: center;
  width: calc(100% / 3);
  gap: 1em;
  color: ${({ theme }) => theme.colors.contentSecondary};

  @media screen and (${devices.xl}) {
    flex-direction: column;
    gap: 0.5em;
  }

  @media screen and (${devices.md}) {
    width: 100%;
  }
`;

export const FooterSocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  color: ${({ theme }) => theme.colors.bodyPrimary};
`;

export const FooterMeta = styled.div`
  display: flex;
  width: calc(100% / 3);
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  color: ${({ theme }) => theme.colors.contentSecondary};
  gap: 0.8em;
  text-align: right;

  @media screen and (${devices.md}) {
    width: 100%;
    text-align: center;
    align-items: center;
  }
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
