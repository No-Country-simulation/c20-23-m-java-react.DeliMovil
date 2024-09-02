package com.delimovil.backend.controllers;

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
    public ResponseEntity<Category> create(@Valid @RequestBody CategoryRequestDto request){
        Category category = categoryService.create(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(category);

    }
    @PutMapping("/{categoryId}")
    public ResponseEntity<Category> update(@Valid @RequestBody CategoryRequestDto request, @PathVariable @Min(1) Integer categoryId){
        Category category = categoryService.update(request, categoryId);
        return ResponseEntity.status(HttpStatus.CREATED).body(category);
    }

    @DeleteMapping("/{categoryId}")
    public ResponseEntity<Boolean> delete(@PathVariable @Min(1) Integer categoryId){
        boolean res = categoryService.delete(categoryId);
        return ResponseEntity.ok(res);
    }


}
