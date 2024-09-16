import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";



export default function Tarjeta() {
  const cardData = [
    {
      title: "Hamburguesa",
      image:
        "https://www.cnature.es/wp-content/uploads/2021/12/hamburguesa-con-guacamole.jpg",
      alt: "Hamburguesa",
     
    },
    {
      title: "Pizza",
      image:
        "https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900",
      alt: "Pizza",
      
    },
    {
      title: "Sushi",
      image: "https://images.unsplash.com/photo-1553621042-f6e147245754",
      alt: "Sushi",
      
    },
    {
      title: "Empanadas",
      image:
        "https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_fpa6sn8vqc_empanadas.jpg",
      alt: "Empanadas",
    
    },
    {
      title: "Ensaladas",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
      alt: "Ensaladas",
      
    },
    {
      title: "Postres",
      image:
        "https://www.recetasnestlecam.com/sites/default/files/2023-03/postre-en-vaso-dulce-leche.jpg.jpg",
      alt: "Postres",
     
    },
    {
      title: "Bebidas",
      image:
        "https://drinkcash.es/wp-content/uploads/2020/11/bebidas-scaled.jpg",
      alt: "Bebidas",
     
    },
    {
      title: "Helados",
      image:
        "https://images.ecestaticos.com/f1KX9nB9T1rNYq6eWI8Gbeg8Vi0=/0x0:2121x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F765%2Fa65%2F950%2F765a65950e584b764e05266f111b2a86.jpg",
      alt: "Helados",
     
    },
  ];

  return (
    <Grid container spacing={2}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card sx={{ maxWidth: 200 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100"
                image={card.image}
                alt={card.alt}
              />
              <CardContent
                sx={{
                  backgroundColor: "transparent",
                  textAlign: "center", 
                }}
              >
                <Typography gutterBottom variant="h6" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color='text-secondary'>
                  
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
