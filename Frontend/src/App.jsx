import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import "./Styles/App.css";
import Foot from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div
          style={{ position: "absolute", top: 0, right: 0, padding: "30px" }}
        >
          <IconButton onClick={toggleDarkMode} color="inherit">
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Foot />
      </ThemeProvider>
    </Router>
  );
}

export default App;
