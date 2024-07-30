let num = parseFloat(prompt("Digite um número inteiro: "));

while(num<1){
    num = parseFloat(prompt("Digite um número inteiro maior do que 1: "));
}
let result =1;
for(let i = 1; i <= num; i++){
    result *= i;
}

alert(`Fatorial de ${num} é ${result}`);