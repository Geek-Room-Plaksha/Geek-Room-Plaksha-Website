import Head from "next/head";
import { useEffect, useState } from "react";

import OfferSection from "@/components/display/offerSection/OfferSection";
import GalleryCarousel from "@/components/galleryCarousel/GalleryCarousel";
import Hero from "@/components/hero/Hero";
import Intro from "@/components/intro/Intro";
import { devices } from "@/constants/theme";
import { AnimatedTestimonialsDemo } from "@/components/Highlights/PastHighlightes";
import PartnersSection from "@/components/collaborations/Collab";
import ContactForm from "@/components/contack-us/contact-us";
import StatsDisplay from "@/components/Strip/strip";

export default function Home() {
  const [isSmall, setIsSmall] = useState(false);
  const [isMedium, setIsMedium] = useState(false);
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const mediaQuerySm = window.matchMedia(devices.sm);
    const mediaQueryMd = window.matchMedia(devices.md);
    const mediaQueryLg = window.matchMedia(devices.lg);

    setIsSmall(mediaQuerySm.matches);
    setIsMedium(mediaQueryMd.matches);
    setIsLarge(mediaQueryLg.matches);

    const handleMediaQueryChangeSm = (event) => {
      setIsSmall(event.matches);
    };
    const handleMediaQueryChangeMd = (event) => {
      setIsMedium(event.matches);
    };
    const handleMediaQueryChangeLg = (event) => {
      setIsLarge(event.matches);
    };

    mediaQuerySm.addEventListener("change", handleMediaQueryChangeSm);
    mediaQueryMd.addEventListener("change", handleMediaQueryChangeMd);
    mediaQueryLg.addEventListener("change", handleMediaQueryChangeLg);

    return () => {
      mediaQuerySm.removeEventListener("change", handleMediaQueryChangeSm);
      mediaQueryMd.removeEventListener("change", handleMediaQueryChangeMd);
      mediaQueryLg.removeEventListener("change", handleMediaQueryChangeLg);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Geek Room Plaksha</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero isMobile={isLarge} />
        <Intro isMobile={isSmall} />
        <StatsDisplay></StatsDisplay>
        {isSmall && <AnimatedTestimonialsDemo />}
        {!isSmall && <GalleryCarousel />}
        <OfferSection isMobile={isMedium} />
        <PartnersSection></PartnersSection>
        <ContactForm></ContactForm>
      </main>
    </>
  );
}
