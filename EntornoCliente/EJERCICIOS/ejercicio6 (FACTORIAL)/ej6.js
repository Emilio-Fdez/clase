
function factorial(){

    let num = parseInt(document.querySelector("input[type='number']").value); // guarda en num el valor de input number y lo trasnforma a int
    let result = num; // guarda el num en result

    for (let index = num; index > 1; index--) { // recorre desde el num hasta el 1 (cuando llegue a 1 no se ejecuta)
        num--; // se ira restando un num
        result *= num;  // resultado sera el num*num
    }
    document.querySelector("h1").innerText = result; // mostramos el resultado


}