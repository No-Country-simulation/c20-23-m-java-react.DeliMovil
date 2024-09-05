package com.delimovil.backend.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class DeliveryDTO {
    @NotBlank
    @Min(1)
    private Integer id;

    @NotBlank
    @Size(min = 3, max = 45)
    private String firstname;

    @NotBlank
    @Size(min = 3, max = 45)
    private String lastname;

    @NotBlank
    @Size(min = 6, max = 15)
    private String phone;

    // Método toString para depuración
    @Override
    public String toString() {
        return "DeliveryCreateDTO{" +
                "firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", phone='" + phone + '\'' +
                '}';
    }
}