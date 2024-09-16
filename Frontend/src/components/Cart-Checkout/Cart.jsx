import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardMedia, Typography, Button, IconButton, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Cart = ({ onCheckout }) => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Papas fritas', price: 4.99, quantity: 1, imageUrl: 'https://i.pinimg.com/originals/27/b1/50/27b15067aff26c16bae998ced4e91be9.jpg' },
    { id: 2, name: 'Hamburguesa', price: 6.99, quantity: 1, imageUrl: 'https://i.pinimg.com/originals/13/1f/fe/131ffe17fbaca82da95dd14dff884e17.jpg' },
    { id: 3, name: 'Coca-cola', price: 2.99, quantity: 1, imageUrl: 'https://i.pinimg.com/originals/ea/7c/8c/ea7c8c8a6698ba4040bc546cb430e8a2.jpg' },
  ]);

  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();

  const handleQuantityChange = (id, change) => {
    setProducts(products.map(producto =>
      producto.id === id ? { ...producto, quantity: Math.max(1, producto.quantity + change) } : producto
    ));
  };

  const handleRemoveProduct = (id) => {
    setProducts(products.filter(producto => producto.id !== id));
  };

  const getTotal = () => {
    return products.reduce((total, producto) => total + producto.price * producto.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    navigate('/checkout');
    if (onCheckout) onCheckout();
  };

  return (
    <Box sx={{width:'100%', position: 'relative'}}>
      <IconButton
        onClick={() => setCartOpen(!cartOpen)}
        size='large'
        sx={{ position: 'absolute', top: 16, right: 0 }}
      >
        <ShoppingCartIcon />
      </IconButton>
      {cartOpen && (
        <Box sx={{
          position: 'absolute',
          top: 60,
          right: 0,
          width: 400,
          padding: '16px',
          backgroundColor: 'background.paper',
          borderRadius: 1,
          boxShadow: 3,
          maxHeight: '80vh',
          overflowY: 'auto'
        }}>
          <Typography variant="h5" gutterBottom>
            Mi pedido
          </Typography>
          {products.length === 0 ? (
            <Typography variant="body1">El carrito está vacío</Typography>
          ) : (
            <Box>
              {products.map((producto) => (
                <Box key={producto.id} sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: 2,
                  padding: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 1,
                }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 100, height: 100, marginRight: 2 }}
                    image={producto.imageUrl}
                    alt={producto.name}
                  />
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6">{producto.name}</Typography>
                    <Typography variant="body1">${producto.price.toFixed(2)}</Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
                      <Box onClick={() => handleQuantityChange(producto.id, -1)} size='small'
                      sx={{padding:'2px', minWidth:'24px', cursor:'pointer', userSelect:'none'}}>
                        <Typography variant='h6' component='span'>-</Typography>
                      </Box>

                      <Typography variant="body1"  sx={{
                      minWidth:'20px', 
                      textAlign:'center',
                      userSelect:'none'
                       }}>{producto.quantity}</Typography>

                      <Box onClick={() => handleQuantityChange(producto.id, 1)} size='small'
                        sx={{ padding:'2px 5px',  cursor:'pointer', userSelect:'none'}}>
                        <Typography variant='h6' component='span'>+</Typography>
                      </Box>

                      <IconButton onClick={() => handleRemoveProduct(producto.id)} size='small' 
                      sx={{ padding:'2px', marginLeft: 2 }}>
                        <DeleteIcon color="error" fontSize='small' />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
              ))}

              
              <Box sx={{ mt: 2, borderTop: '1px solid', borderColor: 'divider', paddingTop: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6">Total: ${getTotal()}</Typography>
                </Box>

                <Box sx={{ mt: 2, textAlign: 'center' }}>
                  <Button variant="contained" color="primary" onClick={handleCheckout}>
                    Checkout
                  </Button>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Cart;




































































