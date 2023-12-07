import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faNodeJs,
  faGithub,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { Container, Typography, Box } from "@mui/material";
import BulmaIcon from "./icons/BulmaIcon";
import CSS3Icon from "./icons/CSS3Icon";
import ExpressIcon from "./icons/ExpressIcon";
import ReactJSIcon from "./icons/ReactJSIcon";
import JavaScriptIcon from "./icons/JavaScriptIcon";
import MongoDBIcon from "./icons/MongoDBIcon";
import NodeJSIcon from "./icons/NodeJSIcon";
// import {
//   ExpressIcon,
//   CSS3Icon,
//   BulmaIcon,
//   // HTML5Icon,
//   // TailwindCSSIcon,
//   NodeJSIcon,
//   JavaScriptIcon,
//   ReactJSIcon,
//   // KotlinIcon,
//   MongoDBIcon,
// } from "./icons";

const StackIcons = () => {
  const techStack = [
    { name: "React", icon: <ReactJSIcon width="50" height="50" /> },
    { name: "JavaScript", icon: <JavaScriptIcon width="50" height="50" /> },
    { name: "Node.js", icon: <NodeJSIcon width="50" height="50" /> },
    { name: "Material-UI", icon: <FontAwesomeIcon icon={faReact} /> },
    { name: "MongoDB", icon: <MongoDBIcon width="50" height="50" /> },
    { name: "Express.js", icon: <ExpressIcon width="50" height="50" /> },
    { name: "GitHub", icon: <FontAwesomeIcon icon={faGithub} /> },
    { name: "BulmaCSS", icon: <BulmaIcon width="50" height="50" /> },
    { name: "Python", icon: <FontAwesomeIcon icon={faPython} /> },
    { name: "C", icon: <FontAwesomeIcon icon={faJs} /> },
  ];

  return (
    <Container>
      <Box>
        <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
          Technology stack
          <BulmaIcon width="50" height="50" />
          <CSS3Icon width="50" height="50" />
        </Typography>
        <div
          style={{
            fontSize: 70,
            display: "flex",
            gap: "10px",
            border: "1px solid #ccc",
            borderRadius: "25px",
            padding: "10px",
            backgroundColor: "grey",
            height: 400,
          }}
        >
          {techStack.map((tech, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              {tech.icon}
            </div>
          ))}
        </div>
      </Box>
    </Container>
  );
};

export default StackIcons;
