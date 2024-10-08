package com.delimovil.backend.services.implement;

import com.delimovil.backend.dto.RestaurantCreateDTO;
import com.delimovil.backend.dto.RestaurantDTO;
import com.delimovil.backend.dto.ResturantRequestDTO;
import com.delimovil.backend.models.entity.Restaurant;
import com.delimovil.backend.repositories.IRestaurantRepository;
import com.delimovil.backend.services.interfaces.IRestaurantService;
import com.delimovil.backend.shared.exception.personalized.ModelNotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RestaurantServiceImpl implements IRestaurantService {

    @Autowired
    private IRestaurantRepository restaurantRepository;

    @Autowired
    private ModelMapper mapper;
    @Autowired
    private CloudinaryService cloudinaryService;

    @Override
    @Transactional(readOnly = true)
    public List<RestaurantDTO> findAll() {
        return this.restaurantRepository.findAll()
                .stream()
                .map(res -> mapper.map(res, RestaurantDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public RestaurantDTO findById(Integer id) {
        Restaurant restaurant = restaurantRepository.findById(id).orElseThrow(
                () -> new ModelNotFoundException(id, Restaurant.class.getSimpleName())
        );

        return mapper.map(restaurant, RestaurantDTO.class);
    }

    @Override
    @Transactional
    public RestaurantDTO save(RestaurantCreateDTO restaurantDTO, MultipartFile image) {
        String imageUrl = cloudinaryService.uploadFile(image);
        Restaurant restaurant = mapper.map(restaurantDTO, Restaurant.class);
        restaurant.setImageUrl(imageUrl);
        Restaurant saveRestaurant = this.restaurantRepository.save(restaurant);

        return mapper.map(saveRestaurant, RestaurantDTO.class);
    }

    @Override
    @Transactional
    public RestaurantDTO update(ResturantRequestDTO restaurantDTO, MultipartFile image, Integer id) {
        Restaurant restaurantBD = this.restaurantRepository.findById(id).orElseThrow(
                () -> new ModelNotFoundException(id, Restaurant.class.getSimpleName())
        );

        restaurantBD.setName(restaurantDTO.getName());
        restaurantBD.setDescription(restaurantDTO.getDescription());

        if (image != null && !image.isEmpty()) {
            String imageUrl = cloudinaryService.uploadFile(image);
            restaurantBD.setImageUrl(imageUrl);
        }

        Restaurant updatedRestaurant = this.restaurantRepository.save(restaurantBD);

        return mapper.map(updatedRestaurant, RestaurantDTO.class);
    }

    @Override
    @Transactional
    public void deleteById(Integer id) {
        Optional<Restaurant> restaurant = this.restaurantRepository.findById(id);
        if (restaurant.isEmpty()){
            throw new ModelNotFoundException(id, Restaurant.class.getSimpleName());
        }
        this.restaurantRepository.deleteById(id);
    }
}
