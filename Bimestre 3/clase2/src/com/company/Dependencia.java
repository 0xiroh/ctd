package com.company;

public class Dependencia extends Empleado {

    private Double sueldoBase;
    private Double premios;
    private Double descuentos;

    public Dependencia(String nombre, String apellido, String nroCuenta, Double sueldoBase, Double premios, Double descuentos) {
        super(nombre, apellido, nroCuenta);
        this.sueldoBase = sueldoBase;
        this.premios = premios;
        this.descuentos = descuentos;
    }

    @Override
    public double calculoSueldo() {
        return sueldoBase+premios-descuentos;
    }

    @Override
    public void generarRecibo(Double importe) {
        System.out.println("Recibo generado");
    }

    @Override
    public void depositar(Double importe) {
        System.out.println("Sueldo depositado");
    }
}
