import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Button, CardMedia, Grid } from '@mui/material';
import { useEffect } from 'react';
import { getProducts } from './ProductsAPI';
import { useNavigate, useParams } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const Restaurant = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [product, setProduct] = React.useState([]);
    const restaurantId = params.restaurantId;
    const [cartItems, setCartItems] = React.useState([]);
    const [state, setState] = React.useState({ right: false });



    useEffect(() => {
        getProducts().then((res) => {
            setProduct(res.data);
        });
    }, []);

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Typography>Mi Pedido</Typography>
            {cartItems.length === 0 ? (
                <Typography>El carrito está vacío</Typography>
            ) : (
                <List>
                    {cartItems.map((item) => (
                        <ListItem
                            key={item.id}
                        //alignItems="flex-start"
                        >
                            <ListItemText
                                primary={item.name}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"

                                            variant="body2"
                                            sx={{
                                                display: "inline",
                                            }}
                                        >
                                            {item.price}
                                        </Typography>
                                    </React.Fragment>
                                }
                            ></ListItemText>
                        </ListItem>

                    ))}
                </List>
            )}
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            {product.length > 0 ? (
                <Grid container >
                    {product.filter(
                        (e) => e.restaurant.id == restaurantId
                    ).map((e) => (
                        <Grid item xs={12} sm={6} md={3} key={e.id}>
                            <Card
                                sx={{
                                    margin: '20px',
                                    maxWidth: 360,
                                    borderRadius: '10px',
                                }}>
                                < CardMedia
                                    sx={{ height: 140, }}
                                    image={e.image_url}
                                />
                                <Divider></Divider>
                                <Box sx={{ p: 2, maxHeight: 110, minHeight: 110 }}>
                                    <Stack
                                        direction="row"
                                        sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                                    >
                                        <Typography gutterBottom variant="h6" component="div">
                                            {e.name}
                                        </Typography>
                                        <Typography gutterBottom variant="h6" component="div">
                                            ${e.price}
                                        </Typography>
                                    </Stack>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {e.description}
                                    </Typography>
                                </Box>
                                <Box sx={{ p: '10px', }}>
                                    {['right'].map((anchor) => (
                                        <React.Fragment key={anchor}>
                                            <Button
                                                variant='contained'
                                                onClick={toggleDrawer(anchor, true)}
                                                size="small"
                                                color="primary"
                                                sx={{
                                                    paddingTop: '3px',
                                                    paddingBottom: '3px',
                                                    fontSize: '15px',
                                                    borderRadius: '10px',
                                                    px: 4,
                                                    border: 2,
                                                    textTransform: "none",
                                                }}
                                            ><Typography variant="h6" onClick={addToCart}>Comprar</Typography> </Button>
                                            <Drawer
                                                anchor={anchor}
                                                open={state[anchor]}
                                                onClose={toggleDrawer(anchor, false)}
                                            >
                                                {list(anchor)}
                                            </Drawer>
                                        </React.Fragment>
                                    ))}
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <p>Cargando Productos...</p>
            )}
        </>
    );
}

export default Restaurant;