package com.delimovil.backend;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DeliMovilApiRestApplication {


    public static void main(String[] args) {

        /* Las siguientes 2 líneas son para cargar las variables de entorno definidas en el archivo .env */
        Dotenv dotenv = Dotenv.load();
        dotenv.entries().forEach(entry -> System.setProperty(entry.getKey(), entry.getValue()));

        SpringApplication.run(DeliMovilApiRestApplication.class, args);
    }

}
