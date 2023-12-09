import { Container, Typography, Grid, Box } from "@mui/material";
import { techStack } from "../utils/content";

const StackIcons = () => {
  return (
    <Container>
      <Box>
        <Typography
          variant="h2"
          sx={{
            m: { md: 15 },
            mt: { xs: 10, sm: 15 },
            mb: { xs: 5 },
            textAlign: "center",
          }}
        >
          Technology stack
        </Typography>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {techStack.map((tech, index) => (
            <Grid item key={index} xs={3} sm={2} md={1}>
              <Box sx={{ textAlign: "center", fontSize: { xs: 20, sm: 30 } }}>
                {tech.icon}
                <Typography variant="h6">{tech.name}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default StackIcons;
