package com.delimovil.backend.repositories;

import com.delimovil.backend.models.entity.Category;
import com.delimovil.backend.models.entity.Product;
import com.delimovil.backend.models.entity.Product_CategoryPK;
import com.delimovil.backend.models.entity.Product_Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IProduct_CategoryRepository extends JpaRepository<Product_Category, Product_CategoryPK> {
    @Query("SELECT pc.product FROM Product_Category pc WHERE pc.category.id = :categoryId")
    List<Product> findProductsByCategoryId(@Param("categoryId") Integer categoryId);

    @Query("SELECT pc.category FROM Product_Category pc WHERE pc.product.id = :productId")
    List<Category> findCategoriesByProductId(@Param("productId") Integer productId);
}
