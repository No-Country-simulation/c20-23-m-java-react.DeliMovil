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
public class DeliveryRequestDTO {
    @NotBlank
    @Size(min = 2, max = 45)
    private String firstName;
    @NotBlank
    @Size(min = 2, max = 45)
    private String lastName;
    @NotBlank
    @Size(min = 2, max = 20)
    private String phone;
    @NotBlank
    @Size(min = 8, max = 45)
    private String userName;
    @NotBlank
    @Size(min = 8, max = 20)
    private String password;
    @NotBlank
    @Size(min = 12, max = 45)
    @Email
    private String email;
}
