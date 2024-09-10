package com.delimovil.backend.models.entity;

import jakarta.persistence.*;
import lombok.*;


@Entity(name = "restaurant")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString
public class Restaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    private Integer id;
    @Column(length = 45)
    private String name;
    @Column(length = 100)
    private String description;
    @Column(length = 250)
    private String imageUrl;
}
