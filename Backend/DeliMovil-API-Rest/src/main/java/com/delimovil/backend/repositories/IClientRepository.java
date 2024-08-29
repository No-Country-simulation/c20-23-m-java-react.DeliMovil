package com.delimovil.backend.repositories;

import com.delimovil.backend.models.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IClientRepository extends JpaRepository <Client, Integer> {
}
