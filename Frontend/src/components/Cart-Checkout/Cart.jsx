import React, { useState } from 'react';
import './cart.css';
import { useNavigate } from 'react-router-dom';


 const Cart = ({ onCheckout }) => {
  const [products, setProducts] = useState([
    {id:1, name:'Papas fritas', price: 4.99 , quantity: 1, imageUrl:'https://i.pinimg.com/originals/27/b1/50/27b15067aff26c16bae998ced4e91be9.jpg'},
    {id:2, name:'Hamburguesa', price: 6.99, quantity: 1,imageUrl:'https://i.pinimg.com/originals/13/1f/fe/131ffe17fbaca82da95dd14dff884e17.jpg'},
    {id:3, name:'Coca-cola', price: 2.99, quantity: 1, imageUrl:'https://i.pinimg.com/originals/ea/7c/8c/ea7c8c8a6698ba4040bc546cb430e8a2.jpg'},
  ]);

  const navigate = useNavigate();
  
  const handleQuantityChange = (id, change) => {
    setProducts(products.map(producto => 
      producto.id === id ? { ...producto, quantity: Math.max(1, producto.quantity + change) } : producto
    ))
  };

  const handleRemoveProduct = (id) => {
    setProducts(products.filter(producto => producto.id !== id))
  };

  const getTotal = () => {
    return products.reduce((total, producto) => total + producto.price * producto.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    navigate('/checkout');
    if(onCheckout) onCheckout()
  }
  

  return (
    <div className='container-cart'>
      <div className='cart-dropdown'>
      <h2>Mi pedido</h2>
      {products.length === 0 ? (
        <p>El carrito está vacio</p>
      ) : (
        <ul>
         {products.map(producto => (
          <li key={producto.id}>
            <img src={producto.imageUrl} alt={producto.name} className='image-container'/>
            <span>{producto.name}</span>
            <span>${producto.price.toFixed(2)}</span>

            <span>
              <div className='button-container'>
              <button onClick={() => handleQuantityChange(producto.id, -1)} className='button-quantity'>-</button>
              {producto.quantity}
              <button onClick={() => handleQuantityChange(producto.id, 1) } className='button-quantity'>+</button>
              <button onClick={() => handleRemoveProduct(producto.id)} className='button-quantity'><i className="fas fa-trash-alt" style={{ color: 'red' }}></i></button>
              </div>
            </span>
          </li>
      ))}
        </ul>
      )}

      <div className='price-total'>
        <h3>Total: ${getTotal()}</h3>
      </div>
      
      <div className='button-checkout'>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
      </div>
    </div>
  )
};


export default Cart;