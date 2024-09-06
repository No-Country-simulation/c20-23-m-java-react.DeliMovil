package com.delimovil.backend.services.implement;

import com.delimovil.backend.dto.LocalCreateDTO;
import com.delimovil.backend.dto.LocalDTO;
import com.delimovil.backend.dto.LocalRequestDTO;
import com.delimovil.backend.dto.RestaurantDTO;
import com.delimovil.backend.models.entity.Local;
import com.delimovil.backend.models.entity.Restaurant;
import com.delimovil.backend.repositories.ILocalRepository;
import com.delimovil.backend.services.interfaces.ILocalService;
import com.delimovil.backend.services.interfaces.IRestaurantService;
import com.delimovil.backend.shared.exception.personalized.ModelNotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class LocalServiceImpl implements ILocalService {
    @Autowired
    private ILocalRepository localRepository;

    @Autowired
    private IRestaurantService restaurantService;

    @Autowired
    private ModelMapper mapper;

    @Override
    @Transactional(readOnly = true)
    public List<LocalDTO> findAll() {
        return this.localRepository.findAll()
                .stream()
                .map(local -> mapper.map(local, LocalDTO.class))
                .collect(Collectors.toUnmodifiableList());
    }

    @Override
    @Transactional(readOnly = true)
    public LocalDTO findById(Integer id) {
        Local local = localRepository.findById(id).orElseThrow(
                () -> new ModelNotFoundException(id, Local.class.getSimpleName())
        );
        return mapper.map(local, LocalDTO.class);
    }

    @Override
    @Transactional
    public LocalDTO save(LocalCreateDTO localDTO) {
        //validando restaurante
        RestaurantDTO restaurantDTO = this.restaurantService.findById(localDTO.getRestaurant_id());

        Local local = mapper.map(localDTO, Local.class);
        local.setRestaurant(mapper.map(restaurantDTO, Restaurant.class));
        Local saveLocal = localRepository.save(local);

        return mapper.map(saveLocal, LocalDTO.class);
    }

    @Override
    @Transactional
    public LocalDTO update(LocalRequestDTO localDTO, Integer id) {
        Local localBD = localRepository.findById(id).orElseThrow(
                () -> new ModelNotFoundException(id, Local.class.getSimpleName())
        );
        localBD.setName(localDTO.getName());
        localBD.setLatitude(localDTO.getLatitude());
        localBD.setLongitude(localDTO.getLongitude());
        localBD.setPhone(localDTO.getPhone());
        localBD.setNumberStreet(localDTO.getNumberStreet());
        localBD.setFloorDepartment(localDTO.getFloorDepartment());

        //validando restaurante
        RestaurantDTO restaurantDTO = this.restaurantService.findById(localDTO.getRestaurant_id());
        localBD.setRestaurant(mapper.map(restaurantDTO, Restaurant.class));

        Local updateLocal = localRepository.save(localBD);

        return mapper.map(updateLocal, LocalDTO.class);
    }

    @Override
    @Transactional
    public void deleteById(Integer id) {
        Optional<Local> localBD = localRepository.findById(id);
        if (localBD.isEmpty()){
            throw new ModelNotFoundException(id, Local.class.getSimpleName());
        }
        localRepository.deleteById(id);
    }
}
