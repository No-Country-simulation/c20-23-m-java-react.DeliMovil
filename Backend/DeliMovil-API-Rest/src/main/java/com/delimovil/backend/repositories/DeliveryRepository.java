package com.example.delimovil.repository;

import com.example.delimovil.entity.Delivery;
import org.springframework.data.jpa.repository.JpaRepository; // JpaRepository proporciona métodos como findAll(), findById(), save(), deleteById(), etc.
import org.springframework.stereotype.Repository;

@Repository
public interface DeliveryRepository extends JpaRepository<Delivery, Integer> {


}
