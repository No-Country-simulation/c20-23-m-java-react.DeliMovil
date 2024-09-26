package com.delimovil.backend.services.interfaces;

import com.delimovil.backend.dto.CategoryDto;
import com.delimovil.backend.dto.CategoryRequestDto;

import java.util.List;

public interface ICategoryService {
    List<CategoryDto> getAll();
    CategoryDto getByName(String name);

    CategoryDto getById(Integer categoryId);
    CategoryDto create(CategoryRequestDto request);
    CategoryDto update(CategoryRequestDto request, Integer categoryId);

    void delete(Integer categoryId);
    List<CategoryDto> getCategoriesByProductId(Integer productId);
}
