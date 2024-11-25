
document.querySelector("input[name='fondo']").value.style.color="white" // cambia el color del inputFondo a blanco

function cambio(){
    /*
    let h1 = document.getElementById("titulo");
    h1.style.color = "red";
    h1.style.backgroundColor = "#EA6322";
    */
    let colorTexto = document.querySelector("input[name='texto']").value;
    let colorFondo = document.querySelector("input[name='fondo']").value;

    document.querySelector("h1").style.color = colorTexto; // cambia el color del texto
    document.querySelector("h1").style.backgroundColor = colorFondo; // cambia el color del fondo

}