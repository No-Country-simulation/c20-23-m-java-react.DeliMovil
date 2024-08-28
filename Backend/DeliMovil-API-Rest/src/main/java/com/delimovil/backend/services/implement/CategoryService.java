package com.delimovil.backend.services.implement;

import com.delimovil.backend.dto.CategoryRequest;
import com.delimovil.backend.models.entity.CategoryModel;
import com.delimovil.backend.repositories.ICategoryRepository;
import com.delimovil.backend.services.interfaces.ICategoryService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
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
    public List<CategoryModel> getAll(){
        return categoryRepository.findAll();
    }

    @Override
    public CategoryModel getByName(String name){
        return categoryRepository.findByName(name);
    }

    @Override
    public CategoryModel create(CategoryRequest request){
        CategoryModel nameCategory = categoryRepository.findByName(request.getName());
        if (nameCategory != null){
            return null;
        }
        CategoryModel categoryModel= new CategoryModel();
        categoryModel.setName(request.getName());
        categoryModel.setDescription(request.getDescription());
        return categoryRepository.save(categoryModel);
    }

    @Override
    public CategoryModel update(CategoryRequest request, Long categoryId){
        Optional<CategoryModel> optional = categoryRepository.findById(categoryId);
        if (optional.isEmpty()){
            return null;
        }
        CategoryModel categoryModel = optional.get();
        categoryModel.setName(request.getName());
        categoryModel.setDescription(request.getDescription());
        return categoryRepository.save(categoryModel);
    }

    @Override
    public String delete(Long categoryId){
        CategoryModel categoryModel = categoryRepository.findById(categoryId).get();
        categoryRepository.delete(categoryModel);
        return "Succeed deleted";
    }
}
