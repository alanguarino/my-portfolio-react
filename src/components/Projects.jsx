import React from "react";
import Project from "./Project";
import { Box, Container, Typography } from "@mui/material";
// import { techStack } from "../utils/content";

const Projects = ({ id }) => {
  return (
    <div id={id}>
      <Box>
        <Container>
          <Typography variant="h2" sx={{ textAlign: "center", my: 4, m: 15 }}>
            Projects
          </Typography>
          <Project
            title="TRUCO Scorekeeper"
            description="I developed a Truco scorekeeper using Vanilla JavaScript and styled with Bulma CSS. This user-friendly tool enables real-time scoring adjustments, allowing you to customize the game to 15 or 30 points. With a responsive design, you can effortlessly use your mobile phone to track scores"
            img="src\assets\images\web-gradient-background.jpg"
            stack={["JavaScript", "BulmaCSS", "Git"]}
          />

          <Project
            title="Extreme Shooter"
            description="Extreme Shooter, a 2D game I developed with my university team, is a testament to our proficiency in Object-Oriented Programming (OOP). Focused on principles like classes, polymorphism, and encapsulation, this project was executed in the Wollok language. Git version control streamlined collaboration, showcasing our commitment to efficient project management."
            img="src\assets\images\web-gradient-background.jpg"
            stack={["Wollok"]}
          />

          <Project
            title="Portfolio Web"
            description="A project crafted and designed by me, utilizing React and Material-UI. I prioritize the implementation of reusable components to ensure an efficient structure and a clean, user-friendly interface design. This project is also a Single Page Application (SPA), providing a smooth and fluid user experience."
            img="src\assets\images\web-gradient-background.jpg"
            stack={["React", "MaterialUI", "Git"]}
          />
        </Container>
      </Box>
    </div>
  );
};

export default Projects;

//<Project { title, description, img, stack }/>
