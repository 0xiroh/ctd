function Autos(marca, modelo, color, anio, km, precio, cuotas, patente,vendido){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color
    this.anio = anio;
    this.km = km;
    this.precio = precio;
    this.cuotas = cuotas;
    this.patente = patente;
    this.vendido = vendido;
}

let autos = [
    new Autos("Ford", "Fiesta", "Azul", 2019, 200, 150000, 12, "APL123", false),
    new Autos("Toyota", "Corolla", "Blanco", 2019, 0, 100000, 14, "JJK116", false)
]

module.exports = autos;