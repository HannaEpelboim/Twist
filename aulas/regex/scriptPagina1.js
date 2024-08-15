function limpar(){
    let texto = document.querySelector("#conteudo");
    let atividade = document.getElementsByName("atividade");

    // alert(texto.value);
    texto.value = " ";

    for(at of atividade){
        at.checked = false;
    }
}

function validar(){

}


//é para colocar os eventos dos botões
//quando a página estiver sendo carregada
//pelo navegador de internet
window.addEventListener("load",function(){
    let btnLimpar = document.querySelector("#btnLimpar");
    let btnValidar = document.querySelector("#btnValidar");

    btnLimpar.addEventListener("click",function(){
        limpar();
    });

    btnValidar.addEventListener("click",function(){
        validar();
    });

});