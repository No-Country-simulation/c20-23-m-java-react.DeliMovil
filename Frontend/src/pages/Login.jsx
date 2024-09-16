import { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
          backgroundColor: '#f7f7f7',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ color: '#333', textAlign: 'center' }}
        >
          Iniciá sesión
        </Typography>
        <form>
          <Box mb={2}>
            <TextField
              fullWidth
              id="email"
              label="Correo"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              required
              InputLabelProps={{
                style: { color: '#555' },
                shrink: true,
                required: false,
              }}
              InputProps={{
                style: { color: '#333' },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#ddd',
                  },
                  '&:hover fieldset': {
                    borderColor: '#007bff',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#007bff',
                  },
                },
              }}
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              id="password"
              label="Contraseña"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              required
              InputLabelProps={{
                style: { color: '#555' },
                shrink: true,
                required: false,
              }}
              InputProps={{
                style: { color: '#333' },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#ddd',
                  },
                  '&:hover fieldset': {
                    borderColor: '#007bff',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#007bff',
                  },
                },
              }}
            />
          </Box>
          <Button
            fullWidth
            variant="contained"
            onClick={handleLogin}
            sx={{
              backgroundColor: '#007bff',
              '&:hover': {
                backgroundColor: '#0056b3',
              },
              padding: '10px',
              fontSize: '16px',
              marginTop: '5px',
            }}
          >
            Ingresar
          </Button>
        </form>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          sx={{ marginTop: '20px', color: '#666' }}
        >
          ¿Todavía no te registraste?{' '}
          <MuiLink
            component={Link}
            to="/register"
            sx={{ color: '#007bff', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
          >
            Creá una cuenta
          </MuiLink>
        </Typography>
      </Box>
    </Container>
  );
};
