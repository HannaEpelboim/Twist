// uma estrutura de dados (inicialmente, para nós)
// é um espaço na memória, com tamanho n
// onde n é a quantidade de elementos dentro dela
// contendo um nome. 
// Cada elemento pode ser acessado por meio de um 
// unico indice e:
// x[1]
// x: variavel
// []: indica que é para acessar um indice1: posição do elemento dentro da variavel x

// estrutura de dados bidimensionais
// dois indices: Linhas e colunas
// x[1,2] ou x[1][2]
// x: variavel
// 1: linha
// 2: coluna

//coloca o array em branco
let teste=[];

//criar passando valores
let feira = ["Banana","Maça","Pera","Uva","Morango"];

console.log(`Um valor: ${feira[3]}`);
console.log(`Tudo: ${feira}`);

console.log(`Tamanho do teste ${teste.length}`);

teste.push(1);
teste.push("Abacate");
teste.push(1.99);
console.log(teste);
console.log(`Tamanho do teste ${teste.length}`);

//for padrão
//retorna elemento
for(let i=0; i<feira.length;i++){
    alert(feira[i]);
}


//for of
//retorna elemento
for(let fruta of feira){
    alert(fruta);
}

//for in
//retorna indice
for(let fruta in feira){
    alert(fruta);
}

