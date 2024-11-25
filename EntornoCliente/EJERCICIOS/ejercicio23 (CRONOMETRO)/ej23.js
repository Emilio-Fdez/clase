/**
 * crono botón
Crea una página web con un único botón. La primera vez que se pulse mostrará el texto:    Cronómetro iniciado 
A partir de ahora, cada pulsación mostrará el tiempo transcurrido desde que se pulsó por primera vez.
Los objetos Date almacenan los milisegundos transcurridos desde el 1-ene-1970 00:00:00.
Puedes obtenerlos con su método static now().
 */

const boton = document.querySelector("button");
const pf = document.querySelector("p");


let cronometroIniciado = false;                     // boolean de cronometro
let tiempoInicio;

boton.addEventListener('click', function() {        // al pulsar el boton
    if (!cronometroIniciado) {                      // si el cronometro no ha iniciado
        cronometroIniciado = true;                  // cronometro en marcha
        tiempoInicio = Date.now();                  // tiempo inicio el de ahora
        pf.innerText = 'Cronómetro iniciado';       // muestra mensaje de inicio
    } else {
        const tiempoTranscurrido = (Date.now() - tiempoInicio) / 1000;          // Calculamos tiempo transc ( la hora actual - la hora en q empezo/1000 xq esta en miliseg y quiero seg)
        pf.innerText = `Tiempo transcurrido: ${tiempoTranscurrido} segundos`;   // mostramos el tiempo transc
    } 
});
