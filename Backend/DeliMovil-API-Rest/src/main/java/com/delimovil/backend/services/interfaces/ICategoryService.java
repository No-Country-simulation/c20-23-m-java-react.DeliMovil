package com.delimovil.backend.services.interfaces;

import com.delimovil.backend.dto.CategoryRequest;
import com.delimovil.backend.models.entity.CategoryModel;

import java.util.List;

public interface ICategoryService {
    List<CategoryModel> getAll();
    CategoryModel getByName(String name);

    CategoryModel create(CategoryRequest request);
    CategoryModel update(CategoryRequest request, Long categoryId);

    String delete(Long categoryId);
}
