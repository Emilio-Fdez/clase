/**
 * evento onchange
Introduce varios colores en un cuadro de lista desplegable (select, option) 
de manera que al elegir uno de ellos, un div que habrá en la página cambiará a ese color.
 */

let sel = document.querySelector("select");
let div = document.querySelector("div");

sel.onchange = function(){                   // usamos onchange en select para cambiar su interior
    div.style.backgroundColor = sel.value;   // cambiamos el fondo del div con el cambio de select anterior
};

