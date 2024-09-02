package com.delimovil.backend.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryRequestDto {
    @NotBlank(message = "Name cannot be null")
    @Size(min = 3, max = 45)
    private String name;
    @Size(min = 10, max = 100)
    @NotBlank(message = "Description cannot be null")
    private String description;

}
