package com.company;

public class Main {

    public static void main(String[] args) {
	// write your code here

        Empleado c1 = new Contratado("Juan", "suarez", "102102", 560.0, 80);
        Empleado c2 = new Dependencia("Andres", "soto", "5678", 600.0, 50.0, 40.0);

        System.out.println(c1.calculoSueldo());
        System.out.println(c2.calculoSueldo());
    }
}
