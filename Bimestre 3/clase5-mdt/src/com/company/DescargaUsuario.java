package com.company;

public class DescargaUsuario implements Descarga{

    private Usuario usuario;

    public DescargaUsuario(Usuario usuario) {
        this.usuario = usuario;
    }




    @Override
    public void descargar(String cancion) {
        if (usuario.getTipoSuscripcion().equals("Free")){
            System.out.println("No es posible descargar canciones en modo free");
        } else {
            usuario.descargar(cancion);
        }
    }
}
