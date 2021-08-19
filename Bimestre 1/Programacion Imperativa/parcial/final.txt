// Importando el modulo fs para leer archivos JSON además del archivo JSON con las bicicletas
const fs = require('fs');
const bicicletasJSON = fs.readFileSync("BICICLETAS.json", "utf-8");

// Creando la constante bicicletas que será un array con objetos(bicicletas), usando la función JSON.parse()
const bicicletas =    JSON.parse(bicicletasJSON)

// Creando el objeto literal carrera que contendrá el array de bicicletas proveído anteriormente y algunas funciones
let carrera = {
    bicicletas: bicicletas,
    // Cantidad máxima de bicicletas en una tanda
    bicisPorTanda: 7,
    bicicletasHabilitadas: function(){
        return this.bicicletas.filter(bicicleta => bicicleta.doppingPositivo === false)
    },
    listarBicicletas: function(arrayBicicletas){
        return arrayBicicletas.forEach(bicicleta => {
            console.log(`Id: ${bicicleta.id}, peso en kg: ${bicicleta.pesoEnKg}, rodado: ${bicicleta.rodado},`, (bicicleta.doppingPositivo? "estado: descalificado" : "estado: habilitado"));
        });
    },
    buscarPorId: function(id){
        return this.bicicletas.find(bicicleta => bicicleta.id === id);
    },
    buscarPorRodado: function(rodado){
        return this.bicicletasHabilitadas().filter(bicicleta => bicicleta.rodado >= rodado);
    },
    ordenarPorPeso: function(){
        return this.bicicletas.sort((a, b) => a.pesoEnKg - b.pesoEnKg)
    },
    generarTanda: function(rodadoMax, pesoMax){
        let tanda = this.bicicletasHabilitadas().filter(bicicleta => bicicleta.rodado <= rodadoMax && bicicleta.pesoEnKg <= pesoMax);
        return (tanda.length > this.bicisPorTanda? `Favor restringir los criterios de busqueda, tanda mayor a ${this.bicisPorTanda}`: tanda)
    },
    calcularPodio: function(tanda){
        let ordenPuntaje = tanda.sort((a, b) => b.puntaje - a.puntaje)
        let top3 = [ordenPuntaje[0], ordenPuntaje[1], ordenPuntaje[2]];
        let mensaje = (`\nEl ganador es: ${top3[0].ciclista}, con un puntaje de: ${top3[0].puntaje}\nEl segundo puesto es para: ${top3[1].ciclista}, con un puntaje de: ${top3[1].puntaje}\nEl tercer puesto es para: ${top3[2].ciclista}, con un puntaje de: ${top3[2].puntaje}\n `)
        return mensaje;
    }
}
console.log("Imprimiendo el array bicicletas después de hacer el parse");
console.log(carrera.bicicletas);
console.log("\n-----------------------------\n");

console.log("Valor máximo de bicicletas por tanda es: " + carrera.bicisPorTanda);
console.log("\n-----------------------------\n");

console.log("Las bicicletas habilitadas son:")
console.log(carrera.bicicletasHabilitadas());
console.log("\n-----------------------------\n");

console.log("El método listarBicicletas toma una lista de bicicletas y devuelve el id, rodado, peso y estado\n");
// Se utilizará la lista de bicicletas habilitadas para el ejemplo
carrera.listarBicicletas(carrera.bicicletasHabilitadas());
console.log("\n-----------------------------\n");

// Se utilizará el id 4 para el ejemplo
console.log("El método buscarPorId recibe un id y devuelve la bicicleta con ese id\n");
console.log(carrera.buscarPorId(4));
console.log("\n-----------------------------\n");

console.log("El método buscarPorRodado recibe un valor de rodado máximo y devuelve las bicicletas que tengan un valor menor o igual de rodado\n");
// Se utilizará un valor de 60 para el ejemplo
console.log(carrera.buscarPorRodado(60));
console.log("\n-----------------------------\n");

console.log("El método ordenarPorPeso toma el array de bicicletas y lo devuelve ordenado por peso de menor a mayor\n");
console.log(carrera.ordenarPorPeso());
console.log("\n-----------------------------\n");

console.log("El método generarTanda recibe como valores un peso máximo y un rodado máximo,\ntoma el array de bicisHabilitadas() y genera una tanda de bicicletas no mayor a bicisPorTanda\n");
console.log(carrera.generarTanda(60, 9));
console.log("\nUsando valores muy extremos que hagan que la lista de bicis sea muy grande, la función no dejará continuar\n");
console.log(carrera.generarTanda(600, 90));
console.log("\n-----------------------------\n");


console.log("El método calcularPodio toma como input el array que devuelve generarTanda y devuelve el top 3 por puntaje\n");
console.log(carrera.calcularPodio(carrera.generarTanda(60, 9)));
