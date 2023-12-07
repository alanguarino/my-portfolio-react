import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import { Box, Container, Typography } from "@mui/material";

function Footer() {
  return (
    <Box>
      <Container>
        <ContactForm />
      </Container>
      <ContactInfo />
    </Box>
  );
}

export default Footer;
