package com.delimovil.backend.services.interfaces;

import com.delimovil.backend.models.entity.Restaurant;

import java.util.List;

public interface IRestaurantService {
    List<Restaurant> findAll();
    Restaurant findById(Integer id);
    Restaurant save(Restaurant restaurant);
    Restaurant update(Restaurant restaurant);
    void deleteById(Integer id);
}
