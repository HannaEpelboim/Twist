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

let d = "arroz1, batata9, lasanha13, pastel18";
alert(d);

let resp = buscarNumero(d);

// alert("string até o primeiro número:" + d[0,resp]);

alert("indice: "+resp+'\n'+"primeiro número: "+d[resp]);
