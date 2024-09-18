import BASE_URL from "../configAxios";

const loginUser = async (username, password) => {
    try {
      const response = await BASE_URL.post('/login', {
        username: username,
        password: password,
      });
  
      if (response.status === 200) {
        console.log('Login exitoso');
      } else {
        console.log('Error al loguearse');
      }
    } catch (error) {
      console.error('Error en la solicitud POST:', error);
    }
  };
  