package com.company;

public class Circulo extends Figura {


    public Circulo(Double dimension) {
        super(dimension);
    }

    @Override
    public Double calcularArea() {
        return Math.PI * Math.pow(super.getDimension(), 2.0);
    }
}
