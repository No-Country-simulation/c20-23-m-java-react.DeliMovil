package com.delimovil.backend.shared.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception{
        return httpSecurity
                .csrf(config-> config.disable())
                .authorizeHttpRequests(a -> a
                        .anyRequest().permitAll()
                )
                .formLogin(formLoginCustomizer -> {
                    formLoginCustomizer
                            .loginPage("/login") // URL de tu página de login personalizada
                            .successHandler(successDirection()) // Redirección tras login exitoso
                            .permitAll();
                })
                .build();
    }

        public AuthenticationSuccessHandler successDirection(){
            return ((request, response, authentication) -> {
                response.sendRedirect("/");

            });    }

}