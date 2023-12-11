import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import theme from "../utils/theme";
import { useMediaQuery } from "@mui/material";
import useScrollPosition from "../hooks/useScrollPosition";
import { useTheme } from "@emotion/react";
import { Link } from "react-scroll";

const pages = ["Home", "Projects", "Contact"];

function Navbar() {
  const scrollPosition = useScrollPosition();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "transparent",
        backdropFilter: scrollPosition > 10 && "blur(10px)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: {
                xs: "space-between",
                md: "center",
              },
              width: "100%",
            }}
          >
            {isMobile && (
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            )}

            {/* // Cambiar por la imagen */}
            <img
              src={"./src/assets/images/Alan-Guarino-fullstack-logo.png"}
              alt="profile-photo"
              style={{ height: "50px", width: "75px" }}
            />

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>

            {!isMobile && (
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "flex-end",
                  mr: 7,
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    <Link
                      className="{page}"
                      to={page}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-100}
                    >
                      {page}
                    </Link>
                  </Button>
                ))}
              </Box>
            )}
          </Box>
          {/*Add NightMode Toggler here */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
