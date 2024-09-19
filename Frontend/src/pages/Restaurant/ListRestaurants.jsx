import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Box,
  Container,
  InputAdornment,
  Rating,
  TextField,
  CircularProgress,
  useMediaQuery,
  Card,
  CardMedia,
  Divider,
  Stack,
  Grid,
} from "@mui/material";
import { getRestaurant } from "./RestaurantAPI";
import SearchIcon from "@mui/icons-material/Search";

const ListRestaurants = () => {
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = React.useState([]);
  const [originalRestaurant, setOriginalRestaurant] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [value, setValue] = React.useState(2);
  const [calification, setCalification] = useState(5);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const isMobile = useMediaQuery('(max-width:600px)');

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
          width: "100%",
        }}
      >
        {isMobile ? (
          <>
            <Box
              sx={{
                // display: "flex",
                //  alignItems: "flex-end",
                borderRadius: 1,
                //margin: 1,
                //   width: "100%",
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
              <List>
                {restaurants.map((e) => (
                  <Grid>
                    <Card
                      onClick={() => handleClick(e)}
                      key={e.id}
                      sx={{
                        margin: '20px',
                        maxWidth: 360,
                        borderRadius: '10px',
                      }}>
                      < CardMedia
                        sx={{ height: 140, }}
                        image={e.imageUrl}
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
                          <Box sx={{ "& > legend": { mt: 1 }, }}>
                            <Rating name="read-only" value={calification} readOnly sx={{ fontSize: '20px' }} />
                          </Box>
                        </Stack>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {e.description}
                        </Typography>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </List>
            )}
          </>
        ) : (
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
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
                    sx={{
                      border: '2px solid #ccc',
                      borderRadius: '8px',
                      //  borderBottom: '1px solid #ccc',
                      // padding: '2px',
                      marginBottom: '10px',
                    }}
                    key={e.id}
                    alignItems="flex-start"
                    onClick={() => handleClick(e)}
                  >
                    <ListItemAvatar sx={{ width: 106, height: 96, marginBottom: '5px' }}>
                      <Avatar
                        sx={{ width: 95, height: 95, }}
                        src={e.imageUrl}
                        variant="rounded"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primaryTypographyProps={{ variant: 'h5' }}
                      primary={e.name}

                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="h6"
                            sx={{
                              display: "inline",
                            }}
                          >
                            {e.description}
                          </Typography>
                        </React.Fragment>
                      }
                    ></ListItemText>
                    <Box sx={{ "& > legend": { mt: 1 }, }}>
                      <Rating name="read-only" value={calification} readOnly />
                    </Box>
                  </ListItem>
                ))}
              </List>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default ListRestaurants;
