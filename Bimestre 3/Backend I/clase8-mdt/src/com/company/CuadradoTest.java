package com.company;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CuadradoTest {
    Cuadrado c1;
    @BeforeEach
    public void doBefore() {
        c1 = new Cuadrado(4.0);
    }

    @Test
    public void calculoArea(){
        assertEquals(4.0*4.0, c1.calcularArea());
    }
}