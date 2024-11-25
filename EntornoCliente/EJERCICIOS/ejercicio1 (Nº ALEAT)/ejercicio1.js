/*
1. simulación de un dado. Página web que cada vez que se refresque (F5) 
muestre un número aleatorio entero comprendido entre 1 y 6.
El resultado se mostrará ocupando gran parte de la ventana del navegador.
*/

document.querySelector("h1").innerText = Math.ceil((Math.random() * 6))-1;//seria del 1 al 7, pero como pongo -1, va del 0 al 6



/**
 * si quiero un numero aleatoria del 5 al 10
 * document.querySelector("h1").innerText = Math.floor((Math.random() * (11 - 5) + 5));
 */

