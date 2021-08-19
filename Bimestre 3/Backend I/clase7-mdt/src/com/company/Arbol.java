package com.company;

public class Arbol {

    private int alto;
    private int largo;
    private String color;
    private String tipoArbol;

    public Arbol(int alto, int largo, String color, String tipoArbol) {
        this.alto = alto;
        this.largo = largo;
        this.color = color;
        this.tipoArbol = tipoArbol;
    }

    @Override
    public String toString() {
        return "Arbol{" +
                "alto=" + alto +
                ", largo=" + largo +
                ", color='" + color + '\'' +
                ", tipoArbol='" + tipoArbol + '\'' +
                '}';
    }
}
