/*
funções
function Nome()
*/

//func sem parametro e sem retorno
function CalcQuadrado(){
    let lado = parseFloat(prompt("Digite o lado: "));
    alert(`\n\n **A Area do quadrado é: ${lado**2}`);
}

//func com parametro e sem retorno
function CalcRetangulo(base,altura){
    alert(`\n\n **A Area do retângulo é: ${altura*base}`);
}

//func com parametro e com retorno
function CalcTriangulo(base, altura){
    let calc = (base*altura)/2;
    return calc;
}

//func sem parametro e com retorno
function CalcTrapezio(){
    let base, Base, altura;
    base = parseFloat(prompt("Digite a base menor: "));
    Base = parseFloat(prompt("Digite a base maior: "));
    altura = parseFloat(prompt("Digite a altura: "));
    calc = ((base+Base)/2) *altura;
    return calc;
}


function mostrarDados(){
    let texto = "\n";
    texto+=document.querySelector("#txtNome").value;
    texto+="\n";
    texto+=document.querySelector("#txtCpf").value;
    texto+="\n";
   // texto+=document.getElementsByName("hobbies").checked;
   let livro=document.querySelector("#livros");
    if(livro.checked){
        texto+=document.querySelector("#livros").value;
        livro+= 'style = color #f00';
    }

    //pegar todos os checkbox
    let hobbies = document.getElementsByName("hobbies");
    console.log(hobbies);
    for(h of hobbies){
        if(h.checked){
            texto+=h.value;
            texto+='\n';
            //console.log(h.value);
        }
    }

    alert(texto);
}