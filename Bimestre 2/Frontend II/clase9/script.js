window.addEventListener("load", function() {
    
    let contador = 0;
    let estado = true;

    const cuenta = document.querySelector("#cuenta");
    const btn = document.querySelector("#btn-sumar");
    cuenta.innerText = contador

    window.addEventListener('keypress', function(e){
        console.log(e);
        if(e.code=="Space" && estado){
            this.clearInterval(timer);
            estado = !estado;
        }
        else if(e.code=="Space" && !estado){
            arrancar();
            estado = !estado;
        }
    })

    let timer;
    arrancar();

    function arrancar() {
        timer = setInterval(function(){
            contador++;
            cuenta.innerText = contador;
        },100)
    }

})