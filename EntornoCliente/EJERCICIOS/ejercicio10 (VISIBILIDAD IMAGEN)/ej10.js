/*
Crea una página con un botón y una fotografía. Al clickar en la foto se ocultará, 
y con el botón se volverá a visibilizar.
ocultar un elemento de la página web
- estilos CSS:    
    visibility: { hidden | visible }             
    display: { none | inline | block | inline-block ...}
- atributo HTML:  hidden="{ true | false }"
*/

function oculta(){
    document.querySelector("img").hidden = true; // cogemos la imagen y la escondemos con el hidden en true
}

function muestra(){
    document.querySelector("img").hidden = false; // mostramos la imagen porque hidden es falso
}

