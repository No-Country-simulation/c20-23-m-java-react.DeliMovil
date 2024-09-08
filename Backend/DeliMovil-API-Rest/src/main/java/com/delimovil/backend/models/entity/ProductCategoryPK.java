package com.delimovil.backend.models.entity;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Embeddable
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductCategoryPK implements Serializable {
    private Integer categoryId;
    private Integer productId;
}
