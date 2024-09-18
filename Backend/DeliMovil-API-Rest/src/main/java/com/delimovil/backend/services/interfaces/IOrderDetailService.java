package com.delimovil.backend.services.interfaces;

import com.delimovil.backend.dto.OrderDetailDTO;
import com.delimovil.backend.dto.OrderDetailPKRequestDTO;
import com.delimovil.backend.dto.OrderDetailRequestDTO;


import java.util.List;

public interface IOrderDetailService {
    public List<OrderDetailDTO> findAll();
    public OrderDetailDTO findById(OrderDetailPKRequestDTO orderDerailPK);

    public OrderDetailDTO save(OrderDetailRequestDTO orderDetailDTO);
    public OrderDetailDTO update(OrderDetailRequestDTO orderDetailDTO, OrderDetailPKRequestDTO id);

    public void deleteById(OrderDetailPKRequestDTO id);
}
