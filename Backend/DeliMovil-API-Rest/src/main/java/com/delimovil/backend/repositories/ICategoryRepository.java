package com.delimovil.backend.repositories;

import com.delimovil.backend.models.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICategoryRepository extends JpaRepository<Category, Integer> {

    Category findByName(String name);
}
