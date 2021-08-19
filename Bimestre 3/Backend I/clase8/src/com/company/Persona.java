package com.company;

import java.time.LocalDate;
import java.time.Period;

public class Persona {

    private String nombre;
    private String apellido;
    private String email;
    private LocalDate edad;

    public Persona(String nombre, String apellido, String email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }

    public boolean nombreConMasDe5Letras(){
        if(nombre.length() < 5){
            return false;
        }
        return true;
    }

    public boolean mayorDeEdad() {
        return (Period.between(edad, LocalDate.now()).getYears() >= 18);
    }

    public LocalDate getEdad() {
        return edad;
    }

    public void setEdad(LocalDate edad) {
        this.edad = edad;
    }
}
