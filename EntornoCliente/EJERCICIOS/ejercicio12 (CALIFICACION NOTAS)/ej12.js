/**
 * Operador ternario.
    Utilizando un único operador ternario muestra la calificación en función de una nota.      
        Nota menor de 5:    Suspenso
        Nota de 5 a algo menor de 7: Aprobado
        Nota de 7 a algo menor de 9: Notable
        Nota entre 9 y 10:  Sobresaiente
    Debe validarse que el usuario proporciona una entrada numérica y además está comprendida entre 0 y 10.
    En caso de que la entrada sea incorrecta, se informará al usuario del error cometido.
 */

    function Calcular(){
        let nota = document.querySelector("input").value;
        let string = "";

        nota < 0 || nota > 10 ?
        string = "Nota no valida":
        nota < 5 ? 
        string ="Suspenso": 
        nota < 7 ? 
        string ="Aprobado" : 
        nota < 9 ? 
        string ="Notable" : string = "Sobresaliente";

        document.querySelector("h2").innerText = string;
    }

    /**
     * function calcularIfNormal(){
        let nota = document.querySelector("input").value;
        let string = "";

        if (nota < 0 || nota > 10) {
            string = "Nota no valida";
        } else if (nota < 5) {
            string ="Suspenso";
        } else if (nota < 7) {
            string ="Aprobado";
        } else if (nota < 9) {
            string ="Notable"
        } else {
            string = "Sobresaliente";
        }

        document.querySelector("h2").innerText = string;
    }
     */