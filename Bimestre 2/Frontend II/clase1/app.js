
function sumarElementos(array) {
    let suma = 0;
    for (let index = 0; index < array.length; index++) {
        suma += array[index];
        if (index != 0) {
            console.log(suma);
        }
        
    }
}