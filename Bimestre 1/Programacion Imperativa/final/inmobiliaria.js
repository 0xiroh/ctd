const fs = require('fs');
const apartamentosJSON = fs.readFileSync("departamentos.json", "utf-8")

let apartamentos = JSON.parse(apartamentosJSON);

let inmobiliaria = {
    departamentos: apartamentos,
    departamentosDisponibles: function(){
        return this.departamentos.filter(departamento => departamento.disponible)}
    ,
    listarDepartamentos: function(arrayDeptos) {
        arrayDeptos.forEach(departamento => {
            console.log("El id es:", departamento.id, ", el precio de alquiler es:", departamento.precioAlquiler, (departamento.disponible ? ", está Disponible":", está alquilado"));
        });
    },
    buscarPorId: function(id){
        return this.departamentos.find(departamento => departamento.id === id)
    },
    buscarPorPrecio: function(precioMax){
        return this.departamentosDisponibles().filter(departamento => precioMax > departamento.precioAlquiler)
    },
    ordenarPorPrecio: function() {
        return this.departamentos.sort(function(a, b){return a.precioAlquiler - b.precioAlquiler})
    },
    precioConImpuesto: function(porcentaje) {
        return this.departamentos.map(departamento => departamento.precioAlquiler + (departamento.precioAlquiler * (porcentaje/100)) );
    },
    alquilarDepto: function(id) {
        let depto = this.buscarPorId(id)
        console.log(depto)

        if (depto.disponible === true) {
            depto.disponible = false;
            console.log("" + depto.id + " alquilado");
        }
        else if(depto.disponible === false){
            console.log("El departamento no se encuentra disponible");
        }
        else {
            console.log("Por favor ingrese un id válido");
        }
    },
    ingresosEsperados: function() {
        return this.departamentosDisponibles().reduce((acum, departamento) => acum + departamento.precioAlquiler, 0)
    }

}

inmobiliaria.alquilarDepto(4);
inmobiliaria.listarDepartamentos(inmobiliaria.departamentosDisponibles());
console.log(inmobiliaria.ingresosEsperados());