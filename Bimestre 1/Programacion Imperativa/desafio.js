let cuenta = {
    numeroDeCuenta: 123232,
    saldo: 3213131,
    titular: "Andres"
}
console.log(cuenta);

let saldo = 100;

function deposito(dinero) {
    saldo += dinero;
    console.log(`Se realizó un depósito por: $${dinero} y su saldo total es de: $${saldo}`);
}

deposito(200);


function retiro(dinero) {
    if (saldo < dinero) {
        return "No hay dinero suficiente";
    } 
    else {
        return `Se retiraron ${dinero}, el saldo restante es de: $${saldo-dinero}`;
    };
}
console.log(retiro(50));

function Cuenta(numeroDeCuenta, saldo, titular) {
    this.numeroDeCuenta = numeroDeCuenta;
    this.saldo = saldo;
    this.titular = titular;
}

let micuenta = new Cuenta(123434, 300, 'Martin');
console.log(micuenta.titular);1321234
1234


let alumno = {
    nombre: 'Martin Gutierrez',
    numeroDeLegajo: 123456,
    listaDeNotas: [6,4,5,8,7],
    promedio: function() {
        let suma = 0;
        for (i = 0; i < this.listaDeNotas.length; i++){
            suma += this.listaDeNotas[i];
        }
        return suma/this.listaDeNotas.length;
    },
    aprobado: function(minimo) {
        console.log(this.promedio());
        let prom = this.promedio();
        console.log(`El promedio del estudiante ${this.nombre} es: ${prom}`);
        if (prom < minimo) {
            console.log(`El estudiante ${this.nombre} reprobó`);
        }
        else {
            console.log(`El estudiante ${this.nombre} aprobó`);
        }
    }
}

alumno.aprobado(3);