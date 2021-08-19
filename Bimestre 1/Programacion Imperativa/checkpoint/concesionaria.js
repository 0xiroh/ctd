const autos = require("./carros");

let concesionaria = {
    autos: autos,
    buscarAuto: function (placa) {
       for (let i = 0; i < this.autos.length; i++){
          if (this.autos[i].patente == placa) {
             return this.autos[i];
          }
       }
       return null;
    },
    venderAuto: function (placa) {
        this.buscarAuto(placa).vendido = true;
    },
    autosParaLaVenta: function() {
        let arr = []
        for (let i = 0; i < this.autos.length; i++){
           if (this.autos[i].vendido == false){
              arr.push(this.autos[i]);
           }
        }
        return arr;
     },
    autosNuevos: function() {
        let arr = [];
        for (let i = 0; i < this.autosParaLaVenta().length; i++) {
           if (this.autosParaLaVenta()[i].km < 100) { 
              arr.push(this.autosParaLaVenta()[i]);
           }
        }
        return arr;
    },
    listaDeVentas: function (){
        let arr = [];
        for (let i = 0; i < this.autos.length; i++){
           if (this.autos[i].vendido == true){
              arr.push(this.autos[i].precio)
           }
        }
        return arr;
    },
    totalDeVentas: function (){
        let total = 0;
        for (let i = 0; i < this.listaDeVentas().length; i++) {
            total += this.listaDeVentas()[i];
        }
        return total;
    },
    puedeComprar: function (auto, persona){
        if (persona.capacidadDePagoEnCuotas >= (auto.precio/auto.cuotas) && persona.capacidadDePagoTotal >= auto.precio) {
            return true;
        }
        else {
            return false;
        }
    },
    autosQuePuedeComprar: function(persona) {
        let arr = [];
        for (let i = 0; i < this.autosParaLaVenta().length; i++) {
            if (this.puedeComprar(this.autosParaLaVenta()[i], persona) == true){
                arr.push(this.autosParaLaVenta()[i])
            }
        }
        return arr;
    }

 }
 console.log(concesionaria.totalDeVentas());
 //console.log(concesionaria.autosParaLaVenta());
concesionaria.venderAuto("JJK116");
//console.log(concesionaria.autosParaLaVenta());
console.log(concesionaria.totalDeVentas());