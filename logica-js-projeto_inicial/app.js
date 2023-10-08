alert('Boas vindas ao jogo do número secreto');
//let numeroSecreto = 9;
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
console.log('Resultado da comparação:', chute == numeroSecreto);
let tentativas = 1;

// enquanto chute não for igaol ao numero sorteado.
while(chute != numeroSecreto){

    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    
    if(numeroSecreto == chute){
        break;        
    }else{
    if(chute > numeroSecreto){
        alert(`O numero secreto é menor que ${chute}` );
    }else{
        alert(`O numero secreto é maior que ${chute}` );
    }
    tentativas ++;        
    }    
}

let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

