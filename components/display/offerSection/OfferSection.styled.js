import { devices } from "@/constants/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 4rem 8rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};

  @media screen and (${devices.lg}) {
    padding: 3rem 4rem;
  }

  @media screen and (${devices.sm}) {
    padding: 2rem 1rem;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  width: 100%;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;

    @media screen and (${devices.sm}) {
      font-size: 2rem;
    }
  }
`;

export const OffersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem;

  @media screen and (${devices.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (${devices.md}) {
    grid-template-columns: 1fr;
    max-width: 600px;
  }
`;

export const OfferCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: ${({ theme }) =>
    theme.colors.cardBackground || "rgba(255, 255, 255, 0.05)"};
  border-radius: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const OfferLogo = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  background-image: ${({ bgcolor }) =>
    `linear-gradient(120deg, ${bgcolor[0]} 0%, ${bgcolor[1]} 100%)`};
  border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
  animation: morph 3s ${({ delay }) => `${delay}ms`} linear infinite;
  transform-style: preserve-3d;
  outline: 1px solid transparent;
  will-change: border-radius;

  svg {
    width: 60px;
    height: 60px;
    color: white;
  }

  &:before,
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
    box-shadow: 5px 5px 89px ${({ rgb }) => `rgba(${rgb}, 0.21)`};
    will-change: border-radius, transform, opacity;
    animation-delay: ${({ delay }) => `${delay}ms`};
    background-image: ${({ rgb }) => ` linear-gradient(
      120deg,
      rgba(${rgb}, 0.4) 0%,
      rgba(${rgb}, 0.3) 100%
    )`};
  }

  &:before {
    animation: morph 3s linear infinite;
    opacity: 0.21;
    animation-duration: 1.5s;
  }

  &:after {
    animation: morph 3s linear infinite;
    animation-delay: 400ms;
    opacity: 0.89;
  }

  @keyframes morph {
    0%,
    100% {
      border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
      transform: translate3d(0, 0, 0) rotateZ(0.01deg);
    }
    34% {
      border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%;
      transform: translate3d(0, 5px, 0) rotateZ(0.01deg);
    }
    50% {
      opacity: 0.89;
      transform: translate3d(0, 0, 0) rotateZ(0.01deg);
    }
    67% {
      border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
      transform: translate3d(0, -3px, 0) rotateZ(0.01deg);
    }
  }
`;

export const OfferInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text || "rgba(255, 255, 255, 0.8)"};
    max-width: 300px;
  }
`;
