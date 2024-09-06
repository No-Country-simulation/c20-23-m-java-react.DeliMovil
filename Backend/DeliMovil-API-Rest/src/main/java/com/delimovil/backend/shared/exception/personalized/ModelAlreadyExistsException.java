package com.delimovil.backend.shared.exception.personalized;

public class ModelAlreadyExistsException extends RuntimeException{
    public ModelAlreadyExistsException() {
        super("The action cannot be performed, the model already exists.");
    }

    public ModelAlreadyExistsException(String nameModel) {
        super(String.format("The action cannot be performed, the model already exists. - Name Model: %s",
                nameModel));
    }
}
