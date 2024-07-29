let num = 11;
let dado;
// let first = true;
do{
    // if(!(first)){ --> exemplo do operador not !
    // inverte o que é v vira f e o que é f vira v
    //     alert("Você errou");
    // }
    // first = false;
    dado = parseInt(prompt("Digite um numero: "));
    if(dado != num){
        alert("Você errou!!!");
    }

}while(dado != num);

alert("Você acertou, parabéns!!!");