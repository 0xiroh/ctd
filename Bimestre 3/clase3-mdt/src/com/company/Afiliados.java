package com.company;

public class Afiliados extends Vendedores{

    private Integer cantidadVentas;

    public Afiliados(String nombre){
        super(nombre);
        cantidadVentas = 0;
    }

    @Override
    public Integer calcularPuntos() {
        return cantidadVentas*15;
    }

    @Override
    public void recategorizar() {

        if (calcularPuntos() < 20) {
            setCategoria("Novato");
        } else if (calcularPuntos() <= 30 && calcularPuntos() >= 20) {
            setCategoria("Aprendiz");
        } else if (calcularPuntos() < 40 && calcularPuntos() >= 31){
            setCategoria("Bueno");
        } else {setCategoria("Maestro");
        }
    }

    @Override
    public void vender() {
        cantidadVentas++;
    }
}
