package com.company;

public class MenuVeg extends Menu{

    private Double precioEmpaque;

    public MenuVeg(Double precioBase, Double precioEmpaque) {
        super(precioBase);
        this.precioEmpaque = precioEmpaque;
    }

    @Override
    public void armarMenu() {
        System.out.println("Te viene el almuerzo con un empaque vegano");
    }

    @Override
    public Double calcularPrecio() {
        return (precioBase+precioEmpaque)*1.01;
    }
}
