let nombre = ['Nicolas', 'Esteban', 'Jose', 'Juana', 'Martin'];
let apellido = ['Lopez', 'Piazza', 'Fermoso', 'Fernandez', 'Gutierrez'];
let edad = [27, 28, 33, 26, 25];
let peso = [83.5, 80.1, 63.7, 55.0, 70.5];
let altura = [170, 176, 153, 162, 185];
let prepaga = ['TIENE', 'TIENE', 'NO TIENE', 'TIENE', 'TIENE'];
let imc = []

for (let i = 0; i < altura.length; i++) {
    let imc = [];
    imc[i] = peso[i] / ((altura[i]/100)**2);
    console.log(nombre[i] + ' ' + apellido[i] + ' tiene ' + edad[i] + ' años y su índice de masa corporal es de: ' + imc[i]);
}