package com.delimovil.backend.controllers;

import com.delimovil.backend.dto.LocalCreateDTO;
import com.delimovil.backend.dto.LocalDTO;
import com.delimovil.backend.dto.LocalRequestDTO;
import com.delimovil.backend.services.interfaces.ILocalService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/local")
public class LocalController {
    @Autowired
    private ILocalService localService;

    @GetMapping
    public ResponseEntity<List<LocalDTO>> findAllLocal() {
        return ResponseEntity.ok(localService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<LocalDTO> findLocalById(@PathVariable @Min(1) Integer id) {
        return ResponseEntity.ok(localService.findById(id));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<LocalDTO> createLocal(@Valid @RequestBody LocalCreateDTO local) {
        return ResponseEntity.status(HttpStatus.CREATED).body(localService.save(local));
    }

    @PatchMapping("/{id}")
    public ResponseEntity<LocalDTO> updateLocal(
            @RequestBody LocalRequestDTO local,
            @PathVariable @Min(1) Integer id
    ) {
        return ResponseEntity.ok(localService.update(local, id));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public ResponseEntity<Void> deleteLocal(@PathVariable @Min(1) Integer id){
        this.localService.deleteById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();

    }
}
