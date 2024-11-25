/*  Callbacks
    Programa cuatro funciones para realizar las operaciones básicas de:
        let s = suma(x, y);
        let r = resta(x, y);
        let m = multiplica(x, y);
        let d = divide(x, y);
    Crea una función calc() para realizar cálculos usando las operaciones anteriores como callback:       c = calc(operacion, x, y)
    por ejemplo:

        let s = calc(suma, 5, 4);  // s = 9

        * Haciendo uso de la función calc, realiza los siguientes cálculos:

    5 + 4                               // resultado: 9
    5 + 4 - 1                           // resultado: 8
    ( 3 + (2 * 2) + 7 ) / 2             // resultado: 7
    ( (8 + 6) / (9 - 2) ) * 3           // resultado: 6
    muestre los resultados en <h1>.

    Haz los cálculos en una función denominada main() que se ejecute al terminar de cargar
    la página web, en el evento onload de window:

    window.onload = main;*/
    
    // ? FUNCIONES QUE USAREMOS EN EL CALC
    function suma( x, y ) {
        return x + y
    }

    function resta( x, y ) {
        return x - y
    }

    function multiplica( x, y ) {
        return x * y
    }

    function divide( x, y ) {
        if (x === 0) { return null }
        else { return x / y }
    }

    /**
     * Funcion calcular recibe una funcion para hacerla
     * @param {*} operacion (suma, resta, multiplica, divide)
     * @param {*} x         primer operando
     * @param {*} y         segundo operando
     * @returns 
     */
    function calc(ope, a, b) {
        return ope( a, b) // funcion callback (pasada por parametros)
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
