package com.delimovil.backend.shared.exception;

import com.delimovil.backend.shared.exception.personalized.ModelNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;

@RestControllerAdvice
public class GlobalErrorHandler {
    @ExceptionHandler(Exception.class)
    public ResponseEntity<GeneralErrorResponse> handlerAllExceptions(Exception ex, WebRequest request) {
        GeneralErrorResponse response = new GeneralErrorResponse(
                LocalDateTime.now(),
                ex.getMessage(),
                request.getDescription(false)
        );

        return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
    }

    @ExceptionHandler(ModelNotFoundException.class)
    public ResponseEntity<GeneralErrorResponse> handlerModelNotFound(Exception ex, WebRequest request){
        GeneralErrorResponse response = new GeneralErrorResponse(
                LocalDateTime.now(),
                ex.getMessage(),
                request.getDescription(false)
        );

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
    }
}
