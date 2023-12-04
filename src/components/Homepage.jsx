import { Box, Button, Container, Stack } from "@mui/material";
import React from "react";
import { homePageContent } from "../utils/content";

const { FileDownloadIcon, VisibilityIcon, description, firstName, roleName } =
  homePageContent;

const Homepage = () => {
  return (
    // <Box sx{{sintaxis para mui emotion}}></Box> background --- BASIC DIV
    <Box>
      <Container sx={{ bgcolor: "red", height: "80vh" }}>
        <Stack sx={{ height: "100%" }} justifyContent="center">
          <h1>{firstName}</h1>
          <h2 style={{ letterSpacing: "0.05em" }}>{roleName}</h2>
          <h4>{description}</h4>
          <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
            <Button variant="contained" sx={{ borderRadius: 3 }}>
              Download CV
              <FileDownloadIcon sx={{ ml: 1 }} />
            </Button>
            <Button variant="outlined" sx={{ borderRadius: 3 }}>
              View Projects
              <VisibilityIcon sx={{ ml: 1 }} />
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>

    // <Container></Container> left and right spaces maxWidth default es lg
    // <Stack ></Stack> es como un div con estas propiedades: sx{{display:flex, flexDirection: 'column'}}
  );
};

export default Homepage;
