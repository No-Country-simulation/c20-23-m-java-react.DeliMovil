package com.delimovil.backend.dto;

public class DeliveryDTO {
    private int id;
    private String firstname;
    private String lastname;
    private String phone;

    //Constructor por defecto
    public DeliveryDTO() {

    }

    //Constructor con parámetros
    public DeliveryDTO(int id, String firstname, String lastname, String phone){
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
    }

    //Getters y Setters
    public int getId() {
        return id;
    }

    public void setId(int id){
        this.id = id;
    }

    public String getFirstname(){
        return firstname;
    }

    public void setFirstname(String firstname){
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname){
        this.lastname = lastname;
    }

    public String getPhone(){
        return phone;
    }

    public void setPhone(String phone){
        this.phone = phone;
    }

    //Método toString para depuración
    @Override
    public String toString() {
        return "DeliveryDTO{" +
                "id=" + id +
                ", firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", phone='" + phone + '\'' +
                '}';
    }

}