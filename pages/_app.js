import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import { useEffect, useState } from "react";
import NextTopLoader from "nextjs-toploader";

import { lightTheme, darkTheme } from "@/constants/theme"; // Import your themes
import "@/styles/globals.css"; // Import your global styles
import GlobalStyles from "@/constants/globalStyles";
import GradientAnimation from "@/components/gradientAnimation/GradientAnimation";
import Layout from "@/components/layout";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/display/footer/Footer";

const myFont = localFont({
  src: [
    {
      path: "../public/fonts/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../public/fonts/Montserrat-Medium.ttf",
      weight: "500",
      style: "normal"
    },
    {
      path: "../public/fonts/Fontspring-DEMO-integralcf-regular.otf",
      weight: "700",
      style: "normal"
    }
  ]
});

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true); // Set default to true for dark mode

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2800);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/icons/favicons/favicon.ico" />
      </Head>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        {loading}
        <main className={myFont.className}>
          <NextTopLoader
            color="#4285F4"
            initialPosition={0.05}
            crawlSpeed={200}
            height={5}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            zIndex={1600}
            showAtBottom={false}
          />
          <Layout>
            <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />{" "}
            {/* Pass toggleTheme and isDarkMode to Navbar */}
            <Component {...pageProps} />
            <SpeedInsights />
            <Analytics />
            <Footer toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          </Layout>
        </main>
        <GradientAnimation />
      </ThemeProvider>
    </>
  );
}
