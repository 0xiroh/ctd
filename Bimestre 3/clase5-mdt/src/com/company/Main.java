package com.company;

public class Main {

    public static void main(String[] args) {
	// write your code here

        Usuario u1 = new Usuario("Premium", "Martin");
        DescargaUsuario du1 = new DescargaUsuario(u1);
        du1.descargar("Dakiti");


    }
}
