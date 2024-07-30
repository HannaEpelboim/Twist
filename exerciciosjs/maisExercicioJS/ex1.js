let val = parseFloat(prompt("Digite valor total da compra: "));
let parcelas = parseInt(prompt("Quantas parcelas você deseja? (1, 2 ou 4)"));

switch(parcelas){
    case 1:
        alert(`Juros para 1 parcela: 0%
Valor de cada parcela: ${val}`);
        break;
    case 2:
        alert(`Juros para 2 parcelas: 3%
Valor de cada parcela: ${(val*1.03)/parcelas}`);
        break;
    case 4: 
        alert(`Juros para 4 parcelas: 7%
Valor de cada parcela: ${(val*1.03)/parcelas}`);
        break;
    default:
        alert("Opção inválida");
}

