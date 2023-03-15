let valorUm = document.getElementById("valorUm");
let valorDois = document.getElementById("valorDois");

function calcular(){
    let tipoOperacao = document.querySelector("input[name='tipoOperacao']:checked").value;
    
    switch (tipoOperacao){
        case 'soma':
            alert(`O resultado é ${soma(parseFloat(valorUm.value), parseFloat(valorDois.value))}`);
            break;
        
        case 'subtracao':
            alert(`O resultado é ${subtracao(parseFloat(valorUm.value), parseFloat(valorDois.value))}`);
            break;
        
        case 'multiplicacao':
            alert(`O resultado é ${multiplicacao(parseFloat(valorUm.value), parseFloat(valorDois.value))}`);
            break;

        case 'divisao':
            alert(`O resultado é ${divisao(parseFloat(valorUm.value), parseFloat(valorDois.value))}`);
            break;
        
        case 'sair':
            alert("Obrigado por usar a calculadora. Tenha um bom dia!");
            document.write("")
            break;

        default:
            alert(`Escolha um tipo de operacão primeiro!`);
            break;
    }
}

function soma(x, y){
    return x+y;
}

function subtracao(x, y){
    return x-y;
}

function multiplicacao(x, y){
    return x*y
}

function divisao(x, y){
    return x/y;
}

