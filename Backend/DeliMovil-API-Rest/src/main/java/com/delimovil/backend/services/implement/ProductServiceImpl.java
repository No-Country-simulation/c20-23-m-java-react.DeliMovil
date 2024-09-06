package com.delimovil.backend.services.implement;

import com.delimovil.backend.dto.ProductDTO;
import com.delimovil.backend.dto.ProductRequestDTO;
import com.delimovil.backend.dto.RestaurantDTO;
import com.delimovil.backend.models.entity.Product;
import com.delimovil.backend.models.entity.Restaurant;
import com.delimovil.backend.repositories.IProductRepository;
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
    public void deleteById(Integer id) {
        Optional<Product> product = this.productRepository.findById(id);
        if (product.isEmpty()){
            throw new ModelNotFoundException(id, Product.class.getSimpleName());
        }
        this.productRepository.deleteById(id);
    }
}
