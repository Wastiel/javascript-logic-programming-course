# Aula 05. Desafio

## 01. Projeto da aula anterior
- [Baixar aula 4 em zip](https://github.com/alura-cursos/logica-js/archive/refs/heads/aula_4.zip)
- [Acessar os arquivos do GIT](https://github.com/alura-cursos/logica-js/tree/aula_4)

## 02. Apresentação do desafio
- Mudar o numero máximo do desafio, ou seja, trocar em somente um lugar e, nos demais, eles já executem essa função para nós, assim refatorando o nosso códio, melhorando ele.

## 03. Resolvendo o desafio
- Criamos uma variavel par o número maximo e colocamos em alguns pontos do programa.

````javascript
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


````
## 04. Projeto final do curso
- [Baixar aula 5 em zip](https://github.com/alura-cursos/logica-js/archive/refs/heads/aula_5.zip)
- [Acessar os arquivos do GIT](https://github.com/alura-cursos/logica-js/tree/aula_5)

## 05. Conclusão
- Varias práticas
- Utilizar em qualquer jornada que formos seguir depois.
- Conseguimos usar em todas as áreas.
- [Discord da alura](https://discord.gg/SK9bj7hEYD)

## 06. Parabéns!
- Celebre sua conquista! 
- Se você está sempre tentando ser normal, nunca saberá o quão incrível você pode ser." (Maya Angelou)

## 07. Créditos