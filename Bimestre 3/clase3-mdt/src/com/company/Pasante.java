package com.company;

public class Pasante extends Vendedores{
    private Integer cantidadVentas;

    public Pasante(String nombre) {
        super(nombre);
        cantidadVentas = 0;
    }



    @Override
    public Integer calcularPuntos() {
        return cantidadVentas*5;
    }

    @Override
    public void recategorizar() {
        if (calcularPuntos() < 50){
            setCategoria("Pasante Novato");
        } else {
            setCategoria("Pasante Experimentado");
        }
    }

    @Override
    public void vender() {
        cantidadVentas++;
    }
}
