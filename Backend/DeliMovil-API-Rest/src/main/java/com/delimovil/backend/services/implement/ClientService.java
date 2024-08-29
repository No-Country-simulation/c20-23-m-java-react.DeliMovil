package com.delimovil.backend.services.implement;

import com.delimovil.backend.models.entity.Client;
import com.delimovil.backend.repositories.IClientRepository;
import com.delimovil.backend.services.interfaces.IClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService implements IClientService {
    @Autowired
    private IClientRepository clientRepo;

    @Override
    public List<Client> getClients() {
        List<Client> clientsList = clientRepo.findAll();
        return clientsList;
    }

    @Override
    public void saveClient(Client client) {
    clientRepo.save(client);
    }

    @Override
    public void deleteClient(int id) {
    clientRepo.deleteById(id);
    }

    @Override
    public Client getClient(int id) {
        Client client = clientRepo.findById(id).orElse(null);
        return client;
    }

    @Override
    public void editClient(Client client) {
        this.saveClient(client);
    }
}
