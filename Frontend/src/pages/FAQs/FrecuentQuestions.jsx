import * as React from 'react';
import { Collapse, Container, Divider, List, ListItemButton, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const PregFrec = [
    {
        pregunta: "¿Cómo creo una cuenta en DeliMovil?",
        respuesta: "Para crear una cuenta, debe dirigirse a la sección de 'Registro' y luego rellene los campos solicitados. Necesitarás una dirección de correo electrónico."
    },
    {
        pregunta: "¿Cómo realizo un pedido?",
        respuesta: "1. Busca el restaurante de tu preferencia.\n2. Selecciona los platos que deseas.\n3. Agrega los productos al carrito.\n4. Confirma tu dirección de entrega.\n5. Selecciona el método de pago.\n6. ¡Listo! Tu pedido está en camino."
    },
    {
        pregunta: "¿Cómo puedo modificar mi pedido?",
        respuesta: "Una vez realizado el pedido, puede ser difícil modificarlo. Te recomendamos comunicarte lo antes posible con nuestro servicio al cliente a través de la web."
    },
    {
        pregunta: "¿Qué métodos de pago aceptan?",
        respuesta: "Aceptamos diversas formas de pago, como tarjetas de crédito, débito, efectivo contra entrega (en algunos casos) y billeteras virtuales."
    },
    {
        pregunta: "¿Cuánto tiempo tarda en llegar mi pedido?",
        respuesta: "El tiempo de entrega puede variar dependiendo de varios factores, como la distancia, la demanda y, la disponibilidad del restaurante y del delivery. Puedes estimar el tiempo aproximado al realizar tu pedido."
    },
    {
        pregunta: "¿Qué hago si mi pedido llega tarde o incompleto?",
        respuesta: "Si tu pedido llega tarde o incompleto, por favor, comunícate con nuestro servicio al cliente a través de la web. Te brindaremos una solución lo antes posible."
    }
]

const FrecuentQuestions = () => {

    const [open, setOpen] = React.useState(new Array(PregFrec.length).fill(false));

    const handleClick = (index) => {
        const newOpen = [...open];
        newOpen[index] = !newOpen[index];
        setOpen(newOpen);
    }

    return (
        <Container sx={{ paddingTop: '150px', }}>
            {PregFrec.map((e, index) => (
                <List key={index}
                    sx={{ width: '100%', borderRadius: '10px' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    <ListItemButton key={index} onClick={() => handleClick(index)} >
                        <ListItemText primary={e.pregunta} />
                        {open[index] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open[index]} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary={e.respuesta} />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
            ))}
        </Container>
    );
}

export default FrecuentQuestions;