package com.delimovil.backend.models.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "product_category")
@IdClass(ProductCategoryPK.class)
public class ProductCategory {
    @Id
    private Category category;
    @Id
    private Product product;
}
