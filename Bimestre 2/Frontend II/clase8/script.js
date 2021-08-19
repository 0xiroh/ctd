window.addEventListener("load", function() {
    
    let contador = 0;

    const cuenta = document.querySelector("#cuenta");
    const btn = document.querySelector("#btn-sumar");
    cuenta.innerText = contador

    btn.addEventListener("click", function(){
        contador++;
        cuenta.innerText = contador;
    })
})