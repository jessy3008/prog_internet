let nome; // valor manipulável
let idade;

nome = "Jess"; // string
idade = 19; // number

const altura = 1.62; // (CONST) valor constante

let bol = true /// boolean
let lista = ['banana', 'morango','uva']; // lista
let objeto = {nome:"samuel", idade: 22}; // objeto

// OPERADORES ARITMÉTICOS:
let a = 10;
let b = 5;

let soma = a + b;
let subtracao = a - b;
let multiplicação = a * b;
let divisao = a / b;
let resto = a % b;

// OPERADORES DE ATRIBUIÇÃO: -------- NÃO ENTENDI AS CONTAS
let x = 10;

x += 5; // x = x + 5 (15)
x -= 3; // x = x - 3 (12??)
x *= 2; // x = x * 2 (24)
x /= 4; // x = x / 4 (06)

// OPERAÇÕES DE COMPARAÇÃO LÓGICA:
idade = 20;
let temCNH = true;

console.log(idade > 18); // idade é maior que 18°? (true)
console.log(idade===20); // idade é igual a 20 (true)
coneole.log(idade!== 18); // idade pe diferente de 18?

/* 
Igualdade solta 
 5 == '5' (True)

Igualdade Estrita

 5 = '5' (False)

 0 == false (True)
 0 === false (false)
*/ 

console.log(idade > 18 && temCNH); // a idade é maior que 18 E possui cnh? (true)
console.log(idade > 18 || temCNH); // a idade é maior que 18 OU possui cnh? (true)
console.log(!temCNH) // negação de possui cnh (false)

// Estrutura de condicional 
let hora = 12;

if(hora < 12){
    console.log("bom dia!");
} else if ( hora >= 12 && hora <= 18) {
    console.log("boa tarde!");
} else {
    console.log("boa noite!");
}

// Estruturas de repetição ----- NÃO ENTENDI BEM

for (let i=0; i<10; i++){
    console.log(i);
}

let contador = 0 
while (contador < 5){
    console.log(contador);
    contador++;
}