let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let comida = "";
let categoria = "";

function adicionarItem() {
    let adicionarMais = "sim";  // valor inicial como "sim", porque a primeira vez sempre vai entrar no while
    while (adicionarMais != "não") {
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
        while (adicionarMais != "sim" && adicionarMais != "não") {  //enquanto o texto lido for diferente de "sim" e de "não", exibir que não foi reconhecido e perguntar novamente
            alert(`Operação não reconhecida!`);
            adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
        }

        if (adicionarMais === "não") {  //se o texto lido for "não", sair do while
            break;
        }

        comida = prompt("Qual comida você deseja inserir?");
        categoria = prompt("Em qual categoria essa comida se encaixa: 1: frutas, 2: laticínios, 3: doces ou 4: congelados?");
        if (categoria === '1') {
            frutas.push(comida);
        } else if (categoria === '2') {
            laticinios.push(comida);
        } else if (categoria === '3') {
            doces.push(comida);
        } else if (categoria === '4') {
            congelados.push(comida);
        } else {
            alert("Essa categoria não foi pré-definida.")
        }
    }
}

function removerItem() {
    let categoriaItem = prompt("De qual categoria você quer remover um item?\n 1: Frutas | 2: Laticínios | 3: Doces | 4: Congelados");

    if (categoriaItem == 1) {
        validarItem(frutas);
    } else if (categoriaItem == 2) {
        validarItem(laticinios);
    } else if (categoriaItem == 3) {
        validarItem(doces);
    } else if (categoriaItem == 4) {
        validarItem(congelados);
    } else {
        alert("Essa lista não existe!");
    }
}

function validarItem(lista) {
    if (lista.length != 0) {
        itemParaRemover = prompt(lista.join(", ") + "\nQual desses itens você quer remover?");

        if (lista.includes(itemParaRemover)) {
            lista.splice(lista.indexOf(itemParaRemover), 1);
        } else {
            alert("Essa categoria da lista não tem esse item!");
        }
    } else {
        alert("Essa lista está vazia!");
    }
}


function mostrarLista() {
    alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);
}
