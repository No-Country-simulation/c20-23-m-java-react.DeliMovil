import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Button, CardMedia, Grid } from '@mui/material';
import { useEffect } from 'react';
import { getProducts } from './ProductsAPI';
import { useParams } from 'react-router-dom';

const Restaurant = () => {

    const params = useParams();
    const [product, setProduct] = React.useState([]);
    const restaurantId = params.restaurantId;

    useEffect(() => {
        getProducts().then((res) => {
            setProduct(res.data);
        });
    }, []);

    return (
        <>
            {product.length > 0 ? (
                <Grid container >
                    {product.filter(
                        (e) => e.restaurant.id == restaurantId
                    ).map((e) => (
                        <Grid item xs={12} sm={6} md={3} key={e.id}>
                            <Card //variant="outlined" 
                                sx={{
                                    margin: '20px',
                                    maxWidth: 360,
                                    borderRadius: '10px',
                                }}>
                                < CardMedia
                                    sx={{ height: 140, }}
                                // image="/static/images/cards/contemplative-reptile.jpg"
                                // title="green iguana"
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
                                    <Button
                                        variant='contained'
                                        //  onClick={() => navigate("/cart")}
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
                                        }}><Typography variant="h6">Comprar</Typography>
                                    </Button>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <p>loading products...</p>
            )}
        </>
    );
}

export default Restaurant;