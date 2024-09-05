package com.delimovil.backend.models.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity(name = "local")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString
public class Local {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    private Integer id;
    @Column(length = 45)
    private String name;
    @Column(length = 45)
    private String latitude;
    @Column(length = 45)
    private String longitude;
    @Column(length = 20)
    private String phone;
    @Column(name = "number_street")
    private Integer numberStreet;
    @Column(name = "floor_department", length = 5)
    private String floorDepartment;
    @ManyToOne
    @JoinColumn(name = "restaurant_id")
    private Restaurant restaurant;
    private boolean isOpen;
}
