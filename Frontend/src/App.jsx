import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import "./Styles/App.css";
import { Menu } from "./components/Menu.jsx";
import Foot from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Foot />
      </Router>
    </>
  );
}

export default App;
