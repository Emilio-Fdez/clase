//document.write(Math.ceil(Math.random()*6));  //numeros aleatorios del 1 al 6

document.write(Math.floor(Math.random()*6)+1); //redondeando hacia abajo

/*
document.querySelector("h1").innerText es para escribir en el documento

querySelectorr te permite seleccionar las etiquetas del documento y es un METODO del documento
document es el objeto.

para introducir texto dentro de la cabecera h1 pondriamos 
    innerText - para meter solo texto y NO etiquetas de HTML
    innerHTML - podemos meter etiquetas de html

    ejemplo:
    document.querySelector("h1").innerText = "<span style= 'color:blue'>" + " Math.ceil(Math.random()*6) </span>";

    como hemos usado el innerText no nos interpreta la etiqueta de span pero si usamos innerHTML si lo interpretaria.
*/