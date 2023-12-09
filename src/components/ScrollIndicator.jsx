import { Typography, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const ScrollIndicator = () => {
  const handleScroll = () => {
    // Implementa la lógica para realizar el scroll
    // Puedes utilizar smooth scrolling para una transición suave
    // window.scrollTo({ top: someValue, behavior: 'smooth' });
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
