

const text = document.querySelector("textarea");
const inp = document.querySelector("input");

// ? FUNCION FLECHA
document.addEventListener("keydown", (pulsa) => {   // para que al pulsar enter se envie
    if (pulsa.key == "Enter") {                     // si la tecla es enter
        text.value += inp.value + "\n";             // añadir al texto que ya hay el del input con salto de linea
        inp.value = "";                             // vaciamos el input
    }
});
