import React, { useState }from 'react';
import { useLocation } from 'react-router-dom';
import Cart from './Cart';
import './cart.css'



const CartIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setIsOpen(!isOpen);
    }
  const handleCheckout = () => {
    setIsOpen(false);
  }

  if (location.pathname === '/checkout') {
    return null;
  }

  return (
    <div className='cart-icon'>
      <i className="fas fa-shopping-cart" onClick={handleClick}></i>
      {isOpen && <Cart onCheckout={handleCheckout} />}
    </div>
  )
};

export default CartIcon;
