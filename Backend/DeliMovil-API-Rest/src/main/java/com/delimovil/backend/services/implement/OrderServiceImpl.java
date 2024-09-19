package com.delimovil.backend.services.implement;

import com.delimovil.backend.dto.*;
import com.delimovil.backend.models.entity.*;
import com.delimovil.backend.repositories.*;
import com.delimovil.backend.services.interfaces.IOrderService;
import com.delimovil.backend.shared.exception.personalized.ModelNotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements IOrderService {

    @Autowired
    private IOrderRepository orderRepo;

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private IClientRepository clientRepo;
    @Autowired
    private IDeliveryRepository deliveryRepo;
    @Autowired
    private ILocalRepository localRepo;
    @Autowired
    private IProductRepository productRepo;
    @Autowired
    private IOrderDetailRepository orderDetailRepo;
    @Override
    @Transactional(readOnly = true)
    public List<OrderDTO> findAll() {
        List<Order> orders = this.orderRepo.findAll();
        return orders.stream()
                .map(order -> {
                    OrderDTO orderDTO = new OrderDTO();
                    orderDTO.setId(order.getId());
                    orderDTO.setTotal(order.getTotal());
                    orderDTO.setClient(mapper.map(order.getClient(), ClientDTO.class));
                    orderDTO.setLocal(mapper.map(order.getLocal(), LocalDTO.class));
                    orderDTO.setDelivery(order.getDelivery() != null ? mapper.map(order.getDelivery(), DeliveryDTO.class) : null);
                    orderDTO.setDate(order.getDate());
                    orderDTO.setState(order.getState());

                    List<OrderDetailDTO> orderDetailDTOs = order.getOrderDetails().stream()
                            .map(detail -> {
                                OrderDetailDTO dto = new OrderDetailDTO();
                                dto.setProduct(mapper.map(detail.getProduct(), ProductDTO.class));
                                dto.setAmount(detail.getAmount());
                                dto.setSubtotal(detail.getSubtotal());
                                dto.setProductPrice(detail.getProductPrice());
                                return dto;
                            })
                            .collect(Collectors.toList());
                    orderDTO.setOrderDetails(orderDetailDTOs);

                    return orderDTO;
                })
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public OrderDTO findById(Integer id) {
        Order order = orderRepo.findById(id).orElseThrow(() ->
                new ModelNotFoundException(id, Order.class.getSimpleName()));

        OrderDTO orderDTO = new OrderDTO();
        orderDTO.setId(order.getId());
        orderDTO.setTotal(order.getTotal());
        orderDTO.setClient(mapper.map(order.getClient(), ClientDTO.class));
        orderDTO.setLocal(mapper.map(order.getLocal(), LocalDTO.class));
        orderDTO.setDelivery(order.getDelivery() != null ? mapper.map(order.getDelivery(), DeliveryDTO.class) : null);
        orderDTO.setDate(order.getDate());
        orderDTO.setState(order.getState());

        List<OrderDetailDTO> orderDetailDTOs = order.getOrderDetails().stream()
                .map(detail -> {
                    OrderDetailDTO dto = new OrderDetailDTO();
                    dto.setProduct(mapper.map(detail.getProduct(), ProductDTO.class));
                    dto.setAmount(detail.getAmount());
                    dto.setSubtotal(detail.getSubtotal());
                    dto.setProductPrice(detail.getProductPrice());
                    return dto;
                })
                .collect(Collectors.toList());
        orderDTO.setOrderDetails(orderDetailDTOs);

        return orderDTO;
    }

    @Override
    @Transactional
    public OrderDTO save(OrderRequestDTO orderDTO) {
        // 1. Crear la entidad Order
        Order order = new Order();

        // 2. Asociar las entidades relacionadas
        order.setClient(clientRepo.findById(orderDTO.getClientId()).orElseThrow(() ->
                new ModelNotFoundException(orderDTO.getClientId(), "Client")));
        order.setLocal(localRepo.findById(orderDTO.getLocalId()).orElseThrow(() ->
                new ModelNotFoundException(orderDTO.getLocalId(), "Local")));
        if (orderDTO.getDeliveryId() != null) {
            order.setDelivery(deliveryRepo.findById(orderDTO.getDeliveryId()).orElseThrow(() ->
                    new ModelNotFoundException(orderDTO.getDeliveryId(), "Delivery")));
        }

        // Asignar la fecha actual y el estado inicial
        order.setDate(LocalDateTime.now());
        order.setState("PENDING");
        order = orderRepo.save(order);

        // Crear una variable final para almacenar el ID de la orden que luego será usada en el .map a orderDetails
        final Integer orderId = order.getId();

        // 3. Crear los detalles de la orden
        List<OrderDetail> orderDetails = new ArrayList<>();
        for (OrderDetailRequestDTO detailRequest : orderDTO.getOrderDetails()) {
            Product product = productRepo.findById(detailRequest.getProductId()).orElseThrow(() ->
                    new ModelNotFoundException(detailRequest.getProductId(), "Product"));

            OrderDetailPK pk = new OrderDetailPK();
            pk.setOrderId(order.getId());
            pk.setProductId(product.getId());

            OrderDetail orderDetail = new OrderDetail();
            orderDetail.setId(pk);
            orderDetail.setOrder(order);
            orderDetail.setProduct(product);
            orderDetail.setAmount(detailRequest.getAmount());
            orderDetail.setProductPrice(product.getPrice());
            Double subtotal = detailRequest.getAmount() * product.getPrice();
            orderDetail.setSubtotal(subtotal);

            orderDetails.add(orderDetail);
        }

        // 5. Guardar la Order nuevamente para actualizar el total y las orderDetails
        order.setOrderDetails(orderDetails);
        double total = orderDetails.stream()
                .mapToDouble(OrderDetail::getSubtotal)
                .sum();
        order.setTotal(total);
        order = orderRepo.save(order);

        OrderDTO orderDTOResponse = new OrderDTO();
        orderDTOResponse.setId(order.getId());
        orderDTOResponse.setTotal(order.getTotal());
        orderDTOResponse.setClient(mapper.map(order.getClient(), ClientDTO.class));
        orderDTOResponse.setLocal(mapper.map(order.getLocal(), LocalDTO.class));
        orderDTOResponse.setDelivery(order.getDelivery() != null ? mapper.map(order.getDelivery(), DeliveryDTO.class) : null);
        orderDTOResponse.setDate(order.getDate());
        orderDTOResponse.setState(order.getState());

        List<OrderDetailDTO> orderDetailDTOs = orderDetails.stream()
                .map(detail -> {
                    OrderDetailDTO dto = new OrderDetailDTO();
                    dto.setOrderId(orderId);
                    dto.setProduct(mapper.map(detail.getProduct(), ProductDTO.class));
                    dto.setAmount(detail.getAmount());
                    dto.setSubtotal(detail.getSubtotal());
                    dto.setProductPrice(detail.getProductPrice());
                    return dto;
                })
                .collect(Collectors.toList());
        orderDTOResponse.setOrderDetails(orderDetailDTOs);

        return orderDTOResponse;
    }


    @Override
    @Transactional
    public OrderDTO update(OrderRequestDTO orderDTO, Integer id) {
        // Obtener la orden de la base de datos
        Order orderBD = this.orderRepo.findById(id).orElseThrow(
                () -> new ModelNotFoundException(id, Order.class.getSimpleName())
        );

        // Actualizar el estado si se proporciona
        if (orderDTO.getState() != null) {
            orderBD.setState(orderDTO.getState());
        }

        // Actualizar el delivery si se proporciona
        if (orderDTO.getDeliveryId() != null) {
            Delivery delivery = deliveryRepo.findById(orderDTO.getDeliveryId()).orElseThrow(
                    () -> new ModelNotFoundException(orderDTO.getDeliveryId(), Delivery.class.getSimpleName())
            );
            orderBD.setDelivery(delivery);
        }

        // Guardar la orden actualizada
        Order updatedOrder = this.orderRepo.save(orderBD);

        // Mapear manualmente el DTO para evitar problemas con ModelMapper
        OrderDTO orderDTOResponse = new OrderDTO();
        orderDTOResponse.setId(updatedOrder.getId());
        orderDTOResponse.setState(updatedOrder.getState());
        orderDTOResponse.setTotal(updatedOrder.getTotal());
        orderDTOResponse.setDate(updatedOrder.getDate());
        orderDTOResponse.setClient(mapper.map(updatedOrder.getClient(), ClientDTO.class));
        orderDTOResponse.setLocal(mapper.map(updatedOrder.getLocal(), LocalDTO.class));
        orderDTOResponse.setDelivery(updatedOrder.getDelivery() != null ? mapper.map(updatedOrder.getDelivery(), DeliveryDTO.class) : null);
        List<OrderDetailDTO> orderDetailDTOs = updatedOrder.getOrderDetails().stream()
                .map(detail -> {
                    OrderDetailDTO dto = new OrderDetailDTO();
                    dto.setOrderId(detail.getOrder().getId());  // Usa el ID de la orden
                    dto.setProduct(mapper.map(detail.getProduct(), ProductDTO.class));
                    dto.setAmount(detail.getAmount());
                    dto.setSubtotal(detail.getSubtotal());
                    dto.setProductPrice(detail.getProductPrice());
                    return dto;
                })
                .collect(Collectors.toList());
        orderDTOResponse.setOrderDetails(orderDetailDTOs);

        return orderDTOResponse;
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
