package com.delimovil.backend.models.entity;


import jakarta.persistence.*;
import lombok.*;


@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString
public class OrderDetail {
    @EmbeddedId
    private OrderDetailPK id;

    @ManyToOne
    @MapsId("orderId")
    @JoinColumn(name = "order_id")
    private Order order;

    @ManyToOne
    @MapsId("productId")
    @JoinColumn(name = "product_id")
    private Product product;
    private Integer amount;
    private Double subtotal;
    private Double productPrice;

    public OrderDetail(Order order, Product product) {
    }
}
