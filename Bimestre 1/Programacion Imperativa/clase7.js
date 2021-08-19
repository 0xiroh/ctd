function agregarHttp(url) {
    return "http://" + url;
}

function procesar(url, callback) {
    let array = []
    for (i = 0; i < url.length; i++) {
        array[i] = callback(url[i]);
    }
    return array;
}


console.log(agregarHttp("www.google.com"));
console.log(procesar(["www.google.com","www.yahoo.com"], agregarHttp));


/*function procesar(url) {
    let array = []
    for (i = 0; i < url.length - 1; i++) {
        array[i] = agregarHttp(url);
    }
    return array;
}*/
