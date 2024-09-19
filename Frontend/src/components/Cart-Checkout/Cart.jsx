import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardMedia, Typography, Button, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoDeliMovil from '../../assets/DeliMovil.webp';
import MediosDePago from '../../assets/mediosdepago.png'

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
    <Box sx={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      width:'100%',
      padding:'2rem'
      
    }}>
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
          left: '40%',
          width: 400,
          padding: '16px',
          backgroundColor: 'background.paper',
          borderRadius: 2,
          boxShadow: 5,
          transition:'all 0.3s ease-in-out',
          maxHeight: '80vh',
          overflowY: 'auto'
        }}>
          <Typography variant="h5" gutterBottom
          sx={{
            textAlign:'center',
            color:'white',
            fontWeight:'bold',
            fontSize:'1.5rem'
          }}>
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
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <Typography variant="h6"
                  sx ={{
                    fontWeight:'bold',
                    padding:'5px',
                    borderRadius:'10px',
                    backgroundColor:'#258d19'
                  }}
                  >Total: ${getTotal()}</Typography>
                </Box>

                <Box sx={{ mt: 2, textAlign: 'center' }}>
                  <Button variant="contained" color="primary" onClick={handleCheckout}>
                    ABONAR
                  </Button>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      )}
    <Box sx={{
      position:'absolute',
      top:16,
      left:16,
      width:50,
      borderRaduis:'50%',
      overflow:'hidden',
      backgroundColor:'background.paper',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      border:'1px solid',
      borderColor:'divider'
    }}>
      <img src={LogoDeliMovil} alt="logoDeliMovil" style={{
        width:'100%',
        height:'100%',
        objectFit:'cover'
      }}/>
    </Box>

    <Box sx={{
      display:'flex',
      width:'100%',
      maxWidth:400,
      height:'auto',
      marginTop:'80px',
      padding:'16px',
      overflow:'hidden',
      justifyContent:'center',
      
    }}>
      <img src={MediosDePago} alt="medios de pago"
      style={{
        maxWidth:'100%',
        height:'auto',
        objectFit:'contain'
      }} />
    </Box>
    </Box>
   
  );
 
};

export default Cart;




































































