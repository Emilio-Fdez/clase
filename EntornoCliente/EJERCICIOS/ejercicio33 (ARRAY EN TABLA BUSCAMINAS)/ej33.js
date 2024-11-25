/*
* función para visualizar array en tabla
Crea una función que te devuelva una tabla HTML a partir de un array:
htmlTable = createTable(Array, String id, String clase);
Recibirá dos argumentos:
- Un array, que será de 1 ó 2 dimensiones. No se realizarán comprobaciones de dimensión, 
se supone que los programadores que usen esta función tendrán conocimientos de lo que es una <table> HTML.
- Dos String opcionales, que serán el identificador de la tabla (valor del atributo id) y su clase CSS (valor del atributo class).

* Ejemplo de funcionamiento
const div = document.getElementById("contenedorTabla");
div.appendChild( createTable( initBuscaminas(7,11, 15), "buscaminas" ) )

El código Unicode de la bomba es U+1F4A3
★ Para probar que todo funciona correctamente, crea un array buscaminas de una única dimensión.


*/
const b = '\u{1F4A3}';
const div = document.getElementById("contenedorTabla");



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
function calcularContiguas(_f,_c,_array) {//si me dan la (1,1,array)

    for (let filas = _f-1; filas <= _f+1; filas++){//recorremos las filas del 0 al 2

        for (let columnas = _c-1; columnas <= _c+1; columnas++) {//recorremos las columnas del 0 al 2
            
            if(filas >= 0 && filas < _array.length && columnas >= 0  && columnas < _array[filas].length) {

                if (_array[filas][columnas] != 'X') _array[filas][columnas]++;//si la posicion que estoy iterando no es una mina sumo ++ a la casilla
            }
        }
    }
}

function visualizarTabla(arrayT,id){
    let tabla = document.createElement("table"), fila, celda;
    tabla.id = id; //metemos id a la tabla
    for (let f = 0; f < arrayT.length; f++) {
        fila = document.createElement("tr");
        for (let c = 0; c < arrayT[f].length; c++) {
            celda = document.createElement("td");
            if (arrayT[f][c] == 'X') {
                celda.innerHTML = b;
            } else {
                celda.innerHTML = arrayT[f][c];
            }
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    return tabla;
}

div.appendChild(visualizarTabla(initBuscaminas(7,11,15), "buscaminas" ) )
