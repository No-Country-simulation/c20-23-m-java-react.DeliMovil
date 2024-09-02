package com.delimovil.backend.services.interfaces;

import com.delimovil.backend.dto.CategoryRequest;
import com.delimovil.backend.models.entity.Category;

import java.util.List;

public interface ICategoryService {
    List<Category> getAll();
    Category getByName(String name);

    Category create(CategoryRequest request);
    Category update(CategoryRequest request, Integer categoryId);

    boolean delete(Integer categoryId);
}
