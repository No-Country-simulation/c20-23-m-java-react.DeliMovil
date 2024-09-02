package com.delimovil.backend.controllers;

import com.delimovil.backend.dto.ClientDTO;
import com.delimovil.backend.dto.ClientRequestDTO;
import com.delimovil.backend.services.interfaces.IClientService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/client")
public class ClientController {

    @Autowired
    private IClientService clientService;

    @GetMapping
    public ResponseEntity<List<ClientDTO>> findAllClients(){
        return ResponseEntity.ok(clientService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ClientDTO> findClientById(@PathVariable @Min(1) Integer id){
        return ResponseEntity.ok(clientService.findById(id));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public  ResponseEntity<ClientDTO> createClient(@Valid @RequestBody ClientRequestDTO client){
        return ResponseEntity.status(HttpStatus.CREATED).body(clientService.save(client));
    }

    @PatchMapping("/{id}")
    public ResponseEntity<ClientDTO> updateClient(
            @RequestBody ClientRequestDTO client,
            @PathVariable @Min(1) Integer id
    ){
        return ResponseEntity.ok(clientService.update(client, id));
    }


    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public ResponseEntity<Void> deleteClient(@PathVariable @Min(1) Integer id){
        clientService.deleteById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }


}
