import React from "react";
import Project from "./Project";
import { Box, Container, Typography } from "@mui/material";

const Projects = () => {
  return (
    <div>
      <Box>
        <Container>
          <Typography variant="h1" sx={{ textAlign: "center", my: 4, mb: 15 }}>
            Projects
          </Typography>
          <Project
            title="Proyecto 1"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit lacus, egestas mollis eleifend tellus arcu ur"
            img="src\assets\images\web-gradient-background.jpg"
            stack={["JS", "ND", "C"]}
          />

          <Project
            title="Proyecto 2"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit lacus, egestas mollis eleifend tellus arcu ur"
            img="src\assets\images\web-gradient-background.jpg"
            stack={["JS", "ND"]}
          />

          <Project
            title="Proyecto 3"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit lacus, egestas mollis eleifend tellus arcu ur"
            img="src\assets\images\web-gradient-background.jpg"
            stack={["ND", "C"]}
          />
        </Container>
      </Box>
    </div>
  );
};

export default Projects;

//<Project { title, description, img, stack }/>
