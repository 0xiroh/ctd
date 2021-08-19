const premioTotal = 2500;
const casilla = 10;
function calcular(aciertos){
    return (aciertos/casilla)*premioTotal;
}

function resultadoLoteria(){
    prompt("Ingrese un objeto o lugar con el que soñó: ");
    const numero = parseInt(Math.random() * 4);
    switch(numero){
        case 0:
            alert("Ha ganado $1.000");
            break;
        case 1:
            alert("Ha ganado $10.000");
            break;
        case 2:
            alert("Ha ganado $10.000");
            break;
        case 3:
            alert("Ha ganado $100.000");
            break;
    }
}

const finalRuleta = 25;
function tirarRuleta(){
    const numGanador = parseInt(Math.random() * 25 + 1);
    for (let i = 1; i <= finalRuleta; i++){
        if (numGanador == i){
            console.log(i + " -> Número ganador");
        }
        else {
            console.log(i);
        }
       
    }
}