import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Tarjeta from "./Card";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export function Categories() {
  return (
    <Box className="box-grid" sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        padding={{ xs: 1, sm: 2, md: 2 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={2} key={index}>
            <Item>
              <Tarjeta />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
