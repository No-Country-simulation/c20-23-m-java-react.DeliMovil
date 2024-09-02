import BASE_URL from "../../configAxios";


export const getRestaurant = () => BASE_URL.get(`/api/restaurant`);
/*
export const deleteRestaurant = (idCategory) => BASE_URL.delete(`/api/restaurant/${idCategory}/`, {});

export const getRestaurantById = (id) =>
    BASE_URL.get(`/api/restaurant/${id}/`, {});

export const createRestaurant = (parent_id ,name, description) =>
    BASE_URL.post(`/api/restaurant/`, {
        parent_id,
        name,
        description
    });

export const editRestaurants = (id, parent_id, name, description) =>
    BASE_URL.put(`/api/restaurant/${id}/`, {
        parent_id,
        name,
        description,
    });
    */
