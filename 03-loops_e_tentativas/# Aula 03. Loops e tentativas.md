# Aula 03. Loops e tentativas

## 01. Projeto da aula anterior
- [Baixar o zip da aula 02](https://github.com/alura-cursos/logica-js/archive/refs/heads/aula_2.zip)
- [Acessar os arquivos no Github](https://github.com/alura-cursos/logica-js/tree/aula_2)

## 02. Novas condições - 05min
- Melhorar o jogo e dar dicas para o jogador
- Em que momento vamos dar dicas para o nosso usuário
- Criamos a condição de qual o direcionamento dicas de se o número é maior ou menor do que o sorteado

````javascript
//se chute for igual ao número secreto
if(numeroSecreto == chute){
    console.log('Você descobriu o número secreto' + numeroSecreto);
    console.log(`Você descobriu o número secreto ${numeroSecreto}`);
}else{
    if(chute > numeroSecreto){
        alert(`O numero secreto é menor que ${chute}` );
    }else{
        alert(`O numero secreto é maior que ${chute}` );
    }
    
}
````

## 03. Enquanto... 
- Várias tentativas até acertra
- So vamos parar de executar uma instrução, quando uma condição for verdadeira
- While - Enquanto
- Criar condição para quando for verdadeiro o numero secreto, pegamos e encerramos o programa
	- while(chute != numeroSecreto){}
- Espaçamento por blocos.
- Vários comparadores com váriaveis

````javascript
alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute;
console.log('Resultado da comparação:', chute == numeroSecreto);

// enquanto chute não for igaol ao numero sorteado.
while(chute != numeroSecreto){

    chute = prompt('Escolha um número entre 1 e 30');
    

    if(numeroSecreto == chute){
        console.log('Você descobriu o número secreto' + numeroSecreto);
        console.log(`Você descobriu o número secreto ${numeroSecreto}`);
    }else{
        if(chute > numeroSecreto){
            alert(`O numero secreto é menor que ${chute}` );
        }else{
            alert(`O numero secreto é maior que ${chute}` );
        }
        
    }
}
````

## 04. Tentativas 
- Vamos contar quantas vezes o jogador tentou
- utilizamos um contador tentativas++;
- melhoramos a mensagem de contagem de tentativas

````javascript
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
````

## 05. Contador 1
- Temos o seguinte código

````javascript
let contador = 1;

while (contador < 4) {
  console.log('Executando a iteração ' + contador);
  contador = contador + 1;
}
````
- Quais os comportamentos do sistema?
	- while (contador < 4){ } começa o loop while. Ele continuará repetindo o bloco de código entre as chaves { } enquanto a condição contador < 4 for verdadeira.
	- O resultado final será a impressão das mensagens "Executando a iteração 1", "Executando a iteração 2" e "Executando a iteração 3" no console.


## 06. Loop infinito
- Média no programa abaixo
````javascript
let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
let soma = 0;
let contador = qtdNumeros;

while(contador > 0){
    let numero = parseInt(prompt('Digite o numero:'));
    soma += numero;
}

let media = soma / qtdNumeros;

console.log(media);
````

- Ajuste o programa para que o loop funcione
- contador--;


## 07. Desafio: hora da prática

```javascript

//Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 1;

while(contador >= 10){
    
    alert(`O número é: ${contador}`);    
    
    contador ++;   
}


//Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
contador = 10;
while(contador <= 10){
    
    alert(`O número é: ${contador}`);    
    
    contador --;   
}

//Crie um programa de contagem regressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

cont = prompt("Digite um número que vamos contar dele até o numero 0");

while(cont >0){
    
    alert(`O número é: ${cont}`);    
    
    cont --;   
}

//Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

cont = prompt("Digite um número que vamos contar dele até o numero 0");
contagem = 0;
while(contagem <= cont){
    
    alert(`O número é: ${contagem}`);    
    
    contagem++;   
}
```

## 08. Para saber mais: operadores lógicos
- [Como utilizar operadores de comparação em JS](https://www.alura.com.br/artigos/operadores-matematicos-em-javascript?_gl=1*1hdc8uz*_ga*MTA2Njc5NzMwNS4xNjc4Mjc2NDU2*_ga_1EPWSW3PCS*MTY5Njc2ODI1Mi4zNC4xLjE2OTY3NzA3NDcuMC4wLjA.*_fplc*JTJCNmlpMDVKb2pjRkFidUlCck1QeWRQNU1pVjFCN0dDQmVQb1hkdWRBZGM5NzZkRmNGOXZkRFZrNzZYaHhDd216cThnWEp0VHVuaGNkVnpaYjFkZlJSY1paSXh4WVdaQWtWcUdxajBoSXBBRHNYUEhIUlp2UE1DbmYyMVNLQ1ElM0QlM0Q.)
- Operadores Lógicos

| Operador | Nome    | Exemplo                 | Resultado                                       |
|----------|---------|-------------------------|-------------------------------------------------|
| &&       | E / AND  | (A > B) && (B == C)     | Verdadeiro se A for maior que B E B for igual a C|
| \|\|      | OU / OR  | (A > B) \|\| (B == C)   | Verdadeiro se A for maior que B OU B for igual a C|
| !        | NEGAÇÃO | !(A == B)               | Verdadeiro se A NÃO for igual a B              |

- Ademais operadores lógicos
| Operador | Nome          | Exemplo | Resultado                                   |
|----------|---------------|---------|---------------------------------------------|
| +        | Adição        | A + B   | Soma de A e B                               |
| -        | Subtração     | A - B   | Subtração de B de A                         |
| *        | Multiplicação | A * B   | Multiplicação de A e B                      |
| /        | Divisão       | A / B   | Divisão de A por B                          |
| %        | Módulo        | A % B   | Resto da divisão de A por B (A módulo B)    |
| ++       | Incremento    | A++     | Incrementa A por 1 (A = A + 1)               |
| --       | Decremento    | A--     | Decrementa A por 1 (A = A - 1)               |


## 09. O que aprendemos?
- Aprendemos a verificar se um numero é maior ou menor
- Utilizamos o loop While
- Implementamos um contador de tentativas.