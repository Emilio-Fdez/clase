var color = "yellow";  // AMARILLO

// ...
window.color = "red";

document.querySelector("h1").innerHTML = color; // ¿red?! pero si yo quería amarillo!
// insisto, quiero amarillo ...
//var color = "yellow"  // ¡¡¡ QUIERO AMARILLO !!!

// ...
//document.querySelector("h2").innerHTML =color; // ¿amarillo? pero si yo quería rojo... no entiendo nada

// sale rojo pq estamos programando dentro del objeto window por defecto, la pagina que crea el JS es un objeto window
