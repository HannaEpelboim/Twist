alert("\t\t\t***tabuada***\n\n\n");

let num = parseInt(prompt("digite um número inteiro: "));

let result = "";

for(let n=1;n<=10;n++){
    console.log(`${n}X${num}=${num*n}`);  
    result += `${n}X${num}=${num*n} \n`;
}

alert(result);