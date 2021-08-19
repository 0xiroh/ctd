package com.company;

public class Main {

    public static void main(String[] args) {
	// write your code here

        Figura chircu = new Circulo(2.0);
        System.out.println(chircu.calcularArea());

        Figura cuadr = new Cuadrado(4.0);
        System.out.println(cuadr.calcularArea());



    }
}
