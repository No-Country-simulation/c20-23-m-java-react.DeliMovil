import { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    setName('');
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
          Registráte
        </Typography>
        <form>
          <Box mb={2}>
            <TextField
              fullWidth
              id="name"
              label="Nombre y Apellido"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            onClick={handleRegister}
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
            REGISTRAR
          </Button>
        </form>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          sx={{ marginTop: '20px', color: '#666' }}
        >
          ¿Ya tenés una cuenta?{' '}
          <MuiLink
            component={Link}
            to="/login"
            sx={{ color: '#007bff', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
          >
            Iniciá sesión
          </MuiLink>
        </Typography>
      </Box>
    </Container>
  );
};
