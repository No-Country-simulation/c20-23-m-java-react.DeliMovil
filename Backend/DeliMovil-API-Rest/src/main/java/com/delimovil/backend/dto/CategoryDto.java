package com.delimovil.backend.dto;

import com.delimovil.backend.models.entity.Product_Category;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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

    private Set<Product_Category> productCategories;
}
