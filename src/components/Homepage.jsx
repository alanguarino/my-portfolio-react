import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { homePageContent } from "../utils/content";

const {
  FileDownloadIcon,
  VisibilityIcon,
  description,
  firstName,
  roleName,
  MainBG,
} = homePageContent;

const Homepage = () => {
  return (
    // <Box sx{{sintaxis para mui emotion}}></Box> background --- BASIC DIV
    // <Container></Container> left and right spaces maxWidth default es lg

    <Box>
      {/* Main Background */}
      <Box
        sx={{
          position: "fixed",
          zIndex: -10,
          top: 0,
          right: 0,
          left: 0,
        }}
      >
        <img src={MainBG} style={{ width: "100%" }} />
      </Box>

      {/* Content section */}
      <Container sx={{ height: "80vh", color: "white" }}>
        <Stack sx={{ height: "100%" }} justifyContent="center">
          <Typography variant="h1" sx={{ mb: 1 }}>
            {firstName}
          </Typography>
          <Typography variant="h2" sx={{ mb: 3 }}>
            {roleName}
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: "60vh", mb: 8 }}>
            {description}
          </Typography>
          <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
            <Button variant="contained" sx={{ borderRadius: 3 }}>
              Download CV
              <FileDownloadIcon sx={{ ml: 1 }} />
            </Button>
            <Button variant="outlined" sx={{ borderRadius: 3, color: "white" }}>
              View Projects
              <VisibilityIcon sx={{ ml: 1 }} />
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>

    // <Stack ></Stack> es como un div con estas propiedades: sx{{display:flex, flexDirection: 'column'}}
  );
};

export default Homepage;
