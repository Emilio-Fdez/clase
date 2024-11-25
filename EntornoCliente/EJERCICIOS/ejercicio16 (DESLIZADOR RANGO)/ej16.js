/**
 * evento oninput
Crea una página web con una cabecera <h1> 
y un deslizador (input-range).
Muestra en la cabecera el valor del deslizador 
según lo vas moviendo.

Ejemplos de deslizador:
<input type="range" min="0" max="255" value="0" orient="vertical">
<input type="range" min="0" max="1" value="1" step="0.05">
 */
    let inp = document.querySelector("input");          // guardamos el objeto input

    inp.oninput = function(){                           // el valor del input cambia a medida que movemos el rango
        let valor = inp.value;                          // guardamos el valor del objeto input
        document.querySelector("h1").innerText = valor; // asignamos el valor a h1
    }
