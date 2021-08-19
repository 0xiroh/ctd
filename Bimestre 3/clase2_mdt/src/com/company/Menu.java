package com.company;

public abstract class Menu {

    protected Double precioBase;

    public Menu(Double precioBase) {
        this.precioBase = precioBase;
    }

    public void prepararMenu(){
        armarMenu();
        System.out.println(calcularPrecio());
    }

    public abstract void armarMenu();
    public abstract Double calcularPrecio();

}
