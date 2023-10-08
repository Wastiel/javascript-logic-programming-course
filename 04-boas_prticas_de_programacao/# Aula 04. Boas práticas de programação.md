# Aula 04. Boas práticas de programação

## 01. Projeto da aula anterior
- [Baixar aula 3 em zip](https://github.com/alura-cursos/logica-js/archive/refs/heads/aula_3.zip)
- [Acessar os arquivos do GIT](https://github.com/alura-cursos/logica-js/tree/aula_3)
## 02. Break
- você descobriu com uma tentativa
- codigo break; para parar o programa 
- Ajustamos alguns pontos de lógica

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

if (tentativas > 1) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
} else {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
}
`````

## 03. Operador ternário
- Varios IF's no código
- podemos evitar uma quantidade de if
- IF simplificado, focado na melhor leitura de código
	- let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
- Este tipo de código vai aparecer diversas vezes.

````javascript
let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
````

- devemos sempre pensar muito em se podemos melhorar o nosso código.

## 04. Math random
- Sabemos o numero secreto, mesmo com poucas tentativas
- Vamos implementar uma funcionalidade do JS, para gerar um numero random.
- Documentação do JS [Documentação do JS](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- Utilizamos um número inteiro
- Pseudo aleatorio, pq a função vai nos reotrnar um numero random, com base em algo do computador, hora ou clock do computador. 
- vai gerar um numero aleatório entre 0 e 9, o que significa que não pega o número 10.
- pareInt(Transformar o retorno em um numero positivio)
- vamos meolhorar o código na próxima lição

````javascript
let numeroSecreto = parseInt(Math.random() * 10 + 1);
````
## 05. Número aleatório
- Olhamos o manual de forma geral
- Vamos colocar no nosso código esta função
	- let numeroSecreto = parseInt(Math.random() * 10 + 1);
- Aumentar numero de casas decimais, mudamos o fator de multiplicação

````javascript
alert('Boas vindas ao jogo do número secreto');
//let numeroSecreto = 9;
let numeroSecreto = parseInt(Math.random() * 10 + 1);
console.log(numeroSecreto);
let chute;
console.log('Resultado da comparação:', chute == numeroSecreto);
let tentativas = 1;

// enquanto chute não for igaol ao numero sorteado.
while(chute != numeroSecreto){

    chute = prompt(`Escolha um número entre 1 e ${numeroSecreto}`);
    
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
````

## 06. Número aleatórios
- gerar um numero aleatório entre 1 e 3

````javascript
let numeroAleatorio1a3 = parseInt(Math.random() * 3) + 1;.
````
## 07. Operador ternário
- refatorar o IF abaixo com operador ternário
````javascript
let palavraPessoa = "";

if(quantidadePessoas == 1){
    palavraPessoa = "pessoa";
}else{
    palavraPessoa = "pessoas"
}
````

- Resposta
````javascript
let palavraPessoa = quantidadePessoas == 1 ? "pessoa" : "pessoas";
````

## 08. Desafio: hora da prática

````javascript
//Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

console.log("Bem vindo ao programa!");

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

let nome = "Willian";
console.log(`Olá ${nome}`);

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
alert(`Olá ${nome}`);

//Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

linguagemProgramacao = prompt("Qual a linguagem de programação que você mais gosta?");
alert(`legal é  ${linguagemProgramacao}`);

//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

let valor1 = 1
let valor2 = 2

let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

//Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

idade = prompt("Olá, digite a sua idade");

if(idade >=18) {
    console.log("Você é maior de didade");    
}else{
    console.log("Você é menor de didade");
}

//Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

let numero = prompt("Digite um valor");

if(numero > 0) {
    console.log("O número é positivo");    
}else{
    if(numero < 0 ){
        console.log("Você é negativo");
    }else{
        console.log("O número é zero");
    }    
}

//Use um loop while para imprimir os números de 1 a 10 no console.

numero = 1;

while(numero <=10){
    console.log(`Imprimindo ${numero}`)
    numero++;
}

//Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

let nota = 7

if(nota >=7) {
    console.log("Aprovado");    
}else{
    console.log("Reprovado");
}

//Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

let numeroAleatorio = Math.random();

console.log(`numeroAleatorio = ${numeroAleatorio}`);

//Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.


numeroAleatorio = parseInt(Math.random() * 10 + 1);

console.log(`numeroAleatorio entre 1 e 10 = ${numeroAleatorio}`);

//Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

numeroAleatorio = parseInt(Math.random() * 1000 + 1);

console.log(`numeroAleatorio entre 1 e 10 = ${numeroAleatorio}`);

`````
## 09. Para saber mais: preciso decorar cada linha de código ou comando?
- Antes de decorar cada linha é fundamental entendermos o conceito
- Um dos melhores sites para praticar algumas das linguagens mais utilizadas
	[3wschool](https://www.w3schools.com/js/default.asp)
- Ferramenta valiosa

## 10. O que aprendemos?
- Evitar código duplicado
- Analisamos documentação
- Descobrimos como utilizar a função Math.random();