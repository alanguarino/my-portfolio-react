import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { techStack } from "../utils/content";

const Project = ({ title, description, img, stack, repoLink, deployLink }) => {
  // Filtra las tecnologías según los nombres en `stack`
  const usedTech = techStack.filter((tech) => stack.includes(tech.name));

  return (
    <Card
      sx={{
        p: 2,
        borderRadius: 2,
        mb: 15,
        bgcolor: "#565656", // Color gris claro de fondo
        backdropFilter: "blur(10px)",
        height: "auto",
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Mitad de la imagen */}
      <CardMedia
        component="img"
        alt="Imagen"
        height="100%"
        style={{ width: "100%", objectFit: "cover" }}
        image={img}
      />

      {/* Mitad del texto */}
      <CardContent
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "16px",
          boxSizing: "border-box",
        }}
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

        {/* Stack de tecnologías sin los chips */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "right",
            marginBottom: "10px", // Espaciado adicional entre el stack y los botones
          }}
        >
          {usedTech.map((tech) => (
            <div key={tech.name}>{tech.icon}</div>
          ))}
        </div>

        {/* Botones para el repositorio y el enlace de implementación */}
        <div style={{ display: "flex", justifyContent: "left" }}>
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
      </CardContent>
    </Card>
  );
};

export default Project;
