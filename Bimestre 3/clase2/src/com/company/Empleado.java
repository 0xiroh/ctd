package com.company;

public abstract class Empleado {

    private String nombre;
    private String apellido;
    private String nroCuenta;

    public Empleado(String nombre, String apellido, String nroCuenta) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nroCuenta = nroCuenta;
    }

    public void liquidacionSueldo(){
        Double importe;
        importe=calculoSueldo();
        generarRecibo(importe);
        depositar(importe);
    }

    public abstract double calculoSueldo();
    public abstract void generarRecibo(Double importe);
    public abstract void depositar(Double importe);
}
