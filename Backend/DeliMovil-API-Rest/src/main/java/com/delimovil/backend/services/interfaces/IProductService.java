package com.delimovil.backend.services.interfaces;

import com.delimovil.backend.dto.ProductDTO;
import com.delimovil.backend.dto.ProductRequestDTO;

import java.util.List;

public interface IProductService {
    List<ProductDTO> findAll();
    ProductDTO findById(Integer id);
    ProductDTO save(ProductRequestDTO productDTO);
    ProductDTO update(ProductRequestDTO productDTO, Integer id);
    void assignCategory(Integer productId, Integer categoryId);
    void deleteById(Integer id);
    List<ProductDTO> getProductsByCategoryId(Integer categoryId);
}
