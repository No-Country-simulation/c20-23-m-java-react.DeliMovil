package com.delimovil.backend.controllers;

import com.delimovil.backend.dto.OrderDetailDTO;
import com.delimovil.backend.dto.OrderDetailPKRequestDTO;
import com.delimovil.backend.dto.OrderDetailRequestDTO;
import com.delimovil.backend.services.interfaces.IOrderDetailService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/order-detail")
public class OrderDetailController {
    @Autowired
    private IOrderDetailService orderDetailService;

    @GetMapping
    public ResponseEntity<List<OrderDetailDTO>> findAll() {
        return ResponseEntity.ok(orderDetailService.findAll());
    }
    @GetMapping("/{orderId}/{productId}")
    public ResponseEntity<OrderDetailDTO> findOrderDetailById(
            @PathVariable @Min(1) Integer orderId,
            @PathVariable @Min(1) Integer productId) {
        OrderDetailPKRequestDTO idDTO = new OrderDetailPKRequestDTO(orderId, productId);
        return ResponseEntity.ok(orderDetailService.findById(idDTO));
    }
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<OrderDetailDTO> createOrderDetail(
            @Valid @RequestBody OrderDetailRequestDTO orderDetailDTO) {
        return ResponseEntity.status(HttpStatus.CREATED).body(orderDetailService.save(orderDetailDTO));
    }
    @PatchMapping("/{orderId}/{productId}")
    public ResponseEntity<OrderDetailDTO> updateOrderDetail(
            @RequestBody OrderDetailRequestDTO orderDetailDTO,
            @PathVariable @Min(1) Integer orderId,
            @PathVariable @Min(1) Integer productId) {
        OrderDetailPKRequestDTO idDTO = new OrderDetailPKRequestDTO(orderId, productId);
        return ResponseEntity.ok(orderDetailService.update(orderDetailDTO, idDTO));
    }
    @DeleteMapping("/{orderId}/{productId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public ResponseEntity<Void> deleteOrderDetail(
            @PathVariable @Min(1) Integer orderId,
            @PathVariable @Min(1) Integer productId) {
        OrderDetailPKRequestDTO idDTO = new OrderDetailPKRequestDTO(orderId, productId);
        orderDetailService.deleteById(idDTO);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

}
