const alumnos = require("./alumnos");
const estudiantes = require("./alumnos/estudiantes")




let curso = {
    nombre: "Programación Imperativa",
    notaAprobacion: 7,
    faltasMax: 3,
    listaAlumnos: estudiantes,
    agregarAlumno: function (estudiante) {
        console.log(`\nAlumno ${estudiante.nombre} ingresado correctamente ;)\n`);
        return this.listaAlumnos.push(estudiante);
    },
    aprobado: function (estudiante) {
        let bandera = true
        if (estudiante.promedio() >= this.notaAprobacion && estudiante.faltas < this.faltasMax) {
            //console.log(`\nEl estudiante ${estudiante.nombre} aprobó\n`);
            bandera = true;
        }
        else if (estudiante.promedio() >= this.notaAprobacion*1.1 && estudiante.faltas == this.faltasMax) {
            //console.log(`\nEl estudiante ${estudiante.nombre} aprobó\n`);
            bandera = true;
        }
        else {
            //console.log(`\nEl estudiante ${estudiante.nombre} no aprobó\n`);
            bandera = false;
        }
        return bandera;
    },
    arrayAprobados: function (){
        let arrayNuevo =[];
        for (let i = 0; i < this.listaAlumnos.length; i++) {
            arrayNuevo.push(this.aprobado(this.listaAlumnos[i]));
        }
        return arrayNuevo
    }
}
/* console.log(curso.listaAlumnos[0].promedio());
console.log(curso.listaAlumnos[1].promedio());
console.log(curso.listaAlumnos[2].promedio());
console.log(curso.listaAlumnos[3].promedio());
console.log(curso.aprobado(curso.listaAlumnos[0]));
console.log(curso.aprobado(curso.listaAlumnos[1]));
console.log(curso.aprobado(curso.listaAlumnos[2]));
console.log(curso.aprobado(curso.listaAlumnos[3]));
console.log('\n'); */
console.log(curso.arrayAprobados());