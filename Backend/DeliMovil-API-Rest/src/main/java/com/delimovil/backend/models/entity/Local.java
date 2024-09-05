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
    private String name;
    private String latitude;
    private String longitude;
    private String phone;
    @Column(name = "number_street")
    private Integer numberStreet;
    @Column(name = "floor_department")
    private String floorDepartment;
    private boolean isOpen;
}
