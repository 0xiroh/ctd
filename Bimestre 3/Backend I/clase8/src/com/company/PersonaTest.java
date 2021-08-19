package com.company;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.*;

class PersonaTest {
    Persona p1;

    @BeforeEach
    void doBefore(){
        p1 = new Persona("Juanito", "Perez", "jperez@gmail.com");
        p1.setEdad(LocalDate.of(1995, 9, 2));
    }

    @Test
    void getNombreCompleto(){
        assertTrue(p1.nombreConMasDe5Letras());
    }

    @Test
    void getEsMayorYNombreMasDe5Letras(){
        assertEquals(p1.nombreConMasDe5Letras(), p1.mayorDeEdad());
    }
}