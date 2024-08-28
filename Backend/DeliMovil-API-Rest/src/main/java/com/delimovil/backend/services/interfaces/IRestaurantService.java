package com.delimovil.backend.services.interfaces;

import com.delimovil.backend.dto.RestaurantDTO;
import com.delimovil.backend.dto.ResturantRequestDTO;

import java.util.List;

public interface IRestaurantService {
    List<RestaurantDTO> findAll();
    RestaurantDTO findById(Integer id);
    RestaurantDTO save(ResturantRequestDTO restaurantDTO);
    RestaurantDTO update(ResturantRequestDTO restaurant, Integer id);
    void deleteById(Integer id);
}
