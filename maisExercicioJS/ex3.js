let num1 = parseFloat(prompt("Digite um número: "));
let num2 = parseFloat(prompt("Digite outro número: "));

if(num1>num2){
    alert(`${num1} > ${num2}`);
}
else if(num1<num2){
    alert(`${num2} > ${num1}`);
}
else{
    alert(`${num1} = ${num2}`);
}