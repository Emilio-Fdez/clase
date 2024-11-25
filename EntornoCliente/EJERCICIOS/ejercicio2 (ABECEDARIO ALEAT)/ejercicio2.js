/*
simulación de un dado alfabético. 
Página web que cada vez que se refresque (F5) muestre un carácter alfabético (A,B,...Z) aleatorio.
El resultado se mostrará ocupando gran parte de la ventana del navegador.
*/ 
let abecedario = "abcdefghijklmnñopqrstuvwxyz"; /*LET PARA DEFINIR UNA VARIABLE*/

//document.querySelector("h1").innerText = abecedario.charAt(Math.floor((Math.random()*27)));
document.querySelector("h1").innerText = abecedario.charAt(Math.floor((Math.random()*abecedario.length)));
//coge del 0 al 26 porque redondea hacia abajo


