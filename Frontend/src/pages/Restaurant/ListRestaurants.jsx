import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import THEME from "../../constants/Theme";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { getRestaurant } from "./RestaurantAPI";

const ListRestaurants = () => {
  //para cuando le doy click a un boton ej: onClick={() => navigate(`/editCategory/${params.row.id}`)}
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = React.useState([]);

  React.useEffect(() => {
    getRestaurant().then((res) => {
      setRestaurants(res.data);
    });
  }, []);

  return (
    <>
      <List
        sx={{
          width: "90%",
          maxWidth: "95%",
          margin: "2%",
          bgcolor: THEME.palette.primary.contrastText,
          color: THEME.palette.primary.main,
        }}
      >
        {restaurants.map((restaurants) => (
          <ListItem key={restaurants.id} alignItems="flex-start">
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
            <Button
              endIcon={
                <Add sx={{ color: THEME.palette.primary.contrastText }} />
              }
              variant="contained"
              onClick={() => navigate(`/restaurant`)}
              size="medium"
              sx={{ backgroundColor: "#4361EE" }}
            >
              Ver mas
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ListRestaurants;
