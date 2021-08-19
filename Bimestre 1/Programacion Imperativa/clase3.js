function calcularIndiceDeMasaCorporal(y, kg) {
    let imc = (kg/y);
    return imc;
}
let indice = calcularIndiceDeMasaCorporal(1.85, 70);
console.log(indice);

var Suma = function (x, y) {
    return x + y;
}

var Multiplicación = function (x, y) {
    return x * y;
}

var Resta = function (x, y) {
    resultadoResta = x - y;
    return resultadoResta;
}

var División = function (x, y) {
    resultadoDivision = x / y;
    return resultadoDivision;
}

let nombreJugador='Martin';
let golesJugador=0;
let precioEnDolares='2000';

function hacerGol(jugador,goles){
    goles+=1;
    let mensaje='El jugador ' + jugador + ' tiene '+ goles + ' goles';
    return mensaje;
}


function hattrick (jugador, precio) {

   3 * hacerGol(nombreJugador, golesJugador);
   precio = precio*1.1;
    return precio
}

//Continuamos luego Walter ; )
console.log((nombreJugador, golesJugador));

/*3) Crear las variables, nombreJugador, golesJugador, precioEnDolares. Después, crear la funcion hacerGol que incremente
 la cantidad de goles del jugador
 en uno e imprima por pantalla “GOL!!!!!!!!!”. Además, deberá incrementar el valor del jugador en 10.000 dólares. 
A continuación, pruebe ejecutar varias veces la función e imprimir por pantalla la nueva cantidad de goles del jugador
  y el precio del jugador en el mercado.

4) Crear la función hattrick que simplemente en su interior ejecute tres veces la función hacerGol y aumente el valor del
 jugador en un 10% extra anual respecto al valor actual.*/

