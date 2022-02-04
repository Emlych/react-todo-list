import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer author="Emlych" techno="React" />
    </div>
  );
}

export default App;
