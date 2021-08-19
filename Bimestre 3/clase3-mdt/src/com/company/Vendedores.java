package com.company;

public abstract class Vendedores {

    private String nombre;
    private String categoria;
    // private Integer puntos;

    public Vendedores(String nombre) {
        this.nombre = nombre;
    }

    public void mostrarCategoria(){
        calcularPuntos();
        recategorizar();
        //“Juan tiene un total de 22 puntos, categoriza como aprendiz”.
        System.out.println(nombre + " tiene un total de " + calcularPuntos() + " puntos, categoriza como " + categoria);
    }

    public abstract Integer calcularPuntos();
    public abstract void recategorizar();
    public abstract void vender();

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }
}
