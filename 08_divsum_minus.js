import { question } from "readline-sync";

// 8. Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos.
// Entrada
const num1 = Number(question('Digite um numero A:'))
const num2 = Number(question('Digite um numero B:'))

// Process: (A+B)/abs(A-B)
// 5+8/5-8 => 13/3 // calculo junto com o tofixed no final

// Processamento 
const sum = num1 + num2
const diff = Math.abs(num1 - num2)
const calculo = sum/diff

// Saída
console.log(`O resultado é ${calculo.toFixed(2)}!`)

