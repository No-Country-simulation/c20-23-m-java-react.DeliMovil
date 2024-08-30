package com.delimovil.backend.services.implement;

import com.delimovil.backend.dto.ClientDTO;
import com.delimovil.backend.dto.ClientRequestDTO;
import com.delimovil.backend.models.entity.Client;
import com.delimovil.backend.repositories.IClientRepository;
import com.delimovil.backend.services.interfaces.IClientService;
import com.delimovil.backend.shared.exception.personalized.ModelNotFoundException;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ClientServiceImpl implements IClientService {
    @Autowired
    private IClientRepository clientRepo;
    @Autowired
    private ModelMapper mapper;
    @Override
    @Transactional
    public List<ClientDTO> findAll() {
        return this.clientRepo.findAll()
                .stream()
                .map(res -> mapper.map(res, ClientDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public ClientDTO findById(Integer id) {
        Client client = clientRepo.findById(id).orElseThrow(
                () -> new ModelNotFoundException(id, Client.class.getSimpleName())
        );
        return mapper.map(client, ClientDTO.class);
    }

    @Override
    @Transactional
    public ClientDTO save(ClientRequestDTO clientDto) {
        Client client = mapper.map(clientDto, Client.class);
        Client saveClient = this.clientRepo.save(client);
        return mapper.map(saveClient, ClientDTO.class);
    }

    @Override
    @Transactional
    public ClientDTO update(ClientRequestDTO clientDto, Integer id) {
        Client clientBD = this.clientRepo.findById(id).orElseThrow(
                () -> new ModelNotFoundException(id, Client.class.getSimpleName())
        );
        clientBD.setFirst_name(clientDto.getFirst_name());
        clientBD.setLast_name(clientBD.getLast_name());
        clientBD.setPhone(clientBD.getPhone());
        clientBD.setLatitude(clientBD.getLatitude());
        clientBD.setLongitude(clientBD.getLongitude());
        clientBD.setName_street(clientBD.getName_street());
        clientBD.setNumber_street(clientBD.getNumber_street());
        clientBD.setFloor_department(clientBD.getFloor_department());

        Client updatedClient = this.clientRepo.save(clientBD);
        return mapper.map(updatedClient, ClientDTO.class);
    }

    @Override
    @Transactional
    public void deleteById(Integer id) {
        Optional<Client> client = this.clientRepo.findById(id);
        if(client.isEmpty()){
            throw new ModelNotFoundException(id, Client.class.getSimpleName());
        }
        this.clientRepo.deleteById(id);
    }




}
