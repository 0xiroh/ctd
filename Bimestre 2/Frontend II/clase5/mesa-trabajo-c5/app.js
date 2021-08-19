/*let h1 = document.querySelector('h1');
let h2 = document.querySelectorAll('h2');
let body = document.querySelector('body');
let p = document.querySelectorAll('p');
let div = document.querySelectorAll('div');

h1.classList.remove('felinos');
h2.forEach(tag => {
    tag.classList.remove('texto');
});
p.forEach(tag => {
    tag.classList.remove('texto');
});
div.forEach(tag => {
    tag.classList.remove('item2');
});
body.classList.remove('dark');

let modoOscuro = confirm("Desea cambiar al modo oscuro?");

if (modoOscuro) {
    h1.classList.add('felinos');
h2.forEach(tag => {
    tag.classList.add('texto');
});
p.forEach(tag => {
    tag.classList.add('texto');
});
div.forEach(tag => {
    tag.classList.add('item2');
});
body.classList.add('dark');
}*/

function alternarTema(){
    document.querySelector('body').classList.toggle("dark");
    console.log("Se lanzó la función");
}


const contenedor = document.querySelector('.contenedor');
