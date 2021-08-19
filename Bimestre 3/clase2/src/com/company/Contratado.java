package com.company;

public class Contratado extends Empleado{

    private Double valorHora;
    private Integer horas;

    public Contratado(String nombre, String apellido, String nroCuenta, Double valorHora, Integer horas) {
        super(nombre, apellido, nroCuenta);
        this.valorHora = valorHora;
        this.horas = horas;
    }

    @Override
    public double calculoSueldo() {
        return valorHora*horas;
    }

    @Override
    public void generarRecibo(Double importe) {
        System.out.println("Recibo generado");
    }

    @Override
    public void depositar(Double importe) {
        System.out.println("Se ha depositado");
    }
}
