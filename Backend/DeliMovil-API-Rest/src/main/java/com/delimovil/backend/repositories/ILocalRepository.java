package com.delimovil.backend.repositories;

import com.delimovil.backend.models.entity.Local;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ILocalRepository extends JpaRepository<Local, Integer> {
}
