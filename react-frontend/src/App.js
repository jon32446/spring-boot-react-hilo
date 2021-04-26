import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "./";
import "./App.css";
import Footer from "./components/Footer";
import Game from "./components/Game";
import Header from "./components/Header";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Game />
      <Footer />
    </React.Fragment>
  );
}

export default App;
