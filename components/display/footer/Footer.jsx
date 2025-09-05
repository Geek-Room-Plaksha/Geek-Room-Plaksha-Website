import Link from "next/link";
import Image from "next/image";
import { FaSun, FaMoon } from "react-icons/fa";

import {
  Authors,
  AvatarStack,
  FooterContainer,
  FooterGithub,
  FooterMeta,
  FooterSocialIcons,
  FooterSocials,
  LogoContainer,
  LogoWrapper,
  ThemeToggleSwitch,
  FooterSection,
  FooterDivider
} from "./Footer.styled";
import Typography from "../typography/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Avatar from "@/components/avatar/Avatar";
import { useEffect, useState } from "react";
import { devices, lightTheme } from "@/constants/theme";
import LightModeLogo from "@/public/logos/LightModeLogo.png";
import DarkModeLogo from "@/public/logos/DarkModeLogo.png";

function Footer({ toggleTheme, isDarkMode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(devices.sm);
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <FooterContainer
      style={{
        marginTop: "2rem",
        padding: isMobile ? "2rem 1rem 1rem" : "3rem 2rem 1.5rem"
      }}
    >
      <FooterSection>
        <LogoWrapper>
          <LogoContainer
            style={{
              width: isMobile ? "100%" : "80%",
              justifyContent: isMobile ? "center" : "start"
            }}
          >
            <Link href="/">
              <div
                style={{
                  width: "100%",
                  maxWidth: isMobile ? "200px" : "250px",
                  height: "auto"
                }}
              >
                <Image
                  src={isDarkMode ? DarkModeLogo : LightModeLogo}
                  alt={"GR Logo"}
                  layout="responsive"
                  width={500}
                  height={60}
                  priority={true}
                />
              </div>
            </Link>
          </LogoContainer>
          <Typography
            variant="bodySmall"
            subdued
            style={{
              marginTop: "1rem",
              width: isMobile ? "100%" : "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: isMobile ? "center" : "flex-start"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "0.5rem",
                justifyContent: isMobile ? "center" : "flex-start"
              }}
            >
              <LocationOnIcon
                style={{ fontSize: "1rem", marginRight: "0.5rem" }}
              />
              Mohali, Punjab - 140306
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: isMobile ? "center" : "flex-start"
              }}
            >
              <EmailIcon style={{ fontSize: "1rem", marginRight: "0.5rem" }} />
              <Link
                href="mailto:geekroomplaksha@gmail.com"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  transition: "color 0.2s"
                }}
              >
                geekroomplaksha@gmail.com
              </Link>
            </div>
          </Typography>
        </LogoWrapper>

        <FooterSocials>
          <Typography
            variant={isMobile ? "bodyEmphasized" : "body"}
            style={{
              textAlign: "center",
              fontWeight: "600",
              marginBottom: "1rem",
              color: isDarkMode ? "#f0f0f0" : "#333"
            }}
          >
            Connect With Us
          </Typography>
          <FooterSocialIcons>
            <Link
              href="https://www.linkedin.com/company/geekroom-plaksha"
              target="_blank"
              aria-label="LinkedIn"
              style={{ color: "gray" }}
            >
              <LinkedInIcon
                style={{ margin: "0 10px" }}
                sx={{
                  fontSize: isMobile ? 24 : 28,
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translate(0, -3px)",
                    color: "#0A66C2"
                  }
                }}
              />
            </Link>
            <Link
              href="https://www.instagram.com/geekroom_plaksha/"
              target="_blank"
              aria-label="Instagram"
              style={{ color: "gray" }}
            >
              <InstagramIcon
                style={{ margin: "0 10px" }}
                sx={{
                  fontSize: isMobile ? 24 : 28,
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translate(0, -3px)",
                    color: "#E1306C"
                  }
                }}
              />
            </Link>
            <Link
              href="https://chat.whatsapp.com/KLsOEWvVMGEBbcxNqxIInD"
              target="_blank"
              aria-label="WhatsApp"
              style={{ color: "gray" }}
            >
              <WhatsAppIcon
                style={{ margin: "0 10px" }}
                sx={{
                  fontSize: isMobile ? 24 : 28,
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translate(0, -3px)",
                    color: "#25D366"
                  }
                }}
              />
            </Link>
            <Link
              href="https://github.com/Geek-Room-Plaksha"
              target="_blank"
              aria-label="GitHub"
              style={{ color: "gray" }}
            >
              <GitHubIcon
                style={{ margin: "0 10px" }}
                sx={{
                  fontSize: isMobile ? 24 : 28,
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translate(0, -3px)",
                    color: isDarkMode ? "#fff" : "#333"
                  }
                }}
              />
            </Link>
          </FooterSocialIcons>
        </FooterSocials>
      </FooterSection>

      <FooterDivider />

      <FooterMeta>
        <div
          style={{
            paddingBottom: "0.8rem",
            paddingRight: isMobile ? 0 : "initial",
            textAlign: "center",
            paddingLeft: isMobile ? "1rem" : 0,
            paddingRight: isMobile ? "1rem" : 0
          }}
        >
          <Typography variant={isMobile ? "bodySmall" : "body"}>
            {isMobile ? (
              <>
                Want to contribute?{" "}
                <Link
                  href="https://github.com/Geek-Room-Plaksha/Geek-Room-Plaksha-Website"
                  style={{ color: "#f15b22", textDecoration: "none" }}
                >
                  Join us on GitHub
                </Link>
              </>
            ) : (
              <>
                Want to contribute to this website?{" "}
                <Link
                  href="https://github.com/Geek-Room-Plaksha/Geek-Room-Plaksha-Website"
                  style={{ color: "#f15b22", textDecoration: "none" }}
                >
                  Join us on GitHub
                </Link>
              </>
            )}
          </Typography>
        </div>
      </FooterMeta>
    </FooterContainer>
  );
}

export default Footer;
