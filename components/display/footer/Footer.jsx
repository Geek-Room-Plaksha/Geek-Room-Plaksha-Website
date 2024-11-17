import Link from "next/link";
import Image from "next/image";
import { FaSun, FaMoon } from "react-icons/fa"; // Import Font Awesome icons

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
  ThemeToggleSwitch // Import the styled ThemeToggleSwitch
} from "./Footer.styled";
import Typography from "../typography/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
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
            href="https://www.linkedin.com/company/geekroom-plaksha"
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
            href="https://chat.whatsapp.com/KLsOEWvVMGEBbcxNqxIInD"
            target="_blank"
            style={{ color: "gray" }}
          >
            <WhatsAppIcon
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
        {/* <div
          style={{
            // paddingRight: "2.75rem",
            paddingBottom: "0.8rem",
            paddingRight: isMobile ? 0 : "initial"
            // paddingBottom: isMobile ? "0.8rem" : "initial"
          }}
        >
          <ThemeToggleSwitch onClick={toggleTheme} isDarkMode={isDarkMode}>
            <FaSun className="icon sun" />
            <FaMoon className="icon moon" />
          </ThemeToggleSwitch>
        </div> */}
        <div
          style={{
            paddingBottom: "0.8rem",
            paddingRight: isMobile ? 0 : "initial"
          }}
        >
          Want to contribute to this website ?<br></br>Feel free to do so !
        </div>
        <Authors>
          <Typography
            variant="bodySmall"
            subdued
            style={{ whiteSpace: "normal", width: "90%" }}
          >
            Made by{" "}
            <a
              href="https://www.linkedin.com/in/akshat-gupta-840740285/"
              style={{ color: "#f15b22", textDecoration: "none" }}
            >
              Akshat
            </a>{" "}
            &{" "}
            <a
              href="https://www.linkedin.com/in/arunachalam-vijayanand-42a263244/"
              style={{ color: "#f15b22", textDecoration: "none" }}
            >
              Arun
            </a>
          </Typography>
          <AvatarStack>
            <Link
              href="https://github.com/Geek-Room-Plaksha/Geek-Room-Plaksha-Website"
              target="_blank"
            >
              <Avatar
                size={isMobile ? "sm" : "sm"}
                // borderColor={lightTheme.colors.brandRed}
                url={"/images/image.png"}
                className="hover-effect"
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
