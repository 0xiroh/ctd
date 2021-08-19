const fs = require('fs');
let deptos = fs.readFileSync('departamentos.json', 'utf-8');

let deptosParse = JSON.parse(deptos);
console.log(deptosParse);

let inmobiliaria = {
    departamentos: deptosParse,
    departamentosDisponibles: function() {
        return this.departamentos.filter(departamento => departamento.disponible)
    },
    listarDepartamentos: function(listado) {
        listado.forEach( function(depto){
            console.log(`id: ${depto.id}, valor: $${depto.precioAlquiler}, está: ${(depto.disponible? "Disponible":"Alquilado")}`)
        })
    },
    buscarPorId: function(id) {
        return this.departamentos.filter(depto => depto.id === id)
    },
    buscarPorPrecio: function(precioMax) {
        return this.departamentosDisponibles().filter(depto => depto.precioAlquiler <= precioMax)
    }
}

inmobiliaria.listarDepartamentos(inmobiliaria.departamentosDisponibles());
