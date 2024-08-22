function substituir(entrada,altera){
    let resp =entrada.replace(altera," ****** ");
    alert(resp);

    resp = entrada.replace(/\w/,"removido");
    //exemplo com expressão regular
    alert("Expressão regular "+resp);

}

function cortar(entrada,corte){
    let result = entrada.split(" ");
    alert(result);//toda lista

    //elemento da lista
    for (elemento of result){
        alert(elemento);
    }
}

window.addEventListener("load",function(){
    let btnSplit, btnReplace;

    btnSplit = document.querySelector("#btnSplit");
    btnReplace = document.querySelector("#btnReplace");

    let entrada, alterar;

    btnReplace.addEventListener("click", function(){
        entrada = document.querySelector("#entrada");
        alterar = document.querySelector("#alterar");
        
        substituir(entrada.value,alterar.value);
    });

    btnSplit.addEventListener("click", function(){
        entrada = document.querySelector("#entrada");
        alterar = document.querySelector("#alterar");
        cortar(entrada.value,alterar.value);
    });
});