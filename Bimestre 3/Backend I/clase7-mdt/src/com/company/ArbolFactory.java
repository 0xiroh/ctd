package com.company;

import java.util.HashMap;
import java.util.Map;

public class ArbolFactory {
    private static final Map<String, Arbol> arbolMap = new HashMap<>();

    public static Arbol getArbol(int alto, int largo, String color, String tipoArbol){
        String clave = "key " + alto + " : " + largo + " : " + color + " : " + tipoArbol;
        if(!arbolMap.containsKey(clave)){
            arbolMap.put(clave, new Arbol(alto, largo, color, tipoArbol));
            System.out.println("Creando un árbol nuevo");
            arbolMap.get(clave).toString();
            return arbolMap.get(clave);
        }
        System.out.println("Usando un arbol en cache");
        return arbolMap.get(clave);
    }


}
