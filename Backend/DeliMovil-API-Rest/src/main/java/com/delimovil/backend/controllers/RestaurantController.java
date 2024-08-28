package com.delimovil.backend.controllers;

import com.delimovil.backend.dto.RestaurantDTO;
import com.delimovil.backend.dto.ResturantCreateDTO;
import com.delimovil.backend.models.entity.Restaurant;
import com.delimovil.backend.services.interfaces.IRestaurantService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/restaurant")
public class RestaurantController {
    @Autowired
    private IRestaurantService restaurantService;

    @GetMapping
    public ResponseEntity<List<RestaurantDTO>> findAllRestaurants() {
        return ResponseEntity.ok(restaurantService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<RestaurantDTO> findRestaurantById(@PathVariable Integer id) {
        return ResponseEntity.ok(restaurantService.findById(id));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<RestaurantDTO> createRestaurant(@RequestBody ResturantCreateDTO restaurant) {
        return ResponseEntity.status(HttpStatus.CREATED).body(restaurantService.save(restaurant));
    }

    @PatchMapping("/{id}")
    public ResponseEntity<RestaurantDTO> updateRestaurant(
            @RequestBody ResturantCreateDTO restaurant,
            @PathVariable Integer id
    ) {
        return ResponseEntity.ok(restaurantService.update(restaurant, id));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public ResponseEntity<Void> deleteRestaurant(@PathVariable Integer id){
        this.restaurantService.deleteById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();

    }
}
