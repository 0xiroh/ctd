// Aquí realizamos un la consulta de la promesa, esperando su respuesta asíncrona
const apiUrl = 'https://randomuser.me/api/'

function consultaApi(){
    fetch(apiUrl)
        .then(response => {
            return response.json()
        })
        .then(data => {
            //manipulamos la respuesta
            console.log(data);
            console.log(data.results[0].picture.medium);
            renderizarDatosUsuario(data.results[0]);
        });
}

function renderizarDatosUsuario(datos) {
    /* -------------------------------- CONSIGNA 1 -------------------------------- */
    // Aquí deben desarrollar una función que muestre en pantalla:
    // la foto, el nombre completo del usuario y su email.
    // Esto debe estar basado en la info que nos llega desde la API e insertarse en el HTML.
    const tarjeta = document.querySelector(".tarjeta");
    const imagen = document.querySelector(".tarjeta img");
    const nombre = datos.name.first;
    const apellido = datos.name.last;
    const url = datos.picture.large;
    console.log(url);
    imagen.src = url;
    tarjeta.innerHTML += "<h1>" + nombre + "</h1>"
    tarjeta.innerHTML += "<h1>" + apellido + "<h1>"
    

    
    
    
    
    
}
consultaApi();


/* --------------------------- CONSIGNA 2 (extra) --------------------------- */
// Aqui pueden ir por el punto extra de utilizar el boton que se encuentra comentado en el HTML
// Pueden descomentar el código del index.html y usar ese boton para ejecutar un nuevo pedido a la API, sin necesidad de recargar la página.
// Es criterio del equipo QUÉ bloque del código debe contenerse dentro de una función para poder ser ejecutada cada vez que se escuche un click.