package com.delimovil.backend.repositories;

import com.delimovil.backend.models.entity.Delivery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IDeliveryRepository extends JpaRepository<Delivery, Integer> {
}
