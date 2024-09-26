package com.delimovil.backend.controllers;

import com.delimovil.backend.dto.OrderDTO;
import com.delimovil.backend.dto.OrderRequestDTO;
import com.delimovil.backend.services.interfaces.IOrderService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/order")
public class OrderController {
    @Autowired
    private IOrderService orderService;

    @GetMapping
    public ResponseEntity<List<OrderDTO>> findAllOrders() {
        return ResponseEntity.ok(orderService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderDTO> findOrderById(@PathVariable @Min(1) Integer id) {
        return ResponseEntity.ok(orderService.findById(id));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<OrderDTO> createOrder(@Valid @RequestBody OrderRequestDTO order) {
        return ResponseEntity.status(HttpStatus.CREATED).body(orderService.save(order));
    }

    @PatchMapping("/{id}")
    public ResponseEntity<OrderDTO> updateOrder(
            @RequestBody OrderRequestDTO order,
            @PathVariable @Min(1) Integer id
    ) {
        return ResponseEntity.ok(orderService.update(order, id));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public ResponseEntity<Void> deleteOrder(@PathVariable @Min(1) Integer id){
        this.orderService.deleteById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

}
