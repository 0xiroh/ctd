package com.company;

public class Main {

    public static void main(String[] args) {
	// write your code here

        Menu m1 = new MenuVeg(200.0, 10.0);
        Menu m2 = new MenuInfantil(150.0, 22.0);
        Menu m3 = new MenuAdulto(250.0);

        m1.prepararMenu();
        m2.prepararMenu();
        m3.prepararMenu();
    }
}
