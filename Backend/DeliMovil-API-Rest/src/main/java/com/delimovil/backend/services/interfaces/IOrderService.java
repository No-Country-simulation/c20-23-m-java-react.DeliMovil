package com.delimovil.backend.services.interfaces;

import com.delimovil.backend.dto.OrderDTO;
import com.delimovil.backend.dto.OrderRequestDTO;

import java.util.List;

public interface IOrderService {
    public List<OrderDTO> findAll();
    public OrderDTO findById(Integer id);
    public OrderDTO save(OrderRequestDTO orderDTO);
    public OrderDTO update(OrderRequestDTO order, Integer id);
    public void deleteById(Integer id);

}
