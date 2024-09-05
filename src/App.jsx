import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Cart  from './components/Cart-Checkout/Cart';
import CartIcon from "./components/Cart-Checkout/CartIcon";
import Checkout from './components/Cart-Checkout/Checkout';

function App() {
  return (
    <Router>
      <CartIcon />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        
      </Routes>
    </Router>
  );
}

export default App;
