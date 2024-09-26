package com.delimovil.backend.controllers;

import com.delimovil.backend.dto.ProductDTO;
import com.delimovil.backend.dto.ProductRequestDTO;
import com.delimovil.backend.services.interfaces.IProductService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    @Autowired
    private IProductService productService;

    @GetMapping
    public ResponseEntity<List<ProductDTO>> findAllProducts() {
        return ResponseEntity.ok(productService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductDTO> findProductById(@PathVariable @Min(1) Integer id) {
        return ResponseEntity.ok(productService.findById(id));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<ProductDTO> createProduct(
            @RequestPart("product") ProductRequestDTO product,
            @RequestPart("image") MultipartFile image
    ) {
        return ResponseEntity.status(HttpStatus.CREATED).body(productService.save(product, image));
    }

    @PatchMapping("/{id}")
    public ResponseEntity<ProductDTO> updateProduct(
            @RequestPart("product") ProductRequestDTO product,
            @RequestPart(value = "image", required = false) MultipartFile image,
            @PathVariable @Min(1) Integer id
    ) {
        return ResponseEntity.ok(productService.update(product, image, id));
    }

    //Para asignar una categoria a producto
    @PatchMapping("/{id-product}/category/{id-category}")
    public ResponseEntity<Void> assignCategory(
            @PathVariable(name = "id-product") Integer idProduct,
            @PathVariable(name = "id-category") Integer idCategory
    ) {
        this.productService.assignCategory(idProduct, idCategory);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public ResponseEntity<Void> deleteProduct(@PathVariable @Min(1) Integer id){
        this.productService.deleteById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();

    }

    @GetMapping("/category/{categoryId}")
    public ResponseEntity<List<ProductDTO>> getProductsByCategory(@PathVariable @Min(1) Integer categoryId){
        List<ProductDTO> list = productService.getProductsByCategoryId(categoryId);
        return ResponseEntity.ok(list);
    }
}
