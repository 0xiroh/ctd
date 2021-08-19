/*
let films = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
function mayuscula(array) {
    let filmsCap = [];
    filmsCap[0] = array[0].toUpperCase();
    filmsCap[1] = array[1].toUpperCase();
    filmsCap[2] = array[2].toUpperCase();
    filmsCap[3] = array[3].toUpperCase();
    filmsCap[4] = array[4].toUpperCase();
    return filmsCap;

}
console.log(mayuscula(films));
let cartoons = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

function agregar(array1, array2) {
    array1.push = array2[0];
    return array1;
}
console.log(agregar(films, cartoons));
*/

//1. Usando sólo .pop() y .push(), crear una función que reciba un array de 4 elementos por parámetro y retorne un array con los elementos invertidos en su orden: Ej [1,2,3,4] retorna [4,3,2,1]

function invertirArray(array) {
    let arrayAyuda = [];
    arrayAyuda.push(array.pop());
    arrayAyuda.push(array.pop());
    arrayAyuda.push(array.pop());
    arrayAyuda.push(array.pop());
    array = arrayAyuda;
    return array;
}

console.log("\nEl inverso del array de entrada es:" , invertirArray([1,2,3,4]));
console.log("\nEl inverso del array de entrada es:" , invertirArray([5,8,15,99]));
console.log("\n------------------------------------------------------------\n");


//2. Crear una función que recibe un array de 4 elementos con números enteros y devuelve uno que contenga sólo los números pares, si los hubiera. Ej [1,2,3,4] retorna [2,4]

function pares(array) {
    let arrayAyuda = [];
    if (array[0] % 2 == 0) {
        arrayAyuda.push(array[0]);
    }
    if (array[1] % 2 == 0) {
        arrayAyuda.push(array[1]);
    }
    if (array[2] % 2 == 0) {
        arrayAyuda.push(array[2]);
    }
    if (array[3] % 2 == 0) {
        arrayAyuda.push(array[3]);
    }
        array = arrayAyuda;
    return arrayAyuda;

}
console.log("Los números pares del array de entrada son: " + pares([1,2,3,4]));
console.log("Los números pares del array de entrada son: " + pares([10,20,30,40]));
console.log("Los números pares del array de entrada son: " + pares([3,7,9,87]));
console.log("\n------------------------------------------------------------\n");


/*3. Crear una función que recibe 2 parámetros, un texto con un tipo de dato de JS y  un array de 4 elementos; retorna un booleano que indica si todos 
los elementos son del tipo de dato que se envió por parámetro. Ej: tipoArray(“number”, [1,2,3,4]) retorna true; tipoArray(“number”, [1,2,”hola”,,4]) retorna false. */

function tipoArray(tipo, array) {
    let bandera = true;
    tipo = tipo.toLowerCase();
    if (typeof(array[0]) != tipo) {
        bandera = false;
    }
    if (typeof(array[1]) != tipo) {
        bandera = false;
    }
    if (typeof(array[2]) != tipo) {
        bandera = false;
    }
    if (typeof(array[3]) != tipo) {
        bandera = false;
    }
    return bandera;
}


console.log(tipoArray("NUMBER",[1,2,3,4]));
console.log(tipoArray("NUMBER",[1,2,3,"hola"]));
console.log(tipoArray("string",["hi","hablalo","que dice","hola"]));
console.log("\n------------------------------------------------------------\n");

/* 4. Crear una función que recibe un array con números enteros y devuelve uno que contenga la suma acumulada de todos sus números. Usar la función tipoArray para validar que el array es 
de números, en caso que no, salir de la función antes de acumular con el mensaje "Error: array corrupto" */

function sumaArray(array) {
    if (tipoArray("number", array) == false) {
        let mensaje = "Error: array corrupto";
        return mensaje;
    }
    else {
        let suma = 0;
        suma += array[0];
        suma += array[1];
        suma += array[2];
        suma += array[3];
        return suma;
    }
}

console.log(sumaArray([1,2,3,4]));
console.log(sumaArray([1,2,3,"hola"]));
console.log(sumaArray([64,65,66,67]));

console.log("\n------------------------------------------------------------\n");

/* 5. Así como el ejercicio 4 usa dos funciones aquí creadas, crear un ejercicio que utilice las 4 funciones aquí creadas.
 Ej función que recibe array, acumula sólo aquellos elementos pares y los invierte solo si son números enteros. 
 Otro ejemplo puede ser el uso de letras y palabras para combinarlas en frase irracionales. */ 
//Funcion que toma un array de 4 posiciones, determina si es de tipo number, lo invierte e imprime el array invertido solo con los números pares

 function invertirPares(array) {
    console.log("Este es el array ingresado: " + array);
    if (tipoArray("number", array) == false) {
        let mensajeError =  console.log("Error: array corrupto");
        return mensajeError;
    }
    else {
        console.log("El array ingresado es de tipo number ;)");
        let arrayPares = pares(array);
        console.log("Así queda el array invertido: " + invertirArray(array));
        console.log("Estos son los números pares del array: " + arrayPares);
        arrayPares = invertirArray(arrayPares);
        let mensajeArray = console.log("El array invertido con los números pares es: " + arrayPares); 
        return mensajeArray;
    }


 }

 console.log(invertirPares([6,7,8,9]));
 console.log(invertirPares(["hola",2,3,4]));
 console.log("\n------------------------------------------------------------\n");
