import "./App.css";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Navi from "./components/Navi.jsx";
import Seo from "./components/Seo.jsx";
import Works from "./components/Works.jsx";

function App() {
  return (
    <>
      <Seo
        title="arifkayacan"
        description="Arif M. Kayacan | The best videographer in your town"
        type="webapp"
        name="Arif M. Kayacan"
      />
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
