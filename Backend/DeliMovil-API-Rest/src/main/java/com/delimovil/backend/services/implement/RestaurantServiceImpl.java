package com.delimovil.backend.services.implement;

import com.delimovil.backend.models.entity.Restaurant;
import com.delimovil.backend.repositories.IRestaurantRepository;
import com.delimovil.backend.services.interfaces.IRestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class RestaurantServiceImpl implements IRestaurantService {

    @Autowired
    private IRestaurantRepository restaurantRepository;

    @Override
    @Transactional(readOnly = true)
    public List<Restaurant> findAll() {
        return this.restaurantRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Restaurant findById(Integer id) {
        return restaurantRepository.findById(id).orElseThrow(); //Lanzar exception personalizada
    }

    @Override
    @Transactional
    public Restaurant save(Restaurant restaurant) {
        return this.restaurantRepository.save(restaurant);
    }

    @Override
    @Transactional
    public Restaurant update(Restaurant restaurant) {
        return this.restaurantRepository.save(restaurant);
    }

    @Override
    @Transactional
    public void deleteById(Integer id) {
        Optional<Restaurant> restaurant = this.restaurantRepository.findById(id);
        if (restaurant.isEmpty()){
            throw new RuntimeException("El id no existe"); //Reemplazar por una exception personalizada
        }
        this.restaurantRepository.deleteById(id);
    }
}
