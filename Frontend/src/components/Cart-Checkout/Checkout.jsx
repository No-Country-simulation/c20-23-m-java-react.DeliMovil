import { Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


function Checkout() {
  const [showDatosPersonales, setShowDatosPersonales] = useState(false);
  const [showEntrega, setShowEntrega] = useState(false);
  const [showPago, setShowPago] = useState(false);


  return (
    <>
    <Container>

    <div className='header-checkout'>
      <Typography id="outlined-basic" label="Outlined" variant="outlined">Hasta 6 cuotas sin interés</Typography>
    </div>

    <div className='email'>
    <Typography variant="h1" component="h2">
       1-EMAIL
     </Typography>

      <input type="text" />

    <section className='section'>
      <Typography variant="h2" component="h2">
        Guardamos su correo electrónico de manera 100% segura para:
      </Typography>
 
      
      <Typography id="outlined-basic" label="Outlined" variant="outlined">✔️Identificar su perfil</Typography>
      <Typography id="outlined-basic" label="Outlined" variant="outlined">✔️Notificar sobre los estados de su compra</Typography>
      <Typography id="outlined-basic" label="Outlined" variant="outlined">✔️Guardar el historial de compras</Typography>
      <Typography id="outlined-basic" label="Outlined" variant="outlined">✔️Facilitar el proceso de compra</Typography>
    </section>

    <button>Continuar</button>
    </div>

    <div className='datos-personales'>
      <h2 onClick={() => setShowDatosPersonales(!showDatosPersonales)}>2-DATOS PERSONALES {showDatosPersonales ? '⬇️' : '➡️'}</h2>
      {showDatosPersonales && (
    <div>
      <input type="text" placeholder='Nombre'/>
      <input type="text" placeholder='Apellido' />
      <input type="text" placeholder='Dirección' />
      <input type="text" placeholder='Celular' />
    </div>
    )}
    </div>

    <div className='entrega'>
      <h2 onClick={() => setShowEntrega(!showEntrega)}>3-ENTREGA {showEntrega ? '⬇️' : '➡️'}</h2>
      {showEntrega && (
        <div>
          <input type="text" placeholder='Dirección de entrega'/>
          <input type="Text" placeholder='Código postal' />
        </div>
      )}
    </div>

    <div className='pago'>
      <h2 onClick={() => setShowPago(!showPago)}>4-PAGO {showPago ? '⬇️' : '➡️'}</h2>
    </div>
    {showPago && (
      <div>
        <input type="text" placeholder='Número de tarjeta' />
        <input type="text" placeholder='Fecha de expiración'/>
        <input type="text" placeholder='Código de seguridad'/>
      </div>
    )}

    <Button variant="contained" 
     sx={{backgroundColor:'green'}}
    >Enviar</Button>

    <div className='resumen-compra'>
      <Typography id="outlined-basic" label="Outlined" variant="outlined">Resumen de la compra</Typography>
      <title>Combo de Hamburguesa con Papas Fritas</title>
      <Typography id="outlined-basic" label="Outlined" variant="outlined">Ingresa tu código de descuento<Link>click aquí</Link></Typography>
      <Typography id="outlined-basic" label="Outlined" variant="outlined">Subtotal</Typography>
      <Typography id="outlined-basic" label="Outlined" variant="outlined">Total</Typography>
      
    </div>
    <Link>Volver al carrito</Link>
  </Container>
  </>
  )
}

export default Checkout;
