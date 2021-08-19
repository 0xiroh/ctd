package com.company;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CirculoTest {
    Circulo circu;
    @BeforeEach
    void doBefore(){
        circu = new Circulo(1.0);
    }

    @Test
    void calculoArea(){
        assertEquals(1*1*Math.PI, circu.calcularArea());
    }

}