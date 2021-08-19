/*
REQUERIMIENTOS
- utilizar el formulario para captar el texto ingresado

- implmentar el evento "submit", utilizarlo para guardar el comentario en un array

- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcodeados y hacerlo dinamico)

- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
*/
const formulario = document.querySelector("form");
const inputComentario = document.querySelector("#comentario")
const divComentarios = document.querySelector(".comentarios");
const borrarComentarios = document.querySelector('#delete');

let listaComentarios = JSON.parse(localStorage.getItem("comentarios")) || [];

// let infoLocal = JSON.parse(localStorage.getItem("comentarios"))

renderizarComentario(listaComentarios);


formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    let inputValue = inputComentario.value.trim();

    listaComentarios.unshift(inputValue);

    localStorage.setItem("comentarios", JSON.stringify(listaComentarios));

    renderizarComentario(listaComentarios);

    formulario.reset()
});

borrarComentarios.addEventListener('click', function(e){
    e.preventDefault();
    listaComentarios = [];
    localStorage.removeItem("comentarios");
    renderizarComentario(listaComentarios);
});

function renderizarComentario(listado) {
    divComentarios.innerHTML = "";
    listado.forEach((element, index) => {
        let texto = document.createTextNode(element);
        let cruz = document.createTextNode('❌');

        let btnBorrar = document.createElement('button');
        let p = document.createElement("p");

        btnBorrar.appendChild(cruz);
        btnBorrar.setAttribute('onclick', `borrarUno('${index}')`)
        
        p.appendChild(texto);
        p.appendChild(btnBorrar);

        divComentarios.appendChild(p);
    });
}
function borrarUno(id) {
    //borramos la posicion
    listaComentarios.splice(id,1);
    renderizarComentario(listaComentarios);
}