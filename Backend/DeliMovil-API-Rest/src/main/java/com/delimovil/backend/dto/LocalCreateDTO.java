package com.delimovil.backend.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LocalCreateDTO {
    @NotBlank
    @Size(min = 3, max = 45)
    private String name;
    @NotNull
    @Min(1)
    private Integer restaurant_id;
}
