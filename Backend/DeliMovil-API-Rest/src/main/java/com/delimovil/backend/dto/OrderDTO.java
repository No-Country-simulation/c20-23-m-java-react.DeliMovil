package com.delimovil.backend.dto;

import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderDTO {
    @NotBlank
    @Min(1)
    private Integer id;

    @NotBlank
    private Double total;

    private DeliveryDTO delivery;

    private ClientDTO client;

    private LocalDTO local;
    @NotNull
    private Date date;
    @NotBlank
    private String state;
}
