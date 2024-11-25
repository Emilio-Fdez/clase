const a = "abcdefghijklmnñopqrstuvwxyz";    // tenemos el abecedario

function palabraAleatoria() {   // * muestra una palabra de 5 letras aleatoria
    let palabra = "";   // preparamos la variable para ir rellenandola aleatoriamente
    for (let index = 0; index < 5; index++) {   // ! repetimos 5 veces 
        palabra += a.charAt(Math.floor((Math.random()*a.length)))   // ? Metemos una letra aleatoria
    }
    document.querySelector("h1").innerText = palabra;   // * mostramos la variable palabra
}

function palabraAleatoriaN() {  // * muestra una palabra de n letras aleatoria
    let palabra = "";
    let n = Math.random() * a.length;   // ! sacamos un numero aleatorio para la longitud de la palabra
    for (let index = 0; index < n; index++) {   //repetir el num veces que te haya salido n
        palabra += a.charAt(Math.floor((Math.random()*a.length))) // ? Metemos una letra aleatoria
    }
    document.querySelector("h1").innerText = palabra; // * mostramos la variable palabra
}
