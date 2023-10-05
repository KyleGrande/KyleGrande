import "./App.css";
import Expereince from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
// import Nav from "./components/Nav";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className="app">
        {/* <Nav /> */}
        <Hero />
        <Projects />
        <Expereince />
        <Footer />
      </div>
    </>
  );
}

export default App;
