import Link from "next/link";
import Image from "next/image";

import {
  Authors,
  AvatarStack,
  FooterContainer,
  FooterGithub,
  FooterMeta,
  FooterSocialIcons,
  FooterSocials,
  LogoContainer,
  LogoWrapper
} from "./Footer.styled";
import Typography from "../typography/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
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
    <FooterContainer>
      <LogoWrapper>
        <LogoContainer>
          <Link href="/">
            <div style={{ width: "100%", maxWidth: "300px", height: "auto" }}>
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
          style={{ paddingLeft: "0.5em" }}
        >
          Mohali, Punjab - 140306
          <br />
          Email : &nbsp;
          <Link
            href="mailto:geekroomplaksha@gmail.com"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            geekroomplaksha@gmail.com
          </Link>
        </Typography>
      </LogoWrapper>
      <FooterSocials>
        <Typography variant="body" subdued style={{ textAlign: "center" }}>
          Follow us on Social Media
        </Typography>
        <FooterSocialIcons>
          <Link
            href="https://www.linkedin.com/company/geekroom-plaksha/"
            target="_blank"
            style={{ color: "gray" }}
          >
            <LinkedInIcon
              style={{ marginBottom: "-5px" }}
              sx={{
                fontSize: 25,
                transition: "all 0.2s ease-in-out",

                "&:hover": {
                  transform: "translate(0, -1px)",
                  color: "#0A66C2"
                }
              }}
            />
          </Link>
          <Link
            href="https://www.instagram.com/geekroom_plaksha/"
            target="_blank"
            style={{ color: "gray" }}
          >
            <InstagramIcon
              style={{ marginBottom: "-5px" }}
              sx={{
                fontSize: 25,
                transition: "all 0.2s ease-in-out",

                "&:hover": {
                  transform: "translate(0, -1px)",
                  color: "#E1306C"
                }
              }}
            />
          </Link>
          <Link
            href="https://github.com/Geek-Room-Plaksha/"
            target="_blank"
            style={{ color: "gray" }}
          >
            <GitHubIcon
              style={{ marginBottom: "-5px" }}
              sx={{
                fontSize: 25,
                transition: "all 0.2s ease-in-out",

                "&:hover": {
                  transform: "translate(0, -1px)",
                  color: "#E1306C"
                }
              }}
            />
          </Link>
        </FooterSocialIcons>
      </FooterSocials>
      <FooterMeta>
        <Authors>
          <Typography
            variant="bodySmall"
            subdued
            style={{ whiteSpace: "normal", width: "90%" }}
          >
            Made with ❤️ by
          </Typography>
          <AvatarStack>
            <Link
              href="https://www.linkedin.com/in/akshat-gupta-840740285/"
              target="_blank"
            >
              <Avatar
                size={isMobile ? "xs" : "sm"}
                borderColor={lightTheme.colors.brandRed}
                url={"/images/team/Akshat.png"}
                className="second hover-effect"
                borderWidth={"2px"}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/arunachalam-vijayanand-42a263244/"
              target="_blank"
            >
              <Avatar
                size={isMobile ? "xs" : "sm"}
                borderColor={lightTheme.colors.brandBlue}
                url={"/images/team/arun.jpg"}
                className="third hover-effect"
                borderWidth={"2px"}
              />
            </Link>
          </AvatarStack>{" "}
        </Authors>
      </FooterMeta>
    </FooterContainer>
  );
}

export default Footer;
