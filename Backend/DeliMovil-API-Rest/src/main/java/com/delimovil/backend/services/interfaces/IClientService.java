package com.delimovil.backend.services.interfaces;

import com.delimovil.backend.dto.ClientDTO;
import com.delimovil.backend.dto.ClientRequestDTO;

import java.util.List;

public interface IClientService {

    public List<ClientDTO> findAll();
    public ClientDTO findById(Integer id);
    public ClientDTO save(ClientRequestDTO clientDTO);
    public ClientDTO update(ClientRequestDTO client, Integer id);
    public void deleteById(Integer id);


    
}
