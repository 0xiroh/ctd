

let participante1 = {
    nombre: "Andres",
    apellido: "Arias",
    edad: 29,
    listaPuntajes: [5,8,4,9,5],
    agregarPuntaje: function (puntaje){
        return this.listaPuntajes.push(puntaje)
    },
    promedioPuntaje: function() {
        let promedio = 0;
        for (i = 0; i < this.listaPuntajes.length; i++) {
            promedio += this.listaPuntajes[i];
        }
        return promedio/this.listaPuntajes.length;
    }
}


let participante2 = {
    nombre: "Ernesto",
    apellido: "Farias",
    edad: 32,
    listaPuntajes: [8,7,8,6,8],
    agregarPuntaje: function (puntaje){
        return this.listaPuntajes.push(puntaje)
    },
    promedioPuntaje: function() {
        let promedio = 0;
        for (i = 0; i < this.listaPuntajes.length; i++) {
            promedio += this.listaPuntajes[i];
        }
        return promedio/this.listaPuntajes.length;
    }
}

console.log(participante1.promedioPuntaje());
console.log(participante2.promedioPuntaje());

function competencia (p1, p2) {
    if (p1.promedioPuntaje > p2.promedioPuntaje){
        return participante1;
    }
    else {
        return participante2;
    }
}

console.log(competencia(participante1, participante2));

