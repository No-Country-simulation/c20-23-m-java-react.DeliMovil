package com.delimovil.backend.shared.exception.personalized;

public class ModelNotFoundException extends RuntimeException{
    public ModelNotFoundException() {
        super("The object was not found.");
    }

    public ModelNotFoundException(Integer idNotFound, String nameModel) {
        super(String.format("The object was not found - id not found: %d - Name Model: %s",
                idNotFound, nameModel));
    }
    public ModelNotFoundException(String email, String nameModel) {
        super(String.format("The object was not found - email not found: %d - Name Model: %s",
                email, nameModel));
    }
}
