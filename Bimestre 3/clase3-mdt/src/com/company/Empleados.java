package com.company;

public class Empleados extends Vendedores {

    private Integer aniosAntiguedad;
    private Integer cantidadAfiliados;
    private Integer cantidadVentas;


    public Empleados(String nombre, Integer aniosAntiguedad) {
        super(nombre);
        this.aniosAntiguedad = aniosAntiguedad;
        cantidadVentas = 0;
        cantidadAfiliados = 0;
    }

    public void conseguirAfiliados(){
        cantidadAfiliados ++;
    }

    @Override
    public Integer calcularPuntos() {
        int puntos = 0;
        puntos = (cantidadAfiliados*10);
        puntos += (cantidadVentas*5);
        puntos += (aniosAntiguedad*5);
        return puntos;
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
        cantidadVentas ++;
    }
}
