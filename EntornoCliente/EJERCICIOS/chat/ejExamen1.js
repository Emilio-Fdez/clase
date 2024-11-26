/*
Ejercicio 1: Contador de Tareas con Retraso
Enunciado: Imagina que estás desarrollando una aplicación para gestionar tareas pendientes. 
El objetivo es crear una función que permita añadir tareas a una lista, mostrar
    un mensaje de confirmación con un pequeño retraso y mostrar un contador
    de las tareas añadidas. La función debe utilizar un temporizador (setTimeout)
    para el retraso, además de trabajar con un array de tareas.

    Requisitos:
Crea una función añadirTarea que reciba como parámetro el nombre de una tarea.
    La función debe añadir la tarea al array de tareas.
Utiliza una función de callback que se ejecute después de 2 segundos
    (sin usar asincronía moderna) que imprima un mensaje en la consola como
    "Tarea añadida correctamente".
Después de cada tarea añadida, la función debe mostrar el número total de
    tareas en la lista, pero con un retraso de 1 segundo.
Implementa un temporizador para cada tarea añadida que imprima el nombre
    de la tarea en consola después de 3 segundos.
Implementa un array tareasPendientes para almacenar las tareas.

    Pistas:
Utiliza setTimeout para gestionar los retrasos.
No uses async/await ni Promesas, solo setTimeout para los retrasos.
No es necesario realizar una interfaz de usuario, puedes hacer las salidas en consola.
*/

let tareasPendientes = [];

function añadirTarea(tarea, callback) {
    tareasPendientes.push(tarea);

    // Temporizador para mensaje de confirmación
    setTimeout(function() {
        callback(tarea);  // Llamamos al callback con el nombre de la tarea
    }, 2000);
    //// setTimeout(callback, 2000, tarea)
    
    // Temporizador para mostrar el número total de tareas
    setTimeout(function() {
        console.log(`Número total de tareas: ${tareasPendientes.length}`);
    }, 1000);
    //// setTimeout(console.log, 1000, `Número total de tareas: ${tareasPendientes.length}`)
}

function mostrarConfirmacion(tarea) {
    console.log(`Tarea "${tarea}" añadida correctamente.`);
}

// Añadir tareas y mostrar confirmación
añadirTarea("Estudiar JavaScript", mostrarConfirmacion);
añadirTarea("Hacer ejercicio", mostrarConfirmacion);
