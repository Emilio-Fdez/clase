/*  callbacks asíncronas
    Vamos a suponer que las operaciones se realizan en algún servidor de la red,
    y tarda 1 ms en enviar la respuesta.
    Convierte en asíncronas las operaciones, de manera que el resultado de cada operación
    (suma, resta, multiplica, divide) se proporcione al cabo de 1 ms.

    ¿Sigue funcionando el programa anterior de cálculo?*/

    /**
     * Funcion calcular recibe una funcion para hacerla
     * @param {*} operacion (suma, resta, multiplica, divide)
     * @param {*} x         primer operando
     * @param {*} y         segundo operando
     * @returns 
     */
    function calc(operacion, x, y) {
        setTimeout( operacion(x, y), 1) // funcion callback (pasada por parametros)
    }
    
    // ? FUNCIONES QUE USAREMOS EN EL CALC
    function suma( x, y ) {
        return x + y;
    }
    function resta( x, y ) {
        return x - y;
    }
    function multiplica( x, y ) {
        return x * y;
    }
    function divide( x, y ) {
        if (x === 0) {
            return null;
        } else {
            return x / y;
        }
    }

    function main() {
    /*  5 + 4                               // resultado: 9
        5 + 4 - 1                           // resultado: 8
        ( 3 + (2 * 2) + 7 ) / 2             // resultado: 7
        ( (8 + 6) / (9 - 2) ) * 3           // resultado: 6 */
        
        // Operaciones pedidas para el ejercicio
        result = "";
        result += `5 + 4 = ${ calc(suma, 5, 4) }\n`;
        result += `5 + 4 - 1 = ${ calc(resta, calc(suma, 5, 4), 1) }\n`;
        result += `( 3 + (2 * 2) + 7 ) / 2 = ${ calc(divide, calc(suma, calc(suma, 3, calc(multiplica, 2, 2)), 7), 2) }\n`;
        result += `( (8 + 6) / (9 - 2) ) * 3 = ${ calc(multiplica, calc(divide, calc(suma, 8, 6), calc(resta, 9, 2)), 3) }\n`;
        document.querySelector("h1").innerText = result; // mostramos el resultado
    }

    window.onload = main;   // ! añadimos la funcion main al evento onload(cuando cargue) de la ventana
