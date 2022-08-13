import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import InputShortener from "./Components/InputShortener";
import LinkResult from "./Components/LinkResult";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";

// Theme color #13B46E
function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <Navbar />
      <Header />
      <div className="container">
        <InputShortener setInputValue={setInputValue} />

        <LinkResult inputValue={inputValue} />
      </div>
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
