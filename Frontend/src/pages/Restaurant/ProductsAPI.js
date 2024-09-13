import BASE_URL from "../../configAxios";

export const getProducts = () => BASE_URL.get(`/api/products`);
