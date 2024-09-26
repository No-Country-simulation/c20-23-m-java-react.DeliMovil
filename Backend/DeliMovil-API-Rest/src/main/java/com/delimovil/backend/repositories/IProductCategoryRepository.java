package com.delimovil.backend.repositories;

import com.delimovil.backend.models.entity.Category;
import com.delimovil.backend.models.entity.Product;
import com.delimovil.backend.models.entity.ProductCategoryPK;
import com.delimovil.backend.models.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IProductCategoryRepository extends JpaRepository<ProductCategory, ProductCategoryPK> {
    @Query("SELECT pc.product FROM ProductCategory pc WHERE pc.category.id = :categoryId")
    List<Product> findProductsByCategoryId(@Param("categoryId") Integer categoryId);

    @Query("SELECT pc.category FROM ProductCategory pc WHERE pc.product.id = :productId")
    List<Category> findCategoriesByProductId(@Param("productId") Integer productId);
}
