/*
 O search retorna o indice da primeira
ocorrencia do pradao desejado
nesse caso o 10 não é visto como 
uma coisa só e sim 1 e o próximo elemento 0
*/

// function buscarNumero(){
//     let dados = "arroz1, batata9, lasanha13, pastel18";
//     let resultado = dados.search(/\d/);
//     alert("quantidade de números = " + resultado);
// }

// buscarNumero();


function buscarNumero(dados){
    let resultado = dados.search(/\d/);
    return resultado;
}

function matchNumero(dados){
    const exp = /[0-9]/g;
    let resp = dados.match(exp);
    return resp;

    // const exp = /\d/;
    // let resp = dados.match(exp);
    // return resp;
    // let resp = dados.match(/\d/);
}

window.addEventListener("load",
    function(){
        let BuscarN = document.querySelector("#btnBuscarN");

        BuscarN.addEventListener("click",
            function(){
                let idade = document.querySelector("#idade").value;
                if(idade != ""){
                    let resp = buscarNumero(idade);
                    alert("indice: "+resp+"\n"+"primeiro numero: "+idade[resp]);

                    resp = matchNumero(idade);
                    alert("indice: "+resp+'\n');
                }
                else{
                    alert("O campo idade está vazio");

                }

            }
        )
    }
)


// let d = "arroz1, batata9, lasanha13, pastel18";
// alert(d);

// let resp = buscarNumero(d);

// // alert("string até o primeiro número:" + d[0,resp]);

// alert("indice: "+resp+'\n'+"primeiro número: "+d[resp]);