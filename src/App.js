import React from "react";
import GlobalStyle from "./theme/GlobalStyle";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home/HomePage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Home />
    </>
  );
}

export default App;
