/**
 * cambio de base
Realiza una formulario con dos textarea que nos permita convertir 
de base hexadecimal a decimal y viceversa cualquier número con cualquier cantidad de dígitos.


 */


/*function calculaHex(){
    let valor = document.querySelector("[name='valor']").value;
    valor = valor.toString(16);
    alert(valor);
    document.querySelector("[name='resultado']").value = valor;
}

function calculaDec(){
    let valor = document.querySelector("[name='valor']").value;
    valor = valor.parseInt(valor,16);
    alert(valor);
    document.querySelector("[name='resultado']").value = valor;
}*/
const valor = document.querySelector('textarea[name="valor"]');
const tarea = document.querySelector('textarea[name="resultado"]');


    function calculaHex() { //decimal a hexadecimal
        let valorDec = parseInt(valor.value);                   // guardamos nuestro valor en valorDec
    
        if (isNaN(valorDec)) {                                  // si el valorDec es invalido
            tarea.value = 'Número decimal inválido';            // el valor de tarea nos manda el mensaje 
        } else {
            let hexValue = valorDec.toString(16).toUpperCase(); // valorDec lo transformas a string de 16 (hexadec) queremos que las letras sean en mayus
            tarea.value = hexValue;                             // mostramos el valor hexadec     
        }
    }

    function calculaDec() { //hexadecimal a decimal
        let valorDec = parseInt(valor.value, 16);               // pasamos el valor hexadec a valorDec
        
        if (isNaN(valorDec)) {                                  // si el valorHex es invalido
            tarea.value = 'Número hexadecimal inválido';        // el valor de tarea nos manda un mensaje
        } else {
            tarea.value = valorDec;                             // mostramos el valor decimal
        }
    }

