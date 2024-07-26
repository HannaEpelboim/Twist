let nome, nasc, ano;
nome = prompt("Qual seu nome? ");
nasc = parseFloat(prompt("Em que ano você nasceu? "));
ano = parseFloat(prompt("Em que ano estamos? "));

alert(`Olá, ${nome}
você tem ${(ano-nasc)} anos`);