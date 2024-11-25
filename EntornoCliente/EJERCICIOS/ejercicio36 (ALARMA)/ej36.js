/**
 * Alarma
Programa un script que lance una alarma a cierta hora que establezcamos desde un cuadro de tiempo (input-time)


indicación: Halla la diferencia en milisegundos entre la hora actual 
y la hora del cuadro de tiempo. 

Esa diferencia va al setTimeout.

Recordatorio: métodos para obtener horas, minutos, segundos:
    date = new Date()
    let hNow = date.getHours();
    let mNow = date.getMinutes();
    let sNow = date.getSeconds();
 */

const alarm = document.querySelector("input");
const btn = document.querySelector("input[type='button']");

btn.addEventListener("click", setAlarm);


function setAlarm(){ //pone una alarma a la hora introducida
    const now = new Date(); //guardamos en now:
    let hNow = now.getHours();
    let mNow = now.getMinutes();
    let sNow = now.getSeconds();

    const alarmInput = alarm.value;
    if(!alarmInput){
        alert('Por favor, introduce una hora válida.');
        return;
    }

    const [alarmHours, alarmMinutes] = alarmInput.split(':').map(Number);

    const alarmDate = new Date();
    alarmDate.setHours(alarmHours, alarmMinutes,0,0);
    
    const timeDifference = alarmDate - now;

    if(timeDifference < 0){
        alert('La hora establecida ya ha pasado. Por favor, introduce una hora futura.');
        return;
    }

    setTimeout(() => {
        alert('¡Es hora de levantarse!');
    }, timeDifference);

    alert(`Alarma establecida para las ${alarmHours}:${alarmMinutes}.`)
}

