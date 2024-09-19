import BASE_URL from "../configAxios";

export const loginUser = async (email, password) => {
  try {
    const response = await BASE_URL.get(`/api/client/login`, {
      params: {
        email: email,
        password: password,
      },
    });

    if (response.status === 200) {
      console.log('Login exitoso');
    } else {
      console.log('Error al loguearse');
    }
  } catch (error) {
    console.error('Error en la solicitud GET:', error);
  }
};
  