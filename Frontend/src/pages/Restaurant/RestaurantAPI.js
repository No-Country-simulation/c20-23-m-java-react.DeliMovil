import BASE_URL from "../../configAxios";

export const getRestaurant = () => BASE_URL.get(`/api/restaurant`);

export const deleteRestaurant = (id) =>
  BASE_URL.delete(`/api/restaurant/${id}/`, {});

export const getRestaurantById = (id) =>
  BASE_URL.get(`/api/restaurant/${id}/`, {});

export const createRestaurant = (name, description) =>
  BASE_URL.post(`/api/restaurant`, {
    name,
    description,
  });

export const editRestaurants = (id, name, description) =>
  BASE_URL.patch(`/api/restaurant/${id}/`, {
    name,
    description,
  });
