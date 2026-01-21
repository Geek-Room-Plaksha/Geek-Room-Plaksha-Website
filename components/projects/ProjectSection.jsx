import { useState } from "react";
import { useTheme } from "styled-components";
import { Container, TitleContainer } from "./ProjectSection.styled";
import Typography from "../display/typography/Typography";
import { ThreeDCardDemo } from "./3dCards/3Dproject";

const projects = [
  {
    title: "Plaksha Pang Pang",
    description:
      "Plaksha-themed mini-game (inspired by Suika) exclusively for UG29 batch Orientation.",
    imageUrl: "/images/projects/pang.png",
    link: "https://pangpang.geekroomplaksha.com/",
    authors: [
      {
        // name: "Armaan Raisinghani",
        image: "/images/team/armaan.png"
      },
      {
        image: "/images/team/shreya.png"
      },
      {
        image: "/images/team/vir.png"
      }
    ]
  },
  {
    title: "Adventure",
    description:
      "An interactive game programmed in Python, using the Pygame library, showcased at the Founders’ Day.",
    imageUrl: "/images/projects/adventure.png",
    link: "/adventure",
    authors: [
      {
        // name: "Team Member",
        image: "/images/team/arun.jpg"
      }
    ]
  }
];

function ProjectSection({ isMobile }) {
  const theme = useTheme();

  return (
    <Container style={{ paddingTop: "120px" }}>
      <TitleContainer>
        <Typography variant="h1">Our Projects</Typography>
      </TitleContainer>
      <div
        className={`w-full max-w-7xl mx-auto px-4 ${
          projects.length === 1 ? "flex justify-center" : ""
        }`}
      >
        {projects.length === 1 ? (
          <ThreeDCardDemo
            title={projects[0].title}
            description={projects[0].description}
            imageUrl={projects[0].imageUrl}
            link={projects[0].link}
            authors={projects[0].authors}
            isMobile={isMobile}
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
            {projects.map((project, index) => (
              <div key={index} className="flex justify-center">
                <ThreeDCardDemo
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  link={project.link}
                  authors={project.authors}
                  isMobile={isMobile}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}

export default ProjectSection;
