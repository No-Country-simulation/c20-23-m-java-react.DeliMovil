import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Typography variant="h1" component="div" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Oops! Página no encontrada.
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>
        Parece que la página que estás buscando no existe.
      </Typography>
      <Box mt={4}>
        <Button variant="contained" color="primary" component={Link} to="/">
          Volver al Inicio
        </Button>
      </Box>
    </Container>
  )
}
