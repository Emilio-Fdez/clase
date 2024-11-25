
    const coche = document.querySelector("button");
    const semaforo = document.querySelector("div#semaforo");
    let moviendo = true;    // Controla si el movimiento está activo
    const vel = 1;          // Velocidad del movimiento (pixeles por cada intervalo)
    let posX = 0;           // Posición horizontal del móvil
    let intervalo;          // Variable para guardar el intervalo de movimiento

    // Función para mover el móvil
    function mover() {
        if (moviendo) {                     //? si se supone que deberia moverse
            posX += vel;                    // sumamos la velocidad a la posicion
            if (posX > window.innerWidth) { // si se sale de la pantalla
                posX = -50;                 // regresa a la izquierda
            }
        } else {                            //! SI SE SUPONE QUE DEBERIA PARASE
            posX += vel;                    // seguimos moviendolo
            if (posX > window.innerWidth) {
                posX = -50;
            }
            if (posX > 200 && posX < 220) { //! si esta cerca del semaforo
                clearInterval(h);           // se para
            }
        }
        coche.style.left = posX + "px";     //* se realiza el movimiento
    }

    // Función para detener o reanudar el movimiento
    function cambiar() {
        if (moviendo) {                                 //? si se estaba moviendo
            semaforo.style.backgroundColor = "#FF0000"; // semaforo lo ponemos rojo
        } else {                                        //? si estaba parado
            clearInterval(h);                           // quitamos duplicados de intervalos
            h = setInterval(mover, 1);                  //! ponemos un intervalo
            semaforo.style.backgroundColor = "#00FF00"; // semaforo lo ponemos verde
        }
        moviendo = !moviendo;                           // Cambiar el estado de movimiento
    }

    // Event Listener para el botón
    semaforo.addEventListener("click", cambiar);        // al clicar el semaforo, cambia

    // Iniciar el movimiento con setInterval
    h = setInterval(mover, 1);  // Iniciar la animación a través de intervalos

    // Semaforo automatico
    hsem = setInterval(cambiar, 8000);