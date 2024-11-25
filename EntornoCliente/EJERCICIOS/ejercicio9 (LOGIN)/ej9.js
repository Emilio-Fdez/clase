/*
Página web para solicitar un password. Tendrá un input-text y un botón.
Dicho password se almacenará en una variable, y será el siguiente:
password: secreto
Se admitirán hasta tres intentos de acierto.
- Si errara se dará por finalizado el proceso de login 
mostrando un mensaje en la página y deshabilitando el botón:.
    document.querySelector("boton").disabled = true;
- Si acertara el password, se mostrará un mensaje de bienvenida.
*/

let contraseña = "gizmo"; // guardamos la contraseña
let intentos = 3; // ponemos numero de intentos
let salir = false; // boolean para salir cuando acaben los intentos
document.querySelector("p").innerHTML=`Tienes: ${intentos} intentos`; //mostramos los intentos

/**
 * comprobamos la contraseña metida por el user
 * si es correcta: le daremos la bienvenida
 * si es erronea: se le iran restando intentos (solo tiene 3)
 * si acaba los intentos se deshabilita el boton y deja de tener intentos
 */
function password(){
    let psw = document.querySelector("input[name='password']").value; // guardamos el valor de la contraseña metida
    intentos--; // restamos un intento
    if (psw == contraseña) { //si la contraseña es correcta
        document.querySelector("#result").innerHTML="<h1>Bienvenido</h1>"; //damos la bienvenida
    }else if(intentos < 0){ // si gasta los intentos
        document.querySelector("button").disabled = true; // se deshabilita el boton
        document.querySelector("#result").innerHTML="<h1>Gastaste los intentos!!</h1>"; // mensaje de gasto de intentos
    } else{
        document.querySelector("#result").innerHTML="<h1>Intento erroneo</h1>"; // muestra intento erroneo
        
        document.querySelector("p").innerHTML=`Tienes: ${intentos} intentos`; // muestra numero de intentos
    }

    }






