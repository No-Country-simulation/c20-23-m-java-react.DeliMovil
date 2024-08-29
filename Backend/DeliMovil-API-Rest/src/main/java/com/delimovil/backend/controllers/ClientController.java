package com.delimovil.backend.controllers;

import com.delimovil.backend.models.entity.Client;
import com.delimovil.backend.services.interfaces.IClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ClientController {

    @Autowired
    private IClientService clientService;

    @GetMapping("/api/client/getAll")
    public List<Client> getClients(){
        return clientService.getClients();
    }

    @GetMapping("/api/client/get/{id}")
    public Client getClient(@PathVariable int id){
        return clientService.getClient(id);
    }

    @PostMapping("/api/client/create")
    public void saveClient(@RequestBody Client client){
        clientService.saveClient(client);
    }

    @DeleteMapping("/api/client/delete/{id}")
    public void deleteClient(@PathVariable int id){
        clientService.deleteClient(id);
    }

    @PutMapping("/api/client/edit")
    public void editClient(@RequestBody Client client){
        clientService.editClient(client);
    }

}
