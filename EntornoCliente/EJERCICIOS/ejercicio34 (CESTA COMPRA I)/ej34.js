/**
 * cesta de la compra (I)
Haz un programa con un input-text y un botón "Añadir a la cesta".
En la parte inferior habrá una lista numerada (<ol id="cesta">), en principio vacía.

agu
Cada vez que pulsemos el botón, se añadirá el texto del input-text en la lista numerada.
 */

const inp = document.querySelector("input");
const botonA = document.querySelector("button");
const lista = document.querySelector("ol");

botonA.addEventListener("click", añadirList); // al dar al boton llamamos a la funcion añadirlist

window.addEventListener("keydown", (key) => { // cuando le das al enter se envia el input
    if(key.key == "Enter") añadirList();
})

function añadirList() {
    if (inp.value != "") {                      // si el input no esta vacio
        let li = document.createElement("li");  // creamos el elemento li para la lista (ol)
        li.innerHTML = inp.value;               // guardamos el valor de input en li
        lista.appendChild(li);                  // meter li en la lista
        inp.value = "";                         // volvemos a dejar el input vacio
    }
}





