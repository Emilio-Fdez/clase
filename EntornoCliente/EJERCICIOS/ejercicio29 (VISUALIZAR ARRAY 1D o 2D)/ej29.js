/**
 * función para visualizar arrays
Crea una function showArray(Array) que visualice los elementos de un array de 1 ó 2 dimensines.
 
Ejemplo:

const uno = [ 1, 2, 2 ];
const dos = [ [1, 2], [1, 2, 3], [1, 2, 3, 4] ];

showArray(uno)
   1 2 2
showArray(dos)
   1 2
   1 2 3
   1 2 3 4
 */
const div = document.querySelector("div");

const uno = [ 1, 2, 2 ];
const dos = [ [1, 2], [1, 2, 3], [1, 2, 3, 4] ];

function showArray(array){
    string = "";
    for (const element of array) {              // cada elemento del array
        if (element instanceof Array) {         // si el elemento es un Array
            string += showArray(element) + "\n" // muestra elemento de ese array
        } else {
            string += element + " "             // muestra el elemento
        }
    }
    return string;
}
    

div.innerText = showArray(uno) + "\n\n" + showArray(dos);


