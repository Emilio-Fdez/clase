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
    * let hInt = setInterval(mifuncion, 100)
    * setTimeout(clearInterval,1000,hInt)
*/