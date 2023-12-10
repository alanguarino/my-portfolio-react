import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import { Box, Container, Typography } from "@mui/material";

function Footer({ id }) {
  return (
    <Box id={id}>
      <Container>
        <ContactForm />
      </Container>
      <ContactInfo />
    </Box>
  );
}

export default Footer;
