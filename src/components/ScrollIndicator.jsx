import { Typography, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-scroll";

const ScrollIndicator = () => {
  const handleScroll = () => {
    // Utiliza la función `scroll` de `react-scroll` para desplazarte
    // hacia el elemento con el ID "Projects".
    // Link.scrollMore(100);
  };

  return (
    <div>
      <IconButton onClick={handleScroll}>
        <KeyboardArrowDownIcon />
      </IconButton>
    </div>
  );
};

export default ScrollIndicator;
