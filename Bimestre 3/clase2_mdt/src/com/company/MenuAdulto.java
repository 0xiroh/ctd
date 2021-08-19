package com.company;

public class MenuAdulto extends Menu{

    public MenuAdulto(Double precioBase) {
        super(precioBase);
    }

    @Override
    public void armarMenu() {
        System.out.println("Te viene nomás el almuerzo");
    }

    @Override
    public Double calcularPrecio() {
        return precioBase;
    }
}
