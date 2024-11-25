

const text = document.querySelector("textarea");
const inp = document.querySelector("input");
const boton = document.querySelector("button");

// ! utilizamos un .onsubmit para desactivar el submit (enviar info)
document.querySelector("form").onsubmit = function (event) {    // event es un objeto que te da submit
    event.preventDefault();}                                    // desactivar la funcion por defecto del submit


boton.addEventListener('click', () => {     // cuando hagamos click en el boton se usa esta funcion flecha
    text.value += inp.value + "\n";         // escribir en textarea lo que esta en el input
    inp.value = "";                         // vaciamos input
    inp.focus();                            // volver a seleccionar el input
});