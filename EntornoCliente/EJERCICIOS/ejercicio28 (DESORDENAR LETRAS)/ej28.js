/**
 * Desordenar texto
Crea una función mess(text) que desordene de manera aleatoria los caracteres de un String.
INDICACIÓN: Puedes intercambiar (swap) todos los caracteres (del primero al último), 
con otro caracter cualquiera (elegido al azar).
 */

const inp = document.querySelector("input");
const boton = document.querySelector("button");
const pf = document.querySelector("p");

boton.addEventListener("click", () => {
    pf.innerText = mess(inp.value); 
});

function mess(string){
    letras = string.split("");  // separamos el string en un array llamado letras
    stringAleat = "";           // hara un string con letras aleatorias.
    while (letras.length != 0) {                     // mientras haya letras
        l = Math.floor(Math.random()*letras.length); // en l guardamos la posicion aleat de una letra
        stringAleat += letras[l];                    // guardamos la letra en el stringAleat
        letras.splice(l,1);     // l = posicion comenzar a eliminar, 1 = cuantos elementos se borran desde esa pos
    }
    return stringAleat;
    
}