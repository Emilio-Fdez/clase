// 1. Función que simula el lanzamiento de un dardo, generando un puntaje aleatorio entre 1 y 20
function lanzarDardo(callback) {
    let puntaje = Math.floor(Math.random() * 20) + 1;
    console.log(`Lanzamiento: ${puntaje} puntos.`);
    callback(puntaje);
}

// 2. Función para realizar el juego, usando setTimeout para cada lanzamiento
function jugarDardos(callback) {
    let puntajes = []; // Array para guardar los puntajes de cada lanzamiento
    let lanzamientos = 0;

    // Usamos setInterval para realizar un lanzamiento cada 2 segundos
    const intervalo = setInterval(() => {
        lanzamientos++;

        // Llamamos a la función lanzarDardo
        lanzarDardo((puntaje) => {
            puntajes.push(puntaje);
        });

        // Si hemos realizado 5 lanzamientos, detenemos el intervalo
        if (lanzamientos === 5) {
            clearInterval(intervalo);

            // Usamos setTimeout para simular un retraso antes de mostrar el resultado final
            setTimeout(() => {
                // Calculamos el puntaje total
                let totalPuntaje = puntajes.reduce((acc, curr) => acc + curr, 0);
                console.log(`Puntajes de los lanzamientos: ${puntajes}`);
                callback(totalPuntaje);
            }, 1000); // 1 segundo de retraso para mostrar el resultado
        }
    }, 2000); // Lanzamiento cada 2 segundos
}

// 3. Función de callback para mostrar el puntaje final
function mostrarResultado(puntajeFinal) {
    console.log(`El puntaje final del jugador es: ${puntajeFinal}`);
}

// 4. Iniciar el juego
jugarDardos(mostrarResultado);
