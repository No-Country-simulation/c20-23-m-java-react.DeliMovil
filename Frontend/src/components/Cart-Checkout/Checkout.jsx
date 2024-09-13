import { Container, Typography, Button, List, ListItem, Box, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { Link as MuiLink } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber'; 
import SendIcon from '@mui/icons-material/Send';
import { useTheme } from '@mui/material/styles';



function Checkout() {
  const [showDatosPersonales, setShowDatosPersonales] = useState(false);
  const [showEntrega, setShowEntrega] = useState(false);
  const [showPago, setShowPago] = useState(false);
  const [showCouponInput, setShowCouponInput] = useState(false)
  

  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  

  return (
    <>
    <Container sx={{padding:'20px'}}>

    <Box className='header-checkout'>
      <Typography  
       variant="body1" 
       align='center'>
        Hasta 6 cuotas sin interés</Typography>
    </Box>

    <Box className='email'sx={{marginBottom:'20px'}}>
    <Typography 
      variant="h5" 
      component="h2">
       1-EMAIL
     </Typography>
     <TextField id="outlined-basic" label="Email" variant="outlined"
     fullWidth sx={{marginBttom:'20px', fontSize:'18px'}} />
    

    <Box 
     className='section' 
     sx={{
       backgroundColor: isDarkMode ? '#424242' : '#f5f5f5',
       padding:3, 
       borderRadius:2, 
       maxWidth:600, 
       margin:'0 auto' }}>
      <Typography variant="h5" component="h2" 
      sx={{
        marginBottom:2,
        color: isDarkMode ? '#fff' : '#000',}}>
        Guardamos su correo electrónico de manera 100% segura para:
      </Typography>
 
    <List>
      <ListItem sx={{ display:'flex', alignItems:'center'}}>
        <CheckCircleIcon 
        sx={{
          marginRight: 1,
          color: isDarkMode ? '#76ff03' : '#4caf50'}} />
        <Typography variant='body1'
        sx={{color: isDarkMode ? '#fff' : '#000'}}>Identificar su perfil</Typography>
      </ListItem>

      <ListItem sx={{display:'flex', alignItems:'center'}}>
        <CheckCircleIcon 
        sx={{
          marginRight: 1,
          color: isDarkMode ? '#76ff03' : '#4caf50',}} />
        <Typography variant='body1'
         sx={{color: isDarkMode ? '#fff' : '#000'}}>Notificar sobre los estados de su compra</Typography>
      </ListItem>

      <ListItem sx={{display:'flex', alignItems:'center'}}>
        <CheckCircleIcon 
        sx={{
          marginRight: 1,
          color: isDarkMode ? '#76ff03' : '#4caf50',}} />
        <Typography variant='body1'
         sx={{color: isDarkMode ? '#fff' : '#000'}}
        >Guardar el historial de compras</Typography>
      </ListItem>

      <ListItem sx={{display:'flex', alignItems:'center'}}>
        <CheckCircleIcon sx={{marginRight: 1,color: isDarkMode ? '#76ff03' : '#4caf50',}} />
        <Typography variant='body1'
         sx={{color: isDarkMode ? '#fff' : '#000'}}>Facilitar el proceso de compra</Typography>
      </ListItem>
    </List> 
  
    <Button 
       variant="contained" 
     sx={{
      marginTop:3,
      borderRadius:'20px',
      fontSize:'0.8rem',
      padding:'6px 10px',
      minWidth:'50px',
      display:'block',
      marginLeft:'auto',
      marginRight:'auto',
      backgroundColor:'#0cb7f2',
      '&:hover':{
        backgroundColor:'#7cdaf9'
      }
      }}
    >Continuar</Button>
    </Box>
 
    </Box>

    <Box className='datos-personales' sx={{marginBottom:'20px'}}>
      <Typography 
        variant='h5'  
        component='div' 
        onClick={() => setShowDatosPersonales(!showDatosPersonales)}
        sx={{display:'flex', alignItems:'center', cursor:'pointer'}}>
          2-DATOS PERSONALES {showDatosPersonales ? <ExpandLessIcon sx={{marginLeft:1}}/> : <ExpandMoreIcon sx={{marginLeft:1}} /> }
          </Typography>
      {showDatosPersonales && (
    <Box sx={{ display:'flex', flexDirection: 'column', gap:'10px', marginTop:'10px'}}>
      <TextField label="Nombre" variant="outlined" fullWidth />
      <TextField label="Apellido" variant="outlined" fullWidth />
      <TextField label="Dirección" variant="outlined" fullWidth />
      <TextField label="Celular" variant="outlined" fullWidth/>
    </Box>
    )}
    </Box>

    <Box className='entrega' sx={{marginBottom:'20px'}}>
      <Typography
      variant='h5'
      component='div' 
      onClick={() => setShowEntrega(!showEntrega)}
      sx={{display:'flex', alignItems:'center', cursor:'pointer'}}
      >3-ENTREGA {showEntrega ? <ExpandLessIcon sx={{marginLeft:1}}/>  : <ExpandMoreIcon sx={{marginLeft:1}} />}</Typography>
      {showEntrega && (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
          <TextField label="Dirección de entrega" variant="outlined" fullWidth  />
          <TextField label="Código postal" variant="outlined" fullWidth />
        </Box>
      )}
    </Box>

    <Box className='pago' sx={{marginBottom:'20px'}}>
      <Typography 
       variant='h5'
       component='div'
      onClick={() => setShowPago(!showPago)}
      sx={{display:'flex', alignItems:'center', cursor:'pointer'}}>4-PAGO {showPago ? <ExpandLessIcon sx={{marginLeft:1}}/> : <ExpandMoreIcon sx={{marginLeft:1}} />}</Typography>
    </Box>
    {showPago && (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
        <TextField label="Número de tarjeta" variant="outlined" fullWidth/>
        <TextField label="Fecha de expiración" variant="outlined" />
        <TextField label="Código de seguridad" variant="outlined" fullWidth/>
      </Box>
    )}

    <Button variant="contained" endIcon={<SendIcon /> }
     sx={{
      marginTop:'20px',
      marginBottom:'40px',
      backgroundColor:'#0cb7f2',
      '&:hover':{
        backgroundColor:'#7cdaf9'
      }
    }}
    >Enviar</Button>

    <Box className='resumen-compra' 
    sx={{
      marginBottom:'20px',
      padding:'20px',
      backgroundColor: isDarkMode ? '#424242' : '#f5f5f5',
      borderRadius:'8px',
      boxShadow:'0 2px 4px rgba(0, 0, 0, 0.1)',
      textAlign:'center',
      maxWidth:'600px',
      margin:'0 auto'
      }}>
      <Typography variant="h6" 
      sx={{
        color:isDarkMode ? '#fff' : '#000',
        fontWeight:'bold',
        fontSize:'1.5rem',
        marginBottom:'10px'}}>Resumen de la compra</Typography>

      <Typography variant="body1" sx={{ marginBottom: '10px' }}>
        
      </Typography>
      
      <Typography variant="body1">
        
      </Typography>

      <Typography variant='body1'
      sx={{
        color: isDarkMode ? '#fff' : '#000',}}>Combo de Hamburguesa con Papas Fritas</Typography>

    <Box sx={{ 
      display:'flex',             
      justifyContent:'center',
      alignItems:'center',   
      marginTop:'10px',
      marginBottom:'10px',
       }}>
    <ConfirmationNumberIcon 
     sx={{ marginRight:0.5,
      color:isDarkMode ? '#fff' : '#000' 
      }} />

    <Typography variant="body1" 
     sx={{
      color: isDarkMode ? '#fff' : '#000'
     }}>Ingresa tu código de   descuento 
     <MuiLink 
      component='button'
      onClick={() => setShowCouponInput(!showCouponInput)}
      sx={{ color: isDarkMode ? '#76ff03' : '#000', marginLeft:'5px', cursor:'pointer' }}>{showCouponInput ? 'ocultar' : 'click aquí'}</MuiLink></Typography>
    </Box> 

    {showCouponInput && (
      <Box sx={{
        marginTop:'10px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <TextField 
        variant='outlined'
        label="Código de cupón"
        sx={{ marginRight:'10px'}}
        />
        <Button
         variant='contained'
         endIcon={<SendIcon />}
         sx={{ backgroundColor: '#0cb7f2', '&:hover' : { backgroundColor: '#7cdaf9'}}}>Aplicar</Button>
      </Box>
    )}
      
      <Typography variant="body1" 
      sx={{marginTop: '10px',
          color: isDarkMode ? '#fff' : '#000'
      }}>Subtotal</Typography>
      <Typography variant="body1" sx={{ marginTop:'10px',
        color: isDarkMode ? '#fff' : '#000'
      }}>Total</Typography>
    

    <MuiLink href="/cart"
     sx={{ 
      textAlign:'center',
      marginRight: '10px',
      color: isDarkMode ? '#76ff03' : '#000' }}>Volver al carrito</MuiLink>
  </Box>
  </Container>
  </>
  )

}

export default Checkout;
