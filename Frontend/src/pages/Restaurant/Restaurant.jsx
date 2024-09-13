import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { CardMedia, Container, Grid } from '@mui/material';
import { useEffect } from 'react';
import { getProducts } from './ProductsAPI';

const Restaurant = () => {

    const [product, setProduct] = React.useState([]);

    useEffect(() => {
        getProducts().then((res) => {
            setProduct(res.data);
        });
    }, []);

    return (
        <Container fixed >
            <Grid item xs={3}>
                {product.map((e) => (
                    <Card //variant="outlined" 
                        key={e.id}
                        sx={{
                            margin: '20px',
                            //maxWidth: 360,
                        }}>
                        < CardMedia
                            sx={{ height: 140, }}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="green iguana"
                        />
                        <Divider></Divider>
                        <Box sx={{ p: 2 }}>
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
                ))}
            </Grid>
        </Container >
    );
}

export default Restaurant;