alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute;
console.log('Resultado da comparação:', chute == numeroSecreto);
let tentativas = 1;

// enquanto chute não for igaol ao numero sorteado.
while(chute != numeroSecreto){

    chute = prompt('Escolha um número entre 1 e 30');
    
    if(numeroSecreto == chute){
        console.log('Você descobriu o número secreto' + numeroSecreto);
        console.log(`Você descobriu o número secreto ${numeroSecreto} com a quantidade de tentativas ${tentativas}`);
    }else{
    if(chute > numeroSecreto){
        alert(`O numero secreto é menor que ${chute}` );
    }else{
        alert(`O numero secreto é maior que ${chute}` );
    }

    tentativas ++;
        
    }

    
}