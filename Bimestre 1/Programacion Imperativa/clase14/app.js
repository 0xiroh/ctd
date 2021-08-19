const fs = require('fs');
let deptos = fs.readFileSync('departamentos.json', 'utf-8');

let deptosParse = JSON.parse(deptos);
console.log(deptosParse);

let inmobiliaria = {
    departamentos: deptosParse,
    departamentosDisponibles: function() {
        let array = [];
        for (let index = 0; index < this.departamentos.length; index++) {
            if (this.departamentos[index].disponible) {
                array.push(this.departamentos[index]);
            }
        }
        return array
    },
    listarDepartamentos: function(listado) {
        for (let index = 0; index < listado.length; index++) {
            if (listado[index].disponible){
            console.log(`Departamento con id: ${listado[index].id}, con un valor de: ${listado[index].precioAlquiler} y está Disponible\n`);
            }
            else {
                console.log(`Departamento con id: ${listado[index].id}, con un valor de: ${listado[index].precioAlquiler} y está Alquilado\n`);
            }
        }

    },
    buscarPorId: function(id) {
        return this.departamentos.filter(depto => depto.id === id)
    }


}
inmobiliaria.listarDepartamentos(deptosParse);
console.log(inmobiliaria.buscarPorId(3));