package com.company;

public class Persona {

    private String nombre;
    private String apellido;
    private String email;
    private Integer edad;

    public Persona(String nombre, String apellido, String email, Integer edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.edad = edad;
    }

    public Boolean esMayor(){
        if (edad < 18){
            return false;
        }
        return true;
    }


    @Override
    public String toString() {
        return apellido + ", " + nombre;
    }


}
