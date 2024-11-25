/*const elem = document.getElementById("primer");
  elem.onclick = function() {
    elem.style.backgroundColor="rgb("+ Math.random()*255+ "," + Math.random()*255 + "," + Math.random()*255 + ")";
  };
  const elem2 = document.getElementById("segundo");
  elem2.onclick = function() {
    elem2.style.backgroundColor="rgb("+ Math.random()*255+ "," + Math.random()*255 + "," + Math.random()*255 + ")";
  };
  const elem3 = document.getElementById("tercero");
  elem3.onclick = function() {
    elem3.style.backgroundColor="rgb("+ Math.random()*255+ "," + Math.random()*255 + "," + Math.random()*255 + ")";
  };
*/



function colorRandom(){ // nos devuelve un color aleatorio...
  return "rgb(" + Math.random()*255 + "," + Math.random()*255 + "," + Math.random()*255 + ")"; 
}

let divs = document.querySelectorAll("div"); // seleccionas TODOS los div (TE LOS METE EN UN ARRAY)

divs.forEach(div => div.onclick = function(){  // por cada div en divs, div es cada elemento del array)
  div.style.backgroundColor = colorRandom();  //  a div le damos el fondo del color aleatorio con la funcion colorRandom()
});

/** 
 ** funcion normal
 *  @function cambiar() cambia el color de botijo
 * 
 *  function cambiar() {
 **     document.querySelector("#botijo").style.backgroundColor = "white";
 *  }
 *  document.getElementById("botijo").onclick = cambiar();
 */

/**
 *  @var elem variable para guardar el "botijos"
 *  vamos ha añadir una funcion en el evento .onclick de "botijos"
 *  como la funcion va directamente en el onclick de "botijo" no necesita nombre ( funcion() {...} )
 *  ----------------------------------------------------------------------------    
 *  const elem = document.getElementById("botijo"); 
 *  elem.onclick = function() {
 **     document.querySelector("#botijo").style.backgroundColor = "white";
 *  }
 */