/**
 * Minas alrededor
Modifica el código anterior de manera que cada celda del array almacene un número que indique el número de minas que tiene alrededor.
let arr = initBuscaminas( 7, 10, 15 );   // 7 filas, 10 columnas y 15 minas
showArray(arr);
 1 1 0 1 * 2 1 2 * 2 1
 * 1 0 1 2 4 * 4 3 * 1
 1 1 0 0 1 * * 3 * 2 1
1 1 0 1 2 4 3 3 1 1 0
 * 2 1 1 * 2 * 1 1 1 1
 1 * 1 2 2 3 1 2 2 * 1
 1 1 1 1 * 1 0 1 * 2 1
 */

const div = document.querySelector("div");

function showArray(array){
    string = "";
    for (const element of array) { //cada elemento del array
        if (element instanceof Array) { //si el elemento es un Array
            string += showArray(element) + "\n" // muestra elemento de ese array
        } else {
            string += element + " "
        }
    }
    return string;
}

function initBuscaminas(fi,co,mi){
    let array = []
    for (let f = 0; f <= fi; f++) {
        let arr = [];
        for (let c = 1; c <= co; c++) {
            arr.push(0);
        }
        array.push(arr);
    }
    // //let array = new Array(fi).fill(new Array(co).fill(0));

    let minasColocadas = 0;

    while (minasColocadas < mi) { //mientras tenga mas minas que colocar
        //Generamos una pos aleat dentro de las dimensiones del tablero
        const fila = Math.floor(Math.random() * fi)
        const columna = Math.floor(Math.random() * co)
        //verificamos si la pos ya tiene una mina, si no, la colocamos
        if (array[fila][columna] !== 'X') { //comprobamos si tiene bomba
            array[fila][columna] = 'X'; // sino, ponemos bomba   
            calcularContiguas(fila,columna,array);//si ponemos la bomba calculamos las casillas contiguas
            minasColocadas++;    
        }
    }
    return array;
}

/*  0 0 0
    0 x 0
    0 0 0 */


function calcularContiguas(_f,_c,_array) {//si me dan la (1,1,array)

    for (let filas = _f-1; filas <= _f+1; filas++){//recorremos las filas del 0 al 2

        for (let columnas = _c-1; columnas <= _c+1; columnas++) {//recorremos las columnas del 0 al 2
            
            if(filas >= 0 && filas < _array.length && columnas >= 0  && columnas < _array[filas].length) {

                if (_array[filas][columnas] != 'X') _array[filas][columnas]++;//si la posicion que estoy iterando no es una mina sumo ++ a la casilla
            }
        }
    }
}

let arr = initBuscaminas(7,11,15);
div.innerText = showArray(arr);