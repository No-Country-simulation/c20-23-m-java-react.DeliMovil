package com.delimovil.backend.controllers;

import com.delimovil.backend.dto.DeliveryDTO;
import com.delimovil.backend.dto.DeliveryLoginDTO;
import com.delimovil.backend.dto.DeliveryRequestDTO;
import com.delimovil.backend.services.interfaces.IDeliveryService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/delivery")
public class DeliveryController {
    @Autowired
    private IDeliveryService deliveryService;

    @GetMapping
    public ResponseEntity<List<DeliveryDTO>> findAllDeliveries(){
        return ResponseEntity.ok(deliveryService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<DeliveryDTO> findDeliveryById(@PathVariable @Min(1) Integer id){
        return ResponseEntity.ok(deliveryService.findById(id));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<DeliveryDTO> createDelivery(@Valid @RequestBody DeliveryRequestDTO delivery){
        return ResponseEntity.status(HttpStatus.CREATED).body(deliveryService.save(delivery));
    }

    @PatchMapping("/{id}")
    public ResponseEntity<DeliveryDTO> updateDelivery(
            @RequestBody DeliveryRequestDTO delivery,
            @PathVariable @Min(1) Integer id
    ){
        return ResponseEntity.ok(deliveryService.update(delivery, id));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public ResponseEntity<Void> deleteDelivery(@PathVariable @Min(1) Integer id){
        deliveryService.deleteById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

}
