package com.delimovil.backend.services.interfaces;

import com.delimovil.backend.dto.RestaurantDTO;
import com.delimovil.backend.dto.ResturantCreateDTO;
import com.delimovil.backend.models.entity.Restaurant;

import java.util.List;

public interface IRestaurantService {
    List<RestaurantDTO> findAll();
    RestaurantDTO findById(Integer id);
    RestaurantDTO save(ResturantCreateDTO restaurantDTO);
    RestaurantDTO update(ResturantCreateDTO restaurant, Integer id);
    void deleteById(Integer id);
}
