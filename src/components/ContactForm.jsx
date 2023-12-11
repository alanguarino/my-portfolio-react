import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import emailjs from "emailjs-com";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateMessage = (e) => {
    setMessage(e.target.value);
  };

  //Service EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS configuration
    const serviceId = "service_z8e09wj";
    const templateId = "template_9ka6xdl";
    const userId = "Ge3nX65lk7Dtt2p1O";

    emailjs
      .send(
        serviceId,
        templateId,
        {
          to_email: "alaan.guarino@gmail.com",
          from_email: email,
          message: message,
        },
        userId
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  //return Component

  return (
    <div>
      <Card sx={{ p: 5, bgcolor: "transparent", backdropFilter: "blur(20px)" }}>
        <Typography variant="h3" sx={{ mb: 3 }}>
          Contact Me
        </Typography>
        <Box
          sx={{
            display: { xs: "block", md: "flex" },

            // flexDirection: "row",

            //   border: "1px solid red",
            //   p: 6,
            //   width: 300,
            //   height: 300,
            margin: "0 auto",
          }}
        >
          {/* <h1>Name is: {firstName}</h1> */}
          <TextField
            sx={{ m: 1, width: { xs: "100%", md: "50%" } }}
            id="outlined-basic"
            placeholder="First Name"
            label="First Name"
            variant="outlined"
            value={firstName}
            onChange={updateFirstName}
          />
          {/* <h1>LastName is: {lastName}</h1> */}
          <TextField
            sx={{ m: 1, width: { xs: "100%", md: "50%" } }}
            id="outlined-basic"
            placeholder="Last Name"
            label="Last Name"
            variant="outlined"
            value={lastName}
            onChange={updateLastName}
          />
        </Box>
        <Box>
          <TextField
            sx={{ m: 1, flexDirection: "column" }}
            fullWidth
            id="outlined-basic"
            placeholder="contact@example.com"
            label="Your Email"
            variant="outlined"
            value={email}
            onChange={updateEmail}
          />

          <TextField
            sx={{ m: 1, flexDirection: "column" }}
            fullWidth
            id="outlined-basic"
            placeholder="Message"
            label="Message"
            variant="outlined"
            value={message}
            onChange={updateMessage}
          />
          <Button
            type="submit"
            sx={{ m: 1 }}
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Send
          </Button>
        </Box>
      </Card>
    </div>
  );
};

export default Contact;
