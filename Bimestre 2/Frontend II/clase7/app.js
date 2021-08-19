let contenedor = document.querySelector("#contenedor");
const pregunta = prompt("Ingrese una pregunta: ");
//contenedor.innerHTML = `<p>${pregunta}</p>`;

let respuesta = prompt("Ingrese la respuesta: ")

let elementoParrafo = document.createElement('p');
let elementoParrafo1 = document.createElement('p');
let nodoTexto = document.createTextNode(pregunta);
let nodoTexto1 = document.createTextNode(respuesta);
elementoParrafo.appendChild(nodoTexto);
elementoParrafo1.appendChild(nodoTexto1);
contenedor.appendChild(elementoParrafo);
contenedor.appendChild(elementoParrafo1);


