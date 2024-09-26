package com.delimovil.backend.dto;


import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
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
public class OrderDTO {
    @NotNull
    @Min(1)
    private Integer id;

    private Double total;

    private DeliveryDTO delivery;

    private ClientDTO client;

    private LocalDTO local;

    private LocalDateTime date;
    @NotBlank
    private String state;
    private List<OrderDetailDTO> orderDetails;
}
