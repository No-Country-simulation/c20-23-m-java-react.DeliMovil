package com.delimovil.backend.services.implement;

import com.delimovil.backend.dto.OrderDetailDTO;
import com.delimovil.backend.dto.OrderDetailPKRequestDTO;
import com.delimovil.backend.dto.OrderDetailRequestDTO;
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
                .map(orderDetail -> mapper.map(orderDetail, OrderDetailDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public OrderDetailDTO findById(OrderDetailPKRequestDTO idDTO) {
        OrderDetailPK id = mapper.map(idDTO, OrderDetailPK.class);
        OrderDetail orderDetail = orderDetailRepo.findById(id).orElseThrow(
                () -> new CompositeKeyNotFoundException(id ,OrderDetail.class.getSimpleName())
        );
        return mapper.map(orderDetail, OrderDetailDTO.class);
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
