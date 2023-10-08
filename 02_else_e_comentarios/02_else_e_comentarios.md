# Aula 02. Iniciando com javaScript

## 01. Projeto da aula anterior
- [Baixar arquivo da aula anterior](https://github.com/alura-cursos/logica-js/archive/refs/heads/aula_1.zip)
- [Acessar arquivos do Github](https://github.com/alura-cursos/logica-js/tree/aula_1)

## 02. Else e comentários
- Comandos possuem cores diferentes
- Para criar um comentário, utilizamos os comandos // ou /** /
- else - Condição contraria ao if
- mostrar o numeroSecreto através do console.log
	- console.log('numeroSecreto') - errado
	- console.log(numeroSecreto) - correto

## 03. Concatenação
- Testamos varias vezes o numero secreto, acertando e errado. Vamos alterar o numero.
- Vamos colocar uma variavel dentro 
	- console.log('Você descobriu o número secreto' + numeroSecreto);
	- console.log('Você descobriu o número secreto ${numeroSecreto}');
- Alterado automaticamente, acoplamento muito grande gera problemas.

```javascript
alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 29;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 30');

//se chute for igual ao número secreto
if(numeroSecreto == chute){
    console.log('Você descobriu o número secreto ' + numeroSecreto);
    console.log(`Você descobriu o número secreto ${numeroSecreto}`);
}else{
    alert('Você errou ;(');
}
```


## 04. Live server
- Dinamicidade do número secreto
- Ruim atualizar sempre a pagina testando.
- Ferramentas para abrir diretamente 
- Vamos usar uma extensão do VS, para melhorar os nossos testes.
	- Extensão: Live Server
	- Acessamos a mesma pelo botao de extensoes do VSCode
- ctr + alt + e abrimos o exemplorer no vs
- Clicamos com botao direito no nosso index e pedimos para abrir com o live server.
- Alteramos o js, e sempre vai carregar a pagina diretamente
- 

## 05. Alterando a mensagem do alert
- Temos o seguinte código:

````javascript
alert('Bem-vindo ao jogo do número secreto')
let chute = prompt('Escolha um número entre 1 e 10')

let numeroSecreto = 4

console.log(chute == numeroSecreto)
if (chute == numeroSecreto) {
    alert('Acertou')
} else {
    alert('O número secreto era ' + numeroSecreto)
}
`````
- Qual seria a maneira correta de mostrar isto em tela

````javascript
alert('O número secreto era ' + numeroSecreto + ', mas você escolheu ' + chute);
````

## 06. Detran
- Exericio do detran
````javascript
let idade = prompt("Digite sua idade:");

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}
````
- Qual sera o comportamento do programa?
	- Caso a idade seja igual a 18, a mensagem do console que será exibida será: Você é maior de idade.
	- Caso a idade seja menor que 18, a mensagem do console que será exibida será: Você é menor de idade.	


## 07. Trabalhando com condicionais
- Você é desenvolvedor com problemas em milhas
````javascript

let porcentagemDesconto = 0;

if(quantidadeMilhas > 5000){
    porcentagemDesconto = porcentagemDesconto + 10;
}

if(quantidadeMilhas > 30000){
    porcentagemDesconto = porcentagemDesconto + 20;
} else {
    porcentagemDesconto = 0;
}
````
- Regras de negócio
	- Pessoas com uma quantidade de milhas inferior a 5.000 não recebem desconto.
	- Pessoas com uma quantidade de milhas superior a 30.000 recebem 20% de desconto.
	- Pessoas com uma quantidade de milhas superior a 5.000, mas inferior a 30.000, recebem 10% de desconto.
- Mas, segundo relatos de clientes, ao tentar utilizar o desconto referente a 5.000 milhas, não ocorre nenhum desconto. Já clientes com mais de 30.000 milhas estão recebendo desconto excedente ao que deveriam receber.

- Fazendo a utilização de um bloco if dentro do bloco else, como:

````javascript
let porcentagemDesconto = 0;

if(quantidadeMilhas > 30000){
    porcentagemDesconto = porcentagemDesconto + 20;
} else {
    if(quantidadeMilhas > 5000){
    porcentagemDesconto = porcentagemDesconto + 10;
}

}
`````

## 08. Faça como eu fiz: console.log
- Adicionar mensagens de console.log no nosso programa

````javascript
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
`````

## 09. Desafio: hora da prática
- Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

````javascript
diaSemana = prompt("Qual o dia da semana");
if(diaSemana == "Sábado" || diaSemana == "Domingo"){
    console.log("Boa Semana");
    alert("Boa Semana");
}
````

- Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

````javascript
numero = prompt("Digite um numero negativo ou positivo");
if(numero >= 0 ){
    console.log("O número é positivo");
    alert("O número é positivo");}
else{
    console.log("O número é negativo");
    alert("O número é negativo");
}
````

- Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

````javascript
pontuação = prompt("Digite o número da sua pontuação");
if(numero >= 100 ){
    console.log("Parabéns, você venceu");
    alert("Parabéns, você venceu");}
else{
    console.log("Tente novamente para ganhar");
    alert("Tente novamente para ganhar");
}
````

- Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

````javascript
let saldoConta = 1000;

console.log(`O saldo de sua conta é:  ${saldoConta}`);
alert(`O saldo de sua conta é: ${saldoConta}`);

````

- Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

````javascript
nome = prompt("Olá!! Digite seu nome! ");

console.log(`Olá ${nome}!! seja bem vindo!!`);
alert(`Olá ${nome}!! seja bem vindo!!`);
````

## 10. Para saber mais: ponto e vírgula no JavaScript
- [Leitura complementar da documentação sobre o javaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)
- [O que a comunidade recomenda](https://pt.stackoverflow.com/questions/3341/utilizar-ou-n%C3%A3o-ponto-e-v%C3%ADrgula-no-fim-das-linhas-em-javascript)

## 11. O que aprendemos?
- Utiliar console para testar programa
- aprendemos if e else
- implementamos um bloco de código
- usamos template Strings
