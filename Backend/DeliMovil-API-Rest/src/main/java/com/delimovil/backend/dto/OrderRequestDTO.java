package com.delimovil.backend.dto;


import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderRequestDTO {
    private Double total;

    @NotNull
    private Integer clientId;

    @NotNull
    private Integer localId;


    private Integer deliveryId;

    private LocalDateTime date;

    @Size(min=2, max = 45)
    private String state;
    private List<OrderDetailRequestDTO> orderDetails;

}
