alert('Boas vindas ao nosso site!');
let nome = 'Lua';
let idade = 1000;
let numerodeVendas = 50;
let saldodisponivel = 1000;


let menssagemDeErro = 'Erro! Preencha todos os campos';
alert(menssagemDeErro);

nome = prompt('Digite seu bome');
idade = prompt('Digite sua idade');

if(idade >= 18){
    alert('Pode tirar a carteira de motorista!');
}