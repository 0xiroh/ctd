package com.company;

public class MenuInfantil extends Menu{
    private Double precioRegalo;


    public MenuInfantil(Double precioBase, Double precioRegalo) {
        super(precioBase);
        this.precioRegalo = precioRegalo;
    }

    @Override
    public void armarMenu() {
        System.out.println("Te viene el elmuerzo con la sorpresa");
    }

    @Override
    public Double calcularPrecio() {
        return precioBase+precioRegalo;
    }
}
