package com.delimovil.backend.services.interfaces;

import com.delimovil.backend.dto.ClientDTO;
import com.delimovil.backend.dto.ClientLoginDTO;
import com.delimovil.backend.dto.ClientRequestDTO;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface IClientService {

    public List<ClientDTO> findAll();
    public ClientDTO findById(Integer id);
    public ClientDTO save(ClientRequestDTO clientDTO, MultipartFile image);
    public ClientDTO update(ClientRequestDTO clientDTO, MultipartFile image, Integer id);
    public void deleteById(Integer id);
    ClientDTO findByEmailAndPassword(String email, String password);

    
}
