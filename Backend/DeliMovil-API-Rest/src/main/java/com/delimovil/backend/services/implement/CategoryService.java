package com.delimovil.backend.services.implement;

import com.delimovil.backend.dto.CategoryDto;
import com.delimovil.backend.dto.CategoryRequestDto;
import com.delimovil.backend.models.entity.Category;
import com.delimovil.backend.repositories.ICategoryRepository;
import com.delimovil.backend.services.interfaces.ICategoryService;

import com.delimovil.backend.shared.exception.personalized.ModelAlreadyExistsException;
import com.delimovil.backend.shared.exception.personalized.ModelNotFoundException;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Data
public class CategoryService implements ICategoryService {

    @Autowired
    private ICategoryRepository categoryRepository;
    @Autowired
    private ModelMapper modelMapper;
    @Override
    public List<CategoryDto> getAll(){
        return categoryRepository.findAll().stream()
                .map(category -> modelMapper.map(category, CategoryDto.class))
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public CategoryDto getByName(String name){
        Category category = categoryRepository.findByName(name);
        return modelMapper.map(category, CategoryDto.class);
    }

    @Override
    @Transactional(readOnly = true)
    public CategoryDto getById(Integer categoryId) {
        Category category = categoryRepository.findById(categoryId).orElseThrow(
                ()-> new ModelNotFoundException(categoryId, Category.class.getSimpleName())
        );
        return modelMapper.map(category, CategoryDto.class);
    }

    @Override
    @Transactional
    public CategoryDto create(CategoryRequestDto request){
        Category nameCategory = categoryRepository.findByName(request.getName());
        if (nameCategory != null){
             throw new ModelAlreadyExistsException(request.getName());
        }
        Category category = new Category();
        category.setName(request.getName());
        category.setDescription(request.getDescription());
        categoryRepository.save(category);
        return modelMapper.map(category, CategoryDto.class);
    }

    @Override
    @Transactional
    public CategoryDto update(CategoryRequestDto request, Integer categoryId){
        Category category = categoryRepository.findById(categoryId).orElseThrow(
                ()-> new ModelNotFoundException(categoryId, Category.class.getSimpleName())
        );
        category.setName(request.getName());
        category.setDescription(request.getDescription());
        categoryRepository.save(category);
        return modelMapper.map(category, CategoryDto.class);
    }

    @Override
    @Transactional
    public void delete(Integer categoryId){
        Category category = categoryRepository.findById(categoryId).orElseThrow(
                ()-> new ModelNotFoundException(categoryId, Category.class.getSimpleName())
        );
        categoryRepository.delete(category);

    }
}
