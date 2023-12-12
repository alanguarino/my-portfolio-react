import React from "react";
import { Box, Button, Grid, Stack, Typography, Avatar } from "@mui/material";
import { homePageContent } from "../utils/content";
import { styled } from "@mui/system";
import ScrollIndicator from "./ScrollIndicator";
import { Link } from "react-scroll";

const { FileDownloadIcon, VisibilityIcon, description, firstName, roleName } =
  homePageContent;

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: 400,
  height: 400,
  border: `3px solid ${theme.palette.primary.main}`,
}));

const Homepage = ({ id }) => {
  return (
    <Box
      id={id}
      sx={{
        mt: 10,
        justifyContent: "center",
        p: 2,
        minHeight: "100vh",
      }}
    >
      <Grid container spacing={2}>
        {/* Contenido izquierdo */}
        <Grid item xs={12} md={6}>
          <ProfileAvatar
            sx={{
              display: { xs: "block", md: "none" },
              height: "250px",
              width: "250px",
              margin: "0 auto",
            }}
            alt="Profile Photo"
            src={"./src/assets/images/profile-pic.jpg"}
          />
          <Stack sx={{ ml: { md: 20 }, mt: { md: 15 } }}>
            <Typography variant="h2" sx={{ mb: 1, color: "#f54703", mt: 5 }}>
              {firstName}
            </Typography>
            <Typography variant="h1" sx={{ mb: 3 }}>
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
              <Button
                variant="outlined"
                sx={{ borderRadius: 3, color: "white" }}
              >
                View Projects
                <VisibilityIcon sx={{ ml: 1 }} />
              </Button>
            </Stack>
          </Stack>
        </Grid>

        {/* Contenido derecho */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              ml: { md: 0 },
              mt: { md: 10 },
            }}
          >
            <ProfileAvatar
              alt="Profile Photo"
              src={"./src/assets/images/profile-pic.JPG"}
            />
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          textAlign: "center",
          position: { xs: "static", md: "sticky" },
          bottom: 0,
          width: "100%",
          backgroundColor: "transparent",
          zIndex: 1,
          mt: { md: 50 },
        }}
      >
        <Link
          // className="{page}"
          to="StackIcons"
          spy={true}
          smooth={true}
          duration={500}
          offset={-150}
        >
          <ScrollIndicator />
        </Link>
      </Box>
    </Box>
  );
};

export default Homepage;
