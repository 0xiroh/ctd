package com.company;

public abstract class Figura {

    private Double dimension;

    public Figura(Double dimension) {
        this.dimension = dimension;
    }

    public Double getDimension() {
        return dimension;
    }

    public abstract Double calcularArea();
}
