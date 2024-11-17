import { useState } from "react";
import { useTheme } from "styled-components";
import { Container, TitleContainer } from "./ProjectSection.styled";
import Typography from "../display/typography/Typography";
import { ThreeDCardDemo } from "./3dCards/3Dproject";

const projects = [
  {
    title: "Project One",
    description: "Description for project one.",
    imageUrl:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/project-one"
  },
  {
    title: "Project Two",
    description: "Description for project two.",
    imageUrl:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/project-two"
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
          />
        ))}
      </div>
    </Container>
  );
}

export default ProjectSection;
