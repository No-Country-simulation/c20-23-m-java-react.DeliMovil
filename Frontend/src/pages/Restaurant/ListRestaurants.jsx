import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Box,
  Container,
  InputAdornment,
  Rating,
  TextField,
  CircularProgress,
} from "@mui/material";
import { getRestaurant } from "./RestaurantAPI";
import SearchIcon from "@mui/icons-material/Search";

const ListRestaurants = () => {
  //para cuando le doy click a un boton ej: onClick={() => navigate(`/editCategory/${params.row.id}`)}
  const navigate = useNavigate();
  // const params = useParams();
  const [restaurants, setRestaurants] = React.useState([]);
  const [originalRestaurant, setOriginalRestaurant] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [value, setValue] = React.useState(2);
  const [calification, setCalification] = useState(2);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    getRestaurant().then((res) => {
      setRestaurants(res.data);
      setOriginalRestaurant(res.data);
      console.log(res.data);
    });
    
  }, []);
console.log(restaurants);
  React.useEffect(() => {
    searchValue.length > 0
      ? setRestaurants(
        restaurants.filter((restaurants) =>
          restaurants.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      )
      : setRestaurants(originalRestaurant);
  }, [searchValue, restaurants, originalRestaurant]);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClick = (restaurants) => {
    if (restaurants.id) {
      navigate(`/products/${restaurants.id}`);
    } else {
      console.log('no hay id');
    }
  }

  return (
    <>
      <Container
        sx={{
          marginBottom: "1%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            //backgroundColor: "#4361EE",
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
                  <SearchIcon />
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
              margin: "1%",
            }}
          >
            {restaurants.map((e) => (
              <ListItem
                key={e.id}
                alignItems="flex-start"
                onClick={() => handleClick(e)}
              // onChange={handleSearchChange}
              >
                <ListItemAvatar sx={{ width: 56, height: 56 }}>
                  <Avatar
                    // alt="Remy Sharp"
                    src={`${e.imageUrl}`}
                    variant="rounded"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={e.name}

                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"

                        variant="body2"
                        sx={{
                          display: "inline",
                        }}
                      >
                        {e.description}
                      </Typography>
                    </React.Fragment>
                  }
                ></ListItemText>
                <Box sx={{ "& > legend": { mt: 1 } }}>
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
