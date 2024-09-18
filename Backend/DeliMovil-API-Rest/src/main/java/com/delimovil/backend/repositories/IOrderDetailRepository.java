package com.delimovil.backend.repositories;

import com.delimovil.backend.models.entity.OrderDetail;
import com.delimovil.backend.models.entity.OrderDetailPK;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IOrderDetailRepository extends JpaRepository<OrderDetail, OrderDetailPK> {
}
