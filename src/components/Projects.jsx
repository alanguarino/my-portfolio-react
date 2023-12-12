import React from "react";
import Project from "./Project";
import { Box, Container, Typography } from "@mui/material";
// import { techStack } from "../utils/content";

const Projects = ({ id }) => {
  return (
    <div id={id}>
      <Box>
        <Container>
          <Typography variant="h3" sx={{ textAlign: "center", my: 4, m: 15 }}>
            Projects
          </Typography>
          <Project
            title="TRUCO Scorekeeper"
            description="I developed a Truco scorekeeper using Vanilla JavaScript and styled with Bulma CSS. This user-friendly tool enables real-time scoring adjustments, allowing you to customize the game to 15 or 30 points. With a responsive design, you can effortlessly use your mobile phone to track scores"
            img="https://raw.githubusercontent.com/alanguarino/my-portfolio-react/main/src/assets/images/web-gradient-background.jpg"
            stack={["JavaScript", "BulmaCSS", "Git"]}
            repoLink={"https://github.com/alanguarino/AnotadorDeTruco"}
          />

          <Project
            title="Extreme Shooter"
            description="Extreme Shooter, a 2D game I developed with my university team, is a testament to our proficiency in Object-Oriented Programming (OOP). Focused on principles like classes, polymorphism, and encapsulation, this project was executed in the Wollok language. Git version control streamlined collaboration, showcasing our commitment to efficient project management."
            img="https://raw.githubusercontent.com/alanguarino/my-portfolio-react/main/src/assets/images/extreme-shooter-image.png"
            stack={["Wollok"]}
            repoLink={"https://github.com/algo1unsam/tp-game-s2-extremeshooter"}
          />

          <Project
            title="Portfolio Web"
            description="A project crafted and designed by me, utilizing React and Material-UI. I prioritize the implementation of reusable components to ensure an efficient structure and a clean, user-friendly interface design. This project is also a Single Page Application (SPA), providing a smooth and fluid user experience."
            img="https://raw.githubusercontent.com/alanguarino/my-portfolio-react/main/src/assets/images/portfolio-web-image.jpg"
            stack={["React", "MaterialUI", "Git"]}
            repoLink={"https://github.com/alanguarino/my-portfolio-react"}
          />
        </Container>
      </Box>
    </div>
  );
};

export default Projects;

//<Project { title, description, img, stack }/>
