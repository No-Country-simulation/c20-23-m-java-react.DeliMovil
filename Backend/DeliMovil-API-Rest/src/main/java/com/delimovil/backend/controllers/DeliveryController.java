package com.example.delimovil.controller;

import com.example.delimovil.dto.DeliveryDTO;
import com.example.delimovil.service.DeliveryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/feature/delivery")
public class DeliveryController {

    @Autowired
    private DeliveryService deliveryService;

    // Obtener una lista de todos los repartidores registrados
    @GetMapping
    public ResponseEntity<List<DeliveryDTO>> getAllDeliveries() {
        List<DeliveryDTO> deliveries = deliveryService.getAllDeliveries();
        return ResponseEntity.ok(deliveries);
    }

    // Obtener un delivery por ID
    @GetMapping("/{id}")
    public ResponseEntity<DeliveryDTO> getDeliveryById(@PathVariable int id) {
        DeliveryDTO delivery = deliveryService.getDeliveryById(id);
        return ResponseEntity.ok(delivery);
    }

    // Crear un nuevo delivery
    @PostMapping
    public ResponseEntity<DeliveryDTO> createDelivery(@RequestBody DeliveryDTO deliveryDTO) {
        DeliveryDTO createdDelivery = deliveryService.createDelivery(deliveryDTO);
        return ResponseEntity.ok(createdDelivery);
    }

    // Actualizar un delivery existente
    @PutMapping("/{id}")
    public ResponseEntity<DeliveryDTO> updateDelivery(@PathVariable int id, @RequestBody DeliveryDTO deliveryDTO) {
        DeliveryDTO updatedDelivery = deliveryService.updateDelivery(id, deliveryDTO);
        return ResponseEntity.ok(updatedDelivery);
    }

    // Eliminar un delivery por ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDelivery(@PathVariable int id) {
        deliveryService.deleteDelivery(id);
        return ResponseEntity.noContent().build();
    }
}
/*
   DeliveryController v1
    * Sin revisar
    * ToDo {volver a escribir los endpoints. No recuerdo las URL acordadas}
*/