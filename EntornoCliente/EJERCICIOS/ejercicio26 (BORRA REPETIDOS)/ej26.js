/*Eliminar caracteres repetidos
Crea una función unique(text) que elimine todos los caracteres repetidos de un texto.
- ejemplo:   IES Virgen de la Paloma   -->   IES VirgendlaPom */
    const inp = document.querySelector("input");
    const btn = document.querySelector("button");
    const prf = document.querySelector("p");

    btn.addEventListener("click", () => {
        prf.innerText = unicText(inp.value);    // Creamos una funcion aparte por simplicidad
    })

    function unicText(string) {             // a la funcion *unicText* le pasamos un string
        result = "";                        // Resultado que returnearemos
        unicas = [];                        // array en el que guardamos las letras que salen
        letras = string.split("");          //! separamos el string que nos pasan en un array[]
        letras.forEach(l => {               //? ese array de letras separadas lo recorremos
            if (unicas.indexOf(l) == -1) {  //? si "unicas" contiene "l" nos devuelve su posicion, si no, devuelve -1
                result += l;                // nos añadimos a la salida esa letra que no habia salido
                unicas.push(l);             //*la añadimos a el array de unicas para futuras comparaciones
            }                               // forEach("l") en "l" va añadiendo cada letra, recorriendo "letras[]"
        });
        return result;                      // return
    }