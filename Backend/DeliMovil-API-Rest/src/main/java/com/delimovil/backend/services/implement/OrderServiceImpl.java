package com.delimovil.backend.services.implement;

import com.delimovil.backend.dto.OrderDTO;
import com.delimovil.backend.dto.OrderRequestDTO;
import com.delimovil.backend.models.entity.Order;
import com.delimovil.backend.repositories.IOrderRepository;
import com.delimovil.backend.services.interfaces.IOrderService;
import com.delimovil.backend.shared.exception.personalized.ModelNotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements IOrderService {

    @Autowired
    private IOrderRepository orderRepo;

    @Autowired
    private ModelMapper mapper;


    @Override
    @Transactional(readOnly = true)
    public List<OrderDTO> findAll() {
        return this.orderRepo.findAll()
                .stream()
                .map(res -> mapper.map(res, OrderDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public OrderDTO findById(Integer id) {
        Order order = orderRepo.findById(id).orElseThrow(
                () -> new ModelNotFoundException(id, Order.class.getSimpleName())
        );
        return mapper.map(order, OrderDTO.class);
    }

    @Override
    @Transactional
    public OrderDTO save(OrderRequestDTO orderDTO) {
        Order order = mapper.map(orderDTO,Order.class);
        Order saveOrder = this.orderRepo.save(order);
        return mapper.map(saveOrder, OrderDTO.class);
    }

    @Override
    @Transactional
    public OrderDTO update(OrderRequestDTO orderDTO, Integer id) {
        Order orderBD = this.orderRepo.findById(id).orElseThrow(
                () -> new ModelNotFoundException(id, Order.class.getSimpleName())
        );
        /*Acá pensé que los datos que podría llegar a querer modificar un cliente, un local o un delivery es el monto total o el estado del pedido.
        * Más adelante vemos si necesitamos que se puedan modificar más cosas, como por ej. el delivery(pensando en el caso de que el delivery quisiera cancelar el envío ya aceptado */
        orderBD.setState(orderDTO.getState());
        orderBD.setTotal((orderDTO.getTotal()));
        Order updatedOrder = this.orderRepo.save(orderBD);
        return mapper.map(updatedOrder, OrderDTO.class);
    }

    @Override
    @Transactional
    public void deleteById(Integer id) {
        Optional<Order> order = this.orderRepo.findById(id);
        if(order.isEmpty()){
            throw new ModelNotFoundException(id, Order.class.getSimpleName());
        }
        this.orderRepo.deleteById(id);
    }
}
