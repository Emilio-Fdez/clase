/**
 * Array del buscaminas
Crea una función para crear un array que podría servir para el juego buscaminas.
Recibirá como argumentos las dimensiones y el número de minas que deseamos que aparezcan en el tablero.

let arr = initBuscaminas( 7, 11, 15 );   // 7 filas, 11 columnas y 15 minas
showArray(arr);
 0 0 0 0 * 0 0 0 * 0 0 
 * 0 0 0 0 0 * 0 0 * 0
 0 0 0 0 0 * * 0 * 0 0
 0 0 0 0 0 0 0 0 0 0 0
 * 0 0 0 * 0 * 0 0 0 0
 0 * 0 0 0 0 0 0 0 * 0
 0 0 0 0 * 0 0 0 * 0 0
 */

const div = document.querySelector("div");

function showArray(array){ //funcion para mostrar el array
    string = ""; //creamos una variable para ir guardando lo que queremos mostrar
    for (const element of array) { //recorremos cada elemento del array
        if (element instanceof Array) { //si el elemento es un Array
            string += showArray(element) + "\n" // muestra elemento de ese array (volviendo a utilizar esa funcion)
        } else {
            if (array.length-1 != array.indexOf(element)) {//si la posicion del elemento NO es la ultima del array
                string += element + ", " //ponemos una coma para continuar poniendo mas
            } else { //si SI 
                string += element // ponemos solo el elemento
            }
        }
    }
    return string;
}
/**
 * funcion para crear un array con tamaño y minas deseadas
 * @param {*} fi tamaño filas
 * @param {*} co tamaño columnas
 * @param {*} mi numero de minas
 * @returns array
 */
function initBuscaminas(fi,co,mi){ 
    let array = [] //creamos un array vacio (que devolveremos)
    for (let f = 0; f <= fi; f++) { //recorremos las filas
        let arr = []; //cada fila sera un array
        for (let c = 1; c <= co; c++) {//recorremos columnas
            arr.push(0); //insertamos al array de filas "0"
        }
        array.push(arr); //insertamos al array vacio, el array de filas
    }
    // //let array = new Array(fi).fill(new Array(co).fill(0));

    let minasColocadas = 0;//contador minas

    while (minasColocadas < mi) { //mientras tenga mas minas que colocar
        //Generamos una pos aleat dentro de las dimensiones del tablero
        const fila = Math.floor(Math.random() * fi) 
        const columna = Math.floor(Math.random() * co)
        //verificamos si la pos ya tiene una mina, si no, la colocamos
        if (array[fila][columna] !== 'X') { //comprobamos si tiene bomba
            array[fila][columna] = 'X'; // sino, ponemos bomba   
            minasColocadas++;//se van sumando al contador de minas
        }
    }
    return array;
}

    
let arr = initBuscaminas(7,11,15);  // 7 filas, 11 columnas y 15 minas

div.innerText = showArray(arr) 