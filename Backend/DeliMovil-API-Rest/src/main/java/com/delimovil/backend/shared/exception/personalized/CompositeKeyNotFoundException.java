package com.delimovil.backend.shared.exception.personalized;

public class CompositeKeyNotFoundException extends RuntimeException{
    public CompositeKeyNotFoundException(Object compositeKey, String entityName) {
        super(String.format("The object was not found - Composite Key: %s - Entity: %s", compositeKey.toString(), entityName));
    }
}
