package com.delimovil.backend.services.implement;

import com.cloudinary.Cloudinary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@Service
public class CloudinaryService {
    @Autowired
    private Cloudinary cloudinary;

    public String uploadFile(MultipartFile file) {
        try {
            Map uploadResult = cloudinary.uploader().upload(file.getBytes(), Map.of());
            return (String) uploadResult.get("url");
        } catch (IOException e) {
            throw new RuntimeException("Error al subir la imagen", e);
        }
    }
}
