package com.delimovil.backend.services.interfaces;

import com.delimovil.backend.dto.RestaurantCreateDTO;
import com.delimovil.backend.dto.RestaurantDTO;
import com.delimovil.backend.dto.ResturantRequestDTO;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface IRestaurantService {
    List<RestaurantDTO> findAll();
    RestaurantDTO findById(Integer id);
    RestaurantDTO save(RestaurantCreateDTO restaurantDTO, MultipartFile image);
    RestaurantDTO update(ResturantRequestDTO restaurant,MultipartFile image, Integer id);
    void deleteById(Integer id);
}
