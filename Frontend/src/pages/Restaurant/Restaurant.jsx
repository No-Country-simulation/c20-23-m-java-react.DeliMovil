import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { CardMedia, Container, Grid } from '@mui/material';
import { useEffect } from 'react';
import { getProducts, getProductsByCategory } from './ProductsAPI';
import { useParams } from 'react-router-dom';

const Restaurant = () => {

    const params = useParams();
    const [product, setProduct] = React.useState([]);
    // const [productByRestaurant, setProductByRestaurant] = React.useState([]);
    const restaurantId = params.restaurantId;
    //  console.log(restaurantId)
    useEffect(() => {
        getProducts().then((res) => {
            setProduct(res.data);
        });
    }, []);
    /* useEffect(() => {
         getProducts().then((res) => {
             setProduct(res.data);
             const filteredProducts = product.filter(
                 (e) => e.restaurant.id == restaurantId
             );
             setProductByRestaurant(filteredProducts)
             console.log(filteredProducts)
             console.log(product.filter(
                 (e) => e.restaurant.id == restaurantId
             ))
         });
     }, []);  */

    return (
        <>
            {product.length > 0 ? (
                <Grid container //spacing={2} item xs={3}
                >
                    {product.filter(
                        (e) => e.restaurant.id == restaurantId
                    ).map((e) => (
                        <Grid item xs={12} sm={6} md={3} key={e.id}>
                            <Card //variant="outlined" 

                                sx={{
                                    margin: '20px',
                                    maxWidth: 360,
                                }}>
                                < CardMedia
                                    sx={{ height: 140, }}
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    title="green iguana"
                                />
                                <Divider></Divider>
                                <Box sx={{ p: 2, maxHeight: 110, minHeight: 110 }}>
                                    <Stack
                                        direction="row"
                                        sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                                    >
                                        <Typography gutterBottom variant="h5" component="div">
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