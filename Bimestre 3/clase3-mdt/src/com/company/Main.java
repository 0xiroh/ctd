package com.company;

public class Main {

    public static void main(String[] args) {
	// write your code here
        Empleados v1 = new Empleados("Juan", 5);
        Vendedores v2 = new Afiliados("Ernesto");
        Vendedores v3 = new Pasante("Lucas");

        v1.vender();
        v1.conseguirAfiliados();

        v2.vender();
        v2.vender();
        v2.vender();

        v3.vender();
        v3.vender();
        v3.vender();
        v3.vender();
        v3.vender();
        v3.vender();
        v3.vender();
        v3.vender();
        v3.vender();
        v3.vender();
        v3.vender();


        v1.mostrarCategoria();
        v2.mostrarCategoria();
        v3.mostrarCategoria();

    }
}
