import { question } from "readline-sync";

// 7. Leia 3 números, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos.

// Entrada 
const num1 = Number(question('Digite o numero1:'))
const num2 = Number(question('Digite o numero2:'))
const num3 = Number(question('Digite o numero3:'))

// Processamento
const sum = num1 + num2 
const diff = Math.abs(num2 - num3)

// Saída
console.log(`A soma dos dois primeiros numeros equivale a ${sum} pontos e os dois ultimos tem uma diferença de ${diff} pontos.`)