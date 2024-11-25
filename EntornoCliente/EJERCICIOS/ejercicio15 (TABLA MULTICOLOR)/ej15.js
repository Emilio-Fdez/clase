/**
 * evento onmouseenter
Crea una tabla con al menos 50 celdas. Haz que al pasar el ratón por encima de las celdas, 
éstas cambién de color a un color aleatorio
 */
let string = ""; 

for (let i = 0; i < 20; i++) {      // repetimos 20 veces
    string += "<tr>";               // añadimos una fila
    for (let j = 0; j < 20; j++) {  // repetimos 20 veces
        string += "<td></td>";      // añadimos una celda
    }
    string += "</tr>";
}
document.querySelector("table").innerHTML = string; // mostramos la tabla mediante lo guardado anteriormente en el string

function color(){ // funcion color aleat
    return "rgb(" + Math.random()*255 + "," + Math.random()*255 + "," + Math.random()*255 + ")";
}
//// object.onmouseenter = function(){myScript};
let tds = document.querySelectorAll("td");          // selecc todos los td
tds.forEach(td=>td.onmouseenter = function(){       // por cada td en tds, cuando pasemos por encima
    td.style.backgroundColor=color();               // fondo de color aleat
})

document.querySelector("button").onclick = function(){  // le añadimos al button un onclick
    tds.forEach(td=>{                                   // por cada td en tds
        td.style.backgroundColor="black";               // los cambia todos a fondo negro
    })
}