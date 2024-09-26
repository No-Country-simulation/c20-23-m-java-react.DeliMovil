package com.delimovil.backend.services.implement;

import com.delimovil.backend.dto.DeliveryDTO;
import com.delimovil.backend.dto.DeliveryLoginDTO;
import com.delimovil.backend.dto.DeliveryRequestDTO;
import com.delimovil.backend.models.entity.Delivery;
import com.delimovil.backend.repositories.IDeliveryRepository;
import com.delimovil.backend.services.interfaces.IDeliveryService;
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
public class DeliveryServiceImpl implements IDeliveryService {
    @Autowired
    private ModelMapper mapper;
    @Autowired
    private IDeliveryRepository deliveryRepo;
    @Autowired
    private CloudinaryService cloudinaryService;

    @Override
    @Transactional(readOnly = true)
    public List<DeliveryDTO> findAll() {
        return this.deliveryRepo.findAll()
                .stream()
                .map(res -> mapper.map(res, DeliveryDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public DeliveryDTO findById(Integer id) {
        Delivery delivery = deliveryRepo.findById(id).orElseThrow(
                () -> new ModelNotFoundException(id, Delivery.class.getSimpleName())
        );
        return mapper.map(delivery, DeliveryDTO.class);
    }

    @Override
    @Transactional
    public DeliveryDTO save(DeliveryRequestDTO deliveryDTO, MultipartFile image) {
        Delivery delivery = mapper.map(deliveryDTO, Delivery.class);
        String imageUrl = cloudinaryService.uploadFile(image);
        delivery.setImageUrl(imageUrl);
        Delivery savedDelivery = this.deliveryRepo.save(delivery);
        return mapper.map(savedDelivery, DeliveryDTO.class);
    }

    @Override
    @Transactional
    public DeliveryDTO update(DeliveryRequestDTO deliveryDTO, MultipartFile image, Integer id) {
        Delivery deliveryDB = this.deliveryRepo.findById(id).orElseThrow(
                () -> new ModelNotFoundException(id, Delivery.class.getSimpleName())
        );
        deliveryDB.setEmail(deliveryDTO.getEmail());
        deliveryDB.setPhone(deliveryDTO.getPhone());
        deliveryDB.setPassword(deliveryDTO.getPassword());
        deliveryDB.setUserName(deliveryDTO.getUserName());
        deliveryDB.setFirstName(deliveryDTO.getFirstName());
        deliveryDB.setLastName(deliveryDTO.getLastName());
        if (image != null && !image.isEmpty()) {
            String imageUrl = cloudinaryService.uploadFile(image);
            deliveryDB.setImageUrl(imageUrl);
        }
        Delivery updatedDelivery = this.deliveryRepo.save(deliveryDB);
        return mapper.map(updatedDelivery, DeliveryDTO.class);
    }

    @Override
    @Transactional
    public void deleteById(Integer id) {
        Optional<Delivery> delivery = this.deliveryRepo.findById(id);
        if(delivery.isEmpty()){
            throw new ModelNotFoundException(id, Delivery.class.getSimpleName());
        }
        this.deliveryRepo.deleteById(id);
    }
}
