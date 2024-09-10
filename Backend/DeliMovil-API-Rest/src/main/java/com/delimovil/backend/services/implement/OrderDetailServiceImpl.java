package com.delimovil.backend.services.implement;

import com.delimovil.backend.dto.OrderDetailDTO;
import com.delimovil.backend.dto.OrderDetailPKRequestDTO;
import com.delimovil.backend.dto.OrderDetailRequestDTO;
import com.delimovil.backend.dto.ProductDTO;
import com.delimovil.backend.models.entity.OrderDetail;
import com.delimovil.backend.models.entity.OrderDetailPK;
import com.delimovil.backend.repositories.IOrderDetailRepository;
import com.delimovil.backend.services.interfaces.IOrderDetailService;
import com.delimovil.backend.shared.exception.personalized.CompositeKeyNotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class OrderDetailServiceImpl  implements IOrderDetailService {
    @Autowired
    private IOrderDetailRepository orderDetailRepo;
    @Autowired
    private ModelMapper mapper;

    @Override
    @Transactional(readOnly = true)
    public List<OrderDetailDTO> findAll() {
        return orderDetailRepo.findAll()
                .stream()
                .map(orderDetail -> {
                    OrderDetailDTO dto = new OrderDetailDTO();
                    dto.setOrderId(orderDetail.getId().getOrderId());
                    dto.setAmount(orderDetail.getAmount());
                    dto.setSubtotal(orderDetail.getSubtotal());
                    dto.setProductPrice(orderDetail.getProductPrice());
                    dto.setProduct(mapper.map(orderDetail.getProduct(), ProductDTO.class)); // Mapea el producto si es necesario
                    return dto;
                })
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public OrderDetailDTO findById(OrderDetailPKRequestDTO idDTO) {
        // Convertir el DTO a una clave compuesta
        OrderDetailPK id = new OrderDetailPK(idDTO.getOrderId(), idDTO.getProductId());

        // Buscar el OrderDetail en la base de datos
        OrderDetail orderDetail = orderDetailRepo.findById(id).orElseThrow(
                () -> new CompositeKeyNotFoundException(id, OrderDetail.class.getSimpleName())
        );

        // Crear un nuevo OrderDetailDTO y mapear los valores manualmente
        OrderDetailDTO orderDetailDTO = new OrderDetailDTO();

        // Asignar los valores de OrderDetail a OrderDetailDTO
        orderDetailDTO.setOrderId(orderDetail.getOrder().getId());
        orderDetailDTO.setAmount(orderDetail.getAmount());
        orderDetailDTO.setSubtotal(orderDetail.getSubtotal());
        orderDetailDTO.setProductPrice(orderDetail.getProductPrice());

        // Mapear manualmente el ProductDTO
        ProductDTO productDTO = new ProductDTO();
        productDTO.setId(orderDetail.getProduct().getId());
        productDTO.setName(orderDetail.getProduct().getName());
        productDTO.setPrice(orderDetail.getProduct().getPrice()); // Asignar manualmente el precio del producto

        // Asignar el ProductDTO al OrderDetailDTO
        orderDetailDTO.setProduct(productDTO);

        return orderDetailDTO;
    }



    @Override
    @Transactional
    public OrderDetailDTO save(OrderDetailRequestDTO orderDetailRequestDTO) {
        OrderDetail orderDetail = mapper.map(orderDetailRequestDTO, OrderDetail.class);
        OrderDetail savedOrderDetail = orderDetailRepo.save(orderDetail);
        return mapper.map(savedOrderDetail, OrderDetailDTO.class);
    }
    @Override
    @Transactional
    public OrderDetailDTO update(OrderDetailRequestDTO orderDetailRequestDTO,  OrderDetailPKRequestDTO idDTO) {
        OrderDetailPK id = mapper.map(idDTO, OrderDetailPK.class);
        OrderDetail orderDetailDB = orderDetailRepo.findById(id).orElseThrow(
                () -> new CompositeKeyNotFoundException(id, OrderDetail.class.getSimpleName())
        );


        orderDetailDB.setAmount(orderDetailRequestDTO.getAmount());
        orderDetailDB.setSubtotal(orderDetailRequestDTO.getSubtotal());
        orderDetailDB.setProductPrice(orderDetailRequestDTO.getProductPrice());

        OrderDetail updatedOrderDetail = orderDetailRepo.save(orderDetailDB);
        return mapper.map(updatedOrderDetail, OrderDetailDTO.class);
    }

    @Override
    @Transactional
    public void deleteById(OrderDetailPKRequestDTO idDTO) {
        OrderDetailPK id = mapper.map(idDTO, OrderDetailPK.class);
        if (!orderDetailRepo.existsById(id)) {
            throw new CompositeKeyNotFoundException(id, OrderDetail.class.getSimpleName());
        }
        orderDetailRepo.deleteById(id);
    }

}
