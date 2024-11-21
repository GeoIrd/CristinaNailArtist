import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Sections/Header/Header";
import MyWork from "./Sections/MyWork/MyWork";
import Prices from "./Sections/Prices/Prices";
import Feedbacks from "./Sections/Feedbacks/Feedbacks";
import Contact from "./Sections/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import AboutMe from "./Sections/AboutMe/AboutMe";

import "./App.css";
import Banner from "./Sections/Banner/Banner";

function App() {
  useEffect(() => {
    // if (window.location.protocol === "http:") {
    //   window.location.href = `https://${window.location.hostname}${window.location.pathname}`;
    // }

    // Initialize Lenis
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
      {/* <Banner></Banner> */}

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
