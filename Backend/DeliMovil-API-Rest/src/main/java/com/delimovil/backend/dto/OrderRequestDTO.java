package com.delimovil.backend.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderRequestDTO {
    @NotNull
    private Double total;

    @NotNull
    private Integer clientId;

    @NotNull
    private Integer localId;

    @NotNull
    private Integer deliveryId;

    @NotNull
    private Date date;

    @NotBlank
    @Size(min=2, max = 45)
    private String state;
}
