import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function Tarjeta() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image="https://www.cnature.es/wp-content/uploads/2021/12/hamburguesa-con-guacamole.jpg"
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="section" component="div">
            Hamburguesa
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
          ></Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
