package com.delimovil.backend.models.entity;

import jakarta.persistence.*;


@Entity(name = "restaurant")
public class Restaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(length = 45)
    private String name;
    @Column(length = 100)
    private String description;
}
