


function potencia() {

    let b = BigInt(document.querySelector("#base").value); // bigInt() transforma los datos en bigInt
    let e = BigInt(document.querySelector("#exponente").value); 

    let be = 1n; // result para que sea bigInt "numero con una n al final"

    for (let index = 0; index < e; index++) {
        be *= b; //calculamos potencia
        
    }
    
    document.querySelector("p#result").innerHTML = "<p>"+ b +"<sup>" + e + "</sup> = " + be + "</p>";
    document.querySelector("p#lenght").innerHTML = "<p>Tiene "+ String(be).length + " cifras</p>";
}