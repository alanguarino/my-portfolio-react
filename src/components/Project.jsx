import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { techStack } from "../utils/content";

const Project = ({ title, description, img, stack, repoLink, deployLink }) => {
  // Filtra las tecnologías según los nombres en el techStack
  const usedTech = techStack.filter((tech) => stack.includes(tech.name));

  return (
    <Grid
      container
      spacing={2}
      sx={{
        p: 2,
        borderRadius: 2,
        mb: 15,
        bgcolor: "#565656", // Color gris claro de fondo
        backdropFilter: "blur(10px)",
        boxShadow: 3, //para version light
        mt: 5, // Adjust the margin-top for larger screens
      }}
    >
      {/* Mitad de la imagen */}
      <Grid item xs={12} md={6}>
        <img
          src={img}
          alt="Imagen"
          style={{
            width: "100%",
            objectFit: "cover",
            height: "100%",
            border: "solid 3px",
          }}
        />
      </Grid>

      {/* Mitad del texto */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Typography
          variant="h4"
          component="div"
          sx={{ mb: 3, fontWeight: 600 }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 2, flex: 1 }}
        >
          {description}
        </Typography>

        {/* Technology stack */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "flex-end",
            marginBottom: "10px",
            // Espaciado adicional entre el stack y los botones
          }}
        >
          {usedTech.map((tech) => (
            <div key={tech.name}>{tech.icon}</div>
          ))}
        </div>

        {/* Deploy and repository buttons */}
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <Button
            sx={{ mr: 2 }}
            variant="contained"
            color="primary"
            href={repoLink}
            target="_blank"
          >
            Repository
          </Button>
          <Button
            variant="contained"
            color="secondary"
            href={deployLink}
            target="_blank"
          >
            LIVE
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default Project;
