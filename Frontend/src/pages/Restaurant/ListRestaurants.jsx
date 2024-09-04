import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import THEME from "../../constants/Theme";
import {
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  Rating,
  TextField,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { getRestaurant } from "./RestaurantAPI";
import SearchIcon from "@mui/icons-material/Search";

const ListRestaurants = () => {
  //para cuando le doy click a un boton ej: onClick={() => navigate(`/editCategory/${params.row.id}`)}
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState([]);
  const [row, setRow] = useState([]);
  const [value, setValue] = React.useState(2);

  React.useEffect(() => {
    getRestaurant().then((res) => {
      setRestaurants(res.data);
    });
  }, []);

  React.useEffect(() => {
    searchValue.length > 1
      ? setRow(
          restaurants.filter((row) =>
            row.name.toLowerCase().includes(searchValue.toLowerCase())
          )
        )
      : setRow(restaurants);
  }, [searchValue]);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <Container
        sx={{
          backgroundColor: THEME.palette.secondary.main,
          marginBottom: "1%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            backgroundColor: "#4361EE",
            borderRadius: 1,
            //margin: 1,
            width: "100%",
          }}
        >
          <TextField
            sx={{ width: "100%" }}
            id="filled-search"
            variant="outlined"
            placeholder="Buscar..."
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon
                    sx={{ color: THEME.palette.primary.contrastText }}
                  />
                </InputAdornment>
              ),
            }}
            type="search"
            autoComplete="off"
            value={searchValue}
            onChange={handleSearchChange}
            autoFocus={true}
          />
        </Box>

        <List
          sx={{
            //  width: "100%",
            // maxWidth: "95%",
            margin: "1%",
            backgroundColor: THEME.palette.primary_white.contrastText,
            color: THEME.palette.secondary.main,
          }}
        >
          {restaurants.map((restaurants) => (
            <ListItem
              key={restaurants.id}
              alignItems="flex-start"
              onChange={handleSearchChange}
            >
              <ListItemAvatar sx={{ width: 56, height: 56 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  variant="rounded"
                />
              </ListItemAvatar>
              <ListItemText
                sx={{ color: THEME.palette.primary.main }}
                primary={restaurants.name}
                onClick={() => navigate(`/restaurant`)}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{
                        color: THEME.palette.primary.main,
                        display: "inline",
                      }}
                    >
                      {restaurants.description}
                    </Typography>
                  </React.Fragment>
                }
              ></ListItemText>

              <Box sx={{ "& > legend": { mt: 1 } }}>
                <Typography component="legend">Controlled</Typography>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                <Typography component="legend">Read only</Typography>
                <Rating name="read-only" value={value} readOnly />
              </Box>
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  );
};

export default ListRestaurants;
