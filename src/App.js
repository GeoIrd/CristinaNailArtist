import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Sections/Header/Header";
import MyWork from "./Sections/MyWork/MyWork";
import Prices from "./Sections/Prices/Prices";
import Feedbacks from "./Sections/Feedbacks/Feedbacks";
import Contact from "./Sections/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <MyWork></MyWork>
      <Prices></Prices>
      <Feedbacks></Feedbacks>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
