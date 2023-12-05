import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";

//const Project = ({ title, description, img, stack })

const Project = ({ title, description, img, stack }) => {
  return (
    <Card sx={{ p: 2, borderRadius: 2, mb: 15 }}>
      <div style={{ display: "flex" }}>
        {/* Mitad de la imagen */}
        <CardMedia
          component="img"
          alt="Imagen"
          height="100%" // La imagen ocupa todo el alto de la Card
          style={{ width: "50%", objectFit: "cover" }} // La imagen ocupa la mitad del ancho de la Card
          image={img}
        />
        {/* Mitad del texto */}
        <CardContent style={{ flex: 1 }}>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          {/* Div con iconos en la esquina inferior derecha */}
          <CardActions
            disableSpacing
            sx={{
              justifyContent: "flex-end",
              alignItems: "flex-end",
              height: "100%",
            }}
          >
            <div>
              {/* Agrega aquí tus iconos utilizando IconButton */}
              {stack.map((icon, index) => (
                <IconButton key={index}>
                  <Icon>{icon}</Icon>
                </IconButton>
              ))}
              {/* Agrega más iconos según sea necesario */}
            </div>
          </CardActions>
        </CardContent>
      </div>
    </Card>
  );
};

export default Project;
