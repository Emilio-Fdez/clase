/*baraja de 4 filas como el solitario y ir dandole la vuelta*/

//ejercicio del buscaminas
/**
 * tablero 10columnasx10filas
 * 10minas aleatorias
 * buscar codigo unicode o imagen de la mina
 * boton: Cambiar (para que las minas cambien de posicion)
 */


const filas = 10;
const columnas = 10;
const minas = 10;
let tablero = [];
let minaUnicode = '💣'; // Carácter Unicode para la mina

// Inicializa el tablero
function inicializarTablero() {
    for (let i = 0; i < filas; i++) {
        let fila = [];
        for (let j = 0; j < columnas; j++) {
            fila[j] = 0; // Inicializa cada celda en 0
        }
        tablero[i] = fila; // Agrega la fila al tablero
    }
    colocarMinas();
    renderizarTablero();
    return tablero;
}



// Coloca minas aleatorias en el tablero
function colocarMinas() {
    let ubicaciones = new Set(); //set solo permite valores unicos y evita duplicados
    while (ubicaciones.size < minas) { // mientras el tamaño de ubicaciones sea menor que el num de minas
        const fila = Math.floor(Math.random() * filas); //fila aleat
        const columna = Math.floor(Math.random() * columnas); //colum aleat
        ubicaciones.add(`${fila},${columna}`); // añadimos fila y colum aleat a UBICACIONEs
    }
    for (const ubicacion of ubicaciones) {
        const [fila, columna] = ubicacion.split(',').map(Number);
        tablero[fila][columna] = minaUnicode;
    }
}

// Renderiza el tablero en el HTML
function renderizarTablero() {
    const tabla = document.getElementById('tablero');
    tabla.innerHTML = '';
    for (let i = 0; i < filas; i++) {
        const fila = document.createElement('tr');
        for (let j = 0; j < columnas; j++) {
            const celda = document.createElement('td');
            celda.innerText = tablero[i][j] === minaUnicode ? '' : '';
            celda.onclick = () => revelarCelda(i, j, celda);
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
}

// Revela la celda al hacer clic
function revelarCelda(i, j, celda) {
    if (tablero[i][j] === minaUnicode) {
        celda.innerText = minaUnicode; // Muestra la mina
        alert('¡Game Over!');
        // Aquí podrías reiniciar el juego o deshabilitar más clics
    } else {
        celda.classList.add('revealed');
        celda.innerText = ''; // Muestra vacío para celdas sin mina
    }
}

// Cambia las posiciones de las minas
function cambiarMinas() {
    inicializarTablero();
}

document.getElementById('cambiar').onclick = cambiarMinas;

// Inicia el juego al cargar la página
inicializarTablero();