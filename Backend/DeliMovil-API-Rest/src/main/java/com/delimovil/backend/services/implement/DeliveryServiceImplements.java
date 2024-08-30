package com.example.delimovil.service.impl;

import com.example.delimovil.dto.DeliveryDTO;
import com.example.delimovil.entity.Delivery;
import com.example.delimovil.repository.DeliveryRepository;
import com.example.delimovil.service.DeliveryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class DeliveryServiceImpl implements DeliveryService {

    @Autowired
    private DeliveryRepository deliveryRepository;

    // Método para obtener todos los deliveries
    @Override
    public List<DeliveryDTO> getAllDeliveries() {
        List<Delivery> deliveries = deliveryRepository.findAll();
        return deliveries.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    // Método para obtener un delivery por ID
    @Override
    public DeliveryDTO getDeliveryById(int id) {
        Optional<Delivery> delivery = deliveryRepository.findById(id);
        return delivery.map(this::convertToDTO).orElseThrow(() -> new RuntimeException("Delivery not found with id: " + id));
    }

    // Método para crear un nuevo delivery
    @Override
    public DeliveryDTO createDelivery(DeliveryDTO deliveryDTO) {
        Delivery delivery = convertToEntity(deliveryDTO);
        Delivery savedDelivery = deliveryRepository.save(delivery);
        return convertToDTO(savedDelivery);
    }

    // Método para actualizar un delivery existente
    @Override
    public DeliveryDTO updateDelivery(int id, DeliveryDTO deliveryDTO) {
        Delivery existingDelivery = deliveryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Delivery not found with id: " + id));

        existingDelivery.setFirstname(deliveryDTO.getFirstname());
        existingDelivery.setLastname(deliveryDTO.getLastname());
        existingDelivery.setPhone(deliveryDTO.getPhone());

        Delivery updatedDelivery = deliveryRepository.save(existingDelivery);
        return convertToDTO(updatedDelivery);
    }

    // Método para eliminar un delivery por ID
    @Override
    public void deleteDelivery(int id) {
        Delivery delivery = deliveryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Delivery not found with id: " + id));
        deliveryRepository.delete(delivery);
    }

    // Método para convertir una entidad Delivery a un DTO
    private DeliveryDTO convertToDTO(Delivery delivery) {
        return new DeliveryDTO(delivery.getId(), delivery.getFirstname(), delivery.getLastname(), delivery.getPhone());
    }

    // Método para convertir un DTO a una entidad Delivery
    private Delivery convertToEntity(DeliveryDTO deliveryDTO) {
        Delivery delivery = new Delivery();
        delivery.setId(deliveryDTO.getId());
        delivery.setFirstname(deliveryDTO.getFirstname());
        delivery.setLastname(deliveryDTO.getLastname());
        delivery.setPhone(deliveryDTO.getPhone());
        return delivery;
    }
}

/*
    Clase DeliveryServiceImpl: Implementa los métodos definidos en la interfaz:

        getAllDeliveries: Obtiene todos los registros de la base de datos, los convierte a DeliveryDTO y los devuelve.
        getDeliveryById: Busca un Delivery por ID. Si no lo encuentra, lanza una excepción.
        createDelivery: Convierte el DeliveryDTO a una entidad Delivery, lo guarda en la base de datos y devuelve el DTO resultante.
        updateDelivery: Busca un Delivery por ID, actualiza sus campos con los datos del DTO proporcionado, guarda los cambios y devuelve el DTO actualizado.
        deleteDelivery: Busca un Delivery por ID y lo elimina.

    Métodos de conversión (convertToDTO y convertToEntity): Utilizados para convertir entre Delivery (entidad) y DeliveryDTO.
*/