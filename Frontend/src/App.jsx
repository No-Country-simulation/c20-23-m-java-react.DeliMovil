import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import { Home } from "./pages/Home.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Menu />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route></Route>
          <Route></Route>
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
