package com.delimovil.backend.repositories;

import com.delimovil.backend.models.entity.Product_CategoryPK;
import com.delimovil.backend.models.entity.Product_Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IProduct_CategoryRepository extends JpaRepository<Product_Category, Product_CategoryPK> {
}
