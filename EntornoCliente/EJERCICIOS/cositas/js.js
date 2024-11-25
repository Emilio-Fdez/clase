/*
    Tipos de lenguajes de programacion
        - compilado -                       1º mas rapido
            codigo fuente (escrito) a codigo maquina (binario) = (compilador)           // archivo, no necesita compilador

        - interpretado -javascript,python   3º mas rapido
            interprete lo manda directamente el escrito a el procesador                 // sin archivo, necesita interprete

        - maquina virtual -java             2º mas rapido
            compilacion a bytecode se manda a la maquina virtual y saca codigo maquina  // compila y maquina virtual

        - transpilados -typescript          ~depende del lenguaje a combertir
            primero se combierte a otro lenguaje de programacion y se hace su procedimiento (compilado o interpretado)


        compilador JIT (just in time, justo a tiempo)
        los guarda en codigo maquina para no tener que traducirlo (maquina virtual y interpretado)


    ¿Que es javascript?
    1º Lenguaje interpretado
    Lenguaje con objetos, herencia prototipada y no tiene clases (tiene clases simuladas con funciones) TODO son objetos
    (.js se ejecutan en navegador web o Node)                                                           excepto los tipos primitivos
    debilmente tipado -java: float,double,int,char -js no necesario declarar tipo de datos      let x(direccion memoria) = "hola"(informacion)
    Tipos son dinamicos x = 5; x = "hola"; x = new Menu();

    javascript es monohilo (monothread) , programacion asincrona (funciones callback / promesas) evitar bloqueos

    objetos
    window.document.alert  -cositas

    <script async> cuando llega a su linea se ejecuta (lo usaremos cuando tenemos prisa de ejecutar el codigo, por ejemplo "en cuanto sea
    posible contacta con ese servidor")
    <script defer> cuando termine de cargar la pagina se ejecuta (lo usaremos casi siempre, pero sobretodo cuando
    queramos acceder a la pagina desde javascript)





    <body>
        <h1>Inicio</h1>

        <script> // para usar js, pero es un poco chapuza escribirlo aqui <--- aqui, mejor en el head
            document.write("<h6>Hola Mundo</h6>");  // texto se escribe en el html
            console.log("Hola mundo");              // consola
            alert("Hola mundo");                    // alerta (PopUp) , codigo bloqueante   setTimeout(() => alert("Hola mundo")); callback

            let x = "Mundo";                // preparo una variable
        </script>

        <h1>Final</h1>

        <script>                            // de script a script se comparten la informacion
            document.write("Hola " + x);    // uso una variable
        </script>
    </body>
*/
alert("¿Me vendes tu alma?");

document.querySelector("h1").innerHTML = "hola desde js"; // escribir en el h1, pero no exsiste (da error)(se ejecuta de arriba abajo)
