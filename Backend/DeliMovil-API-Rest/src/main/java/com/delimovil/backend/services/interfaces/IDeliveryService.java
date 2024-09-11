package com.delimovil.backend.services.interfaces;

import com.delimovil.backend.dto.DeliveryDTO;
import com.delimovil.backend.dto.DeliveryLoginDTO;
import com.delimovil.backend.dto.DeliveryRequestDTO;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface IDeliveryService {
    public List<DeliveryDTO> findAll();
    public DeliveryDTO findById(Integer id);
    public DeliveryDTO save(DeliveryRequestDTO deliveryDTO, MultipartFile image);
    public DeliveryDTO update(DeliveryRequestDTO deliveryDTO, MultipartFile image, Integer id);
    public void deleteById(Integer id);
}
