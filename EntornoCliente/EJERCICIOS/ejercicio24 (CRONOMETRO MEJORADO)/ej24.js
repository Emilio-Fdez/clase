/**
 * Cronobotón mejorado
Modifica el ejercicio anterior de manera que muestre el tiempo con el formato hh:mm:ss, por ejemplo:
00:01:59
 */
const boton = document.querySelector("button");
const pf = document.querySelector("p");
let cronometroIniciado = false;                     // boolean de cronometro
let tiempoInicio;

boton.addEventListener('click', () => {             // al pulsar el boton
    if (!cronometroIniciado) {                      // si el cronometro no ha iniciado
        cronometroIniciado = true;                  // cronometro en marcha
        tiempoInicio = Date.now();                  // tiempo inicio el de ahora
        pf.innerText = 'Cronómetro iniciado';       // mostrar mensaje inicio
    } else {
        let tiempoTranscurrido = (Date.now() - tiempoInicio) / 1000; 
        const hours = Math.floor(tiempoTranscurrido / 3600);        // redondeamos el tiempo transcurrido entre 3600 para saber las horas
        const mins = Math.floor((tiempoTranscurrido % 3600) / 60);  // redondeamos el tiempo transcurrido 60 para saber las min
        const secs = Math.floor(tiempoTranscurrido % 60);           // redondeamos el tiempo transcurrido  para saber las seg

        pf.innerText = (
            String(hours).padStart(2,'0') + ':' + 
            String(mins).padStart(2,'0') + ':' +
            String(secs).padStart(2,'0'));
    }
});
