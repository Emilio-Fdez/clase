/*Intercambio de caracteres
Crea una función swap(texto, n, m) que intercambie entre sí los caracteres del texto que se encuentran en las posiciones n y m.
- ejemplo:   s = swap("Paloma", 0, 5)   -->  s valdría  aalomP*/

    const inp = document.querySelector("input[name='texto']");
    const num1 = document.querySelector("input[name='num1']");
    const num2 = document.querySelector("input[name='num2']");
    const btn = document.querySelector("button");
    const prf = document.querySelector("p");

    btn.addEventListener("click", () => {
        string = swap(inp.value, num1.value-1, num2.value-1);   // guardamos en string, la funcion swap, -1 porque el usuario no piensa en el 0 "array"
        console.log(string);                                    // para mostrarlo por consola y ver si falla 
        prf.innerText = string;                                 // mostramos el string
    })

    /**
     * Funcion que cambia dos letras de un string
     * @param {*} texto    texto a cambiar
     * @param {*} n1        index de primera letra
     * @param {*} n2        index de segunda letra
     */
    function swap(texto, n, m) {
        //0. Comprobamos si los numeros introducidos son validos
        if (n < 0 || n >= texto.length || m < 0 || m >= texto.length) {
            return "Error";
        }
        //1. Separamos el texto
        let letras = texto.split("");
        //2. Cambiamos las posiciones de las letras
        const l1 = letras[n];
        letras[n] = letras[m];
        letras[m] = l1;
        //3. Retornamos el texto en string
        return letras.join(""); // .join("") une un array (letras) en un string
    }