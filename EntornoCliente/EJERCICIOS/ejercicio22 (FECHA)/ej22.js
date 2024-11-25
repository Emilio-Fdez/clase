/*nombres de día y mes en castellano
Pon un input-date en una página web. Al seleccionar una fecha, p.ej 22-oct-2024, se mostrará en la parte inferior:
            El 22 de octubre del 2024 es martes
▸ Puedes programar oninput / onchange
OjO con la sintaxis de las fechas en el input-date
<input type="date" value="2024-12-31">
<input type="date:     MDN  -  w3schools
indicaciones:
- Puedes guardar los nombres de día y de mes en arrays: 
const dias= [ "lunes", "martes", ...]
- Guarda la fecha obtenida con el input-date en un objeto javascript Date. Abajo tienes
dos formas de construir objetos de esta "clase":
const date = new Date(año, mes, día);
const fecha = new Date("año-mes-día");
y utiliza los métodos del objeto Date que devuelven el número de día y número de mes.
*/

dias = ["domingo","lunes","martes","miercoles","jueves","viernes","sabado"];
meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

const fecha = document.querySelector("input");
const out = document.querySelector("p");

fecha.addEventListener("change", () => {                    // en fecha añadimos un evento que cuando cambie
    const fechaElegida = new Date(fecha.value);             // guardamos la fecha introducida

    const dia = dias[fechaElegida.getUTCDay()];             // seleccionamos el dia de la fecha introducida (dia de la semana)
    const mes = meses[fechaElegida.getUTCMonth()];          // seleccionamos el mes de la fecha introducida
    const anio = fechaElegida.getFullYear();                // seleccionamos el año de la fecha introducida
    const diaDelMes = fechaElegida.getDate();               // seleccionamos el dia de la fecha introducida

    out.innerText = `El ${diaDelMes} de ${mes} del ${anio} es ${dia}`;      // mostramos la fecha completa
})


