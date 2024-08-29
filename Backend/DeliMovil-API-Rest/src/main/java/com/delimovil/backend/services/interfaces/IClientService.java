package com.delimovil.backend.services.interfaces;

import com.delimovil.backend.models.entity.Client;

import java.util.List;

public interface IClientService {

    public List<Client> getClients();
    public void saveClient(Client client);
    public void deleteClient(int id);
    public Client getClient(int id);
    public void editClient(Client client);
    
}
