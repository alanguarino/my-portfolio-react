import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const ContactInfo = () => {
  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#222",
        color: "#fff",
        textAlign: "center",
        padding: "20px",
        position: "static",
        bottom: "0",
        left: "0",
        width: "100%",
        mt: 10,
      }}
    >
      <Typography variant="body2" component="p" sx={{ marginBottom: "10px" }}>
        Connect with me:
      </Typography>
      <IconButton
        onClick={() => openLink("https://github.com/alanguarino")}
        sx={{ color: "#fff" }}
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        onClick={() => openLink("https://www.linkedin.com/in/alanguarino/")}
        sx={{ color: "#fff" }}
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        onClick={() => openLink("mailto:alaan.guarino@gmail.com")}
        sx={{ color: "#fff" }}
      >
        <EmailIcon />
      </IconButton>
      <Typography variant="body2" component="p" sx={{ marginTop: "10px" }}>
        © 2023 Alan Guarino
      </Typography>
    </Box>
  );
};

export default ContactInfo;
