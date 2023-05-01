import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Navi from "./components/Navi.jsx";
import Works from "./components/Works";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Navi />

      <Navbar />

      <div className="w3-padding-large w3-black" id="main">
        <Header />

        <About />
        <br />

        <Works />
        <br />

        <Contact style={{ paddingTop: "50px" }} />
      </div>
    </>
  );
}

export default App;
