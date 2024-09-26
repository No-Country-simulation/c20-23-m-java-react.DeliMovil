package com.delimovil.backend.shared.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {

            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // Permitir todas las rutas
                        .allowedOrigins("http://localhost:5173") // Permitir cualquier origen
                        .allowedMethods("*") // Permitir todos los métodos HTTP
                        .allowedHeaders("*") // Permitir todas las cabeceras
                        .allowCredentials(true) // Permitir credenciales
                        .maxAge(3600); // Cache de la solicitud preflight por una hora
            }
        };
    }
}
