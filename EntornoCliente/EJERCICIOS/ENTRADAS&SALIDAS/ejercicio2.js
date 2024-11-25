function sumar(){
    let a = document.querySelector("input[name='a']").value;
    let b = document.querySelector("input[name='b']").value;
        
    let result = parseInt(a) + parseInt(b); /*tambn se puede poner +a +b, el + funciona como el parseInt*/
    document.querySelector("h1").innerText = result;
}