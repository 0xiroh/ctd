package com.company;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class PersonaTest {

    @Test
    public void esMayor() {
        Persona juan = new Persona("Juan", "Perez", "jperez@gmail.com", 15);
        Persona anto = new Persona("Anto", "Lopez", "alopez@gmail.com", 20);

        boolean esMayor = juan.esMayor();
        boolean esMayor1 = anto.esMayor();

        assertEquals(false, esMayor);
        assertTrue(esMayor1);
    }



    @Test
    void testToString() {
        Persona juan = new Persona("Juan", "Perez", "jperez@gmail.com", 15);
        Persona anto = new Persona("Anto", "Lopez", "alopez@gmail.com", 20);

        assertEquals("Perez, Juan", juan.toString());


    }
}