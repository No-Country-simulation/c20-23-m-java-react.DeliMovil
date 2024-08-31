import * as React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import "./Styles/App.css";
import Foot from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      <Router>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Navbar />
          <Routes>
            <Route path="/" to element={<Home />} />
          </Routes>
          <Foot />
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
