package com.delimovil.backend.dto;

import com.delimovil.backend.models.entity.ProductCategory;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryDto {
    @NotBlank
    private Integer id;
    @NotBlank
    private String name;
    @NotBlank
    private String description;

//    private Set<ProductCategory> productCategories;
}
