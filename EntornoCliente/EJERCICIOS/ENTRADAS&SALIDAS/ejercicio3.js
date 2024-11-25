function aleatNum(){
    document.querySelector("h1").innerText = Math.ceil((Math.random()*6));
}
function aleatLet(){
    let abc = "abcdefghijklmnñopqrstuvwxyz";
    document.querySelector("h1").innerText = abc.charAt(Math.floor(Math.random()*27));
}