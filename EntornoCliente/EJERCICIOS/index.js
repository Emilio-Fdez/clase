//* TODAS LAS UBICACIONES DE LOS USOS MAS IMPORTANTES DE JAVASRICPT
/**
 * ? numeros aleatorios
 *  Math.    ceil - floor - random
 * ! Ejercicios 1-2-3
 * --------------------------------------------------
 * ? Cambiar el estilo de un objeto mediante javascript
 *  document.querySelector("?").style.···
 * ! Ejercicio 8 y mas...
 * --------------------------------------------------
 * ? Crear una tabla con echo|createElement()
 *  .innerHTML = "<tr>..." | document.createElement("p"); ases.appendChild(a); ~
 * ! Ejercicio 11|34
 * --------------------------------------------------
 *  Funciones de texto, separar en array, desordenar, quitar repetidas...
 * ! Ejercicio 25-26-27-28
 * --------------------------------------------------
 * 
 * --------------------------------------------------
 */
// ! -------------------------------------------------
//* Cositas importantes
//? Crear funciones
    //* NORMAL
    function f1() {
        alert( "hola!" )
    }
    document.querySelector("button").onclick = f1;

    //! ------------------
    //* FUNCION SIN NOMBRE
    document.querySelector("button").onclick = function() {
        alert( "hola!" )
        // esta funcion no se guarda en ningun lado, por eso no necesita nombre
    }

    //! --------------
    //* FUNCION FLECHA
    document.querySelector("button").onclick = () => {
        alert( "hola!" )
    }

    //! ----------------
    //* FUNCION CALLBACK
    function mifun() {
        return "hola!";
    }
    document.querySelector("button").onclick = function(callback) {
        alert( callback() )
        // la funcion callback() no existe en si, pero te pasan una funcion por parametros
        // igual que pasamos a una funcion un int o string function(x)
        // se le puede pasar un objeto de tipo "function()"
        // las funciones son Objetos
    }

// ! -------------------------------------------------
//* FUNCIONES ADICIONALES
/*
    * funcion callback:
        funcion que se pasa por parametros

        function miFuncion(fcallback, tiempo, x) {
            espera(tiempo)
            fcallback(x);
        }
        aqui cuando escribimos miFunction, le pasamos una funcion por parametro "fcallback" la cual "miFuncion" prodra usar dentro
----------------------
    * setTimeout(mifuncion, 1000, parametro1)
    esta a esta funcion le pasamos una funcion (mifuncion) y un tiempo (en ms)
    lo que hace es lanzar la funcion en el tiempo que le pasemos por parametros
    ? si "mifuncion" necesita parametros se los añadimos al setTimeout  (PERO no es necesario/obligatorio)
    + esta funcion devuelve una "clave" que se puede usar para borrar el "setTimeout"   - a la variable se la llama "handler"
----------------------
    * setInterval(mifuncion, 1000, miparam)
    esta funcion lo que hace es lo mismo que "setTimeout" pero esta lo lanzara
    para siempre una y otra vez
    ? si "mifuncion" necesita parametros se los añadimos al setInterval  (PERO no es necesario/obligatorio)
    + esta funcion devuelve una "clave" que se puede usar para borrar el "setInterval"
----------------------
    * clearInterval(hi)
    esta funcion recive por parametro una "clave" de un setTimeout/setInterval
    esta desavilita ese "set"
----------------------
    !! ejemplo util
        Creamos el intervalo
    * let hInt = setInterval(mifuncion, 100)
        Borramos el intervalo
    * setTimeout(clearInterval,1000,hInt)
*/