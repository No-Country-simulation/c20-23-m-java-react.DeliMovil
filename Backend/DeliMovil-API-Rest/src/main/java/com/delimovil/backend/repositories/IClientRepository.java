package com.delimovil.backend.repositories;

import com.delimovil.backend.models.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IClientRepository extends JpaRepository <Client, Integer> {
    Optional<Client> findByEmailAndPassword(String email, String password);
}
