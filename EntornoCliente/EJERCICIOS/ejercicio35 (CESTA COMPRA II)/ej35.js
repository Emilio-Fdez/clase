/**
 * cesta de la compra (II)
En el ejercicio anterior añade un select-option donde también se muestren los elementos que hay en la cesta.
Al lado de este select, añade un segundo botón con texto "Eliminar".

Cuando se pulse este botón, se eliminará de la cesta (de la lista ol y del select) el producto que estuviera seleccionado.
 */

const inp = document.querySelector("input");
const botonA = document.querySelector("button");
const botonB = document.querySelector("button#but");
const lista = document.querySelector("ol");
const select = document.querySelector("select");

botonA.addEventListener("click", añadirList); // al dar al boton llamamos a la funcion añadirlist

botonB.addEventListener("click", borrar);

window.addEventListener("keydown", (key) => { // cuando le das al enter se envia el input
    if(key.key == "Enter") añadirList();
})

function añadirList() {
    if (inp.value != "") {                                  // si el input no esta vacio
        let li = document.createElement("li");              // creamos el elemento li para la lista (ol)
        li.innerHTML = inp.value;                           // guardamos el valor de input en li
        lista.appendChild(li);                              // meter li en la lista
        let opt = document.createElement("option");         // creamos el elemento option para el select
        opt.innerHTML = inp.value;   opt.value = inp.value; // ponemos en option los valores que necesita
        inp.value = "";                                     // volvemos a dejar el input vacio
        select.appendChild(opt);                            // metemos la opcion en el select
    }
}

function borrar() {
    // Obtener el select y el valor seleccionado
    var itemSeleccionado = select.value;

    // Verificar que se ha seleccionado un artículo
    if (itemSeleccionado !== "") {
        // Eliminar el artículo de la lista ol
        var items = lista.querySelectorAll("li");
        
        // Recorrer la lista para encontrar y eliminar el item
        for (const i of items) {
            if (i.innerText === itemSeleccionado) {
                lista.removeChild(i);
                break;
            }
        }

        // Eliminar la opción correspondiente del select
        var options = select.querySelectorAll("option");
        for (const o of options) {
            if (o.value === itemSeleccionado) {
                select.removeChild(o);
                break;
            }
        }
    } else {
        alert("Por favor, selecciona un artículo para eliminar.");
    }
}

