let progressoJogo = document.getElementById("progressoJogo");

function jogoHistoria(){
    document.getElementById("span").style.display.inline;
    let areaSeguir = prompt("\tQual área você deseja seguir?\n 1: Front-end\n 2: Back-end");

    while(areaSeguir != 1 && areaSeguir != 2){
        alert("esse valor não é valido!\n");
        areaSeguir = prompt("1: Front-end\n 2: Back-end");    
    }

    switch(areaSeguir){
        case '1':
            progressoJogo.innerHTML += `<li>Você vai seguir a área Front-end</li>`;

            var tecnologiaAprender = prompt("\tQual tecnologia você quer aprender?\n 1: React\n 2: Vue");
            while(tecnologiaAprender != 1 && tecnologiaAprender != 2){
                alert("esse valor não é valido!\n");
                tecnologiaAprender = prompt("1: React\n 2: Vue");           
            }
            
            if(tecnologiaAprender == 1) progressoJogo.innerHTML += `<li>Você quer aprender React</li>`;
            if(tecnologiaAprender == 2) progressoJogo.innerHTML += `<li>Você quer aprender Vue</li>`;
            break;

        case '2':
            progressoJogo.innerHTML += `<li>Você vai seguir a área Back-end</li>`;
            
            var tecnologiaAprender = prompt("\tQual tecnologia você quer aprender?\n 1: C#\n 2: Java");
            while(tecnologiaAprender != 1 && tecnologiaAprender != 2){
                alert("Esse valor não é valido!\n");
                tecnologiaAprender = prompt("1: C#\n 2: Java");      
            }

            if(tecnologiaAprender == 1) progressoJogo.innerHTML += `<li>Você quer aprender C#</li>`;
            if(tecnologiaAprender == 2) progressoJogo.innerHTML += `<li>Você quer aprender Java</li>`;
            break;

        default:
            alert("Eu causei um erro");
            break;
    }

    let vaiEspecializar = prompt(`Quais são seus planos pro futuro?\n 1: Me especializar nessa área\n 2: Me tornar um dev Fullstack`);

    while(vaiEspecializar != 1 && vaiEspecializar != 2){
        alert("Esse valor não é valido!\n");
        vaiEspecializar = prompt(`1: Me especializar na minha área\n 2: Me tornar um dev Fullstack`);     
    }

    switch(vaiEspecializar){
        case '1':
            alert("Legal. Continue focado que um dia você chega lá!");
            progressoJogo.innerHTML += `<li>Você pretende se especializar na sua área</li>`;
            break;

        case '2':
            alert("Massa! Ser Fullstack é muito útil hoje em dia.");
            progressoJogo.innerHTML += `<li>Você pretende se tornar um dev Fullstack</li>`;
            break;

    }

    let maisAlgumaCoisa = prompt("Tem mais alguma coisa que gostaria de aprender?\n 1: Sim\n 2: Não");

    while(maisAlgumaCoisa != 1 && maisAlgumaCoisa != 2){
        alert("esse valor não é valido!\n");
        maisAlgumaCoisa = prompt(`1: Sim\n 2: Não`);    
    }

    while(maisAlgumaCoisa == 1){
        let coisa = prompt("O que mais você quer aprender?");
        progressoJogo.innerHTML += `<li>Você também quer aprender ${coisa}</li>`

        maisAlgumaCoisa = prompt("Tem mais alguma coisa que gostaria de aprender?\n 1: Sim\n 2: Não");
    }
    
    alert("Ok. Obrigado por jogar!");
}
