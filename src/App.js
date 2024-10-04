import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Sections/Header/Header";
import MyWork from "./Sections/MyWork/MyWork";
import Prices from "./Sections/Prices/Prices";
import Feedbacks from "./Sections/Feedbacks/Feedbacks";
import Contact from "./Sections/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import AboutMe from "./Sections/AboutMe/AboutMe";
import { useEffect } from "react";
import Lenis from "lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup function to avoid memory leaks
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Prices />
      <MyWork />
      <AboutMe />
      <Feedbacks />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
