package com.company;

import java.util.HashMap;
import java.util.Locale;

import static jdk.javadoc.internal.doclets.toolkit.util.Utils.toLowerCase;

public class RopaFlyweightFactory {
    private static final HashMap<String, Ropa> ropaMap = new HashMap<>();

    public Ropa getRopa(String Talla, String Tipo, boolean esNuevo, boolean importada) {
        Tipo = Tipo.toUpperCase();

        String clave = "key: " + Tipo;
        Ropa ropa = (Ropa) ropaMap.get(Tipo);
        if (ropaMap.containsKey(clave)){
            ropa = new Ropa(Talla, Tipo, esNuevo, importada);
            ropaMap.put(Tipo, ropa);
            System.out.println("Se creó una prenda de Tipo: " + Tipo);
            return ropa;
        }
        System.out.println("Se usó una prenda en caché");
        return ropa;
    }




}
