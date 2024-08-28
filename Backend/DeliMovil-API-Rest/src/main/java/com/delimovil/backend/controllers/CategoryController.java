package com.delimovil.backend.controllers;

import com.delimovil.backend.dto.CategoryRequest;
import com.delimovil.backend.models.entity.CategoryModel;
import com.delimovil.backend.services.interfaces.ICategoryService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
@RequiredArgsConstructor
public class CategoryController {
    @Autowired
    private ICategoryService categoryService;

    @GetMapping
    public ResponseEntity<List<CategoryModel>> getAll(){
        List<CategoryModel> list = categoryService.getAll();
        if (list.isEmpty()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        return ResponseEntity.ok(list);
    }
    @GetMapping("/{name}")
    public ResponseEntity<CategoryModel> getByName(@PathVariable String name){
        CategoryModel categoryModel = categoryService.getByName(name);
        if (categoryModel == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        return ResponseEntity.ok(categoryModel);
    }

    @PostMapping
    public ResponseEntity<CategoryModel> create(@Valid @RequestBody CategoryRequest request){
        CategoryModel categoryModel = categoryService.create(request);
        if (categoryModel == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        return ResponseEntity.ok(categoryModel);

    }
    @PutMapping("/{categoryId}")
    public ResponseEntity<CategoryModel> update(@Valid @RequestBody CategoryRequest request, @PathVariable Long categoryId){
        CategoryModel categoryModel = categoryService.update(request, categoryId);
        if(categoryModel == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        return ResponseEntity.ok(categoryModel);
    }

    @DeleteMapping("/{categoryId}")
    public ResponseEntity<String> delete(@PathVariable Long categoryId){
        String res = categoryService.delete(categoryId);
        if (res.isEmpty()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        return ResponseEntity.ok(res);
    }


}
