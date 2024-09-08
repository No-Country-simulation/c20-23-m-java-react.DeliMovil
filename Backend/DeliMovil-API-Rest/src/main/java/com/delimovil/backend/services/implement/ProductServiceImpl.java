package com.delimovil.backend.services.implement;

import com.delimovil.backend.dto.ProductDTO;
import com.delimovil.backend.dto.ProductRequestDTO;
import com.delimovil.backend.dto.RestaurantDTO;
import com.delimovil.backend.models.entity.*;
import com.delimovil.backend.repositories.IProductRepository;
import com.delimovil.backend.repositories.IProductCategoryRepository;
import com.delimovil.backend.services.interfaces.ICategoryService;
import com.delimovil.backend.services.interfaces.IProductService;
import com.delimovil.backend.services.interfaces.IRestaurantService;
import com.delimovil.backend.shared.exception.personalized.ModelNotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements IProductService {
    @Autowired
    private IProductRepository productRepository;

    @Autowired
    private IRestaurantService restaurantService;

    @Autowired
    private IProductCategoryRepository product_categoryRepository;

    @Autowired
    private ICategoryService categoryService;

    @Autowired
    private ModelMapper mapper;
    
    @Override
    @Transactional(readOnly = true)
    public List<ProductDTO> findAll() {
        return this.productRepository.findAll()
                .stream()
                .map(res -> mapper.map(res, ProductDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public ProductDTO findById(Integer id) {
        Product product = productRepository.findById(id).orElseThrow(
                () -> new ModelNotFoundException(id, Product.class.getSimpleName())
        );

        return mapper.map(product, ProductDTO.class);
    }

    @Override
    @Transactional
    public ProductDTO save(ProductRequestDTO productDTO) {
        RestaurantDTO restaurantDTO = restaurantService.findById(productDTO.getIdRestaurant());

        Product product = mapper.map(productDTO, Product.class);
        product.setRestaurant( mapper.map(restaurantDTO, Restaurant.class) );
        product.setId(null);
        Product saveProduct = this.productRepository.save(product);

        return mapper.map(saveProduct, ProductDTO.class);
    }

    @Override
    @Transactional
    public ProductDTO update(ProductRequestDTO productDTO, Integer id) {
        Product productBD = this.productRepository.findById(id).orElseThrow(
                () -> new ModelNotFoundException(id, Product.class.getSimpleName())
        );

        productBD.setName(productDTO.getName());
        productBD.setDescription(productDTO.getDescription());

        Product updatedProduct = this.productRepository.save(productBD);

        return mapper.map(updatedProduct, ProductDTO.class);
    }

    @Override
    @Transactional
    public void assignCategory(Integer productId, Integer categoryId) {
        Product product = mapper.map(this.findById(productId), Product.class);
        Category category = mapper.map(this.categoryService.getById(categoryId), Category.class);

        this.product_categoryRepository.save(new ProductCategory(category, product));
    }

    @Override
    @Transactional
    public void deleteById(Integer id) {
        Optional<Product> product = this.productRepository.findById(id);
        if (product.isEmpty()){
            throw new ModelNotFoundException(id, Product.class.getSimpleName());
        }
        this.productRepository.deleteById(id);
    }

    //GET PRODUCTS BY CATEGORIES
    @Override
    @Transactional(readOnly = true)
    public List<ProductDTO> getProductsByCategoryId(Integer categoryId) {
        List<Product> products = product_categoryRepository.findProductsByCategoryId(categoryId);
        if (products.isEmpty()){
            throw new ModelNotFoundException(categoryId, "Products by that category");
        }
        return products.stream().map(product -> mapper.map(product, ProductDTO.class)).toList();

    }

}
