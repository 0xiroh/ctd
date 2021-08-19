package com.company;

public class Bosque {
    private static final String tipoDeArboles[] = {"Ornamentales", "Frutales", "otro"};
    public static void main(String[] args) {
	// write your code here


        ArbolFactory arbol = new ArbolFactory();

        arbol.getArbol(400, 500, "Verde", "Ornamental");

        Runtime runtime = Runtime.getRuntime();
        System.out.println("Memoria usada: " + (runtime.totalMemory() -
        runtime.freeMemory()) / (1024 * 1024));

    }
}
