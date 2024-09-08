package com.delimovil.backend.controllers;

import com.delimovil.backend.dto.CategoryDto;
import com.delimovil.backend.dto.CategoryRequestDto;
import com.delimovil.backend.models.entity.Category;
import com.delimovil.backend.services.interfaces.ICategoryService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@RequiredArgsConstructor
public class CategoryController {
    @Autowired
    private ICategoryService categoryService;


    @GetMapping
    public ResponseEntity<List<CategoryDto>> getAll(){
        List<CategoryDto> list = categoryService.getAll();
        return ResponseEntity.ok(list);
    }
    @GetMapping("/name/{name}")
    public ResponseEntity<CategoryDto> getByName(@PathVariable String name){
        CategoryDto category = categoryService.getByName(name);
        return ResponseEntity.ok(category);
    }
    @GetMapping("/{category-id}")
    public ResponseEntity<CategoryDto> getById(@PathVariable(name = "category-id") @Min(1) Integer categoryId){
        CategoryDto category = categoryService.getById(categoryId);
        return ResponseEntity.ok(category);
    }

    @PostMapping
    public ResponseEntity<CategoryDto> create(@Valid @RequestBody CategoryRequestDto request){
        CategoryDto category = categoryService.create(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(category);

    }
    @PatchMapping("/{category-id}")
    public ResponseEntity<CategoryDto> update(
            @Valid @RequestBody CategoryRequestDto request,
            @PathVariable(name = "category-id") @Min(1) Integer categoryId
    ){
        CategoryDto category = categoryService.update(request, categoryId);
        return ResponseEntity.ok(category);
    }

    @DeleteMapping("/{category-id}")
    public ResponseEntity<Void> delete(@PathVariable(name = "category-id") @Min(1) Integer categoryId){
        categoryService.delete(categoryId);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
    @GetMapping("/product/{product-id}")
    public ResponseEntity<List<CategoryDto>> getCategoriesByProduct(
            @PathVariable(name = "product-id") @Min(1) Integer productId
    ){
        List<CategoryDto> list = categoryService.getCategoriesByProductId(productId);
        return ResponseEntity.ok(list);
    }


}
