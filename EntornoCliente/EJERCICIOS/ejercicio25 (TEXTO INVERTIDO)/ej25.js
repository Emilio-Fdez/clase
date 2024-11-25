/**
 * Voltear un texto
Crea una función denominada reverse(texto) que ponga del revés el texto que reciba como argumento.
Para que una función retorne un valor, se utiliza 
    return valor;
    Virgen de la paloma ----> amolap al ed negriv
 */

const inp = document.querySelector("input");
const boton = document.querySelector("button");
const pf = document.querySelector("p");

boton.addEventListener("click", () => {     // al clicar el boton
    pf.innerText = reverse(inp.value);      // mostramos el valor revertido con la funcion reverse()
})

function reverse(str){                      // le pasamos un string
    strS = str.split("");                   // separamos el string por caracteres
    strS = strS.reverse();                  // para darle la vuelta
    return strS.join("");                   // para unir lo separado anteriormente por el split
}