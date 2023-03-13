let frutas = [];
let vegetais = [];
let frios = [];
let doces = [];

function adicionarItem() {
    let item = document.getElementById("item").value;
    let categoriaEscolhida = document.querySelector("input[name='categoria']:checked");

    if (categoriaEscolhida != null) {
        if (categoriaEscolhida.value == "frutas") frutas.push(item);
        if (categoriaEscolhida.value == "vegetais") vegetais.push(item);
        if (categoriaEscolhida.value == "frios") frios.push(item);
        if (categoriaEscolhida.value == "doces") doces.push(item);

        let maisAlgumaCoisa = prompt("\tMais algum item?\n1: sim\n2: não");
        while (maisAlgumaCoisa != 1 && maisAlgumaCoisa != 2) {
            alert("Valor inválido!")
            maisAlgumaCoisa = prompt("\n1: sim\n2: não");
        }

        if (maisAlgumaCoisa == 2) {
            mostrarLista();
        } else {
            document.getElementById("item").value = "";
            categoriaEscolhida.checked = "";
        }
    }else{
        alert("Escolha uma categoria primeiro!");
    }


}

function mostrarLista() {
    adcionar = document.getElementById("adcionarLista");

    document.getElementById("container").removeChild(adcionar);;

    let lista = `<ul type="none" id="list">
        <li>Frutas <ul type="circle" id="listaFrutas"></ul></li>
        <li>Vegetais <ul type="circle" id="listaVegetais"></ul></li>
        <li>Frios <ul type="circle" id="listaFrios"></ul></li>
        <li>Doces <ul type="circle" id="listaDoces"></ul></li>
    </ul>`

    document.getElementById("container").innerHTML += lista;

    frutas.forEach((element) => {
        document.getElementById("listaFrutas").innerHTML += `<li>${element}</li>`;
    })

    vegetais.forEach((element) => {
        document.getElementById("listaVegetais").innerHTML += `<li>${element}</li>`;
    })

    frios.forEach((element) => {
        document.getElementById("listaFrios").innerHTML += `<li>${element}</li>`;
    })

    doces.forEach((element) => {
        document.getElementById("listaDoces").innerHTML += `<li>${element}</li>`;
    })
}
