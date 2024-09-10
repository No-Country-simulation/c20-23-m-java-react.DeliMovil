package com.delimovil.backend.dto;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderDetailRequestDTO {
    @NotNull
    @Min(1)
    private Integer productId;
    @NotNull
    @Min(1)
    private Integer amount;
    @NotNull
    @DecimalMin("0.0")
    private Double subtotal;
    @NotNull
    @DecimalMin("0.0")
    private Double productPrice;
}
