

let img = document.querySelector("img");   
let vblur = document.getElementById("blur");
let sepia = document.getElementById("sepia");

vblur.addEventListener("input", ()=>{       // añadimos un evento al input de vblur
    let valor = vblur.value;                // guardamos el valor de vblur en valor
    img.style.filter=`blur(${valor}px)`;    // ponemos estilo de filtro en la img
});

sepia.addEventListener("input", ()=>{
    let valor = sepia.value;
    img.style.filter=`sepia(${valor}%)`;
});