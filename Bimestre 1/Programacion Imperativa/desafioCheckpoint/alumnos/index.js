/* function promedio(){
    let avg = 0
    for (i = 0; i < this.notas.length; i++){
        avg += this.notas[i];
    }
    avg = avg/this.notas.length;
    return avg;
} */

/* function faltar() {
    this.faltas +=1;
} */


function Alumno(nombre, faltas, notas) {
    this.nombre = nombre;
    this.faltas = faltas;
    this.notas = notas;
    this.faltar = function (){
        this.faltas += 1;
    };
    this.promedio = function (){
        let avg = 0
        for (i = 0; i < this.notas.length; i++){
            avg += this.notas[i];
        }
        avg = avg/this.notas.length;
        return avg;
    };
}

let alumnos = [
    new Alumno("Andres Arias", 1, [2,7,9,5,8]),
    new Alumno("Juan Rodriguez", 1, [3,4,5,6,7]),
    new Alumno("Ernesto Farias", 7, [2,9,5,8,7]),
    new Alumno("Susana Ruiz", 3, [7,9,8,8,7])
]



/*
let alumno = {
    nombre: "Martin Gutierrez",
    faltas: 0,
    notas: [0,1,2,3],
    promedio: function() {
        let avg = 0
        for (i = 0; i < this.notas.length; i++){
            avg += this.notas[i];
        }
        return avg/this.notas.length;
    },
    faltar: function() {
        this.faltas +=1;
    }

};

console.log(alumno.promedio());
console.log(alumno.faltas);
console.log(alumno.nombre);
alumno.faltar();
console.log(alumno.faltas);
*/


console.log(alumnos);
module.exports = Alumno;
