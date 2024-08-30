package com.example.delimovil.service;

import com.example.delimovil.dto.DeliveryDTO;

import java.util.List;

public interface DeliveryService {
    List<DeliveryDTO> getAllDeliveries();
    DeliveryDTO getDeliveryById(int id);
    DeliveryDTO createDelivery(DeliveryDTO deliveryDTO);
    DeliveryDTO updateDelivery(int id, DeliveryDTO deliveryDTO);
    void deleteDelivery(int id);
}
