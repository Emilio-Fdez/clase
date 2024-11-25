/**
 * ! potencia con bucle for. 
 *  Define dos variables: base y exponente. 
 *  Utilizando el bucle for muestra el resultado del cálculo: baseexponente.
 * 
 *  En la página web se mostrarán también las variables, es decir, 
 *  se visualizará algo como, por ejemplo:   37 = 2178
*
* ? ¿Cuánto vale 1024^77?
* ? ¿Cuánto vale 77^1024?   
*/

function potencia() {

    let b = document.querySelector("#base").value;  // recogemos el valor del elemento con id = base
    let e = document.querySelector("#exponente").value;  // recogemos el valor del elemento con id = exponente

    let result = 1 ; // result

    for (let index = 0; index < e; index++) { // repetimos el num de veces que diga el e = exponente
        result *= b; // calculamos potencia multiplicando la base por si misma y la guardamos en result
        
    }
    // mostramos la potencia (pero bonito)
    document.querySelector("p").innerHTML = "<p>"+ b +"<sup>" + e + "</sup> = " + result + "</p>";
}

