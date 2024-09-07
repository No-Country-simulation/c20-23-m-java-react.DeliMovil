package com.delimovil.backend.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class OrderDetailPKRequestDTO {
    @NotNull
    private Integer orderId;

    @NotNull
    private Integer productId;
}
