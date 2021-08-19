package com.company;

public class Cuadrado extends Figura{


    public Cuadrado(Double dimension) {
        super(dimension);
    }

    @Override
    public Double calcularArea() {
        return Math.pow(super.getDimension(), 2);
    }
}
