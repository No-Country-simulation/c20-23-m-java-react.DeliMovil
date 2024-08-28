import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import "./App.css";
import { Menu } from "./components/Menu.jsx";

function App() {
  return (
    <>
      <Menu />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Menu />} />
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
