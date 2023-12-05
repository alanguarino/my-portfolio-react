// import './App.css'
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
//Fuente: Raleway

function App() {
  return (
    <>
      {/* <CssBaseline /> */}
      {/* Navbar  */}
      <Navbar />
      <Homepage />
      {/* Projects */}
      <Projects />
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
