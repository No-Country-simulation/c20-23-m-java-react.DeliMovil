package com.delimovil.backend.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ClientRequestDTO {
    @NotBlank
    @Size(min = 2, max = 45)
    private String first_name;
    @NotBlank
    @Size(min = 2, max = 45)
    private String last_name;

    @NotBlank
    @Size(min = 6, max = 20)
    private String phone;
    @NotBlank
    @Size(min = 6, max = 45)
    private String latitude;
    @NotBlank
    @Size(min = 6, max = 45)
    private String longitude;
    @NotBlank
    @Size(min = 3, max = 45)
    private String name_street;

    @NotBlank
    @Size(min = 1, max = 45)
    private String number_street;
    @NotBlank
    @Size(min = 1, max = 5)
    private String floor_department;

    @NotBlank
    @Size(min = 8, max = 45)
    private String userName;
    @NotBlank
    @Size(min = 8, max = 20)
    private String password;
    @Email
    @NotBlank
    @Size(min = 12, max = 45)
    private String email;
}
