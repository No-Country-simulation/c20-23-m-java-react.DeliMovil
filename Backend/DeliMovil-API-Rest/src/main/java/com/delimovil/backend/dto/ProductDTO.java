package com.delimovil.backend.dto;

import com.delimovil.backend.models.entity.ProductCategory;
import com.delimovil.backend.models.entity.Restaurant;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductDTO {
    @NotBlank
    @Min(1)
    private Integer id;
    @NotBlank
    @Size(min = 3, max = 45)
    private String name;
    @NotBlank
    @Size(min = 3, max = 45)
    private String description;
    private Restaurant restaurant;
    @Min(1)
    private Double price;
    private Set<ProductCategory> productCategories;
}
