// import './App.css'
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import StackIcons from "./components/StackIcons";
//Fuente: Raleway

function App() {
  return (
    <>
      {/* <CssBaseline /> */}
      {/* Navbar  */}

      <Navbar />
      <Homepage />
      <StackIcons />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
