import BASE_URL from "../../configAxios";

export const getProducts = () => BASE_URL.get(`/api/products`);

export const getProductsByCategory = (restaurant_id) => BASE_URL.get(`/api/products/category/?categoryId=${restaurant_id}`);
