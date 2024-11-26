// 1. Definimos el mazo de cartas (cada carta tiene un valor entre 1 y 13, representando el rango de una baraja estándar).
let mazo = [
    { valor: 1, palo: 'Corazones' }, { valor: 2, palo: 'Corazones' }, { valor: 3, palo: 'Corazones' },
    { valor: 4, palo: 'Corazones' }, { valor: 5, palo: 'Corazones' }, { valor: 6, palo: 'Corazones' },
    { valor: 7, palo: 'Corazones' }, { valor: 8, palo: 'Corazones' }, { valor: 9, palo: 'Corazones' },
    { valor: 10, palo: 'Corazones' }, { valor: 11, palo: 'Corazones' }, { valor: 12, palo: 'Corazones' },
    { valor: 13, palo: 'Corazones' }, // cartas de Corazones
    { valor: 1, palo: 'Diamantes' }, { valor: 2, palo: 'Diamantes' }, { valor: 3, palo: 'Diamantes' },
    { valor: 4, palo: 'Diamantes' }, { valor: 5, palo: 'Diamantes' }, { valor: 6, palo: 'Diamantes' },
    { valor: 7, palo: 'Diamantes' }, { valor: 8, palo: 'Diamantes' }, { valor: 9, palo: 'Diamantes' },
    { valor: 10, palo: 'Diamantes' }, { valor: 11, palo: 'Diamantes' }, { valor: 12, palo: 'Diamantes' },
    { valor: 13, palo: 'Diamantes' }, // cartas de Diamantes
    { valor: 1, palo: 'Treboles' }, { valor: 2, palo: 'Treboles' }, { valor: 3, palo: 'Treboles' },
    { valor: 4, palo: 'Treboles' }, { valor: 5, palo: 'Treboles' }, { valor: 6, palo: 'Treboles' },
    { valor: 7, palo: 'Treboles' }, { valor: 8, palo: 'Treboles' }, { valor: 9, palo: 'Treboles' },
    { valor: 10, palo: 'Treboles' }, { valor: 11, palo: 'Treboles' }, { valor: 12, palo: 'Treboles' },
    { valor: 13, palo: 'Treboles' }, // cartas de Treboles
    { valor: 1, palo: 'Picas' }, { valor: 2, palo: 'Picas' }, { valor: 3, palo: 'Picas' },
    { valor: 4, palo: 'Picas' }, { valor: 5, palo: 'Picas' }, { valor: 6, palo: 'Picas' },
    { valor: 7, palo: 'Picas' }, { valor: 8, palo: 'Picas' }, { valor: 9, palo: 'Picas' },
    { valor: 10, palo: 'Picas' }, { valor: 11, palo: 'Picas' }, { valor: 12, palo: 'Picas' },
    { valor: 13, palo: 'Picas' }, // cartas de Picas
];

// 2. Función para barajar las cartas (algoritmo de Fisher-Yates).
function barajarCartas(mazo) {
    for (let i = mazo.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mazo[i], mazo[j]] = [mazo[j], mazo[i]]; // Intercambiar elementos
    }
    return mazo;
}

// 3. Función para distribuir las cartas entre los dos jugadores.
function distribuirCartas(mazo) {
    let jugador1 = [];
    let jugador2 = [];
    
    // Alternamos cartas entre los jugadores
    for (let i = 0; i < mazo.length; i++) {
        if (i % 2 === 0) {
            jugador1.push(mazo[i]);
        } else {
            jugador2.push(mazo[i]);
        }
    }
    
    return { jugador1, jugador2 };
}

// 4. Función para mostrar las cartas después de un retraso (usando setTimeout).
function mostrarCartas(jugador1, jugador2, callback) {
    setTimeout(() => {
        document.querySelector("p.jug1").innerHTML = "Cartas del Jugador 1:", jugador1;
        document.querySelector("p.jug2").innerHTML = "Cartas del Jugador 2:", jugador2;
        callback(jugador1, jugador2);
    }, 2000); // Retraso de 2 segundos
}

// 5. Función para comparar las cartas de ambos jugadores con un setInterval.
function compararCartas(jugador1, jugador2) {
    let i = 0;
    const intervalo = setInterval(() => {
        if (i < jugador1.length) {
            let cartaJugador1 = jugador1[i];
            let cartaJugador2 = jugador2[i];
            document.querySelector("h6").innerHTML += `Comparando carta ${i + 1}:`;

            if (cartaJugador1.valor > cartaJugador2.valor) {
                document.querySelector("h6").innerHTML += `Jugador 1 gana esta ronda con el ${cartaJugador1.valor} de ${cartaJugador1.palo}`;
            } else if (cartaJugador1.valor < cartaJugador2.valor) {
                document.querySelector("h6").innerHTML += `Jugador 2 gana esta ronda con el ${cartaJugador2.valor} de ${cartaJugador2.palo}`;
            } else {
                document.querySelector("h6").innerHTML += `Empate en la ronda con el ${cartaJugador1.valor} de ${cartaJugador1.palo}`;
            }
            i++;
        } else {
            clearInterval(intervalo); // Detenemos el intervalo cuando ya hemos comparado todas las cartas
            document.querySelector("h6").innerHTML += "Fin de la comparación de cartas.";
        }
    }, 1000); // Comparar cada segundo
}

// 6. Ejecutamos el flujo completo del juego.
function jugar() {
    let mazoBarajado = barajarCartas(mazo);
    let { jugador1, jugador2 } = distribuirCartas(mazoBarajado);
    
    mostrarCartas(jugador1, jugador2, function(j1, j2) {
        compararCartas(j1, j2);
    });
}

// Llamamos a la función para iniciar el juego
jugar();
