/**
 * Array triangular
Crea una función para generar un array triangular, con tantas filas como se indique en el argumento:
let x = creaArrayTriangular(4);
showArray(x)
1
1, 2
1, 2, 3
1, 2, 3, 4
 */
const div = document.querySelector("div");

function showArray(array){
    string = "";
    for (const element of array) {              // cada elemento del array
        if (element instanceof Array) {         // si el elemento es un Array
            string += showArray(element) + "\n" // muestra elemento de ese array
        } else {
            if (array.length-1 != array.indexOf(element)) {
                string += element + ", "
            } else{
                string += element 
            }
        }
    }
    return string;
}
    
function arrayTriangular(int) {                 // le pasamos un numero entero
    let array = []                              // creamos un array vacio
    for (let f = 0; f <= int; f++) {            // repetimos el array el num de veces del numero entero pasado anteriormente
        let arr = [];                           // crea otro array vacio
        for (let c = 1; c <= f; c++) {          // repite el array el num de filas
            arr.push(c);                        // añade columnas al array de filas
        }
        array.push(arr);                        // añade el array al array general
    }
    return array;
}

let x = arrayTriangular(4);

div.innerText = showArray(x) 