import { useState } from "react";
import { useTheme } from "styled-components";
import { Container, TitleContainer } from "./ProjectSection.styled";
import Typography from "../display/typography/Typography";
import { ThreeDCardDemo } from "./3dCards/3Dproject";

const projects = [
  {
    title: "Project One",
    description: "Description for project one.",
    imageUrl: "/images/cs.png",
    link: "/project-one",
    authors: [
      {
        username: "XYZ",
        name: "XYZ",
        image: "/images/avatar.png"
      }
    ]
  },
  {
    title: "Project Two",
    description: "Description for project two.",
    imageUrl: "/images/cs.png",
    link: "/project-two",
    authors: [
      {
        username: "XYZ",
        name: "XYZ",
        image: "/images/avatar.png"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ThreeDCardDemo
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            link={project.link}
            authors={project.authors} // Pass the authors prop
            isMobile={isMobile}
          />
        ))}
      </div>
    </Container>
  );
}

export default ProjectSection;
