
/*Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.*/

diaSemana = prompt("Qual o dia da semana");
if(diaSemana == "Sábado" || diaSemana == "Domingo"){
    console.log("Boa Semana");
    alert("Boa Semana");
}

numero = prompt("Digite um numero negativo ou positivo");
if(numero >= 0 ){
    console.log("O número é positivo");
    alert("O número é positivo");}
else{
    console.log("O número é negativo");
    alert("O número é negativo");
}

pontuação = prompt("Digite o número da sua pontuação");
if(numero >= 100 ){
    console.log("Parabéns, você venceu");
    alert("Parabéns, você venceu");}
else{
    console.log("Tente novamente para ganhar");
    alert("Tente novamente para ganhar");
}

let saldoConta = 1000;

console.log(`O saldo de sua conta é:  ${saldoConta}`);
alert(`O saldo de sua conta é: ${saldoConta}`);

nome = prompt("Olá!! Digite seu nome! ");

console.log(`Olá ${nome}!! seja bem vindo!!`);
alert(`Olá ${nome}!! seja bem vindo!!`);

