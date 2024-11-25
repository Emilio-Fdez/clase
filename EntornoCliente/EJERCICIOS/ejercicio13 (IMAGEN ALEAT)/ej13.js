/**
 * img{
                position: absolute;
                top: 100px;
                left: 100px;
            }
*/

//coger la img
//crear pos aleatoria y left aleatorio
//colocar la img en la pos y lef aleat

document.querySelector("img#i1").style.position="absolute"; // posicion aleatoria
document.querySelector("img#i1").style.top=(Math.random(window.innerHeight)*300) + "px"; //estilo arriba aleatorio
document.querySelector("img#i1").style.left=(Math.random(window.innerWidth)*300) + "px"; //estilo izquierda aleatorio

document.querySelector("img#i2").style.position="absolute";
document.querySelector("img#i2").style.top=(Math.random(window.innerHeight)*300) + "px";
document.querySelector("img#i2").style.left=(Math.random(window.innerWidth)*300) + "px";

document.querySelector("img#i3").style.position="absolute";
document.querySelector("img#i3").style.top=(Math.random(window.innerHeight)*300) + "px";
document.querySelector("img#i3").style.left=(Math.random(window.innerWidth)*300) + "px";