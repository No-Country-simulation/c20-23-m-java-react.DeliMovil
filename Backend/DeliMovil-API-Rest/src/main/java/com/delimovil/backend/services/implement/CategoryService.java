package com.delimovil.backend.services.implement;

import com.delimovil.backend.dto.CategoryRequest;
import com.delimovil.backend.models.entity.Category;
import com.delimovil.backend.repositories.ICategoryRepository;
import com.delimovil.backend.services.interfaces.ICategoryService;
import jakarta.transaction.Transactional;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Data
public class CategoryService implements ICategoryService {

    @Autowired
    private ICategoryRepository categoryRepository;
    @Override
    public List<Category> getAll(){
        return categoryRepository.findAll();
    }

    @Override
    public Category getByName(String name){
        return categoryRepository.findByName(name);
    }

    @Override
    @Transactional
    public Category create(CategoryRequest request){
        Category nameCategory = categoryRepository.findByName(request.getName());
        if (nameCategory != null){
            return null;
        }
        Category category = new Category();
        category.setName(request.getName());
        category.setDescription(request.getDescription());
        return categoryRepository.save(category);
    }

    @Override
    public Category update(CategoryRequest request, Integer categoryId){
        Optional<Category> optional = categoryRepository.findById(categoryId);
        if (optional.isEmpty()){
            return null;
        }
        Category category = optional.get();
        category.setName(request.getName());
        category.setDescription(request.getDescription());
        return categoryRepository.save(category);
    }

    @Override
    public boolean delete(Integer categoryId){
        Optional<Category> optional = categoryRepository.findById(categoryId);
        if (optional.isEmpty()){
            return false;
        }
        Category category = optional.get();
        categoryRepository.delete(category);
        return true;
    }
}
