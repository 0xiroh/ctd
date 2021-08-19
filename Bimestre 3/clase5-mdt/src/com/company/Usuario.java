package com.company;

public class Usuario implements Descarga{

    private String tipoSuscripcion;
    private String name;


    public Usuario(String tipoSuscripcion, String name) {
        this.tipoSuscripcion = tipoSuscripcion;
        this.name = name;
    }

    @Override
    public void descargar(String cancion) {
        System.out.println(cancion + " descargada exitosamente");
    }

    public String getTipoSuscripcion() {
        return tipoSuscripcion;
    }
}
