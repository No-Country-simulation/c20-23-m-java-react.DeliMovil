import { Container, Typography, Button, List, ListItem, ListItemText, Box, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link as MuiLink } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber'; 


function Checkout() {
  const [showDatosPersonales, setShowDatosPersonales] = useState(false);
  const [showEntrega, setShowEntrega] = useState(false);
  const [showPago, setShowPago] = useState(false);


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
    

    <Box className='section'>
      <Typography variant="h5" component="h2">
        Guardamos su correo electrónico de manera 100% segura para:
      </Typography>
 
    <List>
      <ListItem>
        <CheckCircleIcon sx={{marginRight: 0.5}} />
        <ListItemText primary=
        {<Typography variant='body1' sx={{marginRight:50}}>Identificar su perfil</Typography>}/>
      </ListItem>

      <ListItem>
        <CheckCircleIcon sx={{marginRight: 1}} />
        <ListItemText primary={<Typography variant='body1' sx={{marginRight:30}}>Notificar sobre los estados de su compra</Typography>}/>
      </ListItem>

      <ListItem>
        <CheckCircleIcon sx={{marginRight: 1}} />
        <ListItemText primary={<Typography variant='body1' sx={{marginRight:39}}>Guardar el historial de compras</Typography>}/>
      </ListItem>

      <ListItem>
        <CheckCircleIcon sx={{marginRight: 1}} />
        <ListItemText primary={<Typography variant='body1'sx={{marginRight:40.5}}>Facilitar el proceso de compra</Typography>}/>
      </ListItem>
    </List> 
    </Box>
   
   <Box sx={{display:'flex', justifyContent:'center', marginTop:'20px'}}>
     <Button variant="contained" 
     sx={{
      color:'white',
      backgroundColor:'#8968CD',
      fontSize:'0.87rem',
      padding:'6px 12px',
      margin:'0 auto',
      display:'block',
      textAlign:'center',
      '&:hover':{
        backgroundColor:'#6F4685'
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

    <Button variant="contained" 
     sx={{marginTop:'20px', marginBottom:'40px'}}
    >Enviar</Button>

    <Box className='resumen-compra' 
    sx={{
      marginBottom:'20px',
      padding:'20px',
      backgroundColor:'#f5f5f5',
      borderRadius:'8px',
      boxShadow:'0 2px 4px rgba(0, 0, 0, 0.1',
      textAlign:'center',
      }}>
      <Typography variant="h6" sx={{
        color:'black',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:'1.5rem',
        margin:'10px'}}>Resumen de la compra</Typography>

      <Typography variant='body1'>Combo de Hamburguesa con Papas Fritas</Typography>

    <Box sx={{ 
      display:'flex',             
      justifyContent:'center',
      alignItems:'center',   
      marginTop:'10px',
      marginBottom:'10px',
       }}>
    <ConfirmationNumberIcon sx={{ marginRight:0.5, backgroundColor:'black'}} />

    <Typography variant="body1" sx={{marginRight:'30%'}}>Ingresa tu código de   descuento <MuiLink href="#" sx={{ marginRight: '20px', color: 'inherit', color:'black' }}>click aquí</MuiLink></Typography>
    </Box> 
      
      <Typography variant="body1" sx={{marginTop: '10px'}}>Subtotal</Typography>
      <Typography variant="body1" sx={{ marginTop:'10px'}}>Total</Typography>
    

    <MuiLink href="/cart" sx={{ textAlign:'center',marginRight: '10px', color: 'inherit' }}>Volver al carrito</MuiLink>
  </Box>
  </Container>
  </>
  )
}

export default Checkout;
