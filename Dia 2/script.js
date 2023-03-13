let nome = prompt("Qual é o seu nome?");
let idade = prompt("Quantos anos você tem?");
let linguagem = prompt("Qual linguagem de programação você está aprendendo?");

let hresposta = document.getElementById("hresposta");
let resposta = document.getElementById("resposta");
let conselho = document.getElementById("conselho");
let formulario = document.getElementById("opcional");

if(nome != "" && idade != "" && linguagem != ""){
    hresposta.textContent = `Olá ${nome}!\n`;
    resposta.textContent = `Você tem ${idade} anos e está aprendendo ${linguagem}`;

    formulario.style.display = 'block';
}

function darConselho(resp){
    switch(resp){
        case 'sim':
            conselho.textContent = "Muito bom! Continue estudando e você terá muito sucesso!";
            document.getElementById('n').checked = false;
            break;
        
        case 'não':
            conselho.textContent = "Ahh que pena... Já tentou aprender outras linguagens?";
            document.getElementById('s').checked = false;
            break;
    }
}
