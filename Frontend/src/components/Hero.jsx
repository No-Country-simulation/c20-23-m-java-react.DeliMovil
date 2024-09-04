import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Grilla from "./Grilla";
import { Grid } from "@mui/material";
import Tarjeta from "./Card";

const StyledBox = styled("div")(({ theme }) => ({
  alignSelf: "center",
  width: "100%",
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: theme.shape.borderRadius,
  outline: "6px solid",
  outlineColor: "hsla(220, 25%, 80%, 0.2)",
  border: "1px solid",
  borderColor: theme.palette.grey[200],
  boxShadow: "0 0 12px 8px hsla(220, 25%, 80%, 0.2)",
  backgroundImage: `url('/static/screenshots/material-ui/getting-started/templates/dashboard.jpg')`,
  backgroundSize: "cover",
  [theme.breakpoints.up("sm")]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
  ...theme.applyStyles("dark", {
    boxShadow: "0 0 24px 12px hsla(210, 100%, 25%, 0.2)",
    backgroundImage: `url('/static/screenshots/material-ui/getting-started/templates/dashboard-dark.jpg')`,
    outlineColor: "hsla(220, 20%, 42%, 0.1)",
    borderColor: theme.palette.grey[700],
  }),
}));

const cardData = [
  {
    title: "Big Mac",
    description:
      "La icónica hamburguesa de McDonald's con dos carnes y salsa especial.",
    image:
      "https://resizer.glanacion.com/resizer/v2/el-indice-big-mac-revela-en-que-pais-del-mundo-se-EQEVALWJCFGLNOITX2MOB3QE5Q.jpg?auth=43edc0d8f943d6c4fcfd84441ad1d88f919189cdbcbf04e2b2ba9bb6af9cff65&width=768&quality=70&smart=false",
    alt: "Big Mac",
  },
  {
    title: "Pizza Kentucky",
    description:
      "Deliciosa pizza con abundante queso y pepperoni de Kentucky Pizza.",
    image:
      "https://images.rappi.com.ar/restaurants_background/kentuchy-1660252210340.jpg",
    alt: "Pizza Kentucky",
  },
  {
    title: "Whopper",
    description:
      "La clásica Whopper de Burger King, con todo el sabor a la parrilla.",
    image:
      "https://bk-latam-prod.s3.amazonaws.com/sites/burgerking.latam/files/BK_Web_WHOPPER_500X540px.png",
    alt: "Whopper",
  },
  {
    title: "Subway Melt",
    description: "Subway Melt con jamón, pavo, tocino y queso derretido.",
    image:
      "https://orders.subway-tt.com/uploads/images/products/large/hungrrrcaribbeanpartner_subwaymelt_1594062988SUBWAYMELT.png",
    alt: "Subway Melt",
  },
  {
    title: "Taco Bell Crunchwrap",
    description:
      "El famoso Crunchwrap Supreme de Taco Bell, crujiente y delicioso.",
    image:
      "https://www.chefpriyanka.com/wp-content/uploads/2020/05/Chicken-Bacon-Ranch-Crunchwrap-Product-Image.jpg",
    alt: "Crunchwrap",
  },
  {
    title: "KFC Chicken Bucket",
    description:
      "El clásico bucket de pollo frito de KFC, crujiente y sabroso.",
    image:
      "https://as2.ftcdn.net/v2/jpg/03/03/41/07/1000_F_303410716_wknBjLSM97kvPaNdYneN8CMWrkp2OVOB.jpg",
    alt: "KFC Chicken Bucket",
  },
];

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage:
          "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",
        ...theme.applyStyles("dark", {
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)",
        }),
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: "center", width: { xs: "100%", sm: "70%" } }}
        >
          <Typography
            variant="h3"
            sx={(theme) => ({
              mt: 4,
              mb: 4,
              color: "white",
              fontSize: "1.8rem",
              textAlign: "center",
              ...theme.applyStyles("dark", {
                color: "white",
              }),
              ...theme.applyStyles("light", {
                color: "black",
              }),
            })}
          >
            Hola, ¿qué vas a pedir hoy?
          </Typography>
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              fontSize: "clamp(3rem, 10vw, 3.5rem)",
            }}
          >
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: "inherit",
                color: "primary.main",
                ...theme.applyStyles("dark", {
                  color: "primary.light",
                }),
              })}
            >
              <Tarjeta />
            </Typography>
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: "text.secondary",
              width: { sm: "100%", md: "80%" },
            }}
          >
            Queres promocionar tu Restaurant con nosotros? Queres Registrarte
            como repartidor?
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            useFlexGap
            sx={{
              width: { xs: "100%", sm: "350px" },
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ minWidth: "fit-content" }}
            >
              Registra tu restaurant
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ minWidth: "fit-content" }}
            >
              Registrate como repartidor
            </Button>
          </Stack>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ textAlign: "center" }}
          ></Typography>
        </Stack>

        <StyledBox id="image">
          <Box
            sx={(theme) => ({
              position: "relative",
              top: "-50px",
              left: "10px",
              color: theme.palette.mode === "dark" ? "white" : "black",
              fontWeight: "bold",
              fontSize: "1.4rem",
              zIndex: 1,
            })}
          >
            Lo más pedido
          </Box>
          <Box sx={{ flexGrow: 1, mt: 4, ml: 3 }}>
            <Grid container spacing={2} sx={{ marginTop: "-30px" }}>
              {cardData.map((card, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Grilla
                    title={card.title}
                    description={card.description}
                    image={card.image}
                    alt={card.alt}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </StyledBox>
      </Container>
    </Box>
  );
}
