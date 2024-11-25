function dcha(){
    document.querySelector("input[name='B']").value = document.querySelector("input[name='A']").value;
    document.querySelector("input[name='A']").value = "";
}

function izda(){
    document.querySelector("input[name='A']").value = document.querySelector("input[name='B']").value;
    document.querySelector("input[name='B']").value = "";
}
