function verificaValidadeDoChute(chute){
    const numero = +chute;

    if(chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return
    }

    if(numeroForMaiorOuMenorQuePermitido(numero)){
        elementoChute.innerHTML += ` <div>Valor inválido: O valor deve estar entre: ${menorValor} e ${maiorValor}</div> `;
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Você acertou!!</h2>
        <h3>O número secreto era : ${numeroSecreto}</h3>
        `
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML = `
        <div>O número secreto é menor <i class="fa-sharp fa-solid fa-angle-down"></i></div>
        `
    }else{
        elementoChute.innerHTML = `
        <div>O número secreto é maior <i class="fa-sharp fa-solid fa-angle-up"></i></div>
        `
    }
}

function chuteInvalido(numero){
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQuePermitido(numero){
    return numero > maiorValor || numero < menorValor;
}
