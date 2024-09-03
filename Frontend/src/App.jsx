import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
//import "./App.css";
import { Menu } from "./components/Menu.jsx";
import ListRestaurants from "./pages/Restaurant/ListRestaurants.jsx";

function App() {
  return (
    <>
      <Menu />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Menu />} />
          <Route
            path="/listrestaurants"
            element={<ListRestaurants></ListRestaurants>}
          ></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
