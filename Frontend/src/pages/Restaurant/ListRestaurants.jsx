import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import THEME from '../../constants/Theme';
import { Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import { getRestaurant } from './RestaurantAPI';

const ListRestaurants = () => {

  //para cuando le doy click a un boton ej: onClick={() => navigate(`/editCategory/${params.row.id}`)}
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = React.useState([])
/*
  React.useEffect(() => {
    if (!search) {
      if (userData.role === idSuperAdmin || userData.role === idAdmin) {
        getCourses().then((res) => {
          setCourse(res.data.results);  //bring all courses
          setTotalRows(res.data.count);
        })
      }
    }
  }, [pagination]);
*/
  React.useMemo(() => {
    getRestaurant()
      .then((res) => {
        setRestaurants(res.data.results);
        console.log(setRestaurants(res.data.results))
        console.log(restaurants)

        //setFlattenedCategories(mostrarCategorias(res.data.results));
       // setRow(mostrarCategorias(res.data.results));
       // setLoadingCategories(false); // Marcamos que las categorías han terminado de cargar
      })
  }, []);

  return (
    <>
      <List sx={{ 
        width: '90%', 
        maxWidth: "95%",
        margin: "2%",
        bgcolor: THEME.palette.primary.contrastText, 
        color: THEME.palette.primary.main 
        }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar sx={{ width: 56, height: 56 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" variant="rounded" />
          </ListItemAvatar>
          <ListItemText sx={{ color: THEME.palette.primary.main, }}
            //  primary="Middle variant below"
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: THEME.palette.primary.main, display: 'inline' }}
                >
                  {restaurants.description}
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          >

          </ListItemText>
          <Button
            endIcon={<Add sx={{ color: THEME.palette.primary.contrastText }} />}
            variant="contained"
            onClick={() => navigate(`/restaurant`)}
            size='large'
            sx={{ backgroundColor: '#4361EE' }}
          >
            Ver mas
          </Button>
        </ListItem>
        <Divider //variant="inset"
          component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: 'text.primary', display: 'inline' }}
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </>
  );
}

export default ListRestaurants;