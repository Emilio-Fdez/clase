function potencia() {

    let b = document.querySelector("#base").value;  // recogemos el valor del elemento con id = base
    let e = document.querySelector("#exponente").value;

    let be = 1 ; // result

    for (let index = 0; index < e; index++) {
        be *= b; //calculamos potencia
    }
    // mostramos la potencia (pero bonito)
    document.querySelector("p#potencia").innerHTML = "<p>"+ b +"<sup>" + e + "</sup> = " + be + "</p>";
}

function potenciaPow() {

    let b = document.querySelector("#base").value;  // recogemos el valor del elemento con id = base
    let e = document.querySelector("#exponente").value;

    let be = 0; // result

    be = Math.pow(b,e) // math.pow es como poner ya directamente b^e
    // mostramos la potencia (pero bonito)
    document.querySelector("p#potenciaPow").innerHTML = "<p>"+ b +"<sup>" + e + "</sup> = " + be + "</p>";
}
function potenciaSimbolo() {

    let b = document.querySelector("#base").value;  // recogemos el valor del elemento con id = base
    let e = document.querySelector("#exponente").value;

    let be = 0; // result

    be = b**e; // te calcula la potencia directamente 
    // mostramos la potencia (pero bonito)
    document.querySelector("p#potenciaSimbolo").innerHTML = "<p>"+ b +"<sup>" + e + "</sup> = " + be + "</p>";
}

function calcular(){
    potencia();
    potenciaPow();
    potenciaSimbolo();
}