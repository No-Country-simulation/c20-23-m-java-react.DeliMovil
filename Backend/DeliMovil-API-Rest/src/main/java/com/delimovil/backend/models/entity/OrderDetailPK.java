package com.delimovil.backend.models.entity;

import jakarta.persistence.Embeddable;
import lombok.*;

import java.io.Serializable;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Embeddable
public class OrderDetailPK implements Serializable {
    private Integer orderId;
    private Integer productId;
}
