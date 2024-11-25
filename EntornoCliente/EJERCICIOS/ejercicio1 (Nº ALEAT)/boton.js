document.querySelector("h1").innerText = Math.ceil((Math.random()*6));
/*
seleccionamos el titulo(h1) del documento, 
dentro de las etiquetas de titulo metemos texto:
    Math.ceil((Math.random()*6)) "numero redondeado hacia arriba aleatorio"
*/ 

function lanzarDado() {
    document.querySelector("h1").innerText = Math.ceil((Math.random()*6));//redondear hacia arriba
    document.querySelector("h1").innerText = Math.floor(Math.random()*7);//redondea hacia abajo
    alert("hola"); /*alerta para darle a aceptar*/
}