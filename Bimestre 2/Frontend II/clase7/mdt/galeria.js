const urlImagenes = [];

const imagenes = document.querySelectorAll(".imagen");

for (let i = 0; i < imagenes.length; i++) {
    let url = prompt("Ingrese una url de imagen:");
    urlImagenes.push(url);
}

// ahora agregamos a cada nodo el atributo 'src'

for (let j = 0; j < urlImagenes.length; j++) {
    let nodoImagen = document.getElementById(`imagen-${j+1}`);
    nodoImagen.setAttribute("src", urlImagenes[j]);
}

// se agrega el href a los link

for (let i = 0; i < urlImagenes.length; i++) {
    let nodolink = document.querySelector(`.rutas-img-${i+1}`)
    nodolink.setAttribute("href", urlImagenes[i]);
    nodolink.setAttribute("target", "_blank");
}



/* ETAPA 3
- Nodo padre:
- Nodo hijo repetitivo:
- Explicación:
*/

