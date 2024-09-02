package com.delimovil.backend.controllers;

import com.delimovil.backend.dto.CategoryRequest;
import com.delimovil.backend.models.entity.Category;
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
    public ResponseEntity<List<Category>> getAll(){
        List<Category> list = categoryService.getAll();

        return ResponseEntity.ok(list);
    }
    @GetMapping("/{name}")
    public ResponseEntity<Category> getByName(@PathVariable String name){
        Category category = categoryService.getByName(name);
        return ResponseEntity.ok(category);
    }

    @PostMapping
    public ResponseEntity<Category> create(@Valid @RequestBody CategoryRequest request){
        Category category = categoryService.create(request);
        return ResponseEntity.ok(category);

    }
    @PutMapping("/{categoryId}")
    public ResponseEntity<Category> update(@Valid @RequestBody CategoryRequest request, @PathVariable Integer categoryId){
        Category category = categoryService.update(request, categoryId);
        return ResponseEntity.ok(category);
    }

    @DeleteMapping("/{categoryId}")
    public ResponseEntity<Boolean> delete(@PathVariable Integer categoryId){
        boolean res = categoryService.delete(categoryId);
        return ResponseEntity.ok(res);
    }


}
