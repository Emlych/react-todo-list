import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import { useState } from "react";

function App() {
  //Switch between light or dark mode, pass this props in Main to enhance changes inside Main component
  const [light, setLight] = useState("light");
  const toggleLight = () => {
    setLight(!light);
  };
  return (
    <div className={light ? "app light" : "app dark"}>
      <Header light={light} toggleLight={toggleLight} />
      <Main light={light} />
      <Footer author="Emlych" techno="React" />
    </div>
  );
}

export default App;
