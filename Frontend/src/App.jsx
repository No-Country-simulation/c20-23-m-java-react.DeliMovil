import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import "./Styles/App.css";
import Foot from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";
import ListRestaurants from "./pages/Restaurant/ListRestaurants.jsx";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import Checkout from "./components/Cart-Checkout/Checkout";
import Cart from "./components/Cart-Checkout/Cart.jsx";
import FrecuentQuestions from "./pages/FAQs/FrecuentQuestions.jsx";
import { NotFound } from "./components/NotFound.jsx";

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
            {darkMode ? <WbSunnyRoundedIcon /> : <ModeNightRoundedIcon />}
          </IconButton>
        </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listrestaurants" element={<ListRestaurants />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/frecuentquestions" element={<FrecuentQuestions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Foot />
      </ThemeProvider>
    </Router>
  );
}

export default App;
