package com.delimovil.backend.controllers;

import com.delimovil.backend.dto.RestaurantCreateDTO;
import com.delimovil.backend.dto.RestaurantDTO;
import com.delimovil.backend.dto.ResturantRequestDTO;
import com.delimovil.backend.services.interfaces.IRestaurantService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
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
    public ResponseEntity<RestaurantDTO> findRestaurantById(@PathVariable @Min(1) Integer id) {
        return ResponseEntity.ok(restaurantService.findById(id));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<RestaurantDTO> createRestaurant(@Valid @RequestBody RestaurantCreateDTO restaurant) {
        return ResponseEntity.status(HttpStatus.CREATED).body(restaurantService.save(restaurant));
    }

    @PatchMapping("/{id}")
    public ResponseEntity<RestaurantDTO> updateRestaurant(
            @RequestBody ResturantRequestDTO restaurant,
            @PathVariable @Min(1) Integer id
    ) {
        return ResponseEntity.ok(restaurantService.update(restaurant, id));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public ResponseEntity<Void> deleteRestaurant(@PathVariable @Min(1) Integer id){
        this.restaurantService.deleteById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();

    }
}
