/*
- que el usuario pueda elegir piedra, papel o tijera
- que la computadora tenga una eleccion random
- validar lo ingresado por el usuario
    - volver a preguntar si fue incorrecto
- mostrar un resultado comparando las elecciones
- mostrar el resultado al usuario
- tener un contador con las victorias de cada uno


- ¿Qué mejoras podríamos introducir en este código?
    * Cambiar los if por case switch
    * Crear un array con (piedra, papel, tijera) con su respectivo indice
    * Reducir el if con una condición de > ó <
- ¿Qué otro tipo de estructuras de control podemos utilizar?
    * if variable isNaN -> control para evitar ingreso de datos diferente a numeros 
    * Número entre 1 y 3 inclusivo
- ¿Podemos separar el código en “partes”? ¿Qué partes serían?
    * Si, en "funciones"
    * Array de las 3 posibilidades, con for of
    * control de ingreso de datos
    * Comparación de resultados
    * Juntar los if


*/

//elecciones de los jugadores
let usuario = parseInt(prompt("Seleccione: piedra(1), papel(2) o tijera (3)"));

let computadora = parseInt(Math.random()*3+1);
console.log(computadora);
//---------------------------

let resultado = "No hay resultado aun."

function revisarInput(usuario) {
    if (usuario < 1 || usuario > 3 || isNaN(usuario)) {
        console.log("Favor ingresar un número entre el 1 y el 3");
        return false;
    }
    else {
        switchInterior(usuario)
        resultadoPartida(usuario, computadora, switchInterior(usuario));
 
    }
}

function switchInterior(usuario){
    switch (usuario) {
        case 1:
                resultado = "Empate.";
                break;
        case 2:
                resultado = "Derrota :("
                break;
        case 3:
                resultado = "Victoria!"
                break;
    }
    return resultado;
}

function resultadoPartida(numeroIngresado, numeroRandom, callback) {
    switch (numeroIngresado) {
        case 1:
                resultado = "Empate.";
                break;
        case 2:
                resultado = "Derrota :("
                break;
        case 3:
                resultado = "Victoria!"
                break;
    }
}

//invocación
resultadoPartida(usuario, computadora); 


/*switch (usuario) {
    case 1:
        switch (computadora) {
            case 1:
                resultado = "Empate.";
                break;
            case 2:
                resultado = "Derrota :("
                break;
            case 3:
                resultado = "Victoria!"
                break;
      }
    case 2:
        switch (computadora) {
            case 1:
                resultado = "Victoria";
                break;
            case 2:
                resultado = "Empate."
                break;
            case 3:
                resultado = "Derrota"
                break;
    case 3:
        case 1:
            resultado = "Derrota";
            break;
        case 2:
            resultado = "Victoria"
            break;
        case 3:
            resultado = "Empate."
            break;
    default:
        alert("Ingrese un número entre 1 y 3");
      
  }*/
/*if(usuario == 1){
    if(computadora == 1){
        resultado = "Empate."
    }
    if(computadora == 2){
        resultado = "Derrota!"
    }
    if(computadora == 3){
        resultado = "Triunfo!"
    }
}
if(usuario == 2){
    if(computadora == 1){
        resultado = "Triunfo!"
    }
    if(computadora == 2){
        resultado = "Empate."
    }
    if(computadora == 3){
        resultado = "Derrota!"
    }
}
if(usuario == 3){
    if(computadora == 1){
        resultado = "Derrota!"
    }
    if(computadora == 2){
        resultado = "Triunfo!"
    }
    if(computadora == 3){
        resultado = "Empate."
    }*/
}

alert("Resultado de la partida: " + resultado)