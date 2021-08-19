const Alumno = require("./index");

//Creemos un objeto alumno que tiene como atributos, nombre (string) cantidad de faltas (number) y notas (array numeros), crearle un constructor e importar esto como el mÃ³dulo alumno.
function promedio(){
    let avg = 0
    for (i = 0; i < this.notas.length; i++){
        avg += this.notas[i];
    }
    avg = avg/this.notas.length;
    return avg;
}

function faltar() {
    this.faltas +=1;
}


let estudiantes = [
    new Alumno("leandro ezequiel", 5, [7,6,2,3,4], promedio, faltar),
    new Alumno("Zoe Sobol", 3, [4,10,5,8,4], promedio, faltar),
    new Alumno("Nicolas Lopez", 2, [8,9,4,7,1], promedio, faltar),
    new Alumno("Nayla Saez", 1, [9,5,6,5,10], promedio, faltar),
    new Alumno("Julieta Alfie", 7, [2,8,5,8,8], promedio, faltar)
]

// let leandro = new Estudiante("leandro ezequiel", 5, [7,6,2,3,4])
// let zoe = new Estudiante("Zoe Sobol", 3, [4,10,5,8,4])
// let nicolas = new Estudiante("Nicolas Lopez", 2, [8,9,4,7,1])
// let nayla = new Estudiante("Nayla Saez", 1, [9,5,6,5,10])
// let julieta = new Estudiante("Julieta Alfie", 7, [2,8,5,8,8])
console.log(estudiantes[0].promedio());
module.exports = estudiantes