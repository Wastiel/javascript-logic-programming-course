alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 30');
console.log('Resultado da comparação:', chute == numeroSecreto);

//se chute for igual ao número secreto
if(numeroSecreto == chute){
    console.log('Você descobriu o número secreto' + numeroSecreto);
    console.log(`Você descobriu o número secreto ${numeroSecreto}`);
}else{
    console.log('Valor do número secreto:', numeroSecreto);
    alert(`Você errou ;(, o numero secreto era: ${numeroSecreto}` );
}