/*Ejercicio 2: Juego de Números Aleatorios
Enunciado: Desarrolla una función para un pequeño juego en el que el usuario tiene que adivinar un número aleatorio generado por el sistema. La función debe generar un número aleatorio entre 1 y 10, y luego comparar la respuesta del usuario. Si el número es correcto, muestra un mensaje de "¡Has ganado!" después de un retraso de 1 segundo. Si es incorrecto, muestra "Intenta otra vez" después de 2 segundos. Usa un array para almacenar las respuestas fallidas.

Requisitos:

Crea una función adivinanza que reciba como parámetro un número introducido por el usuario (por ejemplo, un número aleatorio o del teclado).
La función debe generar un número aleatorio entre 1 y 10.
Si el número es correcto, debe mostrar un mensaje de "¡Has ganado!" después de 1 segundo, usando un temporizador (setTimeout).
Si el número es incorrecto, añade el número fallado a un array fallos y muestra "Intenta otra vez" después de 2 segundos.
Implementa una función de callback que se ejecute para imprimir los resultados al final.
Pistas:

Usa Math.random() para generar el número aleatorio.
Usa setTimeout para los retrasos en las respuestas.
Usa arrays para almacenar las respuestas incorrectas.*/

    let fallos = [];
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

function adivinanza(respuesta, callback) {
    if (respuesta === numeroAleatorio) {
        setTimeout(function() {
            console.log(`¡Has ganado! la respuesta era ${numeroAleatorio}`);
            callback();
        }, 1000);
    } else{
        fallos.push(respuesta);
        setTimeout(function() {
            console.log("Intenta otra vez");
            callback();
        }, 2000);
    }
}

function mostrarFallos() {
    console.log(`Respuestas fallidas: ${fallos.join(', ')}`);
}

// Ejemplo de ejecución del juego
adivinanza(1, mostrarFallos);  // Aquí puedes probar con diferentes respuestas.
