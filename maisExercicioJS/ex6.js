var num = Math.round(Math.random()*20);
var tentativas = 0;
while(true){
    let chute = parseInt(prompt("Digite um número inteiro de 0 a 20: "));
    tentativas++;
    if(chute == num){
        break;
    }
    else if(chute<num){
        alert(`Você errou! ${chute} é menor que o número.`);
    }
    else{
        alert(`Você errou! ${chute} é maior que o número.`);
    }
}
alert(`Você acertou em ${tentativas} tentativas! Número era: ${num}.`);