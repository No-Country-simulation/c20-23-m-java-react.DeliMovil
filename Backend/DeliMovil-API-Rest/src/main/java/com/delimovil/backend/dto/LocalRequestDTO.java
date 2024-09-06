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
public class LocalRequestDTO {
    @NotBlank
    @Size(min = 3, max = 45)
    private String name;
    @NotBlank
    @Size(min = 3, max = 45)
    private String latitude;
    @NotBlank
    @Size(min = 3, max = 45)
    private String longitude;
    @NotBlank
    @Size(min = 3, max = 20)
    private String phone;
    @NotNull
    @Min(1)
    private Integer numberStreet;
    @NotBlank
    @Size(min = 3, max = 5)
    private String floorDepartment;
    @NotNull
    @Min(1)
    private Integer restaurant_id;
}
