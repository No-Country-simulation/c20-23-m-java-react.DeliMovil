package com.delimovil.backend.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderDetailDTO {
    private Integer orderId;
    private ProductDTO product;
    @NotNull
    private Integer amount;
    @NotNull
    private Double subtotal;
    @NotNull
    private Double productPrice;


}
