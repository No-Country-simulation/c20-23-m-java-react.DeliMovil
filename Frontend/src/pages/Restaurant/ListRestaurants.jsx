import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";

import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import THEME from "../../constants/Theme";
import {
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  Rating,
  TextField,
  CircularProgress,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { getRestaurant } from "./RestaurantAPI";
import SearchIcon from "@mui/icons-material/Search";

const ListRestaurants = () => {
  //para cuando le doy click a un boton ej: onClick={() => navigate(`/editCategory/${params.row.id}`)}
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = React.useState([]);
  const [originalRestaurant, setOriginalRestaurant] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  //const [row, setRow] = useState([]);
  const [value, setValue] = React.useState(2);
  const [calification, setCalification] = useState(2);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [debounceTimeout, setDebounceTimeout] = useState(null);
  /*
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null); // Resetear el estado de error

      try {
        const response = await getRestaurant();
        setRestaurants(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
*/
  React.useEffect(() => {
    getRestaurant().then((res) => {
      setRestaurants(res.data);
      setOriginalRestaurant(res.data);
    });
  }, []);

  React.useEffect(() => {
    searchValue.length > 0
      ? setRestaurants(
          restaurants.filter((restaurants) =>
            restaurants.name.toLowerCase().includes(searchValue.toLowerCase())
          )
        )
      : setRestaurants(originalRestaurant);
  }, [searchValue, restaurants, originalRestaurant]);

  /*
  useEffect(() => {
    const handleSearch = () => {
      if (searchValue.trim() === "") {
        // Empty search, reset to original list and clear error
        setRestaurants(originalRestaurant);
        setErrorMessage(null);
        return;
      }

      const filteredRestaurants = restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(searchValue.toLowerCase())
      );

      if (filteredRestaurants.length === 0) {
        setErrorMessage("No se encontraron resultados para tu búsqueda.");
      } else {
        setRestaurants(filteredRestaurants);
        setErrorMessage(null);
      }
    };

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const newTimeout = setTimeout(handleSearch, 500); // Add a debounce delay
    setDebounceTimeout(newTimeout);
  }, [searchValue, restaurants, originalRestaurant]);
*/

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
        {isLoading ? (
          <CircularProgress />
        ) : error ? (
          <div>Ocurrio un error al cargar los restaurantes</div>
        ) : (
          <List
            sx={{
              //  width: "100%",
              // maxWidth: "95%",
              margin: "1%",
              backgroundColor: THEME.palette.primary_white.contrastText,
              color: THEME.palette.secondary.main,
            }}
          >
            {restaurants.map((e) => (
              <ListItem
                key={e.id}
                alignItems="flex-start"
                // onChange={handleSearchChange}
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
                  primary={e.name}
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
                        {e.description}
                      </Typography>
                    </React.Fragment>
                  }
                ></ListItemText>

                <Box sx={{ "& > legend": { mt: 1 } }}>
                  <Typography component="legend">Controlled</Typography>
                  <Rating
                    name="simple-controlled"
                    value={calification}
                    onChange={(event, newValue) => {
                      setCalification(newValue);
                    }}
                  />
                  <Typography component="legend">Read only</Typography>
                  <Rating name="read-only" value={calification} readOnly />
                </Box>
              </ListItem>
            ))}
          </List>
        )}
      </Container>
    </>
  );
};

export default ListRestaurants;
