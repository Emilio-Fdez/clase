let string = ""; // variable para guardar el string

for (let i = 0; i <= 10; i++) {     // como queremos las tablas del 1 al 10, se recorren 10 veces
    string += "<tr>";               // añadimos filas
    for (let j = 0; j <= 10; j++) { // como queremos las tablas del 1 al 10, se recorren 10 veces
        string += "<td>";           // añadimos celdas
        if (i==0 && j==0) {         // para referirnos a la celda (0,0)
            string += "x";          // le ponemos una x
        } else if (i==0) {          // si la fila es 0
            string += j;            // ponemos en la celda 1
        } else if (j==0) {          // si la columna es 0
            string += i;            // ponemos en la celda 1
        } else { 
            string += i*j; 
        }
        string += "</td>"; //cerrar celda
    }
    string += "</tr>"; //cerrar la fila
}

document.querySelector("table").innerHTML = string; // mostramos el string