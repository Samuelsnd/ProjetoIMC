// capturamos o formulario aqui
    const form = document.querySelector('.form');
// colocamos um escutador aqui  e prevenimos o envio
    function EventoRecebe (event) {
    event.preventDefault();
    const peso = event.target.querySelector('.peso');
    const altura = event.target.querySelector('.altura');
    
// convertemos os inputs para number

    const pesoInput = Number(peso.value);
    const alturaInput = Number(altura.value);

    if (!pesoInput ) {
        setResultado('Peso inválido', false);
        return; // simplesmente finaliza a execução de todo o código
    }

    if (!alturaInput) {
        setResultado('Altura inválida', false);
        return;
    }
    const imc = getImc(pesoInput, alturaInput);
    const nivelImc = getNivelImc(imc);


    const mensag = `Seu IMC é ${imc} (${nivelImc}).`;
    setResultado(mensag, true);
    // Calcular agora o imc

    function getNivelImc (imc) {
        const nivel = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3']
    
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
    
    }

    function getImc(pesoInput, alturaInput){
        const imc = pesoInput / alturaInput ** 2;
        return imc.toFixed(2);
    }


 };

form.addEventListener('submit',EventoRecebe);

/// vamos inserir no html um paragrafo criado no javascript 2° passo
function criaP () {
    const p = document.createElement('p');
    return p; 
}

/// Agora vamos criar a função que irá enviar o resultado direto para a div resultado
// 3° passo
function setResultado (mensag, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';

   
    const p = criaP();
    
    if (isValid) {
    p.classList.add('paragrafo-resultado');
    }else {
        p.classList.add('bad');
    }
    p.innerHTML = mensag;
    resultado.appendChild(p);
    
   
}
