/*function puedeSubir (altura, acompanado) {
    const esPetiso = altura < 120;
    const esAlto = altura > 200;

    if 
    return false;

}


console.log(puedeSubir(145, true))


function puedeSubir(altura, acomp) {
   
    if (altura > 1.4 && altura < 2) {
        return true;
    }

    else if (altura < 1.4 && acomp == true) {
            return true;
    }

    else if (altura < 1.2 || altura > 2) {
        return false;
    }

}


console.log(puedeSubir(1.3,false));
console.log(puedeSubir(1.3,true));


console.log(puedeSubir(1.45, true));
console.log(puedeSubir(1.45, false));

console.log(puedeSubir(2.1, false));
console.log(puedeSubir(2.1, true));

console.log(puedeSubir(1.1,false));
console.log(puedeSubir(1.1,true));
*/


// 1. Crear una funcion para determinar si un numero es par o impar
function esPar (num1) {
    return num1%2 === 0 ? "Es par" : "Es impar";
}

console.log(esPar(4));
console.log(esPar(1));
console.log("\n------------+++++++++++++------------\n")


// 2. Crear una funcion para levantar una barrera si se realizo el pago del peaje
function pagoPeaje (pago) {
    return pago === "si" ? "Puede pasar" : "No puede pasar";
}


console.log(pagoPeaje("si"));
console.log(pagoPeaje("no"));
console.log("\n------------+++++++++++++------------\n")


// 3. Crear una funcion que reciba un número y retorne si es el mismo que eligió al azar la función Math.random() entre 0 y 10.
aleatorio = Math.floor(Math.random() * 10);
function esElAleatorio(num) {
    return num === aleatorio ? "Es el mismo número" : "No es el mismo número";
}
console.log(aleatorio);
console.log(esElAleatorio(4));
console.log("\n------------+++++++++++++------------\n")


// 4. Crear una funcion que al recibir una fecha indique si la misma es navidad o no.

/*function esNavidad(fecha) {
    return ? "Feliz Navidad!!!" : "Dale que todavía falta!;"
}
console.log(esNavidad(navida)) */
console.log("\n------------+++++++++++++------------\n")


// 5. Crear una funcion que al recibir un mes, con un switch, nos indique cuántos días tiene ese mes.

function diasMes(mes) {
    let dias = 0;
    switch (mes) {
        case "Enero":
            dias = 31;
        case "Marzo":
            dias = 31;
        case "Mayo":
            dias = 31;
        case "Julio":
            dias = 31;
        case "Agosto":
            dias = 31;
        case "Octubre":
            dias = 31;
        case "Diciembre":
            dias = 31;
            break
        case "Febrero":
            dias = 28;
            break
        case "Abril":
            dias = 30;
        case "Junio":
            dias = 30;
        case "Septiembre":
            dias = 30;
        case "Noviembre":
            dias = 30;
            break
        default:
            dias = "Ingrese un mes válido, recuerde capitalizar el mes!"
    }
    return dias;
}
console.log(diasMes("Enero"));
console.log(diasMes("Febrero"));
console.log(diasMes("Abril"));
console.log(diasMes("enero"));

console.log("\n------------+++++++++++++------------\n");


/*6. Crear una funcion quereciba un valor por parámetro e indique que el alumno recursa si tiene una nota menor a 4,
 va a recuperatorio si tiene una nota menor a 7 y aprueba en el caso de que la nota sea igual o superior a 7. */
function suspenso(nota) {
    let resultado = "";
    if (nota < 4 && nota >= 0) {
        resultado = "Recursa :'(";
    }
    else if (nota < 7) {
        resultado = "Recuperatorio, dale que se puede!";
    }
    else if (nota >= 7 && nota <= 10) {
        resultado = "Pasaste pibe!";
    }
    else {
        resultado = "Ingrese una nota válida, recuerde que es de 0 a 10!";
    }

    return resultado;
}

console.log(suspenso(3));
console.log(suspenso(7));
console.log(suspenso(5));
console.log(suspenso(8));
console.log(suspenso(4));
console.log(suspenso(11));

 console.log("\n------------+++++++++++++------------\n");



/* 7. Crear una funcion que retorne si una nave espacial que está entrando a la atmósfera ya puede abrir su paracaídas. 
La altura debe ser entre 2000 m. y 3000 m., y la velocidad debe ser menor a 1000 km/h. */
function abrirParacaidas (altura, velocidad) {
    return 3000 >= altura && altura >= 2000 && velocidad <= 1000  ? "Puede pasar" : "No puede pasar";
}
console.log(abrirParacaidas(2500, 800));
console.log(abrirParacaidas(3500, 800));
console.log(abrirParacaidas(2500, 1800));
console.log("\n------------+++++++++++++------------\n");

/* 8. Crear una funcion que recibe 3 parámetros booleanos que indican ingredientes de un sandwich y determina su valor final. 
El valor base es de $150, con tomate $20+, con papas $50+, con huevo $60+. */

function precio(tomate, papa, huevo) {
    const base = 150;
    let adiciones = 0;
    if (tomate === true) {
        adiciones += 20;
    }
    if (papa === true) {
        adiciones += 50;
    }
    if (huevo === true) {
        adiciones += 60;
    }
    total = base + adiciones;
    return total;
}
console.log(precio(true, false, true));
console.log("\n------------+++++++++++++------------\n");

/* 9. Crear una funcion que reciba por parámetro un mes y devuelva a qué estación climática pertenece 
(verano, invierno, otoño o primavera). */


function estacionClimatica(mes) {
    let estacion = "";
    switch (mes) {
        case "Noviembre":
            estacion = "Verano";
        case "Diciembre":
            estacion = "Verano";
        case "Enero":
            estacion = "Verano";
            break
        case "Febrero":
            estacion = "Otoño";
        case "Marzo":
            estacion = "Otoño";
        case "Abril":
            estacion = "Otoño";
            break
        case "Mayo":
            estacion = "Invierno";
        case "Junio":
            estacion = "Invierno";
        case "Julio":
            estacion = "Invierno";
            break
        case "Agosto":
            estacion = "Primavera";
        case "Septiembre":
            estacion = "Primavera";
        case "Octubre":
            estacion = "Primavera";
            break
        default:
            estacion = "Ingrese un mes válido, recuerde capitalizar el mes!"
    }
    return estacion;
}
console.log(estacionClimatica("Enero"));
console.log(estacionClimatica("Marzo"));
console.log(estacionClimatica("Julio"));
console.log(estacionClimatica("Octubre"));
console.log(estacionClimatica("diciembre"));
console.log("\n------------+++++++++++++------------\n");



