
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